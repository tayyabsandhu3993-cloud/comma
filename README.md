# AUREVANE — Luxury Fashion E-commerce

Production-oriented Next.js architecture for an original luxury fashion brand.

## Stack
- Next.js + React + TypeScript
- Tailwind CSS
- Framer Motion
- Prisma + PostgreSQL
- Zod validation
- PayPal/Venmo server integration placeholders
- Zelle manual-verification workflow
- Invoice workflow
- Responsive, reduced-motion-aware UI

## Run
1. `npm install`
2. Copy `.env.example` to `.env`
3. Set `DATABASE_URL`
4. `npx prisma generate`
5. `npm run db:push`
6. `npm run db:seed`
7. `npm run dev`

## Important
Payment success is intentionally NOT faked. Connect official PayPal APIs server-side, and implement Zelle/invoice verification on the server before going live.

## Demo imagery
Local SVG art-direction placeholders are included so the UI works without relying on copyrighted third-party assets. Replace them with licensed/original photography before launch.

## Next production steps
- Connect real authentication
- Persist cart/wishlist/orders in PostgreSQL
- Add official PayPal SDK/order capture
- Add email provider
- Add object storage/CDN for product photography
- Add admin RBAC and CSRF/session hardening
- Add shipping carrier APIs
- Add analytics consent layer
- Add automated tests and CI
