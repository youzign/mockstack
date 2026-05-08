# Help Center

Mockstack includes an in-app Help modal opened from the `?` icon in the app header.

The Help surface is intentionally lightweight. It should answer first-run questions without adding another required onboarding step to the main wizard.

## Entry Point

The app header includes:

- fal.ai key status (`Connected` or `No key`)
- Help icon (`?`)
- Settings icon

The Help icon opens a modal with a left-side article list and a scrollable article body.

## Current Articles

### Create your first mockup

Purpose: first-time user onboarding.

Content covers:

- Choosing the correct input type: logo, screenshot, or product photo
- Uploading an image
- Picking scenes through the inline browser or expanded scene browser
- Generating, downloading, and revisiting results in the local Library

Source intent: Linear `DEZ-16`.

### Get your fal.ai key

Purpose: help users set up the BYOK dependency before generation.

Content covers:

- Embedded tutorial: `https://www.youtube.com/watch?v=uCHIqUxUtxU`
- Go to `https://fal.ai`
- Add at least $10 in credits at `https://fal.ai/dashboard/usage-billing/credits`
- Create an API key at `https://fal.ai/dashboard/keys`
- Check usage by model at `https://fal.ai/dashboard/usage-billing`

Source intent: Linear `DEZ-15`.

### Use your fal.ai key

Purpose: show users where to save their fal.ai API key inside Mockstack.

Content covers:

- Embedded tutorial: `https://www.youtube.com/watch?v=UMQvubXvGqU`
- Open Settings
- Paste the copied fal.ai API key
- Save
- Confirm the header shows `Connected`

### Install as a desktop app

Purpose: show buyers how to install Mockstack as a Chrome/Edge desktop PWA.

Content covers:

- Open `https://getmockstack.com/app` in Chrome, Edge, or another Chromium browser
- Use the address-bar install icon when available
- Otherwise use the browser menu install action
- Launch Mockstack from the Dock, taskbar, Start menu, or app launcher
- Local settings, fal.ai key, and Library stay on that machine unless browser data is cleared

### Download the source code

Purpose: explain that the Mockstack source code is public on GitHub and can be inspected, cloned, forked, or self-hosted.

Content covers:

- GitHub repo: `https://github.com/youzign/mockstack/`
- Download ZIP from GitHub's `Code` menu
- Clone with `git clone https://github.com/youzign/mockstack.git`
- Install dependencies with `npm install`
- Run locally with `npm run dev`

### Troubleshooting

Purpose: give users a short recovery path when generation fails.

Content covers:

- Check that the API key is valid
- Check that the fal.ai account has credits or billing enabled
- Check that the account is not rate limited
- Links to fal.ai credits and usage pages

## Design Rules

- Do not make Help part of the required wizard path.
- Keep articles concise and operational.
- Prefer embedded tutorials for setup tasks when available.
- Keep outbound links visible in article text, with YouTube fallback links under embedded videos.
- Help content should reuse the same BYOK language as Settings and sales/thank-you surfaces.
