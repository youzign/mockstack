# Wizard Flow

The core flow is intentionally short:

1. Upload an asset.
2. Pick mockup contexts.
3. Optionally add direction.
4. Generate.

Do not add a third required step unless there is a strong reason. Mockstack should feel faster than a prompt tool.

## Step 1: Upload

Users choose one input type:

- Logo
- Screenshot
- Product photo

Then they upload a source image. The app stores a temporary browser object URL for preview and uploads the original file to fal.ai only when generation starts.

Important states:

- Empty dropzone
- Uploaded file row
- Replace upload
- Step 2 locked until upload exists

Changing input type clears:

- Uploaded file
- Preview URL
- Selected presets
- Optional direction
- Current results

## Step 2: Pick Scenes

Users select one or more preset cards.

The primary picker is an inline compact scene browser. It remains visible in the wizard so users can choose scenes without opening another modal.

An expanded scene browser is available from the small expand icon in the category row. This modal is additive only. It should help users scan the larger library, but it must not replace the inline picker or add a required step.

The category filters come from `src/data/presets.ts`. Each input type has:

- `All`
- `Featured`
- Source categories from the v1 preset library

Preset cards show:

- Square thumbnail area
- Category pill on the thumbnail
- Video play badge for video presets
- Selected checkmark
- Preset name below the thumbnail

The expanded scene browser uses the same category state and selected preset state as the inline browser.

## Optional Direction

The optional direction field is below the preset grid and above the footer actions.

Examples:

- Make the mug red
- Use a darker background
- Add holiday styling

The field should stay visually secondary. It is a modifier, not the main product interaction.

When filled, it is appended to each selected preset prompt:

```text
User direction: [custom direction]
Respect this direction unless it conflicts with the selected mockup context or accurate preservation of the uploaded image.
```

## Generate Button

Generation is disabled unless:

- A fal.ai API key exists
- A source image exists
- At least one preset is selected
- No generation is currently running

Button language should use `Generate`, not `Render`, because it is clearer for non-technical buyers.
