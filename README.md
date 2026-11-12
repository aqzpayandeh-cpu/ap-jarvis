# Jarvis starter website

A responsive front-end prototype for the requested black-and-purple Jarvis dashboard.

## Run locally
Open `index.html` in a modern browser. No build step is required.

## Included
- Responsive dashboard navigation: Overview, Personal, Jobs, Reselling, Trading
- Black/purple visual theme
- UK timezone label (Europe/London)
- Initial requirements and connection checklist
- Preview-only text and microphone controls

## Not connected yet
This is a front-end prototype, not a deployed or operational assistant. It does not yet include authentication, cloud database/memory, AI model calls, voice services, WhatsApp, email/calendar, Instagram, marketplace, TradingView or MetaTrader integrations, job applications, payments, or trade execution. The visible status labels intentionally say integrations are not connected.

## Production work still required
1. Add secure authentication and user-scoped database/storage.
2. Add a server-side API and AI orchestration layer.
3. Add OAuth/official authorised connections for supported providers.
4. Add consent, audit logs, approval gates, and secrets management.
5. Add background jobs/notifications and monitoring.
6. Deploy over HTTPS and configure backups and recovery.

Never put passwords, broker credentials, API secrets or verification codes in front-end code or chat. Live purchases, job submissions and trading must retain explicit approval controls as specified.


## Supabase connection (added)

The browser client is configured in `config.js` with this project's URL and its publishable key (safe for browser use). Authentication uses Supabase Auth email/password. The memory archive reads and writes `public.memories`; row-level security restricts each signed-in user to their own rows. Do not add a service-role key to this repository.

The AI chat, voice capture, Gmail/Outlook/Calendar, WhatsApp, marketplaces and trading integrations remain unconnected; the dashboard labels those areas as previews/not connected rather than pretending they are live. Before public deployment, set the Supabase Auth Site URL and redirect allow-list to the final HTTPS website URL, configure email delivery, and deploy this static site to a hosting provider.
