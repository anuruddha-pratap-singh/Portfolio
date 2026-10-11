create table public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text not null,
  message text not null,
  created_at timestamptz not null default now(),
  constraint contact_submissions_name_length check (char_length(btrim(name)) between 2 and 120),
  constraint contact_submissions_email_length check (char_length(btrim(email)) between 3 and 254),
  constraint contact_submissions_email_format check (
    btrim(email) ~* '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'
  ),
  constraint contact_submissions_subject_length check (char_length(btrim(subject)) between 2 and 160),
  constraint contact_submissions_message_length check (char_length(btrim(message)) between 20 and 5000)
);

create index contact_submissions_created_at_idx
  on public.contact_submissions (created_at desc);

alter table public.contact_submissions enable row level security;

revoke all on table public.contact_submissions from public, anon, authenticated;
grant insert on table public.contact_submissions to anon;

create policy "anonymous visitors can submit contact messages"
  on public.contact_submissions
  for insert
  to anon
  with check (
    char_length(btrim(name)) between 2 and 120
    and char_length(btrim(email)) between 3 and 254
    and btrim(email) ~* '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'
    and char_length(btrim(subject)) between 2 and 160
    and char_length(btrim(message)) between 20 and 5000
  );
