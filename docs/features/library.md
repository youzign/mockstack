# Local Library

The Library is browser-local history for completed generations.

It is not a cloud gallery and is not synced across devices.

## Storage

Records are stored in `localStorage` under:

```text
mockstack-library
```

The app stores the latest 100 records.

## Saved Fields

Each record stores metadata plus the generated media URL:

```ts
type LibraryItem = {
  id: string
  presetId: string
  presetName: string
  inputType: InputType
  category: string
  mediaType: "image" | "video"
  mediaUrl: string
  model: string
  prompt: string
  sourceFileName: string
  createdAt: string
}
```

The actual image/video bytes are not stored in `localStorage`.

## Actions

Library cards support:

- Download
- Open in a new tab
- Remove

The Library view also supports clearing all records.

## Limitations

The media URLs come from fal.ai output. They are useful for recent local history, but should not be treated as permanent storage.

For a durable cross-device gallery, Mockstack would need:

- User accounts
- Hosted media storage
- Database records
- Possibly a server-side fal proxy
