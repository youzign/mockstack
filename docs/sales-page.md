# Sales Page And Launch Positioning

The live public sales surface is the static page at `public/special.html`. The app routes both `/` and `/special` to that page, while `/app` stays reserved for the actual Mockstack web app and PWA experience.

## Positioning

Mockstack is the all-in-one AI mockup app for subscription-fatigued founders, marketers, creators, and small agencies.

Core promise:

> Every mockup. One app. One time.

The page should speak to sophisticated buyers who already know the mockup market: recurring billing, credit meters, hidden AI markups, dead vendors, and fragmented workflows. The mechanism is API-direct generation through the user's own fal.ai key, so Mockstack sells the tool and does not markup usage.

## Offer

The launch offer includes:

- Mockstack Web App with 130 hand-tuned presets across logos, screenshots, product photos, and deterministic video.
- BYOK fal.ai setup so AI usage is billed directly by fal.ai with zero Mockstack markup.
- Commercial license for client work, Etsy listings, agency deliverables, ads, portfolios, and sales pages.
- All future preset packs and app updates included for life.
- Full source code access with a permissive MIT license, including the right to self-host, fork, modify, and resell.
- 100-day money-back guarantee.

Launch bonuses:

- Source Code + Right-to-Self-Host.
- 30-Day BYOK Concierge.
- Money Moves: 25 Plug-and-Play Workflows.

## Copy Rules

- Keep the page price-agnostic. Do not hard-code launch price, regular price, or discount math on the sales page.
- Let Stripe Checkout own the current price.
- Keep “one payment,” “lifetime access,” and “no subscription” prominent.
- Keep the BYOK privacy claim explicit: the fal.ai key stays in the browser and is never stored by Mockstack.
- Do not position Mockstack as a gated SaaS account. The purchase unlocks a tool and its source code.

## Live Page Structure

The current sales page should keep this narrative order:

1. Hero: all-in-one mockup app, lifetime framing, BYOK mechanism, walkthrough placeholder, CTA.
2. How it works: upload, choose presets, generate.
3. Problem: subscriptions, hidden AI markups, dead vendors, fragmented workflows.
4. Introducing Mockstack with 3D cover and included benefits.
5. Preset abundance gallery using real preset names and thumbnails.
6. What’s inside feature blocks with visual illustrations.
7. Launch bonuses using the current three-bonus stack.
8. Guarantee, FAQ, founder note, and final dark CTA.

## Visual Assets

Key sales visuals currently live in `public/`:

- `mockstack-3d-cover.png`
- `the-problem.png`
- `api-direct-pricing.png`
- `130-presets.png`
- `lightweight-web-app.png`
- `video-presets.png`
- `commercial-license.png`
- `founder-pledge.png`
- `founder.png`

`docs/index-im.html` is a legacy sales draft and should not be treated as current copy.
