# PWA Install

Mockstack is an installable web app. The core delivery remains the hosted web app at `/app`, but supported browsers can install it into a standalone app window without an app store, Apple Developer Program, Windows signing certificate, or desktop wrapper.

Buyer-facing app URL:

```text
https://getmockstack.com/app
```

## Current Setup

The PWA foundation lives in:

```txt
public/manifest.webmanifest
public/sw.js
src/main.tsx
src/App.tsx
```

The manifest starts installed sessions at `/app`, uses standalone display mode, and provides SVG, 192px, and 512px icons.

The service worker caches the app shell, sales page assets, the landing template gallery manifest, and the current landing custom visual assets.

## Install UI

`src/App.tsx` listens for the browser `beforeinstallprompt` event and stores it until the user clicks an install button.

Install buttons appear:

- On `/thank-you`, when the browser exposes the install prompt.
- In the `/app` header, when the browser exposes the install prompt.

If the app is already running in standalone display mode, the thank-you page shows installed-state copy instead of pushing another install action.

## Browser Behavior

Chrome and Edge usually expose a direct install prompt when the manifest and service worker criteria are satisfied.

Safari support is more manual. Users may need to use the browser menu to add the app to the Dock or home screen. The thank-you page and Help modal include fallback copy for this case.

## Storage

The installed app uses the same local browser storage as the web app:

- fal.ai API key
- local library metadata
- settings
- future local unlock/license token, if added later

No account system or backend licensing is currently required for install.
