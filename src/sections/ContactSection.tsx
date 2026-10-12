import { ArrowUpRight, Mail } from 'lucide-react'
import { SectionHeading } from '../components/SectionHeading'
import { ContactForm } from '../components/ContactForm'
import { profile } from '../data/portfolio'

export function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="page-width">
        <SectionHeading
          id="contact-title"
          index="05"
          label="Contact endpoint"
          title="Let’s make a connection."
          intro="For a thoughtful conversation, collaboration, or a note about something I’ve built."
          inverse
        />
        <div className="contact-grid">
          <aside className="contact-aside" data-reveal>
            <span className="contact-aside__icon"><Mail size={20} strokeWidth={1.6} aria-hidden="true" /></span>
            <p className="eyebrow eyebrow--light"><span>01</span> DIRECT EMAIL</p>
            <a className="contact-email" href={`mailto:${profile.email}`}>
              {profile.email}<ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <p className="contact-aside__note">Prefer email? This link opens your mail app. The form below saves your message to the portfolio database.</p>
            <nav className="contact-socials" aria-label="Other profile links">
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} aria-hidden="true" /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} aria-hidden="true" /></a>
              <a href={profile.leetcode} target="_blank" rel="noreferrer">LeetCode <ArrowUpRight size={13} aria-hidden="true" /></a>
              <a href={profile.x} target="_blank" rel="noreferrer">X <ArrowUpRight size={13} aria-hidden="true" /></a>
            </nav>
          </aside>
          <div className="contact-form-wrap" data-reveal><ContactForm /></div>
        </div>
      </div>
    </section>
  )
}
