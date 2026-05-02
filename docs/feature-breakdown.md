# Feature Index

This page is the high-level feature map. Detailed behavior lives in dedicated feature docs.

## Input Types

Mockstack supports three input modes:

- Logo: brand marks and transparent PNGs
- Screenshot: websites, apps, dashboards, and UI screenshots
- Product photo: product/mockup-context use cases

Mockstack should not drift into full Dezygn agency OS scope. Product photo presets are for mockup contexts, not end-to-end product photography fulfillment.

## Main Workflow

See [Wizard Flow](./features/wizard.md).

The core loop is:

1. Upload an image.
2. Pick one or more mockup contexts.
3. Optionally add direction.
4. Generate.

## Results

See [Results Panel](./features/results.md).

The results column is output-only. It supports:

- Generation state previews
- Large preview modal
- Image edit via Nano Banana 2
- Individual downloads

## Library

See [Local Library](./features/library.md).

The Library is local browser history for completed generations. It stores metadata and fal media URLs in `localStorage`, not binary image/video data.

## Presets

See [Launch Preset Library](./presets/launch-library.md).

Launch preset counts:

- 130 total
- 112 image
- 18 video
- 21 featured

Every input type includes `All` and `Featured` filters.

## Settings

Settings contains the fal.ai API key field.

The key is stored in browser `localStorage` under:

```text
mockstack-fal-key
```

Do not commit API keys to the repo.

## Help Center

See [Help Center](./features/help.md).

The app header includes a `?` Help icon. It opens concise in-app articles for:

- Creating a first mockup
- Getting a fal.ai API key
- Saving the fal.ai API key in Mockstack
- Troubleshooting failed generations

The Help Center supports embedded YouTube tutorials and outbound links to fal.ai credits, usage, and API key pages.
