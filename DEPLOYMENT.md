# Deploy Jarvis to Cloudflare Pages

The current site is a static HTML/CSS/JavaScript app. It does not need a Node build step.

## Connect GitHub

1. Sign in to Cloudflare and open **Workers & Pages → Create application → Pages → Connect to Git**.
2. Authorize GitHub and select `aqzpayandeh-cpu/ap-jarvis`.
3. Select the `main` production branch.
4. Set the framework preset to **None**.
5. Leave the build command empty and set the build output directory to `/` (the repository root). If the dashboard rejects `/`, use `.`.
6. Deploy. Cloudflare will provide a `*.pages.dev` preview URL.

## Configure Supabase Auth

The browser client configuration is in `config.js` and uses the Supabase publishable key, which is intended for browser use. Never put a service-role key or other secret in this repository.

In Supabase → Authentication → URL Configuration:
- Set **Site URL** to the actual Cloudflare Pages production URL.
- Add that same URL and its auth callback path to **Redirect URLs** (for Supabase email confirmation, allow `https://YOUR-SITE.pages.dev/**`).
- Configure production email/SMTP before relying on account confirmation and password recovery.

## Verify after deployment

- Load the Pages URL over HTTPS.
- Create a test account and confirm the email if confirmation is enabled.
- Sign in and save a test memory.
- Refresh; verify the memory remains.
- Delete the test memory and verify it disappears.
- Sign out and verify the archive is locked.
- Check a second account cannot see the first account's memories.

## Current scope

This deployment makes the existing dashboard and Supabase-backed account/memory archive available. It does **not** make the AI chat, voice, email/calendar, WhatsApp, marketplace, or trading modules operational; those need separate providers, server-side integrations, permissions, and testing. Do not describe them as live until they have been implemented and verified.
