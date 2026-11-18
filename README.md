# Kapper Studio landing page

A responsive, single page site for the Kapper salon discovery and booking app. Built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

## Page sections

- Hero and salon imagery
- Product screenshots from the Kapper app
- Client features: salon discovery, services, appointments, and messages
- Salon team features: profile, service list, availability, appointments, and inbox
- Client booking flow, benefits, contact CTA, and footer

The site is intentionally one page; navigation uses section anchors.

## App assets

The current photos and screenshots were copied from the companion repository [kapper-app](https://github.com/Umarsadiq112233/kapper-app). Photos live in `public/images/hero/`; screenshots live in `public/images/app-screenshots/`. Asset paths are configured in `src/lib/constants.ts`.

Some app captures contain sample names, locations, and prices from development fixtures. Review or replace those captures with approved production data before publishing. The page avoids presenting those samples as real customer stories or business statistics.

## Accurate product scope

The app supports salon discovery, service browsing, appointment booking, appointment management, messaging, notifications, and a salon team workspace for profile, services, availability, and bookings. The repository describes customer mode as demo/local data and vendor mode as optionally Supabase-backed. Payment is a demo flow; it does not process charges. The landing page therefore makes no live payment, POS, map discovery, or customer-management platform claims.

## Business configuration

Copy `.env.example` to `.env.local` to set the contact email, demo URL, or approved social links. Until configured, primary calls to action link to relevant page sections.
