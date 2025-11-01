# GitHub Pages Deployment Guide

This guide walks you through deploying your Travelbuff Concierge Services website to GitHub Pages.

## Prerequisites

Before you begin, ensure you have:

1. ✅ A GitHub account
2. ✅ Your Supabase project set up with the database tables created (see `SUPABASE_SETUP.md`)
3. ✅ Your Supabase URL and anon key (from Supabase Dashboard > Settings > API)
4. ✅ This repository pushed to GitHub at `CraigDidIt/TravelBuff`

## Step 1: Configure GitHub Secrets

Your Supabase credentials need to be added as GitHub Secrets so the deployment workflow can access them.

1. Go to your GitHub repository: https://github.com/CraigDidIt/TravelBuff
2. Click **Settings** (top navigation bar)
3. In the left sidebar, click **Secrets and variables** > **Actions**
4. Click **New repository secret**
5. Add the following two secrets:

### Secret 1: VITE_SUPABASE_URL
- **Name:** `VITE_SUPABASE_URL`
- **Value:** Your Supabase project URL (e.g., `https://xxxxx.supabase.co`)
- Click **Add secret**

### Secret 2: VITE_SUPABASE_ANON_KEY
- **Name:** `VITE_SUPABASE_ANON_KEY`
- **Value:** Your Supabase anon/public key (starts with `eyJ...`)
- Click **Add secret**

✅ You should now see both secrets listed (values will be hidden)

## Step 2: Enable GitHub Pages

1. In your repository, go to **Settings** > **Pages** (in the left sidebar)
2. Under **Source**, select **GitHub Actions** from the dropdown
3. Click **Save**

That's it! GitHub Pages is now configured to deploy using the automated workflow.

## Step 3: Deploy Your Site

The deployment happens automatically! Here's how:

### Automatic Deployment

Every time you push to the `main` branch, the workflow will:
1. Install all dependencies
2. Build the static site with the correct base path
3. Deploy to GitHub Pages

### Manual Deployment

You can also trigger a deployment manually:

1. Go to **Actions** tab in your repository
2. Click **Deploy to GitHub Pages** in the left sidebar
3. Click **Run workflow** > **Run workflow**

## Step 4: View Your Live Site

After the first deployment completes (usually 2-3 minutes), your site will be live at:

🌐 **https://craigdidit.github.io/TravelBuff/**

## Monitoring Deployments

### Check Deployment Status

1. Go to the **Actions** tab in your repository
2. You'll see all workflow runs listed
3. Green checkmark ✅ = successful deployment
4. Red X ❌ = failed deployment (click to see error logs)

### View Deployment Logs

If a deployment fails:
1. Click on the failed workflow run
2. Click on the **build** or **deploy** job
3. Expand the steps to see detailed error messages

## Common Issues & Solutions

### Issue: "Secrets not found" error

**Solution:** Make sure you added both `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` as repository secrets (Step 1)

### Issue: "404 Page Not Found" when clicking links

**Solution:** This is normal for SPAs on GitHub Pages. The workflow automatically creates a `404.html` file to handle client-side routing. If you're still seeing 404s, clear your browser cache.

### Issue: Forms not submitting on the live site

**Solution:** 
1. Open browser DevTools (F12) and check the Console tab for errors
2. Verify your Supabase secrets are correctly added to GitHub
3. Ensure you ran the `supabase-schema.sql` file to create the database tables
4. Check your Supabase project is active at https://supabase.com/dashboard

### Issue: Styles/images not loading

**Solution:** The base path `/TravelBuff/` is configured correctly in the workflow. If assets still don't load:
1. Check the deployment logs for build errors
2. Verify the workflow completed successfully
3. Try a hard refresh (Ctrl+F5 or Cmd+Shift+R)

### Issue: Changes not appearing on live site

**Solution:**
1. Make sure you pushed your changes to the `main` branch
2. Check the Actions tab to verify the workflow ran
3. GitHub Pages may cache content for a few minutes - wait and refresh

## Local Testing

To test the production build locally before deploying:

```bash
# Build the site with GitHub Pages base path
npm exec vite build -- --base=/TravelBuff/

# The output will be in dist/public/
# You can serve it locally with any static file server
npx serve dist/public -l 3000
```

Then visit http://localhost:3000 to preview the production build.

## Updating Your Site

The workflow is now active! Every time you:

1. Make changes to your code in Replit
2. Commit the changes
3. Push to GitHub's `main` branch

...your site will automatically rebuild and deploy. No manual steps needed!

## Custom Domain (Optional)

Want to use a custom domain instead of `craigdidit.github.io/TravelBuff/`?

1. Purchase a domain (e.g., from Namecheap, Google Domains, etc.)
2. In GitHub: **Settings** > **Pages** > **Custom domain**
3. Enter your domain and click **Save**
4. Add DNS records at your domain provider (GitHub will show you what to add)
5. Wait for DNS propagation (can take 24-48 hours)

If you add a custom domain, you'll need to update the build command to remove the base path.

## Need Help?

If you encounter issues:

1. Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Review the [Supabase documentation](https://supabase.com/docs)
3. Check workflow logs in the Actions tab
4. Ensure all secrets are correctly configured

## Architecture Overview

Your deployment architecture:

```
┌─────────────────────────────────────────────────┐
│  Developer (You)                                │
│  • Code in Replit                               │
│  • Test with local Supabase                     │
│  • Push to GitHub                               │
└────────────────┬────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│  GitHub Actions Workflow                        │
│  • Triggered on push to main                    │
│  • Runs: npm ci                                 │
│  • Runs: vite build --base=/TravelBuff/        │
│  • Injects Supabase secrets as env vars         │
│  • Creates 404.html for SPA routing             │
│  • Deploys to GitHub Pages                      │
└────────────────┬────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│  GitHub Pages                                   │
│  • Hosts static files at:                       │
│    https://craigdidit.github.io/TravelBuff/    │
│  • Serves React SPA                             │
│  • Handles all routes via 404.html fallback     │
└────────────────┬────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────┐
│  Supabase Backend                               │
│  • PostgreSQL database                          │
│  • Stores form submissions                      │
│  • Row Level Security for data protection       │
│  • API automatically generated                  │
└─────────────────────────────────────────────────┘
```

Your users visit the GitHub Pages URL, interact with the React app, and when they submit forms, the data goes directly to Supabase. Simple and effective!
