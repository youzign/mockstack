# Launch Preset Library

The launch preset library is implemented in:

```text
src/data/presets.ts
```

The large RTF draft was imported, normalized, and removed from `docs` to keep documentation files readable.

## Counts

- Total presets: 130
- Image presets: 112
- Video presets: 18
- Featured presets: 21
- Thumbnail images: 130

By input type:

- Logo: 46
- Screenshot: 27
- Product: 57

## Categories

Logo:

- Featured
- Apparel
- Drinkware & Bags
- Stationery
- Signage
- Packaging
- Digital
- Video

Screenshot:

- Featured
- Phone
- Laptop
- Tablet
- Browser
- Video

Product:

- Featured
- Studio
- Home
- Outdoor
- Retail
- Info Products
- Aesthetics
- Seasonal
- Video

## Runtime Shape

Each preset has:

```ts
type Preset = {
  id: string
  name: string
  category: string
  color: string
  thumbnail?: string
  prompt: string
  negativePrompt: string
  model: string
  aspectRatio: PresetAspectRatio
  featured: boolean
  border?: boolean
  video?: boolean
}
```

Every launch preset currently includes `thumbnail`, using:

```text
/preset-thumbnails/{lowercase-preset-id}.png
```

The files live in:

```text
public/preset-thumbnails/
```

## Import Rules

The imported source used `fal-ai/nano-banana/edit` for image presets. Runtime data was normalized to:

```text
fal-ai/nano-banana-2/edit
```

Video presets use:

```text
bytedance/seedance-2.0/image-to-video
```

The app uses each preset's `aspectRatio` field when calling fal.ai.

## UX Follow-Up

The step 2 preset picker is becoming too cramped for 130 presets. It should move into a much larger modal, full-screen panel, or near-full-screen workspace before launch QA.
