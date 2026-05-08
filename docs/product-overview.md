# Product Overview

## Positioning

Mockstack is a focused mockup-context generator.

It is not Dezygn's full agency OS and should not drift into full lifestyle/product photography fulfillment. The boundary is:

- Mockstack: fast mockups for logos, screenshots, and product photos.
- Dezygn: full product/lifestyle photography workflows, agency fulfillment, feedback, revisions, and client delivery.

## Core Promise

Upload an asset, pick mockup contexts, and generate branded mockups using your own fal.ai key.

## Product Principles

- BYOK first: users bring their own fal.ai key.
- No credit system in v1.
- No app-owned generation cost liability.
- Hosted web app first.
- Installable desktop PWA through Chromium browsers.
- Keep the workflow above the fold where possible.
- Results panel only shows outputs/pending outputs, never the uploaded source.
- Presets should feel commercial, specific, and immediately understandable.

## Current UI Direction

The current app uses a two-column wizard layout:

- Left column: upload and scene selection wizard.
- Right column: results-only panel.
- Header: Mockstack brand, fal.ai key status, Help, settings.
- Footer: "Made with ❤︎ in Belgium countryside by Dezygn" and Contact link.

The scene picker is available inline during Step 2. The expanded scene browser is an additive modal opened from a small expand icon, not a replacement for the inline browser.

The Help modal provides first-run and fal.ai setup guidance without creating a mandatory onboarding step.

The source code is public at `https://github.com/youzign/mockstack/` so buyers and developers can inspect it, clone it, fork it, or self-host their own copy.

## Current Local App

- Project path: `/Users/dezygn/Projects/mockstack`
- Dev URL: `http://127.0.0.1:5177/`
- Linear project: Mockstack
- Main Linear issue: `DEZ-10 Design and build initial Mockstack UI`
