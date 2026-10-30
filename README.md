# DigiCraftora: Online Appointment Booking

Next.js 14 (App Router, TypeScript) + Tailwind + Supabase (PostgreSQL and Auth). Customers book consultations online; the owner manages everything from a protected admin dashboard. UI languages: English, हिन्दी, বাংলা.

## What is implemented

- Public: home, `/book`, `/booking/confirmation`, `/manage` (look up / request cancel or reschedule), `/privacy`, `/terms`, custom 404.
- Admin: `/admin/login`, `/admin` (counts, search, filters, approve/reject/cancel/reschedule/complete with confirmation, schedule settings, blocked slots).
- API: `GET /api/slots`, `POST /api/bookings`, `GET /api/bookings/lookup`, `POST /api/bookings/cancel-request`, `POST /api/bookings/reschedule-request`, `/api/admin/*` (appointments, schedule, blocked-slots, login, logout, me).
- Double-booking prevention by a PostgreSQL **exclusion constraint** inside `create_booking()` / `reschedule_appointment()`.
- Slot occupancy rule: `pending`, `approved`, `reschedule_requested` hold the slot; `rejected`, `cancelled`, `completed` release it.
- Management tokens are random and stored only as a hash; booking references are non-guessable.
- RLS enabled on every table with no public policies. Public traffic goes through server routes using the service-role key.
- Admin auth: Supabase Auth password sign-in, httpOnly cookies, server-side `admin_users` check on **every** admin endpoint, same-origin check on mutations, login rate limit.

Not implemented: email notifications (no provider is wired up, so the app never claims an email was sent). WhatsApp links only open a chat; they do not send anything automatically.

## Local development

```bash
npm install
cp .env.example .env.local      # fill in the Supabase values
npm run dev                     # http://localhost:3000
```

Checks: `npm run lint && npm run typecheck && npm test && npm run build`

## Supabase setup

1. Create a project at supabase.com.
2. SQL editor: run `supabase/migrations/001_booking.sql` (safe to re-run).
3. Project Settings > API: copy the URL, anon key and service-role key into `.env.local`.
4. **Create the first admin** (there is no public registration): Authentication > Users > Add user (email + password), then run:
   ```sql
   insert into admin_users (user_id) select id from auth.users where email = 'YOUR_EMAIL';
   ```
5. Defaults in `booking_settings` / `business_hours` are **placeholders** (Mon-Sat 10:00-18:00, 30 min slots, Asia/Kolkata). Set your real hours in the admin Schedule panel.

## Tests

- `npm test` runs unit tests (validation, slot generation, timezone, references, rate limit, admin auth, i18n, booking service with a fake DB).
- Integration tests (`tests/integration/database.test.ts`) run only if `TEST_SUPABASE_*` variables are set. Use a **separate** Supabase project; they create and delete only rows with reference prefix `DC-TEST`.

## Deploy (Vercel)

1. Push the repo to GitHub and import it in Vercel.
2. Add the four variables from `.env.example` under Settings > Environment Variables (Production). Mark the service-role key as sensitive.
3. Deploy. Then open `/book` and `/admin/login` on the live URL.

### Custom domain (DigiCraftora.com)

In Vercel > Project > Settings > Domains add `digicraftora.com` and `www.digicraftora.com`. At your DNS provider create the records Vercel shows for your project (typically an `A` record for the apex and a `CNAME` for `www` pointing to Vercel). Use the values from the Vercel dashboard, as they can change. HTTPS is issued automatically. Set `NEXT_PUBLIC_SITE_URL=https://digicraftora.com` and redeploy.

## Production launch checklist

- [ ] Migration applied; first admin created; admin login works.
- [ ] Real business hours, slot length, notice and advance limits set.
- [ ] Service-role key only in server env vars (not `NEXT_PUBLIC_*`, not committed).
- [ ] Place logo at `public/logo.png` (optional; text logo is used otherwise).
- [ ] Place a real booking end to end: pending > admin approve > slot disappears from `/book`.
- [ ] Try cancel and reschedule from `/manage`; confirm the slot is released.
- [ ] Confirm an anonymous request to `/api/admin/appointments` returns 401.
- [ ] Hindi and Bengali text reviewed by a native speaker.
- [ ] Privacy Policy and Terms reviewed against your actual practices.
- [ ] Consider an external rate limiter (see limitations) and Supabase backups.

## Known limitations

- The in-memory rate limiter is per server instance and only slows abuse on serverless hosts. Use an external store (e.g. Upstash Redis) for strong limits.
- No confirmation emails (see above).
- Hindi/Bengali translations were not natively reviewed.
