# Local setup and deployment

This guide uses the existing Supabase `Portfolio` project. You do not need MongoDB, Express, or a second Supabase project for this site.

## 1. Install dependencies

Install Node.js 22.12 or newer, then open a terminal in the repository:

```bash
npm ci
```

## 2. Configure Supabase

Copy `.env.example` to `.env`, then open the Supabase dashboard for the existing `Portfolio` project. In the project's API/connect settings, copy the project URL and its **publishable** key into these variables:

```env
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_replace_me
```

The key is designed for browser clients; database access is restricted by RLS. Do not use a service-role or secret key here. `.env` is ignored by Git.

The migration is versioned at `supabase/migrations/20261011175734_create_contact_submissions.sql` and has been applied to the connected project. It creates `public.contact_submissions`, enables RLS, permits anonymous inserts that meet length/email checks, and grants no public read/update/delete access. To inspect messages, use the Supabase dashboard with an authorized account; the portfolio frontend cannot read them.

## 3. Start the site

```bash
npm run dev
```

Open the local URL printed by Vite. The navigation, theme switch, repository filters, and responsive layout work without Supabase credentials. The contact form requires the two environment variables.

## 4. Check the contact form

Use the contact form with a valid name, email, subject, and a message of at least 20 characters. On success, the form confirms that the message was saved to Supabase. Invalid fields are explained inline. If the database is unavailable, a visible error appears and the email link remains available.

Submitted details are stored only to respond to the inquiry. Anonymous visitors can insert a valid message but cannot read or change stored submissions. This setup does not send email notifications.

## 5. Build and verify

```bash
npm run typecheck
npm run build
npm run preview
```

The optimized files are written to `dist/`.

## 6. Deploy

1. Connect the repository to a static host that supports Vite.
2. Set the build command to `npm run build` and the output directory to `dist`.
3. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` in the host's environment-variable settings.
4. Deploy and submit a real contact test. Remove the test message from the Supabase dashboard if you do not want it retained.
5. Add the final domain as the canonical URL and update the sitemap when the deployment domain is known.

## Production hardening notes

- The database validates and bounds all stored fields. The form includes a honeypot, but no server-side rate limit or CAPTCHA is configured. Add a server-side anti-abuse provider before broad promotion if the endpoint receives spam.
- Email notifications require an email provider and a server-side function; neither is configured. Message persistence is independent of email delivery.
- No admin page is included. Do not add public read access to the submissions table to create one.
