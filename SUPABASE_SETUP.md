# Supabase Setup Guide

This guide will help you set up your Supabase database tables for the Travelbuff Concierge Services application.

## Step 1: Access Your Supabase Project

1. Go to https://supabase.com and log in
2. Select your project (or create a new one if needed)
3. Click on the **SQL Editor** in the left sidebar

## Step 2: Run the Database Schema

1. Open the file `supabase-schema.sql` in this repository
2. Copy all the SQL code from that file
3. In the Supabase SQL Editor, paste the code
4. Click the **Run** button (or press Cmd/Ctrl + Enter)

This will create all the necessary tables:
- **consultations** - Stores consultation requests from the contact form
- **email_leads** - Stores email addresses from guide downloads
- **waitlist** - Stores waitlist signups
- **bookings** - Stores calendar booking requests
- **partners** - For future partner showcase feature
- **testimonials** - For future testimonials feature

## Step 3: Verify Tables Were Created

1. Click on the **Table Editor** in the left sidebar
2. You should see all 6 tables listed
3. Click on each table to verify the structure matches what's expected

## Step 4: Understanding Row Level Security (RLS)

The schema automatically enables Row Level Security with these policies:

### Public Forms (Anyone can submit)
- **Consultations**: Anyone can submit, only authenticated users can view
- **Email Leads**: Anyone can submit, only authenticated users can view
- **Waitlist**: Anyone can join, only authenticated users can view
- **Bookings**: Anyone can create, only authenticated users can view

### Admin Content (Authenticated access)
- **Partners**: Public can view active partners, authenticated can manage
- **Testimonials**: Public can view active testimonials, authenticated can manage

This means your website visitors can submit forms without authentication, but only you (when authenticated) can view the submissions in the Supabase dashboard.

## Step 5: View Form Submissions

After users submit forms on your website, you can view them in Supabase:

1. Go to **Table Editor** in Supabase
2. Click on the table you want to view (e.g., "consultations")
3. You'll see all submissions with timestamps
4. You can filter, sort, and export the data

## Step 6: Test the Connection

1. Make sure your Replit secrets are set:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

2. Open your application
3. Try submitting the consultation form
4. Check the Supabase Table Editor to see if the data appears in the `consultations` table

If you see the data in Supabase, congratulations! Your database is properly connected.

## Troubleshooting

### Forms not submitting?
- Check browser console for errors (F12 → Console tab)
- Verify your Supabase URL and anon key are correct in Replit Secrets
- Make sure RLS policies are enabled (they should be from the schema)

### Can't see data in Supabase?
- Make sure you're logged into Supabase (RLS policies require authentication to view data)
- Check the correct table in Table Editor
- Try refreshing the page

### "Row Level Security" errors?
- This usually means policies aren't set correctly
- Re-run the `supabase-schema.sql` file to ensure all policies are created
- Check the "Policies" tab in Table Editor for each table

## Need Help?

If you encounter any issues, check:
1. Supabase project status at https://status.supabase.com
2. Your project's API settings in Supabase Dashboard → Settings → API
3. Ensure your anon key is copied correctly (it's a long JWT token starting with "eyJ...")
