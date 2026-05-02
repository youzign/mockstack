# Models and fal.ai Integration

## BYOK Model

Mockstack is BYOK: users supply their own fal.ai API key.

This keeps Mockstack from owning generation costs or building a credit system in v1.

The key is stored only in the user's browser localStorage. For production, fal recommends using a proxy for app-owned keys. For BYOK, direct browser usage is acceptable as a conscious product decision, but the app should make clear that the user is using their own key.

The in-app Help Center includes setup guidance for:

- Creating or opening a fal.ai account
- Adding at least $10 in credits
- Creating an API key
- Saving the key in Mockstack Settings
- Checking model-level usage and costs in fal.ai

## Current Models

### Image Presets

Model:

```text
fal-ai/nano-banana-2/edit
```

Purpose:

- Logo mockups
- Screenshot/device mockups
- Product photo mockup contexts

Input shape:

```ts
{
  image_urls: [imageUrl],
  prompt: preset.prompt,
  num_images: 1,
  aspect_ratio: preset.aspectRatio,
  output_format: "png",
  safety_tolerance: "4",
  resolution: "1K",
  limit_generations: true
}
```

Output:

```ts
result.data.images?.[0]?.url
```

### Video Presets

Model:

```text
bytedance/seedance-2.0/image-to-video
```

Purpose:

- Animated mockup contexts
- Product/brand/device motion clips

Input shape:

```ts
{
  image_url: imageUrl,
  prompt: preset.prompt,
  resolution: "480p",
  duration: "5",
  aspect_ratio: preset.aspectRatio,
  generate_audio: false
}
```

Output:

```ts
result.data.video?.url
```

## Cost Notes

Image renders are relatively cheap. Video renders are meaningfully more expensive. Keep video defaults conservative:

- `480p`
- `5` seconds
- `generate_audio: false`

Do not run broad video smoke tests casually.

## Known Live Tests

Live image tests were run successfully with disposable fixtures:

- Logo input -> White t-shirt hanger
- Screenshot input -> MacBook on wood desk
- Product photo input -> Marble counter

Seedance paid video smoke has not been run yet.
