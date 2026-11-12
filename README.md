# Jarvis personal dashboard

A responsive black-and-purple personal command-centre prototype, designed to run on free services wherever possible.

## Current implementation
- Dashboard navigation: Overview, Personal, Jobs, Reselling and Trading
- Supabase email/password authentication
- Private memory archive backed by `public.memories`, with row-level security
- Local task list saved in the current browser on the current device
- Basic browser speech output and speech recognition where the browser supports them
- Cloudflare Pages deployment instructions and baseline security headers

## Important limitations
- The task list uses browser-local storage; it is not synced between devices or to Apple/Google calendars.
- Browser speech recognition depends on browser/device support and may use browser-vendor services. It is not a guaranteed offline/private speech engine.
- No full AI model is connected. The assistant currently offers only basic local commands and cannot provide general GPT-level reasoning.
- AI chat, email/calendar access, WhatsApp, Instagram, job search/application automation, marketplace integrations, live trading data, broker connections, payments, and background notifications are not connected.
- Dashboard job, reselling and trading sections are planning/preview content, not live automation.

## Run locally
Serve the repository using a local static development server. The Supabase client is loaded as an ES module. Run `npm install` then `npm run dev` if using the included development script.

## Deployment
Follow [DEPLOYMENT.md](./DEPLOYMENT.md). Cloudflare Pages can serve the repository root as a static site with no build command. Set the Supabase Auth Site URL and redirect allow-list after the production URL exists.

## Security and approval rules
- Never commit service-role keys, AI provider secrets, passwords, broker credentials, or verification codes.
- Keep privileged API calls on a server-side function; browser code must only contain publishable client configuration.
- Keep purchases, job submissions, messages sent on the user's behalf, account changes, and all trade execution behind explicit user approval.
- Trading must remain analysis/journaling only until the user explicitly approves a separately designed and tested execution workflow.
- Log sensitive actions and provide a way to revoke connected accounts.

## Cost policy
This project is intended to remain at £0. Do not enable paid hosting, paid API usage, subscriptions, or paid add-ons. If a requested capability cannot be delivered on a free tier, leave it disabled and explain the limitation.
