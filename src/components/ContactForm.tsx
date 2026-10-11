import { useState, type FormEvent } from 'react'
import { ArrowUpRight, LoaderCircle } from 'lucide-react'
import { supabase } from '../lib/supabase'

type ContactValues = {
  name: string
  email: string
  subject: string
  message: string
}

type ContactField = keyof ContactValues
type FieldErrors = Partial<Record<ContactField, string>>

const emptyValues: ContactValues = { name: '', email: '', subject: '', message: '' }

function validate(values: ContactValues): FieldErrors {
  const errors: FieldErrors = {}
  if (values.name.trim().length < 2) errors.name = 'Please enter at least 2 characters.'
  if (values.name.trim().length > 120) errors.name = 'Please keep your name under 120 characters.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'Enter a valid email address.'
  if (values.email.trim().length > 254) errors.email = 'Please keep your email under 254 characters.'
  if (values.subject.trim().length < 2) errors.subject = 'Please add a short subject.'
  if (values.subject.trim().length > 160) errors.subject = 'Please keep the subject under 160 characters.'
  if (values.message.trim().length < 20) errors.message = 'Please add a little more detail (at least 20 characters).'
  if (values.message.trim().length > 5000) errors.message = 'Please keep your message under 5,000 characters.'
  return errors
}

export function ContactForm() {
  const [values, setValues] = useState<ContactValues>(emptyValues)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [honeypot, setHoneypot] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  function updateField(field: ContactField, value: string) {
    setValues((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    setStatus(null)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    setStatus(null)
    if (Object.keys(nextErrors).length > 0) return

    // The hidden field catches simple automated submissions without exposing a privileged key.
    if (honeypot.trim()) {
      setStatus({ type: 'success', message: 'Thanks for reaching out.' })
      return
    }

    if (!supabase) {
      setStatus({ type: 'error', message: 'The contact form is not configured yet. Please use the email link instead.' })
      return
    }

    setSubmitting(true)
    try {
      const { error } = await supabase.from('contact_submissions').insert({
        name: values.name.trim(),
        email: values.email.trim(),
        subject: values.subject.trim(),
        message: values.message.trim(),
      })
      if (error) throw error
      setValues(emptyValues)
      setStatus({ type: 'success', message: 'Your message is saved. I’ll follow up using the email you provided.' })
    } catch {
      setStatus({ type: 'error', message: 'Your message could not be saved. Please try again or email me directly.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__honeypot" aria-hidden="true">
        <label htmlFor="company-website">Leave this field empty</label>
        <input
          id="company-website"
          name="company-website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(event) => setHoneypot(event.target.value)}
        />
      </div>

      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="contact-name">Your name <span aria-hidden="true">*</span></label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            minLength={2}
            maxLength={120}
            value={values.name}
            onChange={(event) => updateField('name', event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
          />
          {errors.name && <p className="field-error" id="contact-name-error">{errors.name}</p>}
        </div>
        <div className="form-field">
          <label htmlFor="contact-email">Email address <span aria-hidden="true">*</span></label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            value={values.email}
            onChange={(event) => updateField('email', event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
          />
          {errors.email && <p className="field-error" id="contact-email-error">{errors.email}</p>}
        </div>
        <div className="form-field form-field--full">
          <label htmlFor="contact-subject">Subject <span aria-hidden="true">*</span></label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            required
            minLength={2}
            maxLength={160}
            value={values.subject}
            onChange={(event) => updateField('subject', event.target.value)}
            aria-invalid={Boolean(errors.subject)}
            aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
          />
          {errors.subject && <p className="field-error" id="contact-subject-error">{errors.subject}</p>}
        </div>
        <div className="form-field form-field--full">
          <div className="form-field__label-row">
            <label htmlFor="contact-message">Message <span aria-hidden="true">*</span></label>
            <span>{values.message.length}/5000</span>
          </div>
          <textarea
            id="contact-message"
            name="message"
            required
            minLength={20}
            maxLength={5000}
            rows={5}
            value={values.message}
            onChange={(event) => updateField('message', event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'contact-message-error' : undefined}
          />
          {errors.message && <p className="field-error" id="contact-message-error">{errors.message}</p>}
        </div>
      </div>

      <div className="contact-form__bottom">
        <p className="privacy-note">Your details are stored to respond to this inquiry. They are not used for unrelated purposes.</p>
        <button className="button button--light contact-submit" type="submit" disabled={submitting}>
          {submitting ? <><LoaderCircle className="spinner" size={17} aria-hidden="true" /> Sending</> : <>Send message <ArrowUpRight size={17} aria-hidden="true" /></>}
        </button>
      </div>
      {status && (
        <p className={`form-status form-status--${status.type}`} role={status.type === 'error' ? 'alert' : 'status'} aria-live="polite">
          {status.message}
        </p>
      )}
    </form>
  )
}
