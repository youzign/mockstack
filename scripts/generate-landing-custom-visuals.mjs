import { fal } from "@fal-ai/client"
import { execFileSync } from "node:child_process"
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const outputDir = join(root, "public", "landing-custom")
const tokenPath = "/Users/dezygn/.openclaw/workspace/config/.fal-token"
const model = "fal-ai/nano-banana-2"

const apiKey = readFalKey()
fal.config({ credentials: apiKey })
mkdirSync(outputDir, { recursive: true })

const jobs = [
  {
    name: "before-black-shirt",
    prompt:
      "Premium ecommerce mockup photograph of a black cotton crewneck t-shirt on a natural wooden hanger, centered on a warm off-white studio wall. The shirt has a small clean abstract three-bar white logo on the chest, no words, no typography, no extra text. Realistic fabric texture, soft shadows, high-end brand mockup style, square composition, product photography, no model, no hands, no UI, no watermark.",
  },
  {
    name: "after-red-floral-shirt",
    prompt:
      "Premium ecommerce mockup photograph of a red cotton crewneck t-shirt on a natural wooden hanger, centered on a warm off-white studio wall. The shirt has a tasteful floral pattern with small cream and yellow flowers, plus a small clean abstract three-bar white logo on the chest, no words, no typography, no extra text. Realistic fabric texture, soft shadows, high-end brand mockup style, square composition, product photography, no model, no hands, no UI, no watermark.",
  },
]

for (const job of jobs) {
  const outputPath = join(outputDir, `${job.name}.png`)
  console.log(`Generating ${job.name}`)
  const result = await fal.subscribe(model, {
    input: {
      prompt: job.prompt,
      num_images: 1,
      aspect_ratio: "1:1",
      output_format: "png",
      resolution: "2K",
      safety_tolerance: "4",
    },
    logs: true,
  })

  const url = result.data?.images?.[0]?.url
  if (!url) throw new Error(`No image URL returned for ${job.name}`)

  const response = await fetch(url)
  if (!response.ok) throw new Error(`Failed to download ${job.name}: ${response.status}`)

  writeFileSync(outputPath, Buffer.from(await response.arrayBuffer()))
  execFileSync("sips", ["-Z", "1200", outputPath], { stdio: "ignore" })
}

console.log(`Wrote ${jobs.length} visuals to ${outputDir}`)

function readFalKey() {
  const envKey = process.env.FAL_KEY || process.env.FAL_API_KEY || process.env.FALAI_API_KEY
  if (envKey) return envKey
  if (existsSync(tokenPath)) {
    const tokenFile = readFileSync(tokenPath, "utf8")
    const match = tokenFile.match(/FAL_API_KEY=(.+)/)
    if (match?.[1]) return match[1].trim()
  }
  throw new Error("Missing fal key. Set FAL_KEY or create ~/.openclaw/workspace/config/.fal-token.")
}
