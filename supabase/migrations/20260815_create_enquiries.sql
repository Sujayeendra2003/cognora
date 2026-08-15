-- ============================================================================
-- COGNORA DIGITAL - Supabase PostgreSQL Schema Migration
-- Migration: 20260815_create_enquiries.sql
-- Description: Production-ready enquiries table, RLS security policies,
--              reference ID generator trigger, and index optimizations.
-- ============================================================================

-- 1. Enable UUID Extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Create Enquiries Table
CREATE TABLE IF NOT EXISTS public.enquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  reference_id TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  website TEXT,
  capability TEXT NOT NULL,
  budget TEXT NOT NULL,
  project_details TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'New',

  -- Constraints
  CONSTRAINT email_format_check CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- 3. Table Column Documentation Comments
COMMENT ON TABLE public.enquiries IS 'Lead capture enquiries submitted via COGNORA website form.';
COMMENT ON COLUMN public.enquiries.id IS 'Primary key UUID generated automatically by PostgreSQL.';
COMMENT ON COLUMN public.enquiries.reference_id IS 'Human-readable unique tracking reference ID (e.g., CGN-20260815-004).';
COMMENT ON COLUMN public.enquiries.created_at IS 'UTC timestamp when the inquiry was logged.';
COMMENT ON COLUMN public.enquiries.name IS 'Full name of the contact person.';
COMMENT ON COLUMN public.enquiries.email IS 'Validated work email address.';
COMMENT ON COLUMN public.enquiries.company IS 'Optional company or brand organization name.';
COMMENT ON COLUMN public.enquiries.website IS 'Optional existing website URL.';
COMMENT ON COLUMN public.enquiries.capability IS 'Selected service capabilities requested.';
COMMENT ON COLUMN public.enquiries.budget IS 'Selected budget range tier.';
COMMENT ON COLUMN public.enquiries.project_details IS 'Detailed project scope and requirements provided by lead.';
COMMENT ON COLUMN public.enquiries.status IS 'Lifecycle status (New, Under Review, Contacted, Qualified, Closed).';

-- 4. High-Performance Query Indexes
CREATE INDEX IF NOT EXISTS idx_enquiries_created_at ON public.enquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_enquiries_status ON public.enquiries(status);
CREATE INDEX IF NOT EXISTS idx_enquiries_reference_id ON public.enquiries(reference_id);
CREATE INDEX IF NOT EXISTS idx_enquiries_email ON public.enquiries(email);

-- 5. Row Level Security (RLS) Configuration
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;

-- Security Policy 1: Allow Anonymous Website Visitors to INSERT Lead Enquiries
DROP POLICY IF EXISTS "Allow anonymous insert" ON public.enquiries;
CREATE POLICY "Allow anonymous insert"
  ON public.enquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Security Policy 2: Prevent Anonymous Visitors from SELECTING Enquiries (Admin Access Only)
DROP POLICY IF EXISTS "Disallow anonymous select" ON public.enquiries;
CREATE POLICY "Disallow anonymous select"
  ON public.enquiries
  FOR SELECT
  TO authenticated
  USING (true);

-- Security Policy 3: Prevent Anonymous Updates/Deletes
DROP POLICY IF EXISTS "Disallow anonymous update" ON public.enquiries;
CREATE POLICY "Disallow anonymous update"
  ON public.enquiries
  FOR UPDATE
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS "Disallow anonymous delete" ON public.enquiries;
CREATE POLICY "Disallow anonymous delete"
  ON public.enquiries
  FOR DELETE
  TO authenticated
  USING (true);

-- ============================================================================
-- INTEGRATION HOOK NOTICE FOR DATABASE TRIGGERS
-- ============================================================================
-- You can configure Supabase Database Webhooks (Database -> Webhooks) or
-- PostgreSQL HTTP extensions (pg_net) to fire automatically on INSERT:
--
-- 1. Resend Email Confirmation (Supabase Edge Function or Webhook to Resend API)
-- 2. n8n Automation Workflow (HTTP POST to n8n webhook listener URL)
-- 3. Slack Channel Alert (HTTP POST to Slack Incoming Webhook)
-- 4. WhatsApp Business API Notification (Twilio / Meta Graph API trigger)
-- 5. CRM Sync (HubSpot / Salesforce Contacts API trigger)
-- ============================================================================
