# Thumbnail Generation Workflow

## Goal

Preset thumbnails should be real square mockups branded with the Mockstack logo, not abstract placeholder blocks.

They need to work at small UI sizes, so the subject must be large, centered, and legible.

## Model

Use:

```text
fal-ai/gemini-25-flash-image/edit
```

This is cheap enough for generating a large thumbnail library.

## Input Asset

Use the Mockstack mark as the input image:

```text
public/logo-mark.png
```

The input should be the simple stacked-bars mark. For thumbnails, the logo should be placed onto the mockup object as the brand graphic.

## API Shape

The model accepts `image_urls`, including hosted URLs or data URIs.

Example:

```ts
const result = await fal.subscribe("fal-ai/gemini-25-flash-image/edit", {
  input: {
    prompt,
    image_urls: [logoImageUrl],
    num_images: 1,
    aspect_ratio: "1:1",
    output_format: "png",
    safety_tolerance: "4",
    limit_generations: true,
  },
  logs: true,
})
```

## Style Direction

Use this visual direction:

- Square `1:1`
- Premium product mockup
- Centered composition
- Subject fills the frame enough to read at thumbnail size
- Soft realistic shadows
- Warm off-white / neutral backgrounds
- No text
- No UI
- No watermark
- Comfortable margins, but not too zoomed out
- Mockstack logo clearly visible and accurately preserved

## Prompt Template

```text
Create a square 1:1 premium thumbnail for a mockup preset called [PRESET NAME].
Use the uploaded Mockstack stacked-bars logo as the [placement description].
Crop for a UI thumbnail: [what should be visible], logo clearly readable at small size.
Centered composition, soft warm studio light, neutral/off-white background,
high-end SaaS aesthetic, no text, no UI, no watermark.
```

## Tested Prompts

### White T-shirt Hanger, Zoomed Out

This worked, but was too zoomed out for grid thumbnails.

```text
Create a square 1:1 premium thumbnail for a mockup preset called White t-shirt hanger. Use the uploaded Mockstack stacked-bars logo as the printed design on a clean white t-shirt hanging on a minimal wooden hanger. Product UI thumbnail style, centered composition, soft warm studio light, off-white background, high-end SaaS aesthetic, no text, no UI, no watermark, leave comfortable margins.
```

Output:

```text
/tmp/mockstack-thumb-apparel-white-tshirt.png
```

### White T-shirt Hanger, Tight Crop

This was better and should be the baseline for apparel.

```text
Create a square 1:1 premium thumbnail for a mockup preset called White t-shirt hanger. Use the uploaded Mockstack stacked-bars logo as the printed design on the chest of a clean white t-shirt. Crop tighter for a UI thumbnail: upper torso and hanger visible, logo clearly readable at small size, centered composition, soft warm studio light, off-white background, high-end SaaS aesthetic, no text, no UI, no watermark.
```

Output:

```text
/tmp/mockstack-thumb-apparel-white-tshirt-tight.png
```

### Coffee Mug On Wood

This worked well and should be the baseline for branded-object thumbnails.

```text
Create a square 1:1 premium thumbnail for a mockup preset called Coffee mug on wood. Use the uploaded Mockstack stacked-bars logo as the printed design on a clean white ceramic mug sitting on a warm wood surface. Product UI thumbnail style, centered composition, soft realistic shadows, high-end SaaS aesthetic, no text, no UI, no watermark, leave comfortable margins.
```

Output:

```text
/tmp/mockstack-thumb-branded-coffee-mug.png
```

## UI Card Rule

Category labels should be displayed as small tags on the thumbnail, not next to the preset name.

Reason: labels like `BRANDED ITEMS` cut off preset names when placed on the same line.

Current card layout:

- Thumbnail
- Category pill/tag inside top-left of thumbnail
- Selected check inside top-right of thumbnail
- Preset name below thumbnail using the full line

## Current Asset Set

All launch and expansion preset thumbnails have been generated and saved in:

```text
public/preset-thumbnails/
```

Launch file names use the lowercase preset ID:

```text
LOG-001 -> public/preset-thumbnails/log-001.png
SCR-001 -> public/preset-thumbnails/scr-001.png
PRO-001 -> public/preset-thumbnails/pro-001.png
```

Expansion file names use the lowercase expansion ID:

```text
LOG-A01-01 -> public/preset-thumbnails/log-a01-01.png
SCR-P01-01 -> public/preset-thumbnails/scr-p01-01.png
PRO-S01-01 -> public/preset-thumbnails/pro-s01-01.png
```

Each preset has a `thumbnail` field:

```ts
{
  id: "LOG-001",
  thumbnail: "/preset-thumbnails/log-001.png"
}
```

The generated expansion files were resized to `512x512` PNGs for practical loading in the preset grid and future landing-page use.

Current thumbnail counts:

- Launch thumbnails: 130
- Expansion thumbnails: 1,000
- Total thumbnails: 1,130
- Missing expansion thumbnails: 0

## Expansion Thumbnail Pipeline

The 1,000-preset expansion library used this resumable script:

```bash
npm run presets:thumbs:dry
npm run presets:thumbs
```

The dry run writes the prompt manifest to:

```text
docs/presets/thumbnail-prompts-expansion.json
```

The real generation command requires one of:

```text
FAL_KEY
FAL_API_KEY
FALAI_API_KEY
```

Useful scoped runs:

```bash
node scripts/generate-expansion-thumbnails.mjs --dry-run --input=logo --pack=LOG-A01
node scripts/generate-expansion-thumbnails.mjs --input=logo --pack=LOG-A01
node scripts/generate-expansion-thumbnails.mjs --limit=25
```

The script skips existing files by default, resizes outputs to `512x512`, and retries transient generation/download failures. Use `--overwrite` only when intentionally regenerating assets.

Expansion thumbnails use:

```text
public/preset-thumbnails/{lowercase-expansion-id}.png
```

Example:

```text
LOG-A01-01 -> public/preset-thumbnails/log-a01-01.png
```

The app points expansion presets at these paths. Thumbnail images fail gracefully to the generated color fallback if a file is missing or fails to load, but the committed expansion set is complete.

## Generation Notes

During expansion generation, one thumbnail prompt issue was corrected: the model sometimes added the word `Mockstack` to dark apparel. The final prompt template explicitly asks for only the uploaded three-bar mark, no words, letters, numbers, captions, or typography, with high contrast on dark and light surfaces.

The generator also includes retry logic because a product thumbnail download timed out once during the full run. The retry path handled subsequent transient failures without restarting the whole job.
