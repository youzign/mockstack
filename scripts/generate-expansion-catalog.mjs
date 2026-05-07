import { readFileSync, writeFileSync } from "node:fs"

const sourcePath = "docs/presets/1000-preset-expansion-list.md"
const outputPath = "src/data/presetExpansionCatalog.ts"

const markdown = readFileSync(sourcePath, "utf8")
const rows = markdown
  .split("\n")
  .filter((line) => /^\| (LOG|SCR|PRO)-/.test(line))
  .map((line) => line.split("|").map((cell) => cell.trim()))

const records = []

for (const cells of rows) {
  const packLabel = cells[1]
  const category = cells[2]
  const names = cells[3].split(",").map((name) => name.trim()).filter(Boolean)
  const [packId, ...packNameParts] = packLabel.split(" ")
  const [inputPrefix, packCode] = packId.split("-")
  const inputType = inputPrefix === "LOG" ? "logo" : inputPrefix === "SCR" ? "screenshot" : "product"
  const output = category === "Video" ? "video" : "image"
  const packName = packNameParts.join(" ")

  names.forEach((name, index) => {
    const text = `${name} ${category} ${packName}`.toLowerCase()
    records.push({
      id: `${packId}-${String(index + 1).padStart(2, "0")}`,
      inputType,
      name,
      category,
      packId,
      packName,
      packCode,
      output,
      surface: inferSurface(category, text),
      useCase: inferUseCase(category, text),
      style: inferStyle(text),
      environment: inferEnvironment(category, text),
      format: inferFormat(output, text),
      tags: inferTags(inputType, category, text),
    })
  })
}

const counts = records.reduce(
  (acc, record) => {
    acc.total += 1
    acc[record.inputType] += 1
    acc[record.output] += 1
    return acc
  },
  { total: 0, logo: 0, screenshot: 0, product: 0, image: 0, video: 0 }
)

if (counts.total !== 1000 || counts.image !== 860 || counts.video !== 140) {
  throw new Error(`Unexpected expansion counts: ${JSON.stringify(counts)}`)
}

const file = `export type ExpansionPresetInputType = "logo" | "screenshot" | "product"
export type ExpansionPresetOutput = "image" | "video"

export type ExpansionPresetCatalogItem = {
  id: string
  inputType: ExpansionPresetInputType
  name: string
  category: string
  packId: string
  packName: string
  packCode: string
  output: ExpansionPresetOutput
  surface: string
  useCase: string
  style: string
  environment: string
  format: string
  tags: string[]
}

export const expansionPresetCatalogCounts = ${JSON.stringify(counts, null, 2)} as const

export const expansionPresetCatalog = ${JSON.stringify(records, null, 2)} satisfies ExpansionPresetCatalogItem[]
`

writeFileSync(outputPath, file)

function inferSurface(category, text) {
  if (text.includes("t-shirt") || text.includes("tee")) return "T-shirt"
  if (text.includes("hoodie") || text.includes("sweatshirt") || text.includes("crewneck") || text.includes("fleece")) return "Hoodie / sweatshirt"
  if (text.includes("cap") || text.includes("beanie") || text.includes("hat") || text.includes("visor")) return "Headwear"
  if (text.includes("mug") || text.includes("cup") || text.includes("bottle") || text.includes("tumbler") || text.includes("can")) return "Drinkware"
  if (text.includes("tote") || text.includes("bag") || text.includes("backpack") || text.includes("duffel") || text.includes("pouch")) return "Bag"
  if (text.includes("card") || text.includes("letterhead") || text.includes("envelope") || text.includes("notebook") || text.includes("planner")) return "Stationery"
  if (text.includes("box") || text.includes("mailer") || text.includes("packaging") || text.includes("wrapper") || text.includes("label")) return "Packaging"
  if (text.includes("billboard") || text.includes("sign") || text.includes("storefront") || text.includes("poster") || text.includes("banner")) return "Signage"
  if (text.includes("iphone") || text.includes("phone") || text.includes("android") || text.includes("pixel") || text.includes("samsung")) return "Phone"
  if (text.includes("macbook") || text.includes("laptop")) return "Laptop"
  if (text.includes("ipad") || text.includes("tablet")) return "Tablet"
  if (text.includes("browser") || text.includes("website") || text.includes("desktop") || text.includes("monitor")) return "Browser / desktop"
  if (text.includes("book") || text.includes("ebook") || text.includes("course") || text.includes("workbook") || text.includes("pdf")) return "Info product"
  if (text.includes("cosmetic") || text.includes("skincare") || text.includes("serum") || text.includes("soap") || text.includes("perfume")) return "Beauty product"
  if (category === "Video") return "Motion scene"
  return category
}

