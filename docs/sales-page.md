# Sales Page And Launch Positioning

The live public sales surface is the static page at `public/special.html`. The app routes both `/` and `/special` to that page, while `/app` stays reserved for the actual Mockstack web app and PWA experience.

## Positioning

Mockstack is the all-in-one AI mockup app for subscription-fatigued founders, marketers, creators, and small agencies.

Core promise:

> Every mockup. One app. One time.

The page should speak to sophisticated buyers who already know the mockup market: recurring billing, credit meters, hidden AI markups, dead vendors, and fragmented workflows. The mechanism is API-direct generation through the user's own fal.ai key, so Mockstack sells the tool and does not markup usage.

## Offer

The launch offer includes:

- Mockstack Web App with 1,130 templates across logos, screenshots, product photos, and mockup video.
- BYOK fal.ai setup so AI usage is billed directly by fal.ai with zero Mockstack markup.
- Commercial license for client work, Etsy listings, agency deliverables, ads, portfolios, and sales pages.
- All future template packs and app updates included for life.
- Full source code access through the public GitHub repo at `https://github.com/youzign/mockstack/`, including the right to inspect, clone, fork, modify, and self-host.
- 100-day money-back guarantee.

Launch bonuses:

- Source Code + Right-to-Self-Host.
- 30-Day BYOK Concierge.
- Money Moves: 25 Plug-and-Play Workflows.

Current Stripe checkout link for the bottom CTA:

```text
https://buy.stripe.com/4gMeV5bzq27C6e4a4G3Nm07
```

The founding-buyer countdown currently targets Friday 15 May 2026 at 11:59 PM New York time.

## Copy Rules

- Keep the page price-agnostic. Do not hard-code launch price, regular price, or discount math on the sales page.
- Let Stripe Checkout own the current price.
- Keep “one payment,” “lifetime access,” and “no subscription” prominent.
- Keep the BYOK privacy claim explicit: the fal.ai key stays in the browser and is never stored by Mockstack.
- Do not position Mockstack as a gated SaaS account. The purchase unlocks a tool and its source code.

## Live Page Structure

The current sales page should keep this narrative order:

1. Hero: all-in-one mockup app, lifetime framing, BYOK mechanism, walkthrough placeholder, CTA.
2. How it works: upload, choose templates, generate.
3. Problem: subscriptions, hidden AI markups, dead vendors, fragmented workflows.
4. Introducing Mockstack with 3D cover and included benefits.
5. Template abundance gallery using the generated full-library manifest, real template names, and thumbnails.
6. Custom template prompt section showing that templates can be adapted with plain-language directions.
7. Desktop PWA section showing Chrome install benefits and desktop-app feel.
8. What’s inside feature blocks with visual illustrations.
9. Launch bonuses using the current three-bonus stack.
10. Guarantee, FAQ, founder note, and final dark CTA.

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
- `landing-custom/before-black-shirt.png`
- `landing-custom/after-red-floral-shirt.png`
- `landing-custom/pwa-desktop-screenshot.png`

The landing gallery manifest is generated at `public/preset-gallery.json` and currently covers 1,130 templates: 396 logo, 237 screenshot, 497 product, and 158 video.

`docs/index-im.html` is a legacy sales draft and should not be treated as current copy.
