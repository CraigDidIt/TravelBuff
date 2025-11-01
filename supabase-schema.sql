-- Travelbuff Concierge Services Database Schema
-- Run this SQL in your Supabase SQL Editor to create all tables

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Consultations table
CREATE TABLE IF NOT EXISTS consultations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  service_interest TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Email leads table
CREATE TABLE IF NOT EXISTS email_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  name TEXT,
  source TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Waitlist table
CREATE TABLE IF NOT EXISTS waitlist (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  name TEXT,
  destination TEXT,
  travel_period TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Bookings table
CREATE TABLE IF NOT EXISTS bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  service_interest TEXT NOT NULL,
  date TEXT NOT NULL,
  time TEXT NOT NULL,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Partners table
CREATE TABLE IF NOT EXISTS partners (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  logo_url TEXT NOT NULL,
  description TEXT,
  website TEXT,
  "order" TEXT NOT NULL DEFAULT '0',
  is_active TEXT NOT NULL DEFAULT 'true',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  rating TEXT NOT NULL DEFAULT '5',
  image_url TEXT,
  is_active TEXT NOT NULL DEFAULT 'true',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_consultations_created_at ON consultations(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_email_leads_created_at ON email_leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_bookings_created_at ON bookings(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_bookings_date ON bookings(date);
CREATE INDEX IF NOT EXISTS idx_partners_order ON partners("order");
CREATE INDEX IF NOT EXISTS idx_testimonials_is_active ON testimonials(is_active);

-- Enable Row Level Security (RLS) on all tables
ALTER TABLE consultations ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE partners ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public INSERT (for form submissions)
-- and restrict SELECT/UPDATE/DELETE to authenticated users

-- Consultations: Anyone can insert, only authenticated can read
CREATE POLICY "Anyone can submit consultations" ON consultations
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view consultations" ON consultations
  FOR SELECT TO authenticated
  USING (true);

-- Email leads: Anyone can insert, only authenticated can read
CREATE POLICY "Anyone can submit email leads" ON email_leads
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view email leads" ON email_leads
  FOR SELECT TO authenticated
  USING (true);

-- Waitlist: Anyone can insert, only authenticated can read
CREATE POLICY "Anyone can join waitlist" ON waitlist
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view waitlist" ON waitlist
  FOR SELECT TO authenticated
  USING (true);

-- Bookings: Anyone can insert, only authenticated can read
CREATE POLICY "Anyone can create bookings" ON bookings
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view bookings" ON bookings
  FOR SELECT TO authenticated
  USING (true);

-- Partners: Public read access, authenticated write access
CREATE POLICY "Anyone can view active partners" ON partners
  FOR SELECT TO anon, authenticated
  USING (is_active = 'true');

CREATE POLICY "Only authenticated users can manage partners" ON partners
  FOR ALL TO authenticated
  USING (true)
  WITH CHECK (true);

-- Testimonials: Public read access, authenticated write access
CREATE POLICY "Anyone can view active testimonials" ON testimonials
  FOR SELECT TO anon, authenticated
  USING (is_active = 'true');

CREATE POLICY "Only authenticated users can manage testimonials" ON testimonials
  FOR ALL TO authenticated
  USING (true)
  WITH CHECK (true);
