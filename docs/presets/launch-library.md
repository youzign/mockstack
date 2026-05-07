# Preset Library

Mockstack currently ships a 130-preset hand-tuned launch library plus a 1,000-preset expansion catalog.

The launch library is implemented in:

```text
src/data/presets.ts
```

The expansion catalog and runtime adapter are implemented in:

```text
src/data/presetExpansionCatalog.ts
src/data/expandedPresets.ts
```

The large RTF draft was imported, normalized, and removed from `docs` to keep documentation files readable.

## Launch Counts

- Total presets: 130
- Image presets: 112
- Video presets: 18
- Featured presets: 21
- Thumbnail images: 130

By input type:

- Logo: 46
- Screenshot: 27
- Product: 57

## Expansion Counts

- Total expansion presets: 1,000
- Image expansion presets: 860
- Video expansion presets: 140
- Thumbnail images: 1,000

By input type:

- Logo: 350
- Screenshot: 210
- Product: 440

## Runtime Counts

The expanded browser can show:

- Total presets: 1,130
- Launch presets: 130
- Expansion presets: 1,000
- Thumbnail images: 1,130

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
  pack?: string
  surface?: string
  useCase?: string
  style?: string
  environment?: string
  format?: string
  tags?: string[]
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

Every expansion preset receives a thumbnail path from the runtime adapter:

```text
/preset-thumbnails/{lowercase-expansion-id}.png
```

Example:

```text
LOG-A01-01 -> /preset-thumbnails/log-a01-01.png
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

## Browser UX

The inline step 2 preset picker remains intentionally simple. It shows the current input type and category filters for quick selection.

The expanded preset browser lazy-loads the expansion catalog when opened and adds:

- Search
- Image/video filter
- Category filter
- Surface filter
- Use case filter
- Style filter
- Environment filter
- Format filter

This keeps the upload flow light while making 1,000+ presets browsable.

## Expansion Source

The 1,000-preset source plan lives in:

```text
docs/presets/1000-preset-expansion-list.md
```

The structured generated catalog lives in:

```text
src/data/presetExpansionCatalog.ts
```

The runtime adapter lives in:

```text
src/data/expandedPresets.ts
```

The catalog keeps the existing Logo, Screenshot, and Product lanes, preserves a similar video ratio, and defines filter metadata for large-library browsing.

The app starts with the 130 hand-tuned launch presets, then lazy-loads the 1,000 generated expansion records when the expanded preset browser opens. Expansion records have generated baseline prompts, structured metadata, and completed `512x512` PNG thumbnails.

## Thumbnail Completion

Expansion thumbnail generation is complete as of 2026-05-07:

- Logo expansion thumbnails: 350 / 350
- Screenshot expansion thumbnails: 210 / 210
- Product expansion thumbnails: 440 / 440
- Missing expansion thumbnails: 0

The complete thumbnail asset set lives in:

```text
public/preset-thumbnails/
```
