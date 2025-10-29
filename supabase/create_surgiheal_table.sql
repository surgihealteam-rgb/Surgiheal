-- Create table `surgiheal` to store appointment / lead data
-- Run this in your Supabase project's SQL editor or with the supabase CLI

create table if not exists public.surgiheal_appointments (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text,
  phone text,
  service text,
  doctor text,
  appointment_date timestamptz,
  status text default 'pending', -- e.g. pending, confirmed, cancelled
  notes text,
  metadata jsonb default '{}'::jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Trigger to maintain updated_at
create or replace function public.trigger_set_timestamp()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists set_timestamp on public.surgiheal_appointments;
create trigger set_timestamp
  before update on public.surgiheal_appointments
  for each row
  execute procedure public.trigger_set_timestamp();

-- Optional: grant minimal privileges to anon/public depending on your desired policy.
-- By default Supabase enables Row Level Security; configure policies for insert/select/update/delete as needed.
