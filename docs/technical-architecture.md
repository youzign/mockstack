# Technical Architecture

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- lucide-react
- `@fal-ai/client`

## App Shape

The app shell is currently a single React tree in:

```text
src/App.tsx
```

Launch preset data lives in:

```text
src/data/presets.ts
```

Supporting shadcn/ui components live in:

```text
src/components/ui
```

Global styles and design tokens live in:

```text
src/index.css
```

Public brand assets live in:

```text
public/logo-mark.svg
public/logo-mark.png
```

Preset thumbnail assets live in:

```text
public/preset-thumbnails/
```

They are referenced from preset data with public paths like `/preset-thumbnails/log-001.png`.

## State

Important app state:

- `view`: `create` or `library`
- `step`: wizard step, `1` upload or `2` scenes
- `inputType`: `logo`, `screenshot`, or `product`
- `activeCategory`: current preset filter
- `selected`: set of selected preset ids
- `file`: uploaded source image
- `fileName`: displayed filename
- `previewUrl`: browser object URL for local preview
- `customDirection`: optional user instruction appended to selected preset prompts
- `apiKey`: fal.ai key loaded from localStorage
- `draftKey`: settings dialog input value
- `helpOpen`: Help modal open state
- `activeHelpArticleId`: selected Help article id
- `generating`: render in progress flag
- `results`: per-preset output states
- `libraryItems`: local browser Library records

## Preset Data

Runtime preset data lives in:

```text
src/data/presets.ts
```

See [Launch Preset Library](./presets/launch-library.md) for counts, categories, thumbnails, and runtime shape.

## Generation Flow

1. User uploads a source image.
2. User selects one or more presets.
3. User clicks Generate.
4. The app builds each final prompt from the preset prompt plus optional user direction.
5. The app uploads the source file to fal storage.
6. Each selected preset is generated sequentially.
7. Image presets call Nano Banana 2 with each preset's aspect ratio.
8. Video presets call Seedance 2 with each preset's aspect ratio.
9. Results grid updates per preset.
10. Successful outputs are saved into the local Library.

Optional direction is appended in this shape:

```text
User direction: [custom direction]
Respect this direction unless it conflicts with the selected mockup context or accurate preservation of the uploaded image.
```

## Result Editing

Completed image results can be edited from the Results panel. See [Results Panel](./features/results.md).

## Local Library

The Library stores the latest 100 metadata records in `localStorage`. See [Local Library](./features/library.md).

## Help Center

The Help Center is defined in `src/App.tsx` as static article data rendered in a modal. See [Help Center](./features/help.md).

Help articles currently include first-run onboarding, fal.ai key setup, saving the key in Mockstack, and troubleshooting. Tutorial videos are embedded with YouTube iframe URLs and include fallback YouTube links.

## Verification

Run:

```bash
npm run build
```

Current dev server command:

```bash
npm run dev -- --host 127.0.0.1 --port 5177
```
