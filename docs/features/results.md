# Results Panel

The right column is results-only. It should never show the uploaded source image.

## States

The panel supports:

- Empty
- Selected
- Queued
- Uploading
- Generating
- Done image
- Done video
- Error

The header shows progress only when useful:

- No selection: blank count
- Selected before generation: `N selected`
- During/after generation: `ready / total ready`

## Loader

Uploading and generation states use the animated Mockstack stacked-bars loader.

Generation copy is paced for Nano Banana 2 timing:

- Average: about 30 seconds
- Max expected: about 40 seconds

Generation messages show for `6s` each and stop on the last message instead of looping quickly.

## Result Actions

Completed result tiles have:

- View large
- Edit image
- Download

View large opens a modal that uses most of the viewport. It supports images and videos.

Download uses a direct fetch download when possible. If CORS or remote media restrictions block that path, a fallback tab opens the media URL.

## Image Editing

Image results can be edited from the Results panel.

Flow:

1. User clicks the pencil/edit action on a completed image.
2. User enters a short edit instruction.
3. The generated image URL is sent back to Nano Banana 2.
4. The result tile is replaced with the edited image.
5. The edited output is saved as a new Library item.

Video result editing is intentionally not supported in v1.

Edit prompt shape:

```text
Edit the uploaded mockup image with this instruction: [edit instruction]

Preserve the core mockup composition, product placement, perspective, and brand/logo details unless the instruction explicitly asks to change them. Return a polished final mockup image.
```

## Removed Bulk Download

The global `Download all` button was removed.

Reason: multiple generated media downloads from remote URLs are brittle in browsers, especially when CORS blocks blob fetching or popup blockers prevent async fallback windows.
