import { ArrowUpRight, Mail } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { ContactForm } from '../components/ContactForm'
import { profile } from '../data/portfolio'

export function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="page-width">
        <SectionHeading
          index="05"
          label="Get in touch"
          title="Have a good problem to solve?"
          intro="For thoughtful conversations, collaboration, or a note about something I’ve built."
          inverse
        />
        <div className="contact-grid">
          <aside className="contact-aside">
            <span className="contact-aside__icon"><Mail size={20} strokeWidth={1.6} aria-hidden="true" /></span>
            <p className="eyebrow eyebrow--light"><span>Direct email</span></p>
            <a className="contact-email" href={`mailto:${profile.email}`}>
              {profile.email}<ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <p className="contact-aside__note">Prefer email? This link opens your mail app. The form below stores a message in the portfolio database; email notifications are not configured.</p>
          </aside>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
