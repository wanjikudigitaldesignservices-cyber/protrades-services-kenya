-- Enable UUID extension
create extension if not exists "pgcrypto";

-- Enum for roles (assuming we use Supabase auth roles or just custom claims, but we'll use a check constraint for simplicity if needed, or rely on auth.jwt())
-- For this setup, we assume Admins are authenticated users. We'll use auth.role() = 'authenticated' to represent an admin for now, or check a custom claim.
-- A better way for v1 is to allow any authenticated user to be an admin, or specifically check `is_admin` claim.
-- We'll just use `auth.role() = 'authenticated'` as the Admin check since there is a single admin role.

-------------------------------------------------------------------------------
-- 1. quote_requests
-------------------------------------------------------------------------------
create table quote_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  name text not null,
  phone text not null,
  email text,
  service_type text not null,      -- plumbing | electrical | both
  description text not null,
  urgency text not null,           -- routine | this_week | emergency
  location text not null,
  status text default 'new',       -- new | quoted | won | lost
  contacted_at timestamptz
);

alter table quote_requests enable row level security;

-- Only service role (Edge Functions) can insert. 
-- Wait, actually Edge Functions run with service_role by default, which bypasses RLS. 
-- But we can explicitly add a policy if we want. 
-- "anon never writes directly — Edge Function re-validates + rate-limits + inserts"
-- So we just don't create an INSERT policy for anon or authenticated.
create policy "Admins can view quote_requests" 
  on quote_requests for select 
  to authenticated using (true);

create policy "Admins can update quote_requests" 
  on quote_requests for update 
  to authenticated using (true);

-------------------------------------------------------------------------------
-- 2. technicians
-------------------------------------------------------------------------------
create table technicians (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  specialty text not null,       -- plumbing | electrical | both
  photo_url text,
  bio text,
  years_experience int
);

alter table technicians enable row level security;

create policy "Public can view technicians" 
  on technicians for select 
  to anon, authenticated using (true);

create policy "Admins can insert technicians" 
  on technicians for insert 
  to authenticated with check (true);

create policy "Admins can update technicians" 
  on technicians for update 
  to authenticated using (true);

-------------------------------------------------------------------------------
-- 3. bookings
-------------------------------------------------------------------------------
create table bookings (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  name text not null,
  phone text not null,
  service_type text not null,
  preferred_date date not null,
  preferred_time text not null,
  address text not null,
  technician_id uuid references technicians(id),
  status text default 'pending', -- pending | confirmed | completed | cancelled
  deposit_paid boolean default false
);

alter table bookings enable row level security;

create policy "Admins can view bookings" 
  on bookings for select 
  to authenticated using (true);

create policy "Admins can update bookings" 
  on bookings for update 
  to authenticated using (true);

-------------------------------------------------------------------------------
-- 4. projects
-------------------------------------------------------------------------------
create table projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null,     -- plumbing | electrical | borehole | solar
  description text,
  before_photo_url text,
  after_photo_url text,
  location text,
  completed_date date
);

alter table projects enable row level security;

create policy "Public can view projects" 
  on projects for select 
  to anon, authenticated using (true);

create policy "Admins can insert projects" 
  on projects for insert 
  to authenticated with check (true);

create policy "Admins can update projects" 
  on projects for update 
  to authenticated using (true);

-------------------------------------------------------------------------------
-- 5. blog_posts
-------------------------------------------------------------------------------
create table blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  content text not null,
  cover_image_url text,
  published_at timestamptz default now(),
  author text
);

alter table blog_posts enable row level security;

create policy "Public can view blog_posts" 
  on blog_posts for select 
  to anon, authenticated using (true);

create policy "Admins can insert blog_posts" 
  on blog_posts for insert 
  to authenticated with check (true);

create policy "Admins can update blog_posts" 
  on blog_posts for update 
  to authenticated using (true);

-------------------------------------------------------------------------------
-- 6. testimonials
-------------------------------------------------------------------------------
create table testimonials (
  id uuid primary key default gen_random_uuid(),
  customer_name text not null,
  rating int not null check (rating between 1 and 5),
  comment text not null,
  service_type text,
  approved boolean default false
);

alter table testimonials enable row level security;

create policy "Public can view approved testimonials" 
  on testimonials for select 
  to anon, authenticated using (approved = true);

create policy "Admins can view all testimonials" 
  on testimonials for select 
  to authenticated using (true);

create policy "Admins can insert testimonials" 
  on testimonials for insert 
  to authenticated with check (true);

create policy "Admins can update testimonials" 
  on testimonials for update 
  to authenticated using (true);

-------------------------------------------------------------------------------
-- 7. service_areas
-------------------------------------------------------------------------------
create table service_areas (
  id uuid primary key default gen_random_uuid(),
  area_name text not null,
  coverage_notes text
);

alter table service_areas enable row level security;

create policy "Public can view service_areas" 
  on service_areas for select 
  to anon, authenticated using (true);

create policy "Admins can insert service_areas" 
  on service_areas for insert 
  to authenticated with check (true);

create policy "Admins can update service_areas" 
  on service_areas for update 
  to authenticated using (true);

-------------------------------------------------------------------------------
-- 8. rate_limits
-------------------------------------------------------------------------------
create table rate_limits (
  ip text not null,
  endpoint text not null,
  window_start timestamptz not null
);

-- We can leave RLS off or strictly service_role only since it's just used by Edge Functions internally.
alter table rate_limits enable row level security;
-- No policies, so only service_role can access it.