function inferUseCase(category, text) {
  if (category === "Video") return "Motion ad"
  if (/\bapp\b/.test(text) || text.includes("app store") || text.includes("dashboard") || text.includes("browser") || text.includes("website") || text.includes("saas")) return "Digital launch"
  if (text.includes("instagram") || text.includes("youtube") || text.includes("linkedin") || text.includes("tiktok") || text.includes("social")) return "Social"
  if (text.includes("shipping") || text.includes("box") || text.includes("label") || text.includes("packaging") || text.includes("mailer")) return "Packaging"
  if (text.includes("storefront") || text.includes("billboard") || text.includes("retail") || text.includes("shelf") || text.includes("shop")) return "Retail"
  if (text.includes("book") || text.includes("course") || text.includes("ebook") || text.includes("creator") || text.includes("podcast")) return "Creator product"
  if (text.includes("business card") || text.includes("letterhead") || text.includes("office") || text.includes("proposal") || text.includes("pitch")) return "Client presentation"
  if (text.includes("etsy") || text.includes("shopify") || text.includes("amazon") || text.includes("listing")) return "Ecommerce"
  return "Brand mockup"
}

function inferStyle(text) {
  if (text.includes("premium") || text.includes("luxury") || text.includes("gold") || text.includes("foil") || text.includes("velvet")) return "Premium"
  if (text.includes("streetwear") || text.includes("urban") || text.includes("concrete") || text.includes("brutalist")) return "Streetwear"
  if (text.includes("cozy") || text.includes("bed") || text.includes("linen") || text.includes("knit")) return "Cozy"
  if (text.includes("corporate") || text.includes("office") || text.includes("professional")) return "Corporate"
  if (text.includes("dramatic") || text.includes("black") || text.includes("night") || text.includes("dark")) return "Dramatic"
  if (text.includes("minimal") || text.includes("white") || text.includes("clean") || text.includes("high-key")) return "Minimal"
  if (text.includes("outdoor") || text.includes("hike") || text.includes("beach") || text.includes("garden") || text.includes("travel")) return "Lifestyle"
  return "Commercial"
}

function inferEnvironment(category, text) {
  if (text.includes("cafe") || text.includes("coffee")) return "Cafe"
  if (text.includes("desk") || text.includes("office") || text.includes("coworking") || text.includes("workspace")) return "Desk / office"
  if (text.includes("kitchen") || text.includes("bathroom") || text.includes("bed") || text.includes("home") || text.includes("sofa")) return "Home"
  if (text.includes("store") || text.includes("retail") || text.includes("shelf") || text.includes("boutique") || text.includes("market")) return "Retail"
  if (text.includes("outdoor") || text.includes("hike") || text.includes("beach") || text.includes("garden") || text.includes("rooftop") || text.includes("trail")) return "Outdoor"
  if (text.includes("street") || text.includes("subway") || text.includes("city") || text.includes("airport") || text.includes("train")) return "Urban"
  if (text.includes("studio") || text.includes("sweep") || text.includes("backdrop") || text.includes("pedestal") || text.includes("surface")) return "Studio"
  if (category === "Video") return "Motion"
  return "Studio"
}

function inferFormat(output, text) {
  if (output === "video") return text.includes("story") || text.includes("tiktok") || text.includes("instagram") ? "Portrait" : "Square"
  if (text.includes("story") || text.includes("tiktok") || text.includes("vertical") || text.includes("phone")) return "Portrait"
  if (text.includes("banner") || text.includes("billboard") || text.includes("youtube") || text.includes("browser") || text.includes("desktop")) return "Landscape"
  if (text.includes("wide") || text.includes("ultrawide")) return "Wide"
  return "Square"
}

function inferTags(inputType, category, text) {
  const tags = new Set([inputType, category.toLowerCase()])
  for (const token of [
    "apparel",
    "beauty",
    "saas",
    "social",
    "ecommerce",
    "retail",
    "packaging",
    "outdoor",
    "studio",
    "lifestyle",
    "creator",
    "seasonal",
    "video",
  ]) {
    if (text.includes(token)) tags.add(token)
  }
  return [...tags].sort()
}
