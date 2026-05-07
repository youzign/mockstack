import { fal } from "@fal-ai/client"
import { execFileSync } from "node:child_process"
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const catalogPath = join(root, "src/data/presetExpansionCatalog.ts")
const logoPath = join(root, "public/logo-mark.png")
const outputDir = join(root, "public/preset-thumbnails")
const manifestPath = join(root, "docs/presets/thumbnail-prompts-expansion.json")

const args = parseArgs(process.argv.slice(2))
const apiKey = process.env.FAL_KEY || process.env.FAL_API_KEY || process.env.FALAI_API_KEY
const model = "fal-ai/gemini-25-flash-image/edit"
const limit = Number(args.limit ?? "0")
const delayMs = Number(args.delayMs ?? "900")
const retries = Number(args.retries ?? "3")
const dryRun = Boolean(args.dryRun)
const overwrite = Boolean(args.overwrite)
const resize = args.resize ?? "512"

const catalog = readCatalog()
const selected = catalog.filter((item) => {
  if (args.input && item.inputType !== args.input) return false
  if (args.pack && item.packId !== args.pack) return false
  if (args.id && item.id !== args.id) return false
  return true
})
const jobs = limit > 0 ? selected.slice(0, limit) : selected
const logoDataUri = `data:image/png;base64,${readFileSync(logoPath).toString("base64")}`
const manifest = jobs.map((item) => ({
  id: item.id,
  inputType: item.inputType,
  name: item.name,
  packId: item.packId,
  packName: item.packName,
  outputPath: thumbnailPathFor(item),
  prompt: thumbnailPromptFor(item),
}))

mkdirSync(dirname(manifestPath), { recursive: true })
writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`)

if (dryRun) {
  console.log(`Wrote ${manifest.length} thumbnail prompts to ${manifestPath}`)
  process.exit(0)
}

if (!apiKey) {
  throw new Error("Missing fal key. Set FAL_KEY or FAL_API_KEY before running thumbnail generation.")
}

fal.config({ credentials: apiKey })
mkdirSync(outputDir, { recursive: true })

let generated = 0
let skipped = 0

for (const job of manifest) {
  const absoluteOutputPath = join(root, "public", job.outputPath.replace(/^\//, ""))
  if (!overwrite && existsSync(absoluteOutputPath)) {
    skipped += 1
    continue
  }

  console.log(`Generating ${job.id}: ${job.name}`)
  const result = await withRetry(() =>
    fal.subscribe(model, {
      input: {
        prompt: job.prompt,
        image_urls: [logoDataUri],
        num_images: 1,
        aspect_ratio: "1:1",
        output_format: "png",
        safety_tolerance: "4",
        limit_generations: true,
      },
      logs: true,
    }), retries, `generate ${job.id}`)
  const url = result.data?.images?.[0]?.url
  if (!url) throw new Error(`No thumbnail URL returned for ${job.id}`)

  const response = await withRetry(() => fetch(url), retries, `download ${job.id}`)
  if (!response.ok) throw new Error(`Failed to download thumbnail for ${job.id}: ${response.status}`)

  const buffer = Buffer.from(await response.arrayBuffer())
  writeFileSync(absoluteOutputPath, buffer)
  if (resize !== "none") {
    execFileSync("sips", ["-Z", resize, absoluteOutputPath], { stdio: "ignore" })
  }
  generated += 1

  if (delayMs > 0) await sleep(delayMs)
}

console.log(`Done. Generated ${generated}, skipped ${skipped}.`)

function readCatalog() {
  const file = readFileSync(catalogPath, "utf8")
  const match = file.match(/export const expansionPresetCatalog = (\[[\s\S]*?\]) satisfies ExpansionPresetCatalogItem\[]/)
  if (!match) throw new Error("Could not parse expansionPresetCatalog")
  return JSON.parse(match[1])
}

function thumbnailPathFor(item) {
  return `/preset-thumbnails/${item.id.toLowerCase()}.png`
}

function thumbnailPromptFor(item) {
  const placement = placementFor(item)
  const crop = cropFor(item)

  return [
    `Create a square 1:1 premium thumbnail for a mockup preset called ${item.name}.`,
    `Use only the uploaded three-bar mark as ${placement}. Do not add the word Mockstack, brand names, letters, numbers, captions, or typography.`,
    `Keep the mark high contrast: use a white or light mark on dark surfaces and a black or dark mark on light surfaces.`,
    `Crop for a UI thumbnail: ${crop}, the three-bar mark clearly readable at small size.`,
    `Centered composition, soft realistic shadows, warm neutral/off-white background, high-end SaaS aesthetic, no UI, no watermark.`,
  ].join(" ")
}

function placementFor(item) {
  if (item.inputType === "screenshot") return "the clean sample interface displayed on the device or browser screen"
  if (item.inputType === "product") return "a small brand mark on the product label or package where appropriate"
  if (item.surface === "T-shirt") return "the printed design on the chest of the shirt"
  if (item.surface === "Hoodie / sweatshirt") return "the printed or embroidered design on the chest"
  if (item.surface === "Headwear") return "the embroidered mark on the front panel or cuff"
  if (item.surface === "Drinkware") return "the printed mark on the front of the cup or bottle"
  if (item.surface === "Bag") return "the printed mark on the front of the bag"
  if (item.surface === "Stationery") return "the printed mark on the visible paper or card"
  if (item.surface === "Packaging") return "the printed mark on the visible package face"
  if (item.surface === "Signage") return "the main sign graphic"
  return "the main visible brand graphic"
}

function cropFor(item) {
  if (item.inputType === "screenshot") return `${item.surface.toLowerCase()} prominent and filling most of the frame`
  if (item.output === "video") return "a still-frame composition with the subject large and centered"
  if (item.surface === "T-shirt" || item.surface === "Hoodie / sweatshirt") return "upper garment and logo area visible"
  if (item.surface === "Phone" || item.surface === "Laptop" || item.surface === "Tablet") return "device screen large and legible"
  if (item.surface === "Packaging") return "front package face large and centered"
  if (item.surface === "Signage") return "sign face large and readable"
  return "main subject fills the frame with comfortable margins"
}

function parseArgs(rawArgs) {
  const parsed = {}
  for (const arg of rawArgs) {
    if (arg === "--dry-run") parsed.dryRun = true
    else if (arg === "--overwrite") parsed.overwrite = true
    else if (arg.startsWith("--")) {
      const [key, value = ""] = arg.slice(2).split("=")
      parsed[key] = value
    }
  }
  return parsed
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function withRetry(operation, attempts, label) {
  let lastError

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      return await operation()
    } catch (error) {
      lastError = error
      if (attempt === attempts) break
      const backoffMs = attempt * 2500
      console.warn(`${label} failed on attempt ${attempt}; retrying in ${backoffMs}ms`)
      await sleep(backoffMs)
    }
  }

  throw lastError
}
