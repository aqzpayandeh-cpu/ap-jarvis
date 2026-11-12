# Jarvis personal dashboard

A responsive black-and-purple personal command-centre prototype.

## Current implementation
- Dashboard navigation: Overview, Personal, Jobs, Reselling and Trading
- Supabase email/password authentication
- Private memory archive backed by `public.memories`, with row-level security
- Cloudflare Pages deployment instructions and baseline security headers

## Not yet operational
AI chat, voice input/output, email and calendar, WhatsApp, Instagram, job search/application automation, marketplace integrations, live trading data, broker connections, payments, and background notifications are not connected. The dashboard must not imply otherwise.

## Run locally
Open `index.html` in a modern browser. The Supabase client is loaded as an ES module. For a local development server, run `npm install` then `npm run dev`.

## Deployment
Follow [DEPLOYMENT.md](./DEPLOYMENT.md). Cloudflare Pages can serve the repository root as a static site with no build command. Set the Supabase Auth Site URL and redirect allow-list after the production URL exists.

## Security and approval rules
- Never commit service-role keys, AI provider secrets, passwords, broker credentials, or verification codes.
- Keep privileged API calls on a server-side function; browser code must only contain publishable client configuration.
- Keep purchases, job submissions, messages sent on the user's behalf, account changes, and all trade execution behind explicit user approval.
- Trading must remain analysis/journaling only until the user explicitly approves a separately designed and tested execution workflow.
- Log sensitive actions and provide a way to revoke connected accounts.
