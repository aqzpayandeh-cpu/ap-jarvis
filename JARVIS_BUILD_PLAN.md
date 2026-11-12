# Jarvis — build blueprint

## Product goal
A website-first personal assistant with one shared AI brain and persistent memory, split into Personal, Jobs, Reselling and Trading workspaces. All dates and schedules use Europe/London.

## Non-negotiable safety and operating rules
- Free-first infrastructure. Never enable a paid service, subscription, or usage-based API without the owner's explicit approval.
- Keep provider credentials, OAuth refresh tokens, API keys and personal data out of this public repository. Store secrets only in server-side environment variables or a managed secret store.
- Ask before sending messages, emails, applications, calendar changes, purchases, listings, or financial transactions.
- Never place or execute trades unless a separately approved, safeguarded personal-account execution system exists. Funded-account trades remain analysis/recommendation only.
- Trading risk must never exceed 2% per trade; no-trade is a valid decision.
- Reselling starts with £100. Reinvest realised profits by default; ask before increasing the bankroll.
- Preserve separate personal Gmail and university Outlook contexts; do not merge inboxes.
- Do not claim a connector is active until its authorization and a real read/test operation succeed.

## Workspaces
### Personal
Separate Gmail and university Outlook inboxes; prioritize meaningful actions, bills, university notices and deadlines. Read Apple Calendar/iCloud events and propose reminders/events for approval. Daily morning briefing and prioritized tasks. WhatsApp delivery is a later integration, not assumed available.

### Jobs
Search Birmingham city centre, Bullring/Grand Central and nearby in-person retail/hospitality roles; include genuinely remote UK jobs. Minimum target £12.71/hour, 30+ hours/week, immediate start; part-time preferred and zero-hours acceptable. Tailor CV/cover letters and request approval before applying. Mark UNIQLO Bullring temporary Sales Assistant as already applied; do not recommend it as a new application.

### Reselling
Start bankroll £100. Research eBay/Vinted demand, trends, seasonality and sold prices; calculate fees, postage, net margin and ROI. Suggest purchases and request approval before spending. User handles packing and dispatch. Increase bankroll only after realized profit and explicit agreement.

### Trading
NQ primary, ES context. Journal every trade and account update. Apply the user's trend-continuation / retracement, higher-timeframe PD-array, liquidity-sweep, 5m confirmation/CHOCH/IFVG and 1m/4m refinement framework. Show entry, invalidation/stop, target, rationale and risk. Keep funded accounts recommendation-only. Any future personal-account automation requires a separate explicit opt-in, demo validation, hard risk limits, kill switch, audit trail and fail-safe.

## Recommended free-first architecture
- Frontend: existing static website, progressively enhanced as a responsive web app.
- Authentication and shared database: Supabase free tier (subject to its current quotas and inactivity policies), with row-level security and per-user records.
- Backend: server-side functions for AI requests and provider integrations; secrets never shipped to browser code.
- AI: provider abstraction so the model can be changed; do not promise unlimited free inference. AI API usage may incur charges, so start with manual configuration/testing and require explicit approval before any paid API is enabled.
- Deployment: GitHub Pages is suitable for a static frontend only. A secure AI backend, OAuth callbacks and secret storage require a backend host; select a free tier only after checking current limits and regional availability.
- Memory: structured user profile, preferences, tasks, events, job applications, inventory, trading journal and conversation summaries in a private database. Memory retrieval must be scoped to the signed-in user.

## Integration register

| Service | Intended connection | Important limitation / status |
|---|---|---|
| Gmail | Official ChatGPT Gmail app or Google OAuth for Jarvis backend | ChatGPT app connection does not automatically connect the custom Jarvis website. |
| University Outlook email | Outlook Email app / Microsoft Graph OAuth | University tenant policy or administrator consent may block access. Keep separate from personal Gmail. |
| Outlook Calendar | Outlook Calendar app / Microsoft Graph OAuth | Separate authorization from email may be required. |
| Apple Calendar | iCloud Calendar app in ChatGPT, or approved CalDAV integration | ChatGPT iCloud Calendar uses an Apple app-specific password; never use the normal Apple password. A ChatGPT connection does not automatically authorize the custom Jarvis site. |
| WhatsApp | Official WhatsApp Business Platform / Cloud API | Personal WhatsApp Messenger chats are not a general-purpose bot API. Cloud API requires business setup and provider rules; do not promise personal-chat automation. |
| Spotify | Spotify Developer Web API OAuth | Playback-control capabilities depend on Spotify account/device/API policy; Web Playback SDK requires Premium. |
| LinkedIn | User-operated job search and approved links; official API only where access is granted | General job-board scraping or automated account actions are not assumed. |
| Indeed | Search via official site and supported feeds/links | Do not assume a public job-search API or automated application permission. |
| eBay | eBay developer APIs after developer account approval | Purchases/listings require explicit user approval and supported API permissions. |
| Vinted | User-operated browsing unless an officially supported integration is available | Do not rely on unofficial/private APIs or credential scraping. |
| TradingView | Alerts/webhooks where supported, routed to a secure backend | Alerts are signals, not broker execution; do not store secrets in alert URLs. |
| MetaTrader / broker | Broker-supported API or approved bridge only | Not connected. No execution until permissions and safeguards are explicitly approved. |

## Delivery stages
1. Establish a secure, private backend and sign-in; keep the public GitHub repository free of secrets.
2. Move the current local-only workspace data model to a per-user database and add cross-device sync.
3. Add the AI orchestration layer, structured memory retrieval and approval queue.
4. Connect Gmail and Outlook separately; add calendar read and approval-gated event creation.
5. Add jobs research/application workflow, reselling research/inventory, and trading journal/analysis.
6. Add voice input/output and mobile-friendly experience.
7. Add messaging, Spotify, marketplaces and trading alerts only through supported official APIs and explicit permissions.
8. Test permissions, data isolation, backups, deletion, quotas, outages and recovery before calling the system production-ready.

## Current implementation status
This document is the build blueprint, not a claim that the integrations or cloud AI brain are already live. The current GitHub Pages deployment is a static site; it cannot safely hold API secrets or provide persistent cross-device user memory by itself.
