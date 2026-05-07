import {
  imageModel,
  presets as launchPresets,
  videoModel,
  type InputType,
  type Preset,
  type PresetAspectRatio,
  type PresetGroup,
} from "@/data/presets"
import { expansionPresetCatalog, type ExpansionPresetCatalogItem } from "@/data/presetExpansionCatalog"

const negativePrompt = "blurry, low quality, distorted, watermark, garbled text, warped logo, hallucinated details, deformed"

export const expandedPresets = {
  logo: buildExpandedGroup("logo"),
  screenshot: buildExpandedGroup("screenshot"),
  product: buildExpandedGroup("product"),
} satisfies Record<InputType, PresetGroup>

function buildExpandedGroup(inputType: InputType): PresetGroup {
  const base = launchPresets[inputType]
  const expansionItems = expansionPresetCatalog
    .filter((item) => item.inputType === inputType)
    .map((item) => catalogItemToPreset(item))

  return {
    categories: buildCategories(base.categories, expansionItems),
    items: [...base.items, ...expansionItems],
  }
}

function catalogItemToPreset(item: ExpansionPresetCatalogItem): Preset {
  const video = item.output === "video"

  return {
    id: item.id,
    name: item.name,
    category: item.category,
    pack: item.packName,
    surface: item.surface,
    useCase: item.useCase,
    style: item.style,
    environment: item.environment,
    format: item.format,
    tags: item.tags,
    color: colorForCatalogItem(item),
    thumbnail: `/preset-thumbnails/${item.id.toLowerCase()}.png`,
    prompt: buildPrompt(item),
    negativePrompt,
    model: video ? videoModel : imageModel,
    aspectRatio: aspectRatioForCatalogItem(item),
    video,
    featured: false,
    border: item.style === "Minimal",
  }
}

function buildCategories(baseCategories: string[], expansionItems: Preset[]) {
  const categories = new Set(baseCategories.filter((category) => category !== "Video"))
  expansionItems.forEach((item) => {
    if (item.category !== "Video") categories.add(item.category)
  })

  return [...categories, "Video"]
}

function buildPrompt(item: ExpansionPresetCatalogItem) {
  const scene = `${item.name.toLowerCase()} in a ${item.style.toLowerCase()} ${item.environment.toLowerCase()} setting`

  if (item.output === "video") {
    return buildVideoPrompt(item, scene)
  }

  if (item.inputType === "logo") {
    return `Place the uploaded logo accurately on the main visible surface of a ${scene}. Preserve the exact logo design, proportions, colors, and legibility. Photorealistic commercial mockup, polished lighting, no extra text.`
  }

  if (item.inputType === "screenshot") {
    return `Place the uploaded screenshot cleanly onto the screen area of a ${scene}. Preserve the screenshot contents exactly, keep all UI text legible, and match the device perspective realistically. Photorealistic commercial mockup, polished lighting.`
  }

  return `Place the uploaded product photo naturally into a ${scene}. Preserve the product shape, label, color, and packaging details accurately while adapting perspective and lighting to the scene. Photorealistic commercial mockup, polished ecommerce-ready composition.`
}

function buildVideoPrompt(item: ExpansionPresetCatalogItem, scene: string) {
  if (item.inputType === "logo") {
    return `Create a short polished video mockup of the uploaded logo in a ${scene}. Use subtle camera motion, preserve the exact logo design and legibility, and avoid adding extra text or marks.`
  }

  if (item.inputType === "screenshot") {
    return `Create a short polished video mockup of the uploaded screenshot in a ${scene}. Use subtle camera motion, preserve the screenshot content exactly, and keep interface text readable.`
  }

  return `Create a short polished video mockup of the uploaded product in a ${scene}. Use subtle camera motion, preserve product and label details, and keep the product as the clear hero.`
}

function aspectRatioForCatalogItem(item: ExpansionPresetCatalogItem): PresetAspectRatio {
  if (item.output === "video") return item.format === "Portrait" ? "9:16" : "1:1"
  if (item.format === "Portrait") return "4:5"
  if (item.format === "Landscape") return "16:9"
  if (item.format === "Wide") return "21:9"
  if (item.format === "Tall") return "9:16"
  return "1:1"
}

function colorForCatalogItem(item: ExpansionPresetCatalogItem) {
  const palettes: Record<string, string[]> = {
    logo: ["#F5F4EF", "#E8E5DD", "#D4C4A8", "#94A3B8", "#1F2937", "#2C2A28"],
    screenshot: ["#F5F4EF", "#E7EEF5", "#D8E2DC", "#E8E5DD", "#1F2937", "#2C2A28"],
    product: ["#F5F4EF", "#EFEAE2", "#E5DCC8", "#B89272", "#556B5D", "#1F1F1F"],
  }
  const values = palettes[item.inputType]
  const index = hashString(item.id) % values.length
  return values[index]
}

function hashString(value: string) {
  let hash = 0
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) >>> 0
  }
  return hash
}
