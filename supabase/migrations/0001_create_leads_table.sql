-- Lead capture table for dammamtobahrain.com quote requests.
-- Run this in the Supabase SQL Editor (Dashboard > SQL Editor > New query) for
-- project iqmpstetmarfrzoibyby. The project must be un-paused first (see report).

create table if not exists public.leads (
    id                  bigint generated always as identity primary key,
    created_at          timestamptz not null default now(),

    status              text not null default 'new'
                         constraint leads_status_check
                         check (status in ('new','contacted','quoted','confirmed','completed','cancelled','lost')),

    source              text not null default 'website_form',
    landing_page        text,

    pickup              text not null,
    destination         text not null,
    travel_date         date not null,
    pickup_time         text not null,
    passengers          smallint not null check (passengers between 1 and 15),

    return_trip         boolean not null default false,
    return_date         date,
    return_time         text,

    vehicle_type        text,
    luggage             text,
    whatsapp            text not null,
    notes               text,

    utm_source          text,
    utm_medium          text,
    utm_campaign        text,
    utm_term            text,
    utm_content         text,
    gclid               text,

    user_agent          text
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);

alter table public.leads enable row level security;

-- The Next.js API route (server-side, /api/leads) inserts on behalf of anonymous
-- website visitors using the anon key. Anonymous role may INSERT only — it can
-- never read, update, or delete leads. All server-side inputs are validated
-- and sanitized in src/app/api/leads/route.js before this policy is reached.
drop policy if exists "leads_insert_anon" on public.leads;
create policy "leads_insert_anon"
    on public.leads
    for insert
    to anon, authenticated
    with check (true);

-- Only signed-in staff (Supabase Auth users, e.g. via /admin/login) can read
-- or update leads. Create staff accounts in Supabase Dashboard > Authentication.
drop policy if exists "leads_select_authenticated" on public.leads;
create policy "leads_select_authenticated"
    on public.leads
    for select
    to authenticated
    using (true);

drop policy if exists "leads_update_authenticated" on public.leads;
create policy "leads_update_authenticated"
    on public.leads
    for update
    to authenticated
    using (true)
    with check (true);
