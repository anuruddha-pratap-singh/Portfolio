# Anuruddha — Personal portfolio

A responsive, circuit-inspired portfolio for Anuruddha Pratap Singh Kushwah. It presents verified public work and learning areas, uses edited versions of his supplied portraits, and stores contact inquiries in Supabase.

## Features

- React 19, TypeScript, and Vite 8.
- Responsive single-page layout with keyboard-friendly navigation and a persistent light/dark theme.
- Project cards and working category filters based on public GitHub repositories.
- Supabase-backed contact form with client validation, database constraints, row-level security, and an anonymous insert-only policy.
- Local portraits, accessible labels and focus states, reduced-motion support, and basic search/social metadata.

## Stack

- React + TypeScript + Vite
- Supabase Postgres and `@supabase/supabase-js`
- Plain CSS with design tokens
- Lucide React icons

## Structure

```text
public/
  images/                 supplied personal portraits
  favicon.svg
src/
  components/             navigation, form, project cards, shared UI
  data/                   editable profile, project, and skill content
  lib/                     Supabase client
  sections/                page sections
  index.css                design tokens, responsive layout, theme styles
supabase/
  migrations/              versioned database schema and policies
docs/
  setup.md                 local and deployment guide
  design-system.md         implemented visual foundations
```

## Prerequisites

- Node.js 22.12+ (Node 24 is supported) and npm.
- Access to the existing Supabase project `Portfolio`.

## Run locally

```bash
npm ci
npm run dev
```

Vite prints the local URL, usually `http://localhost:5173`.

Set the Supabase values in `.env` before submitting the contact form. A local `.env` is ignored by Git; `.env.example` contains placeholders only.

## Checks and production build

```bash
npm run typecheck
npm run build
npm run preview
```

## Supabase setup

The existing `Portfolio` project is reused. The migration `supabase/migrations/20261011175734_create_contact_submissions.sql` creates the contact table, length/format constraints, a created-time index, and an RLS policy. It grants `anon` only `INSERT`; anonymous reads, updates, and deletes are not granted. The migration is applied to the connected project.

For a new environment, configure:

```env
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_replace_me
```

Use the project's publishable key only. Never put a service-role or secret key into a `VITE_` variable or the browser bundle.

The contact form stores messages in Postgres. Email notifications are not configured, so the UI does not claim to send email; visitors also have a direct `mailto:` option. The public insert endpoint is constrained by RLS and database checks and has a honeypot, but has no server-side rate limit or CAPTCHA yet. Add a server-side anti-abuse provider before broad production promotion if spam becomes an issue.

See [docs/setup.md](docs/setup.md) for beginner-friendly setup and deployment steps.

## Content accuracy

The public project list currently includes `Leetcode_Solutions` and `Web_Development`, selected from the authenticated GitHub account. Their descriptions and technology lists are based on repository metadata, README files, and contents. Private repositories are not exposed on the public site. No employment, awards, statistics, or demo URLs are fabricated.

## Design and Figma

The visual system is implemented in CSS and documented in [docs/design-system.md](docs/design-system.md). A Figma file was not created because the Figma integration tools were unavailable in this session and the browser was signed out. The website implementation remains editable in the repository.

## Deployment

Build with `npm run build` and deploy the generated `dist/` directory to a static host that supports Vite (for example, Netlify, Vercel, or Cloudflare Pages). Configure the two Supabase environment variables in the host settings. Add a canonical URL and sitemap once the final domain is known.
