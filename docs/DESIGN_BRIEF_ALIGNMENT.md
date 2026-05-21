# Design Brief Alignment — Luke Coutinho Rebuild

This document maps the agency design brief (WordPress → modern stack) to this codebase and phased delivery.

## 1.2 Why we rebuilt (problems → solutions)

| Legacy issue | Target in this app |
|--------------|-------------------|
| Fragmented stack (WooCommerce, Booknetic, Masteriyo, Tawk) | Single React SPA; one routing layer; shared checkout at `/payment` |
| Not mobile-first (~70% mobile traffic) | Mobile-first CSS (`src/styles/mobile-first.css`), touch targets, bottom-safe CTAs |
| Luke’s brand buried in About | `LukeTrustStrip` + story links woven into Home, programs, success pages |
| High-ticket programs = lead-gen only | **Dual-path**: self-serve (`Enroll now` → `/payment`) + human-assisted (`Book consult` / waitlist) |
| Analytics in silos | Unified `src/lib/analytics.js` — every funnel tagged `programs` \| `consults` \| `lms` |
| WP plugin performance | Static/Vite build; no plugin sprawl; lazy media where possible |

## 1.3 Project objectives (implementation status)

### 1. Dual-path enrollment conversion
- **Programs**: `DualPathCTA` on Signature Wellness — enroll + book consult / Luke waitlist.
- **Consults**: `/book-consult` → service → schedule → `/payment`.
- **LMS**: Course detail → enroll → `/payment` (no cart step).
- **Lead-gen**: Corporate enquiry, Luke waitlist inline on consult step 1.

### 2. Luke as primary trust engine
- `LukeTrustStrip` on Home and reusable on program/checkout success.
- Hero video, six pillars, architecture journey, podcast/blogs CTAs reference Luke’s method.

### 3. Mobile-first (India audience)
- Viewport + theme-color in `index.html`.
- Global mobile rules: 44px taps, 16px form inputs, stacked dual-path CTAs, safe-area padding.

### 4. Unified revenue streams + analytics
- `REVENUE_STREAMS` in `src/config/revenueStreams.js`.
- `trackPageView` / `trackEvent` on route change, checkout, consult steps, enroll clicks.
- Ready for GTM: pushes to `window.dataLayer` when `VITE_ANALYTICS_ENABLED=true`.

### 5. LMS scale (bundles / subscriptions)
- **MVP**: per-course enroll → payment.
- **Phase 2**: subscription SKUs, bundles in `courses` data + Stripe/Razorpay backend (not in MVP UI yet).

### 6. Cross-flow journeys + nurture
- `CrossSellRail` after payment success and on key pages (contextual links).
- Email nurture = backend/CRM integration (Phase 2 — events already named for triggers).

### 7. MVP in 12 weeks (suggested phases)

| Phase | Weeks | Scope |
|-------|-------|--------|
| **A — Foundation** | 1–4 | Routes, brand, mobile shell, consult flow, mock payment |
| **B — Conversion** | 5–8 | Dual-path programs, LMS checkout, analytics, Luke strips, assessment |
| **C — Integrations** | 9–12 | Live payments, Booknetic/calendar API, LMS SSO, GTM/CRM, chat |

Current repo position: **late Phase A / early Phase B** (flows wired; payments mocked).

## Key files

| Concern | Path |
|---------|------|
| Analytics | `src/lib/analytics.js` |
| Stream mapping | `src/config/revenueStreams.js` |
| Dual-path UI | `src/components/conversion/DualPathCTA.jsx` |
| Luke brand | `src/components/brand/LukeTrustStrip.jsx` |
| Cross-sell | `src/components/conversion/CrossSellRail.jsx` |
| Brand copy | `src/data/brandContent.js` |
| Consult data | `src/data/consultServices.js` |

## Event naming (for GTM / CRM)

- `page_view` — `{ path, stream }`
- `funnel_step` — `{ stream, step, label }`
- `cta_click` — `{ stream, cta_type: self_serve \| human_assisted, destination }`
- `checkout_started` / `checkout_completed` — `{ stream, product_id, value }`

## Environment

```env
VITE_ANALYTICS_ENABLED=true
# Optional: VITE_GA_MEASUREMENT_ID=G-XXXXXXXX
```
