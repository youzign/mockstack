export type ExpansionPresetInputType = "logo" | "screenshot" | "product"
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

export const expansionPresetCatalogCounts = {
  "total": 1000,
  "logo": 350,
  "screenshot": 210,
  "product": 440,
  "image": 860,
  "video": 140
} as const

export const expansionPresetCatalog = [
  {
    "id": "LOG-A01-01",
    "inputType": "logo",
    "name": "White tee hanger",
    "category": "Apparel",
    "packId": "LOG-A01",
    "packName": "Core T-Shirts",
    "packCode": "A01",
    "output": "image",
    "surface": "T-shirt",
    "useCase": "Brand mockup",
    "style": "Minimal",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A01-02",
    "inputType": "logo",
    "name": "Black tee hanger",
    "category": "Apparel",
    "packId": "LOG-A01",
    "packName": "Core T-Shirts",
    "packCode": "A01",
    "output": "image",
    "surface": "T-shirt",
    "useCase": "Brand mockup",
    "style": "Dramatic",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A01-03",
    "inputType": "logo",
    "name": "Heather grey tee flat lay",
    "category": "Apparel",
    "packId": "LOG-A01",
    "packName": "Core T-Shirts",
    "packCode": "A01",
    "output": "image",
    "surface": "T-shirt",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A01-04",
    "inputType": "logo",
    "name": "Cream oversized tee",
    "category": "Apparel",
    "packId": "LOG-A01",
    "packName": "Core T-Shirts",
    "packCode": "A01",
    "output": "image",
    "surface": "T-shirt",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A01-05",
    "inputType": "logo",
    "name": "Streetwear tee on model torso",
    "category": "Apparel",
    "packId": "LOG-A01",
    "packName": "Core T-Shirts",
    "packCode": "A01",
    "output": "image",
    "surface": "T-shirt",
    "useCase": "Brand mockup",
    "style": "Streetwear",
    "environment": "Urban",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A01-06",
    "inputType": "logo",
    "name": "Rolled sleeve tee close-up",
    "category": "Apparel",
    "packId": "LOG-A01",
    "packName": "Core T-Shirts",
    "packCode": "A01",
    "output": "image",
    "surface": "T-shirt",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A01-07",
    "inputType": "logo",
    "name": "Pocket tee embroidery",
    "category": "Apparel",
    "packId": "LOG-A01",
    "packName": "Core T-Shirts",
    "packCode": "A01",
    "output": "image",
    "surface": "T-shirt",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A01-08",
    "inputType": "logo",
    "name": "Ringer tee vintage",
    "category": "Apparel",
    "packId": "LOG-A01",
    "packName": "Core T-Shirts",
    "packCode": "A01",
    "output": "image",
    "surface": "T-shirt",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A01-09",
    "inputType": "logo",
    "name": "Heavyweight tee studio sweep",
    "category": "Apparel",
    "packId": "LOG-A01",
    "packName": "Core T-Shirts",
    "packCode": "A01",
    "output": "image",
    "surface": "T-shirt",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo",
      "studio"
    ]
  },
  {
    "id": "LOG-A01-10",
    "inputType": "logo",
    "name": "Washed tee folded stack",
    "category": "Apparel",
    "packId": "LOG-A01",
    "packName": "Core T-Shirts",
    "packCode": "A01",
    "output": "image",
    "surface": "T-shirt",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A02-01",
    "inputType": "logo",
    "name": "Cream hoodie hanger",
    "category": "Apparel",
    "packId": "LOG-A02",
    "packName": "Premium Apparel",
    "packCode": "A02",
    "output": "image",
    "surface": "Hoodie / sweatshirt",
    "useCase": "Brand mockup",
    "style": "Premium",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A02-02",
    "inputType": "logo",
    "name": "Black hoodie folded",
    "category": "Apparel",
    "packId": "LOG-A02",
    "packName": "Premium Apparel",
    "packCode": "A02",
    "output": "image",
    "surface": "Hoodie / sweatshirt",
    "useCase": "Brand mockup",
    "style": "Premium",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A02-03",
    "inputType": "logo",
    "name": "Zip hoodie front chest",
    "category": "Apparel",
    "packId": "LOG-A02",
    "packName": "Premium Apparel",
    "packCode": "A02",
    "output": "image",
    "surface": "Hoodie / sweatshirt",
    "useCase": "Brand mockup",
    "style": "Premium",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A02-04",
    "inputType": "logo",
    "name": "Crewneck sweatshirt bed",
    "category": "Apparel",
    "packId": "LOG-A02",
    "packName": "Premium Apparel",
    "packCode": "A02",
    "output": "image",
    "surface": "Hoodie / sweatshirt",
    "useCase": "Brand mockup",
    "style": "Premium",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A02-05",
    "inputType": "logo",
    "name": "Quarter-zip pullover",
    "category": "Apparel",
    "packId": "LOG-A02",
    "packName": "Premium Apparel",
    "packCode": "A02",
    "output": "image",
    "surface": "Apparel",
    "useCase": "Brand mockup",
    "style": "Premium",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A02-06",
    "inputType": "logo",
    "name": "Varsity jacket patch",
    "category": "Apparel",
    "packId": "LOG-A02",
    "packName": "Premium Apparel",
    "packCode": "A02",
    "output": "image",
    "surface": "Apparel",
    "useCase": "Brand mockup",
    "style": "Premium",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A02-07",
    "inputType": "logo",
    "name": "Denim jacket back logo",
    "category": "Apparel",
    "packId": "LOG-A02",
    "packName": "Premium Apparel",
    "packCode": "A02",
    "output": "image",
    "surface": "Apparel",
    "useCase": "Brand mockup",
    "style": "Premium",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A02-08",
    "inputType": "logo",
    "name": "Bomber jacket sleeve patch",
    "category": "Apparel",
    "packId": "LOG-A02",
    "packName": "Premium Apparel",
    "packCode": "A02",
    "output": "image",
    "surface": "Apparel",
    "useCase": "Brand mockup",
    "style": "Premium",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A02-09",
    "inputType": "logo",
    "name": "Workwear overshirt label",
    "category": "Apparel",
    "packId": "LOG-A02",
    "packName": "Premium Apparel",
    "packCode": "A02",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Premium",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A02-10",
    "inputType": "logo",
    "name": "Fleece pullover chest mark",
    "category": "Apparel",
    "packId": "LOG-A02",
    "packName": "Premium Apparel",
    "packCode": "A02",
    "output": "image",
    "surface": "Hoodie / sweatshirt",
    "useCase": "Brand mockup",
    "style": "Premium",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A03-01",
    "inputType": "logo",
    "name": "Navy baseball cap",
    "category": "Apparel",
    "packId": "LOG-A03",
    "packName": "Headwear",
    "packCode": "A03",
    "output": "image",
    "surface": "Headwear",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A03-02",
    "inputType": "logo",
    "name": "Black dad hat",
    "category": "Apparel",
    "packId": "LOG-A03",
    "packName": "Headwear",
    "packCode": "A03",
    "output": "image",
    "surface": "Headwear",
    "useCase": "Brand mockup",
    "style": "Dramatic",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A03-03",
    "inputType": "logo",
    "name": "Cream five-panel cap",
    "category": "Apparel",
    "packId": "LOG-A03",
    "packName": "Headwear",
    "packCode": "A03",
    "output": "image",
    "surface": "Headwear",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A03-04",
    "inputType": "logo",
    "name": "Trucker cap mesh",
    "category": "Apparel",
    "packId": "LOG-A03",
    "packName": "Headwear",
    "packCode": "A03",
    "output": "image",
    "surface": "Headwear",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A03-05",
    "inputType": "logo",
    "name": "Beanie cuff embroidery",
    "category": "Apparel",
    "packId": "LOG-A03",
    "packName": "Headwear",
    "packCode": "A03",
    "output": "image",
    "surface": "Headwear",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A03-06",
    "inputType": "logo",
    "name": "Bucket hat side logo",
    "category": "Apparel",
    "packId": "LOG-A03",
    "packName": "Headwear",
    "packCode": "A03",
    "output": "image",
    "surface": "Headwear",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A03-07",
    "inputType": "logo",
    "name": "Visor tennis club",
    "category": "Apparel",
    "packId": "LOG-A03",
    "packName": "Headwear",
    "packCode": "A03",
    "output": "image",
    "surface": "Headwear",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A03-08",
    "inputType": "logo",
    "name": "Snapback flat brim",
    "category": "Apparel",
    "packId": "LOG-A03",
    "packName": "Headwear",
    "packCode": "A03",
    "output": "image",
    "surface": "Apparel",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A03-09",
    "inputType": "logo",
    "name": "Running cap reflective logo",
    "category": "Apparel",
    "packId": "LOG-A03",
    "packName": "Headwear",
    "packCode": "A03",
    "output": "image",
    "surface": "Headwear",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A03-10",
    "inputType": "logo",
    "name": "Wool cap premium close-up",
    "category": "Apparel",
    "packId": "LOG-A03",
    "packName": "Headwear",
    "packCode": "A03",
    "output": "image",
    "surface": "Headwear",
    "useCase": "Brand mockup",
    "style": "Premium",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A04-01",
    "inputType": "logo",
    "name": "Gym tank on rack",
    "category": "Apparel",
    "packId": "LOG-A04",
    "packName": "Activewear",
    "packCode": "A04",
    "output": "image",
    "surface": "Apparel",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A04-02",
    "inputType": "logo",
    "name": "Yoga crop top flat lay",
    "category": "Apparel",
    "packId": "LOG-A04",
    "packName": "Activewear",
    "packCode": "A04",
    "output": "image",
    "surface": "Apparel",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A04-03",
    "inputType": "logo",
    "name": "Running singlet",
    "category": "Apparel",
    "packId": "LOG-A04",
    "packName": "Activewear",
    "packCode": "A04",
    "output": "image",
    "surface": "Apparel",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A04-04",
    "inputType": "logo",
    "name": "Sports bra studio",
    "category": "Apparel",
    "packId": "LOG-A04",
    "packName": "Activewear",
    "packCode": "A04",
    "output": "image",
    "surface": "Apparel",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo",
      "studio"
    ]
  },
  {
    "id": "LOG-A04-05",
    "inputType": "logo",
    "name": "Performance tee folded",
    "category": "Apparel",
    "packId": "LOG-A04",
    "packName": "Activewear",
    "packCode": "A04",
    "output": "image",
    "surface": "T-shirt",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A04-06",
    "inputType": "logo",
    "name": "Cycling jersey front",
    "category": "Apparel",
    "packId": "LOG-A04",
    "packName": "Activewear",
    "packCode": "A04",
    "output": "image",
    "surface": "Apparel",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A04-07",
    "inputType": "logo",
    "name": "Team jersey locker room",
    "category": "Apparel",
    "packId": "LOG-A04",
    "packName": "Activewear",
    "packCode": "A04",
    "output": "image",
    "surface": "Apparel",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A04-08",
    "inputType": "logo",
    "name": "Sweatband embroidery",
    "category": "Apparel",
    "packId": "LOG-A04",
    "packName": "Activewear",
    "packCode": "A04",
    "output": "image",
    "surface": "Apparel",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A04-09",
    "inputType": "logo",
    "name": "Athletic shorts label",
    "category": "Apparel",
    "packId": "LOG-A04",
    "packName": "Activewear",
    "packCode": "A04",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A04-10",
    "inputType": "logo",
    "name": "Gym duffel tag",
    "category": "Apparel",
    "packId": "LOG-A04",
    "packName": "Activewear",
    "packCode": "A04",
    "output": "image",
    "surface": "Bag",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A05-01",
    "inputType": "logo",
    "name": "Cafe apron hanging",
    "category": "Apparel",
    "packId": "LOG-A05",
    "packName": "Work Uniforms",
    "packCode": "A05",
    "output": "image",
    "surface": "Apparel",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Cafe",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A05-02",
    "inputType": "logo",
    "name": "Chef coat chest logo",
    "category": "Apparel",
    "packId": "LOG-A05",
    "packName": "Work Uniforms",
    "packCode": "A05",
    "output": "image",
    "surface": "Apparel",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A05-03",
    "inputType": "logo",
    "name": "Mechanic work shirt",
    "category": "Apparel",
    "packId": "LOG-A05",
    "packName": "Work Uniforms",
    "packCode": "A05",
    "output": "image",
    "surface": "Apparel",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A05-04",
    "inputType": "logo",
    "name": "Barber cape logo",
    "category": "Apparel",
    "packId": "LOG-A05",
    "packName": "Work Uniforms",
    "packCode": "A05",
    "output": "image",
    "surface": "Headwear",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A05-05",
    "inputType": "logo",
    "name": "Spa robe embroidery",
    "category": "Apparel",
    "packId": "LOG-A05",
    "packName": "Work Uniforms",
    "packCode": "A05",
    "output": "image",
    "surface": "Apparel",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A05-06",
    "inputType": "logo",
    "name": "Hotel staff polo",
    "category": "Apparel",
    "packId": "LOG-A05",
    "packName": "Work Uniforms",
    "packCode": "A05",
    "output": "image",
    "surface": "Apparel",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A05-07",
    "inputType": "logo",
    "name": "Security jacket patch",
    "category": "Apparel",
    "packId": "LOG-A05",
    "packName": "Work Uniforms",
    "packCode": "A05",
    "output": "image",
    "surface": "Apparel",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A05-08",
    "inputType": "logo",
    "name": "Delivery jacket chest",
    "category": "Apparel",
    "packId": "LOG-A05",
    "packName": "Work Uniforms",
    "packCode": "A05",
    "output": "image",
    "surface": "Apparel",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A05-09",
    "inputType": "logo",
    "name": "Event staff tee",
    "category": "Apparel",
    "packId": "LOG-A05",
    "packName": "Work Uniforms",
    "packCode": "A05",
    "output": "image",
    "surface": "T-shirt",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A05-10",
    "inputType": "logo",
    "name": "Cleaning service polo",
    "category": "Apparel",
    "packId": "LOG-A05",
    "packName": "Work Uniforms",
    "packCode": "A05",
    "output": "image",
    "surface": "Apparel",
    "useCase": "Brand mockup",
    "style": "Minimal",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A06-01",
    "inputType": "logo",
    "name": "Neck label inside tee",
    "category": "Apparel",
    "packId": "LOG-A06",
    "packName": "Labels And Tags",
    "packCode": "A06",
    "output": "image",
    "surface": "T-shirt",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A06-02",
    "inputType": "logo",
    "name": "Hang tag on string",
    "category": "Apparel",
    "packId": "LOG-A06",
    "packName": "Labels And Tags",
    "packCode": "A06",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A06-03",
    "inputType": "logo",
    "name": "Woven hem tag",
    "category": "Apparel",
    "packId": "LOG-A06",
    "packName": "Labels And Tags",
    "packCode": "A06",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A06-04",
    "inputType": "logo",
    "name": "Leather patch on beanie",
    "category": "Apparel",
    "packId": "LOG-A06",
    "packName": "Labels And Tags",
    "packCode": "A06",
    "output": "image",
    "surface": "Headwear",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A06-05",
    "inputType": "logo",
    "name": "Size label macro",
    "category": "Apparel",
    "packId": "LOG-A06",
    "packName": "Labels And Tags",
    "packCode": "A06",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A06-06",
    "inputType": "logo",
    "name": "Clothing care label",
    "category": "Apparel",
    "packId": "LOG-A06",
    "packName": "Labels And Tags",
    "packCode": "A06",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A06-07",
    "inputType": "logo",
    "name": "Kraft swing tag stack",
    "category": "Apparel",
    "packId": "LOG-A06",
    "packName": "Labels And Tags",
    "packCode": "A06",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A06-08",
    "inputType": "logo",
    "name": "Embossed denim patch",
    "category": "Apparel",
    "packId": "LOG-A06",
    "packName": "Labels And Tags",
    "packCode": "A06",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A06-09",
    "inputType": "logo",
    "name": "Satin label close-up",
    "category": "Apparel",
    "packId": "LOG-A06",
    "packName": "Labels And Tags",
    "packCode": "A06",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A06-10",
    "inputType": "logo",
    "name": "Branded tissue with garment",
    "category": "Apparel",
    "packId": "LOG-A06",
    "packName": "Labels And Tags",
    "packCode": "A06",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "apparel",
      "logo"
    ]
  },
  {
    "id": "LOG-A07-01",
    "inputType": "logo",
    "name": "Canvas tote shoulder",
    "category": "Drinkware & Bags",
    "packId": "LOG-A07",
    "packName": "Bags",
    "packCode": "A07",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "drinkware & bags",
      "logo"
    ]
  },
  {
    "id": "LOG-A07-02",
    "inputType": "logo",
    "name": "Tote on kitchen table",
    "category": "Drinkware & Bags",
    "packId": "LOG-A07",
    "packName": "Bags",
    "packCode": "A07",
    "output": "image",
    "surface": "Bag",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "drinkware & bags",
      "logo"
    ]
  },
  {
    "id": "LOG-A07-03",
    "inputType": "logo",
    "name": "Black shopper tote",
    "category": "Drinkware & Bags",
    "packId": "LOG-A07",
    "packName": "Bags",
    "packCode": "A07",
    "output": "image",
    "surface": "Bag",
    "useCase": "Retail",
    "style": "Dramatic",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "drinkware & bags",
      "logo"
    ]
  },
  {
    "id": "LOG-A07-04",
    "inputType": "logo",
    "name": "Jute market bag",
    "category": "Drinkware & Bags",
    "packId": "LOG-A07",
    "packName": "Bags",
    "packCode": "A07",
    "output": "image",
    "surface": "Bag",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "drinkware & bags",
      "logo"
    ]
  },
  {
    "id": "LOG-A07-05",
    "inputType": "logo",
    "name": "Paper shopping bag",
    "category": "Drinkware & Bags",
    "packId": "LOG-A07",
    "packName": "Bags",
    "packCode": "A07",
    "output": "image",
    "surface": "Bag",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "drinkware & bags",
      "logo"
    ]
  },
  {
    "id": "LOG-A07-06",
    "inputType": "logo",
    "name": "Drawstring gym bag",
    "category": "Drinkware & Bags",
    "packId": "LOG-A07",
    "packName": "Bags",
    "packCode": "A07",
    "output": "image",
    "surface": "Bag",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "drinkware & bags",
      "logo"
    ]
  },
  {
    "id": "LOG-A07-07",
    "inputType": "logo",
    "name": "Backpack front pocket",
    "category": "Drinkware & Bags",
    "packId": "LOG-A07",
    "packName": "Bags",
    "packCode": "A07",
    "output": "image",
    "surface": "Bag",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "drinkware & bags",
      "logo"
    ]
  },
  {
    "id": "LOG-A07-08",
    "inputType": "logo",
    "name": "Laptop sleeve logo",
    "category": "Drinkware & Bags",
    "packId": "LOG-A07",
    "packName": "Bags",
    "packCode": "A07",
    "output": "image",
    "surface": "Bag",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "drinkware & bags",
      "logo"
    ]
  },
  {
    "id": "LOG-A07-09",
    "inputType": "logo",
    "name": "Makeup pouch",
    "category": "Drinkware & Bags",
    "packId": "LOG-A07",
    "packName": "Bags",
    "packCode": "A07",
    "output": "image",
    "surface": "Bag",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "drinkware & bags",
      "logo"
    ]
  },
  {
    "id": "LOG-A07-10",
    "inputType": "logo",
    "name": "Reusable grocery bag",
    "category": "Drinkware & Bags",
    "packId": "LOG-A07",
    "packName": "Bags",
    "packCode": "A07",
    "output": "image",
    "surface": "Bag",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "drinkware & bags",
      "logo"
    ]
  },
  {
    "id": "LOG-A08-01",
    "inputType": "logo",
    "name": "White ceramic mug desk",
    "category": "Drinkware & Bags",
    "packId": "LOG-A08",
    "packName": "Drinkware Core",
    "packCode": "A08",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Brand mockup",
    "style": "Minimal",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "drinkware & bags",
      "logo"
    ]
  },
  {
    "id": "LOG-A08-02",
    "inputType": "logo",
    "name": "Black matte mug marble",
    "category": "Drinkware & Bags",
    "packId": "LOG-A08",
    "packName": "Drinkware Core",
    "packCode": "A08",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Brand mockup",
    "style": "Dramatic",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "drinkware & bags",
      "logo"
    ]
  },
  {
    "id": "LOG-A08-03",
    "inputType": "logo",
    "name": "Camp mug enamel",
    "category": "Drinkware & Bags",
    "packId": "LOG-A08",
    "packName": "Drinkware Core",
    "packCode": "A08",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "drinkware & bags",
      "logo"
    ]
  },
  {
    "id": "LOG-A08-04",
    "inputType": "logo",
    "name": "Glass tumbler",
    "category": "Drinkware & Bags",
    "packId": "LOG-A08",
    "packName": "Drinkware Core",
    "packCode": "A08",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "drinkware & bags",
      "logo"
    ]
  },
  {
    "id": "LOG-A08-05",
    "inputType": "logo",
    "name": "Stainless travel mug",
    "category": "Drinkware & Bags",
    "packId": "LOG-A08",
    "packName": "Drinkware Core",
    "packCode": "A08",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Brand mockup",
    "style": "Lifestyle",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "drinkware & bags",
      "logo"
    ]
  },
  {
    "id": "LOG-A08-06",
    "inputType": "logo",
    "name": "Insulated bottle hike",
    "category": "Drinkware & Bags",
    "packId": "LOG-A08",
    "packName": "Drinkware Core",
    "packCode": "A08",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Brand mockup",
    "style": "Lifestyle",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "drinkware & bags",
      "logo"
    ]
  },
  {
    "id": "LOG-A08-07",
    "inputType": "logo",
    "name": "Clear water bottle gym",
    "category": "Drinkware & Bags",
    "packId": "LOG-A08",
    "packName": "Drinkware Core",
    "packCode": "A08",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "drinkware & bags",
      "logo"
    ]
  },
  {
    "id": "LOG-A08-08",
    "inputType": "logo",
    "name": "Latte cup sleeve",
    "category": "Drinkware & Bags",
    "packId": "LOG-A08",
    "packName": "Drinkware Core",
    "packCode": "A08",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "drinkware & bags",
      "logo"
    ]
  },
  {
    "id": "LOG-A08-09",
    "inputType": "logo",
    "name": "Tea cup saucer",
    "category": "Drinkware & Bags",
    "packId": "LOG-A08",
    "packName": "Drinkware Core",
    "packCode": "A08",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "drinkware & bags",
      "logo"
    ]
  },
  {
    "id": "LOG-A08-10",
    "inputType": "logo",
    "name": "Stack of branded cups",
    "category": "Drinkware & Bags",
    "packId": "LOG-A08",
    "packName": "Drinkware Core",
    "packCode": "A08",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "drinkware & bags",
      "logo"
    ]
  },
  {
    "id": "LOG-A09-01",
    "inputType": "logo",
    "name": "Takeaway cup hand hold",
    "category": "Drinkware & Bags",
    "packId": "LOG-A09",
    "packName": "Cafe Brandware",
    "packCode": "A09",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Cafe",
    "format": "Square",
    "tags": [
      "drinkware & bags",
      "logo"
    ]
  },
  {
    "id": "LOG-A09-02",
    "inputType": "logo",
    "name": "Coffee cup carrier",
    "category": "Drinkware & Bags",
    "packId": "LOG-A09",
    "packName": "Cafe Brandware",
    "packCode": "A09",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Cafe",
    "format": "Square",
    "tags": [
      "drinkware & bags",
      "logo"
    ]
  },
  {
    "id": "LOG-A09-03",
    "inputType": "logo",
    "name": "Espresso cup bar",
    "category": "Drinkware & Bags",
    "packId": "LOG-A09",
    "packName": "Cafe Brandware",
    "packCode": "A09",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Cafe",
    "format": "Square",
    "tags": [
      "drinkware & bags",
      "logo"
    ]
  },
  {
    "id": "LOG-A09-04",
    "inputType": "logo",
    "name": "Cold brew bottle label",
    "category": "Drinkware & Bags",
    "packId": "LOG-A09",
    "packName": "Cafe Brandware",
    "packCode": "A09",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Cafe",
    "format": "Square",
    "tags": [
      "drinkware & bags",
      "logo"
    ]
  },
  {
    "id": "LOG-A09-05",
    "inputType": "logo",
    "name": "Bakery bag and cup",
    "category": "Drinkware & Bags",
    "packId": "LOG-A09",
    "packName": "Cafe Brandware",
    "packCode": "A09",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Cafe",
    "format": "Square",
    "tags": [
      "drinkware & bags",
      "logo"
    ]
  },
  {
    "id": "LOG-A09-06",
    "inputType": "logo",
    "name": "Cafe counter cup lineup",
    "category": "Drinkware & Bags",
    "packId": "LOG-A09",
    "packName": "Cafe Brandware",
    "packCode": "A09",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Cafe",
    "format": "Square",
    "tags": [
      "drinkware & bags",
      "logo"
    ]
  },
  {
    "id": "LOG-A09-07",
    "inputType": "logo",
    "name": "Napkin and cup set",
    "category": "Drinkware & Bags",
    "packId": "LOG-A09",
    "packName": "Cafe Brandware",
    "packCode": "A09",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Cafe",
    "format": "Square",
    "tags": [
      "drinkware & bags",
      "logo"
    ]
  },
  {
    "id": "LOG-A09-08",
    "inputType": "logo",
    "name": "Loyalty card beside mug",
    "category": "Drinkware & Bags",
    "packId": "LOG-A09",
    "packName": "Cafe Brandware",
    "packCode": "A09",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Cafe",
    "format": "Square",
    "tags": [
      "drinkware & bags",
      "logo"
    ]
  },
  {
    "id": "LOG-A09-09",
    "inputType": "logo",
    "name": "Pour-over scene",
    "category": "Drinkware & Bags",
    "packId": "LOG-A09",
    "packName": "Cafe Brandware",
    "packCode": "A09",
    "output": "image",
    "surface": "Bag",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Cafe",
    "format": "Square",
    "tags": [
      "drinkware & bags",
      "logo"
    ]
  },
  {
    "id": "LOG-A09-10",
    "inputType": "logo",
    "name": "Coffee beans with logo stamp",
    "category": "Drinkware & Bags",
    "packId": "LOG-A09",
    "packName": "Cafe Brandware",
    "packCode": "A09",
    "output": "image",
    "surface": "Bag",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Cafe",
    "format": "Square",
    "tags": [
      "drinkware & bags",
      "logo"
    ]
  },
  {
    "id": "LOG-S01-01",
    "inputType": "logo",
    "name": "Single card marble",
    "category": "Stationery",
    "packId": "LOG-S01",
    "packName": "Business Cards",
    "packCode": "S01",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Client presentation",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S01-02",
    "inputType": "logo",
    "name": "Business card stack kraft",
    "category": "Stationery",
    "packId": "LOG-S01",
    "packName": "Business Cards",
    "packCode": "S01",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Client presentation",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S01-03",
    "inputType": "logo",
    "name": "Rounded corner cards",
    "category": "Stationery",
    "packId": "LOG-S01",
    "packName": "Business Cards",
    "packCode": "S01",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Client presentation",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S01-04",
    "inputType": "logo",
    "name": "Vertical business card",
    "category": "Stationery",
    "packId": "LOG-S01",
    "packName": "Business Cards",
    "packCode": "S01",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Client presentation",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S01-05",
    "inputType": "logo",
    "name": "Black foil card",
    "category": "Stationery",
    "packId": "LOG-S01",
    "packName": "Business Cards",
    "packCode": "S01",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Client presentation",
    "style": "Premium",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S01-06",
    "inputType": "logo",
    "name": "Letterpress card",
    "category": "Stationery",
    "packId": "LOG-S01",
    "packName": "Business Cards",
    "packCode": "S01",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Client presentation",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S01-07",
    "inputType": "logo",
    "name": "Spot UV card",
    "category": "Stationery",
    "packId": "LOG-S01",
    "packName": "Business Cards",
    "packCode": "S01",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Client presentation",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S01-08",
    "inputType": "logo",
    "name": "Cards in hand",
    "category": "Stationery",
    "packId": "LOG-S01",
    "packName": "Business Cards",
    "packCode": "S01",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Client presentation",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S01-09",
    "inputType": "logo",
    "name": "Cards beside laptop",
    "category": "Stationery",
    "packId": "LOG-S01",
    "packName": "Business Cards",
    "packCode": "S01",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Client presentation",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S01-10",
    "inputType": "logo",
    "name": "Business card holder",
    "category": "Stationery",
    "packId": "LOG-S01",
    "packName": "Business Cards",
    "packCode": "S01",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Client presentation",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S02-01",
    "inputType": "logo",
    "name": "Letterhead fountain pen",
    "category": "Stationery",
    "packId": "LOG-S02",
    "packName": "Office Stationery",
    "packCode": "S02",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Client presentation",
    "style": "Corporate",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S02-02",
    "inputType": "logo",
    "name": "Envelope wax seal",
    "category": "Stationery",
    "packId": "LOG-S02",
    "packName": "Office Stationery",
    "packCode": "S02",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Client presentation",
    "style": "Corporate",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S02-03",
    "inputType": "logo",
    "name": "A4 invoice sheet",
    "category": "Stationery",
    "packId": "LOG-S02",
    "packName": "Office Stationery",
    "packCode": "S02",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Client presentation",
    "style": "Corporate",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S02-04",
    "inputType": "logo",
    "name": "Branded folder",
    "category": "Stationery",
    "packId": "LOG-S02",
    "packName": "Office Stationery",
    "packCode": "S02",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Client presentation",
    "style": "Corporate",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S02-05",
    "inputType": "logo",
    "name": "Clipboard with logo",
    "category": "Stationery",
    "packId": "LOG-S02",
    "packName": "Office Stationery",
    "packCode": "S02",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Client presentation",
    "style": "Corporate",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S02-06",
    "inputType": "logo",
    "name": "Desk pad planner",
    "category": "Stationery",
    "packId": "LOG-S02",
    "packName": "Office Stationery",
    "packCode": "S02",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Client presentation",
    "style": "Corporate",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S02-07",
    "inputType": "logo",
    "name": "Notepad top binding",
    "category": "Stationery",
    "packId": "LOG-S02",
    "packName": "Office Stationery",
    "packCode": "S02",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Client presentation",
    "style": "Corporate",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S02-08",
    "inputType": "logo",
    "name": "Sticky note cube",
    "category": "Stationery",
    "packId": "LOG-S02",
    "packName": "Office Stationery",
    "packCode": "S02",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Client presentation",
    "style": "Corporate",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S02-09",
    "inputType": "logo",
    "name": "File tab folders",
    "category": "Stationery",
    "packId": "LOG-S02",
    "packName": "Office Stationery",
    "packCode": "S02",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Client presentation",
    "style": "Corporate",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S02-10",
    "inputType": "logo",
    "name": "Office stationery spread",
    "category": "Stationery",
    "packId": "LOG-S02",
    "packName": "Office Stationery",
    "packCode": "S02",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Client presentation",
    "style": "Corporate",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S03-01",
    "inputType": "logo",
    "name": "Leather notebook embossed",
    "category": "Stationery",
    "packId": "LOG-S03",
    "packName": "Notebooks",
    "packCode": "S03",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S03-02",
    "inputType": "logo",
    "name": "Spiral notebook cover",
    "category": "Stationery",
    "packId": "LOG-S03",
    "packName": "Notebooks",
    "packCode": "S03",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S03-03",
    "inputType": "logo",
    "name": "Moleskine-style journal",
    "category": "Stationery",
    "packId": "LOG-S03",
    "packName": "Notebooks",
    "packCode": "S03",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S03-04",
    "inputType": "logo",
    "name": "Planner on desk",
    "category": "Stationery",
    "packId": "LOG-S03",
    "packName": "Notebooks",
    "packCode": "S03",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S03-05",
    "inputType": "logo",
    "name": "Sketchbook flat lay",
    "category": "Stationery",
    "packId": "LOG-S03",
    "packName": "Notebooks",
    "packCode": "S03",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S03-06",
    "inputType": "logo",
    "name": "Pocket notebook stack",
    "category": "Stationery",
    "packId": "LOG-S03",
    "packName": "Notebooks",
    "packCode": "S03",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S03-07",
    "inputType": "logo",
    "name": "Hardcover agenda",
    "category": "Stationery",
    "packId": "LOG-S03",
    "packName": "Notebooks",
    "packCode": "S03",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S03-08",
    "inputType": "logo",
    "name": "Notebook with pen loop",
    "category": "Stationery",
    "packId": "LOG-S03",
    "packName": "Notebooks",
    "packCode": "S03",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S03-09",
    "inputType": "logo",
    "name": "Kraft notebook set",
    "category": "Stationery",
    "packId": "LOG-S03",
    "packName": "Notebooks",
    "packCode": "S03",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S03-10",
    "inputType": "logo",
    "name": "Meeting notes scene",
    "category": "Stationery",
    "packId": "LOG-S03",
    "packName": "Notebooks",
    "packCode": "S03",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S04-01",
    "inputType": "logo",
    "name": "Flyer stack",
    "category": "Stationery",
    "packId": "LOG-S04",
    "packName": "Print Collateral",
    "packCode": "S04",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S04-02",
    "inputType": "logo",
    "name": "Folded brochure",
    "category": "Stationery",
    "packId": "LOG-S04",
    "packName": "Print Collateral",
    "packCode": "S04",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S04-03",
    "inputType": "logo",
    "name": "Tri-fold brochure",
    "category": "Stationery",
    "packId": "LOG-S04",
    "packName": "Print Collateral",
    "packCode": "S04",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S04-04",
    "inputType": "logo",
    "name": "Postcard front",
    "category": "Stationery",
    "packId": "LOG-S04",
    "packName": "Print Collateral",
    "packCode": "S04",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S04-05",
    "inputType": "logo",
    "name": "Invitation card fabric",
    "category": "Stationery",
    "packId": "LOG-S04",
    "packName": "Print Collateral",
    "packCode": "S04",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S04-06",
    "inputType": "logo",
    "name": "Greeting card envelope",
    "category": "Stationery",
    "packId": "LOG-S04",
    "packName": "Print Collateral",
    "packCode": "S04",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S04-07",
    "inputType": "logo",
    "name": "Menu card restaurant",
    "category": "Stationery",
    "packId": "LOG-S04",
    "packName": "Print Collateral",
    "packCode": "S04",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S04-08",
    "inputType": "logo",
    "name": "Table tent card",
    "category": "Stationery",
    "packId": "LOG-S04",
    "packName": "Print Collateral",
    "packCode": "S04",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S04-09",
    "inputType": "logo",
    "name": "Event badge lanyard",
    "category": "Stationery",
    "packId": "LOG-S04",
    "packName": "Print Collateral",
    "packCode": "S04",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S04-10",
    "inputType": "logo",
    "name": "Thank-you card insert",
    "category": "Stationery",
    "packId": "LOG-S04",
    "packName": "Print Collateral",
    "packCode": "S04",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S05-01",
    "inputType": "logo",
    "name": "Round sticker roll",
    "category": "Stationery",
    "packId": "LOG-S05",
    "packName": "Stickers And Stamps",
    "packCode": "S05",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S05-02",
    "inputType": "logo",
    "name": "Die-cut sticker sheet",
    "category": "Stationery",
    "packId": "LOG-S05",
    "packName": "Stickers And Stamps",
    "packCode": "S05",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S05-03",
    "inputType": "logo",
    "name": "Envelope sticker seal",
    "category": "Stationery",
    "packId": "LOG-S05",
    "packName": "Stickers And Stamps",
    "packCode": "S05",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S05-04",
    "inputType": "logo",
    "name": "Rubber stamp on paper",
    "category": "Stationery",
    "packId": "LOG-S05",
    "packName": "Stickers And Stamps",
    "packCode": "S05",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S05-05",
    "inputType": "logo",
    "name": "Ink stamp close-up",
    "category": "Stationery",
    "packId": "LOG-S05",
    "packName": "Stickers And Stamps",
    "packCode": "S05",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S05-06",
    "inputType": "logo",
    "name": "Product label sticker",
    "category": "Stationery",
    "packId": "LOG-S05",
    "packName": "Stickers And Stamps",
    "packCode": "S05",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S05-07",
    "inputType": "logo",
    "name": "Window sticker decal",
    "category": "Stationery",
    "packId": "LOG-S05",
    "packName": "Stickers And Stamps",
    "packCode": "S05",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S05-08",
    "inputType": "logo",
    "name": "Laptop sticker placement",
    "category": "Stationery",
    "packId": "LOG-S05",
    "packName": "Stickers And Stamps",
    "packCode": "S05",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S05-09",
    "inputType": "logo",
    "name": "Shipping label sticker",
    "category": "Stationery",
    "packId": "LOG-S05",
    "packName": "Stickers And Stamps",
    "packCode": "S05",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "stationery"
    ]
  },
  {
    "id": "LOG-S05-10",
    "inputType": "logo",
    "name": "Packaging sticker sheet",
    "category": "Stationery",
    "packId": "LOG-S05",
    "packName": "Stickers And Stamps",
    "packCode": "S05",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "packaging",
      "stationery"
    ]
  },
  {
    "id": "LOG-G01-01",
    "inputType": "logo",
    "name": "Storefront vinyl decal",
    "category": "Signage",
    "packId": "LOG-G01",
    "packName": "Storefront Signs",
    "packCode": "G01",
    "output": "image",
    "surface": "Signage",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "logo",
      "signage"
    ]
  },
  {
    "id": "LOG-G01-02",
    "inputType": "logo",
    "name": "Blade sign brick wall",
    "category": "Signage",
    "packId": "LOG-G01",
    "packName": "Storefront Signs",
    "packCode": "G01",
    "output": "image",
    "surface": "Signage",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "logo",
      "signage"
    ]
  },
  {
    "id": "LOG-G01-03",
    "inputType": "logo",
    "name": "Awning logo",
    "category": "Signage",
    "packId": "LOG-G01",
    "packName": "Storefront Signs",
    "packCode": "G01",
    "output": "image",
    "surface": "Signage",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "logo",
      "signage"
    ]
  },
  {
    "id": "LOG-G01-04",
    "inputType": "logo",
    "name": "Window gold lettering",
    "category": "Signage",
    "packId": "LOG-G01",
    "packName": "Storefront Signs",
    "packCode": "G01",
    "output": "image",
    "surface": "Signage",
    "useCase": "Retail",
    "style": "Premium",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "logo",
      "signage"
    ]
  },
  {
    "id": "LOG-G01-05",
    "inputType": "logo",
    "name": "A-frame sidewalk sign",
    "category": "Signage",
    "packId": "LOG-G01",
    "packName": "Storefront Signs",
    "packCode": "G01",
    "output": "image",
    "surface": "Signage",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "logo",
      "signage"
    ]
  },
  {
    "id": "LOG-G01-06",
    "inputType": "logo",
    "name": "Hanging wooden sign",
    "category": "Signage",
    "packId": "LOG-G01",
    "packName": "Storefront Signs",
    "packCode": "G01",
    "output": "image",
    "surface": "Signage",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "logo",
      "signage"
    ]
  },
  {
    "id": "LOG-G01-07",
    "inputType": "logo",
    "name": "Neon storefront sign",
    "category": "Signage",
    "packId": "LOG-G01",
    "packName": "Storefront Signs",
    "packCode": "G01",
    "output": "image",
    "surface": "Signage",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "logo",
      "signage"
    ]
  },
  {
    "id": "LOG-G01-08",
    "inputType": "logo",
    "name": "Door hours decal",
    "category": "Signage",
    "packId": "LOG-G01",
    "packName": "Storefront Signs",
    "packCode": "G01",
    "output": "image",
    "surface": "Signage",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "logo",
      "signage"
    ]
  },
  {
    "id": "LOG-G01-09",
    "inputType": "logo",
    "name": "Cafe chalkboard sign",
    "category": "Signage",
    "packId": "LOG-G01",
    "packName": "Storefront Signs",
    "packCode": "G01",
    "output": "image",
    "surface": "Signage",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Cafe",
    "format": "Square",
    "tags": [
      "logo",
      "signage"
    ]
  },
  {
    "id": "LOG-G01-10",
    "inputType": "logo",
    "name": "Retail entrance mat",
    "category": "Signage",
    "packId": "LOG-G01",
    "packName": "Storefront Signs",
    "packCode": "G01",
    "output": "image",
    "surface": "Signage",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "logo",
      "retail",
      "signage"
    ]
  },
  {
    "id": "LOG-G02-01",
    "inputType": "logo",
    "name": "Reception raised letters",
    "category": "Signage",
    "packId": "LOG-G02",
    "packName": "Office Signs",
    "packCode": "G02",
    "output": "image",
    "surface": "Signage",
    "useCase": "Client presentation",
    "style": "Corporate",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "logo",
      "signage"
    ]
  },
  {
    "id": "LOG-G02-02",
    "inputType": "logo",
    "name": "Glass wall decal",
    "category": "Signage",
    "packId": "LOG-G02",
    "packName": "Office Signs",
    "packCode": "G02",
    "output": "image",
    "surface": "Signage",
    "useCase": "Client presentation",
    "style": "Corporate",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "logo",
      "signage"
    ]
  },
  {
    "id": "LOG-G02-03",
    "inputType": "logo",
    "name": "Conference room frosted logo",
    "category": "Signage",
    "packId": "LOG-G02",
    "packName": "Office Signs",
    "packCode": "G02",
    "output": "image",
    "surface": "Signage",
    "useCase": "Client presentation",
    "style": "Corporate",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "logo",
      "signage"
    ]
  },
  {
    "id": "LOG-G02-04",
    "inputType": "logo",
    "name": "Lobby directory sign",
    "category": "Signage",
    "packId": "LOG-G02",
    "packName": "Office Signs",
    "packCode": "G02",
    "output": "image",
    "surface": "Signage",
    "useCase": "Client presentation",
    "style": "Corporate",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "logo",
      "signage"
    ]
  },
  {
    "id": "LOG-G02-05",
    "inputType": "logo",
    "name": "Elevator wall sign",
    "category": "Signage",
    "packId": "LOG-G02",
    "packName": "Office Signs",
    "packCode": "G02",
    "output": "image",
    "surface": "Signage",
    "useCase": "Client presentation",
    "style": "Corporate",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "logo",
      "signage"
    ]
  },
  {
    "id": "LOG-G02-06",
    "inputType": "logo",
    "name": "Acrylic desk sign",
    "category": "Signage",
    "packId": "LOG-G02",
    "packName": "Office Signs",
    "packCode": "G02",
    "output": "image",
    "surface": "Signage",
    "useCase": "Client presentation",
    "style": "Corporate",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "logo",
      "signage"
    ]
  },
  {
    "id": "LOG-G02-07",
    "inputType": "logo",
    "name": "Office door plaque",
    "category": "Signage",
    "packId": "LOG-G02",
    "packName": "Office Signs",
    "packCode": "G02",
    "output": "image",
    "surface": "Signage",
    "useCase": "Client presentation",
    "style": "Corporate",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "logo",
      "signage"
    ]
  },
  {
    "id": "LOG-G02-08",
    "inputType": "logo",
    "name": "Backlit wall logo",
    "category": "Signage",
    "packId": "LOG-G02",
    "packName": "Office Signs",
    "packCode": "G02",
    "output": "image",
    "surface": "Signage",
    "useCase": "Client presentation",
    "style": "Corporate",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "logo",
      "signage"
    ]
  },
  {
    "id": "LOG-G02-09",
    "inputType": "logo",
    "name": "Meeting room screen saver",
    "category": "Signage",
    "packId": "LOG-G02",
    "packName": "Office Signs",
    "packCode": "G02",
    "output": "image",
    "surface": "Signage",
    "useCase": "Client presentation",
    "style": "Corporate",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "logo",
      "signage"
    ]
  },
  {
    "id": "LOG-G02-10",
    "inputType": "logo",
    "name": "Corporate campus sign",
    "category": "Signage",
    "packId": "LOG-G02",
    "packName": "Office Signs",
    "packCode": "G02",
    "output": "image",
    "surface": "Signage",
    "useCase": "Client presentation",
    "style": "Corporate",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "logo",
      "signage"
    ]
  },
  {
    "id": "LOG-G03-01",
    "inputType": "logo",
    "name": "Highway billboard sunset",
    "category": "Signage",
    "packId": "LOG-G03",
    "packName": "Outdoor Ads",
    "packCode": "G03",
    "output": "image",
    "surface": "Signage",
    "useCase": "Retail",
    "style": "Lifestyle",
    "environment": "Outdoor",
    "format": "Landscape",
    "tags": [
      "logo",
      "outdoor",
      "signage"
    ]
  },
  {
    "id": "LOG-G03-02",
    "inputType": "logo",
    "name": "City billboard daytime",
    "category": "Signage",
    "packId": "LOG-G03",
    "packName": "Outdoor Ads",
    "packCode": "G03",
    "output": "image",
    "surface": "Signage",
    "useCase": "Retail",
    "style": "Lifestyle",
    "environment": "Outdoor",
    "format": "Landscape",
    "tags": [
      "logo",
      "outdoor",
      "signage"
    ]
  },
  {
    "id": "LOG-G03-03",
    "inputType": "logo",
    "name": "Bus shelter poster",
    "category": "Signage",
    "packId": "LOG-G03",
    "packName": "Outdoor Ads",
    "packCode": "G03",
    "output": "image",
    "surface": "Signage",
    "useCase": "Brand mockup",
    "style": "Lifestyle",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "logo",
      "outdoor",
      "signage"
    ]
  },
  {
    "id": "LOG-G03-04",
    "inputType": "logo",
    "name": "Subway poster ad",
    "category": "Signage",
    "packId": "LOG-G03",
    "packName": "Outdoor Ads",
    "packCode": "G03",
    "output": "image",
    "surface": "Signage",
    "useCase": "Brand mockup",
    "style": "Lifestyle",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "logo",
      "outdoor",
      "signage"
    ]
  },
  {
    "id": "LOG-G03-05",
    "inputType": "logo",
    "name": "Street pole banner",
    "category": "Signage",
    "packId": "LOG-G03",
    "packName": "Outdoor Ads",
    "packCode": "G03",
    "output": "image",
    "surface": "Signage",
    "useCase": "Brand mockup",
    "style": "Lifestyle",
    "environment": "Outdoor",
    "format": "Landscape",
    "tags": [
      "logo",
      "outdoor",
      "signage"
    ]
  },
  {
    "id": "LOG-G03-06",
    "inputType": "logo",
    "name": "Construction fence banner",
    "category": "Signage",
    "packId": "LOG-G03",
    "packName": "Outdoor Ads",
    "packCode": "G03",
    "output": "image",
    "surface": "Signage",
    "useCase": "Brand mockup",
    "style": "Lifestyle",
    "environment": "Outdoor",
    "format": "Landscape",
    "tags": [
      "logo",
      "outdoor",
      "signage"
    ]
  },
  {
    "id": "LOG-G03-07",
    "inputType": "logo",
    "name": "Mall lightbox ad",
    "category": "Signage",
    "packId": "LOG-G03",
    "packName": "Outdoor Ads",
    "packCode": "G03",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Lifestyle",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "logo",
      "outdoor",
      "signage"
    ]
  },
  {
    "id": "LOG-G03-08",
    "inputType": "logo",
    "name": "Airport digital billboard",
    "category": "Signage",
    "packId": "LOG-G03",
    "packName": "Outdoor Ads",
    "packCode": "G03",
    "output": "image",
    "surface": "Signage",
    "useCase": "Retail",
    "style": "Lifestyle",
    "environment": "Outdoor",
    "format": "Landscape",
    "tags": [
      "logo",
      "outdoor",
      "signage"
    ]
  },
  {
    "id": "LOG-G03-09",
    "inputType": "logo",
    "name": "Stadium LED board",
    "category": "Signage",
    "packId": "LOG-G03",
    "packName": "Outdoor Ads",
    "packCode": "G03",
    "output": "image",
    "surface": "Signage",
    "useCase": "Brand mockup",
    "style": "Lifestyle",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "logo",
      "outdoor",
      "signage"
    ]
  },
  {
    "id": "LOG-G03-10",
    "inputType": "logo",
    "name": "Parking lot pylon sign",
    "category": "Signage",
    "packId": "LOG-G03",
    "packName": "Outdoor Ads",
    "packCode": "G03",
    "output": "image",
    "surface": "Signage",
    "useCase": "Brand mockup",
    "style": "Lifestyle",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "logo",
      "outdoor",
      "signage"
    ]
  },
  {
    "id": "LOG-G04-01",
    "inputType": "logo",
    "name": "Delivery van wrap",
    "category": "Signage",
    "packId": "LOG-G04",
    "packName": "Vehicle Branding",
    "packCode": "G04",
    "output": "image",
    "surface": "Signage",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "signage"
    ]
  },
  {
    "id": "LOG-G04-02",
    "inputType": "logo",
    "name": "Food truck side logo",
    "category": "Signage",
    "packId": "LOG-G04",
    "packName": "Vehicle Branding",
    "packCode": "G04",
    "output": "image",
    "surface": "Signage",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "signage"
    ]
  },
  {
    "id": "LOG-G04-03",
    "inputType": "logo",
    "name": "Scooter delivery box",
    "category": "Signage",
    "packId": "LOG-G04",
    "packName": "Vehicle Branding",
    "packCode": "G04",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "signage"
    ]
  },
  {
    "id": "LOG-G04-04",
    "inputType": "logo",
    "name": "Car door decal",
    "category": "Signage",
    "packId": "LOG-G04",
    "packName": "Vehicle Branding",
    "packCode": "G04",
    "output": "image",
    "surface": "Signage",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "signage"
    ]
  },
  {
    "id": "LOG-G04-05",
    "inputType": "logo",
    "name": "Pickup truck tailgate",
    "category": "Signage",
    "packId": "LOG-G04",
    "packName": "Vehicle Branding",
    "packCode": "G04",
    "output": "image",
    "surface": "Signage",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "signage"
    ]
  },
  {
    "id": "LOG-G04-06",
    "inputType": "logo",
    "name": "Service van rear doors",
    "category": "Signage",
    "packId": "LOG-G04",
    "packName": "Vehicle Branding",
    "packCode": "G04",
    "output": "image",
    "surface": "Signage",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "signage"
    ]
  },
  {
    "id": "LOG-G04-07",
    "inputType": "logo",
    "name": "Box truck city street",
    "category": "Signage",
    "packId": "LOG-G04",
    "packName": "Vehicle Branding",
    "packCode": "G04",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Urban",
    "format": "Square",
    "tags": [
      "logo",
      "signage"
    ]
  },
  {
    "id": "LOG-G04-08",
    "inputType": "logo",
    "name": "Bicycle courier bag",
    "category": "Signage",
    "packId": "LOG-G04",
    "packName": "Vehicle Branding",
    "packCode": "G04",
    "output": "image",
    "surface": "Bag",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "signage"
    ]
  },
  {
    "id": "LOG-G04-09",
    "inputType": "logo",
    "name": "Taxi roof ad",
    "category": "Signage",
    "packId": "LOG-G04",
    "packName": "Vehicle Branding",
    "packCode": "G04",
    "output": "image",
    "surface": "Signage",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "signage"
    ]
  },
  {
    "id": "LOG-G04-10",
    "inputType": "logo",
    "name": "Boat hull logo",
    "category": "Signage",
    "packId": "LOG-G04",
    "packName": "Vehicle Branding",
    "packCode": "G04",
    "output": "image",
    "surface": "Signage",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "signage"
    ]
  },
  {
    "id": "LOG-G05-01",
    "inputType": "logo",
    "name": "Trade show booth wall",
    "category": "Signage",
    "packId": "LOG-G05",
    "packName": "Events And Booths",
    "packCode": "G05",
    "output": "image",
    "surface": "Signage",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "signage"
    ]
  },
  {
    "id": "LOG-G05-02",
    "inputType": "logo",
    "name": "Step-and-repeat backdrop",
    "category": "Signage",
    "packId": "LOG-G05",
    "packName": "Events And Booths",
    "packCode": "G05",
    "output": "image",
    "surface": "Signage",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "signage"
    ]
  },
  {
    "id": "LOG-G05-03",
    "inputType": "logo",
    "name": "Pull-up banner",
    "category": "Signage",
    "packId": "LOG-G05",
    "packName": "Events And Booths",
    "packCode": "G05",
    "output": "image",
    "surface": "Signage",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Landscape",
    "tags": [
      "logo",
      "signage"
    ]
  },
  {
    "id": "LOG-G05-04",
    "inputType": "logo",
    "name": "Exhibition counter",
    "category": "Signage",
    "packId": "LOG-G05",
    "packName": "Events And Booths",
    "packCode": "G05",
    "output": "image",
    "surface": "Signage",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "signage"
    ]
  },
  {
    "id": "LOG-G05-05",
    "inputType": "logo",
    "name": "Event wristband",
    "category": "Signage",
    "packId": "LOG-G05",
    "packName": "Events And Booths",
    "packCode": "G05",
    "output": "image",
    "surface": "Signage",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "signage"
    ]
  },
  {
    "id": "LOG-G05-06",
    "inputType": "logo",
    "name": "Name badge",
    "category": "Signage",
    "packId": "LOG-G05",
    "packName": "Events And Booths",
    "packCode": "G05",
    "output": "image",
    "surface": "Signage",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "signage"
    ]
  },
  {
    "id": "LOG-G05-07",
    "inputType": "logo",
    "name": "Conference tote table",
    "category": "Signage",
    "packId": "LOG-G05",
    "packName": "Events And Booths",
    "packCode": "G05",
    "output": "image",
    "surface": "Bag",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "signage"
    ]
  },
  {
    "id": "LOG-G05-08",
    "inputType": "logo",
    "name": "Stage screen logo",
    "category": "Signage",
    "packId": "LOG-G05",
    "packName": "Events And Booths",
    "packCode": "G05",
    "output": "image",
    "surface": "Signage",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "signage"
    ]
  },
  {
    "id": "LOG-G05-09",
    "inputType": "logo",
    "name": "Sponsor board",
    "category": "Signage",
    "packId": "LOG-G05",
    "packName": "Events And Booths",
    "packCode": "G05",
    "output": "image",
    "surface": "Signage",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "signage"
    ]
  },
  {
    "id": "LOG-G05-10",
    "inputType": "logo",
    "name": "Photo booth backdrop",
    "category": "Signage",
    "packId": "LOG-G05",
    "packName": "Events And Booths",
    "packCode": "G05",
    "output": "image",
    "surface": "Signage",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "signage"
    ]
  },
  {
    "id": "LOG-P01-01",
    "inputType": "logo",
    "name": "Kraft shipping box",
    "category": "Packaging",
    "packId": "LOG-P01",
    "packName": "Shipping Packaging",
    "packCode": "P01",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P01-02",
    "inputType": "logo",
    "name": "White mailer box",
    "category": "Packaging",
    "packId": "LOG-P01",
    "packName": "Shipping Packaging",
    "packCode": "P01",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Minimal",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P01-03",
    "inputType": "logo",
    "name": "Black mailer box",
    "category": "Packaging",
    "packId": "LOG-P01",
    "packName": "Shipping Packaging",
    "packCode": "P01",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Dramatic",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P01-04",
    "inputType": "logo",
    "name": "Corrugated box stack",
    "category": "Packaging",
    "packId": "LOG-P01",
    "packName": "Shipping Packaging",
    "packCode": "P01",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P01-05",
    "inputType": "logo",
    "name": "Tissue paper unboxing",
    "category": "Packaging",
    "packId": "LOG-P01",
    "packName": "Shipping Packaging",
    "packCode": "P01",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P01-06",
    "inputType": "logo",
    "name": "Branded packing tape",
    "category": "Packaging",
    "packId": "LOG-P01",
    "packName": "Shipping Packaging",
    "packCode": "P01",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P01-07",
    "inputType": "logo",
    "name": "Shipping label box",
    "category": "Packaging",
    "packId": "LOG-P01",
    "packName": "Shipping Packaging",
    "packCode": "P01",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P01-08",
    "inputType": "logo",
    "name": "Poly mailer",
    "category": "Packaging",
    "packId": "LOG-P01",
    "packName": "Shipping Packaging",
    "packCode": "P01",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P01-09",
    "inputType": "logo",
    "name": "Compostable mailer",
    "category": "Packaging",
    "packId": "LOG-P01",
    "packName": "Shipping Packaging",
    "packCode": "P01",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P01-10",
    "inputType": "logo",
    "name": "Product insert card",
    "category": "Packaging",
    "packId": "LOG-P01",
    "packName": "Shipping Packaging",
    "packCode": "P01",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P02-01",
    "inputType": "logo",
    "name": "White embossed box",
    "category": "Packaging",
    "packId": "LOG-P02",
    "packName": "Premium Boxes",
    "packCode": "P02",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Premium",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P02-02",
    "inputType": "logo",
    "name": "Black matte gold foil box",
    "category": "Packaging",
    "packId": "LOG-P02",
    "packName": "Premium Boxes",
    "packCode": "P02",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Premium",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P02-03",
    "inputType": "logo",
    "name": "Magnetic gift box",
    "category": "Packaging",
    "packId": "LOG-P02",
    "packName": "Premium Boxes",
    "packCode": "P02",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Premium",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P02-04",
    "inputType": "logo",
    "name": "Drawer box open",
    "category": "Packaging",
    "packId": "LOG-P02",
    "packName": "Premium Boxes",
    "packCode": "P02",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Premium",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P02-05",
    "inputType": "logo",
    "name": "Rigid box ribbon",
    "category": "Packaging",
    "packId": "LOG-P02",
    "packName": "Premium Boxes",
    "packCode": "P02",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Premium",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P02-06",
    "inputType": "logo",
    "name": "Jewelry box velvet",
    "category": "Packaging",
    "packId": "LOG-P02",
    "packName": "Premium Boxes",
    "packCode": "P02",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Premium",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P02-07",
    "inputType": "logo",
    "name": "Watch box close-up",
    "category": "Packaging",
    "packId": "LOG-P02",
    "packName": "Premium Boxes",
    "packCode": "P02",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Premium",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P02-08",
    "inputType": "logo",
    "name": "Subscription box spread",
    "category": "Packaging",
    "packId": "LOG-P02",
    "packName": "Premium Boxes",
    "packCode": "P02",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Premium",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P02-09",
    "inputType": "logo",
    "name": "Gift box lid",
    "category": "Packaging",
    "packId": "LOG-P02",
    "packName": "Premium Boxes",
    "packCode": "P02",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Premium",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P02-10",
    "inputType": "logo",
    "name": "Luxury box pedestal",
    "category": "Packaging",
    "packId": "LOG-P02",
    "packName": "Premium Boxes",
    "packCode": "P02",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Premium",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P03-01",
    "inputType": "logo",
    "name": "Coffee bag standing",
    "category": "Packaging",
    "packId": "LOG-P03",
    "packName": "Food Packaging",
    "packCode": "P03",
    "output": "image",
    "surface": "Bag",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Cafe",
    "format": "Square",
    "tags": [
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P03-02",
    "inputType": "logo",
    "name": "Tea pouch label",
    "category": "Packaging",
    "packId": "LOG-P03",
    "packName": "Food Packaging",
    "packCode": "P03",
    "output": "image",
    "surface": "Bag",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P03-03",
    "inputType": "logo",
    "name": "Bakery paper bag",
    "category": "Packaging",
    "packId": "LOG-P03",
    "packName": "Food Packaging",
    "packCode": "P03",
    "output": "image",
    "surface": "Bag",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P03-04",
    "inputType": "logo",
    "name": "Takeout box",
    "category": "Packaging",
    "packId": "LOG-P03",
    "packName": "Food Packaging",
    "packCode": "P03",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P03-05",
    "inputType": "logo",
    "name": "Pizza box top",
    "category": "Packaging",
    "packId": "LOG-P03",
    "packName": "Food Packaging",
    "packCode": "P03",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P03-06",
    "inputType": "logo",
    "name": "Sauce jar label",
    "category": "Packaging",
    "packId": "LOG-P03",
    "packName": "Food Packaging",
    "packCode": "P03",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P03-07",
    "inputType": "logo",
    "name": "Honey jar lid",
    "category": "Packaging",
    "packId": "LOG-P03",
    "packName": "Food Packaging",
    "packCode": "P03",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P03-08",
    "inputType": "logo",
    "name": "Cereal box",
    "category": "Packaging",
    "packId": "LOG-P03",
    "packName": "Food Packaging",
    "packCode": "P03",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P03-09",
    "inputType": "logo",
    "name": "Chocolate bar wrapper",
    "category": "Packaging",
    "packId": "LOG-P03",
    "packName": "Food Packaging",
    "packCode": "P03",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P03-10",
    "inputType": "logo",
    "name": "Snack pouch",
    "category": "Packaging",
    "packId": "LOG-P03",
    "packName": "Food Packaging",
    "packCode": "P03",
    "output": "image",
    "surface": "Bag",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P04-01",
    "inputType": "logo",
    "name": "Wine bottle label",
    "category": "Packaging",
    "packId": "LOG-P04",
    "packName": "Beverage Packaging",
    "packCode": "P04",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P04-02",
    "inputType": "logo",
    "name": "Beer can wrap",
    "category": "Packaging",
    "packId": "LOG-P04",
    "packName": "Beverage Packaging",
    "packCode": "P04",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P04-03",
    "inputType": "logo",
    "name": "Craft beer bottle",
    "category": "Packaging",
    "packId": "LOG-P04",
    "packName": "Beverage Packaging",
    "packCode": "P04",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P04-04",
    "inputType": "logo",
    "name": "Sparkling water can",
    "category": "Packaging",
    "packId": "LOG-P04",
    "packName": "Beverage Packaging",
    "packCode": "P04",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P04-05",
    "inputType": "logo",
    "name": "Juice bottle label",
    "category": "Packaging",
    "packId": "LOG-P04",
    "packName": "Beverage Packaging",
    "packCode": "P04",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P04-06",
    "inputType": "logo",
    "name": "Kombucha bottle",
    "category": "Packaging",
    "packId": "LOG-P04",
    "packName": "Beverage Packaging",
    "packCode": "P04",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P04-07",
    "inputType": "logo",
    "name": "Whiskey label",
    "category": "Packaging",
    "packId": "LOG-P04",
    "packName": "Beverage Packaging",
    "packCode": "P04",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P04-08",
    "inputType": "logo",
    "name": "Milk carton",
    "category": "Packaging",
    "packId": "LOG-P04",
    "packName": "Beverage Packaging",
    "packCode": "P04",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P04-09",
    "inputType": "logo",
    "name": "Soda can lineup",
    "category": "Packaging",
    "packId": "LOG-P04",
    "packName": "Beverage Packaging",
    "packCode": "P04",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P04-10",
    "inputType": "logo",
    "name": "Champagne neck label",
    "category": "Packaging",
    "packId": "LOG-P04",
    "packName": "Beverage Packaging",
    "packCode": "P04",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P05-01",
    "inputType": "logo",
    "name": "Cosmetic dropper bottle",
    "category": "Packaging",
    "packId": "LOG-P05",
    "packName": "Beauty Packaging",
    "packCode": "P05",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "beauty",
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P05-02",
    "inputType": "logo",
    "name": "Skincare jar lid",
    "category": "Packaging",
    "packId": "LOG-P05",
    "packName": "Beauty Packaging",
    "packCode": "P05",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "beauty",
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P05-03",
    "inputType": "logo",
    "name": "Lotion pump bottle",
    "category": "Packaging",
    "packId": "LOG-P05",
    "packName": "Beauty Packaging",
    "packCode": "P05",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "beauty",
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P05-04",
    "inputType": "logo",
    "name": "Shampoo bottle",
    "category": "Packaging",
    "packId": "LOG-P05",
    "packName": "Beauty Packaging",
    "packCode": "P05",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "beauty",
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P05-05",
    "inputType": "logo",
    "name": "Lip balm tube",
    "category": "Packaging",
    "packId": "LOG-P05",
    "packName": "Beauty Packaging",
    "packCode": "P05",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "beauty",
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P05-06",
    "inputType": "logo",
    "name": "Perfume box",
    "category": "Packaging",
    "packId": "LOG-P05",
    "packName": "Beauty Packaging",
    "packCode": "P05",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "beauty",
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P05-07",
    "inputType": "logo",
    "name": "Soap bar wrapped paper",
    "category": "Packaging",
    "packId": "LOG-P05",
    "packName": "Beauty Packaging",
    "packCode": "P05",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "beauty",
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P05-08",
    "inputType": "logo",
    "name": "Candle label",
    "category": "Packaging",
    "packId": "LOG-P05",
    "packName": "Beauty Packaging",
    "packCode": "P05",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "beauty",
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P05-09",
    "inputType": "logo",
    "name": "Sunscreen tube",
    "category": "Packaging",
    "packId": "LOG-P05",
    "packName": "Beauty Packaging",
    "packCode": "P05",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "beauty",
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P05-10",
    "inputType": "logo",
    "name": "Makeup palette",
    "category": "Packaging",
    "packId": "LOG-P05",
    "packName": "Beauty Packaging",
    "packCode": "P05",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "beauty",
      "logo",
      "packaging"
    ]
  },
  {
    "id": "LOG-P06-01",
    "inputType": "logo",
    "name": "Shopping bag and box",
    "category": "Packaging",
    "packId": "LOG-P06",
    "packName": "Retail Brand Systems",
    "packCode": "P06",
    "output": "image",
    "surface": "Bag",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "logo",
      "packaging",
      "retail"
    ]
  },
  {
    "id": "LOG-P06-02",
    "inputType": "logo",
    "name": "Receipt folder",
    "category": "Packaging",
    "packId": "LOG-P06",
    "packName": "Retail Brand Systems",
    "packCode": "P06",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "logo",
      "packaging",
      "retail"
    ]
  },
  {
    "id": "LOG-P06-03",
    "inputType": "logo",
    "name": "Gift card sleeve",
    "category": "Packaging",
    "packId": "LOG-P06",
    "packName": "Retail Brand Systems",
    "packCode": "P06",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "logo",
      "packaging",
      "retail"
    ]
  },
  {
    "id": "LOG-P06-04",
    "inputType": "logo",
    "name": "Loyalty card and cup",
    "category": "Packaging",
    "packId": "LOG-P06",
    "packName": "Retail Brand Systems",
    "packCode": "P06",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "logo",
      "packaging",
      "retail"
    ]
  },
  {
    "id": "LOG-P06-05",
    "inputType": "logo",
    "name": "Tissue and sticker set",
    "category": "Packaging",
    "packId": "LOG-P06",
    "packName": "Retail Brand Systems",
    "packCode": "P06",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "logo",
      "packaging",
      "retail"
    ]
  },
  {
    "id": "LOG-P06-06",
    "inputType": "logo",
    "name": "Branded ribbon",
    "category": "Packaging",
    "packId": "LOG-P06",
    "packName": "Retail Brand Systems",
    "packCode": "P06",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "logo",
      "packaging",
      "retail"
    ]
  },
  {
    "id": "LOG-P06-07",
    "inputType": "logo",
    "name": "Counter display card",
    "category": "Packaging",
    "packId": "LOG-P06",
    "packName": "Retail Brand Systems",
    "packCode": "P06",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "logo",
      "packaging",
      "retail"
    ]
  },
  {
    "id": "LOG-P06-08",
    "inputType": "logo",
    "name": "Hang tag and bag",
    "category": "Packaging",
    "packId": "LOG-P06",
    "packName": "Retail Brand Systems",
    "packCode": "P06",
    "output": "image",
    "surface": "Bag",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "logo",
      "packaging",
      "retail"
    ]
  },
  {
    "id": "LOG-P06-09",
    "inputType": "logo",
    "name": "Ecommerce insert bundle",
    "category": "Packaging",
    "packId": "LOG-P06",
    "packName": "Retail Brand Systems",
    "packCode": "P06",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "ecommerce",
      "logo",
      "packaging",
      "retail"
    ]
  },
  {
    "id": "LOG-P06-10",
    "inputType": "logo",
    "name": "Retail shelf talker",
    "category": "Packaging",
    "packId": "LOG-P06",
    "packName": "Retail Brand Systems",
    "packCode": "P06",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "logo",
      "packaging",
      "retail"
    ]
  },
  {
    "id": "LOG-D01-01",
    "inputType": "logo",
    "name": "Instagram profile on phone",
    "category": "Digital",
    "packId": "LOG-D01",
    "packName": "Social Profiles",
    "packCode": "D01",
    "output": "image",
    "surface": "Phone",
    "useCase": "Social",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "digital",
      "logo",
      "social"
    ]
  },
  {
    "id": "LOG-D01-02",
    "inputType": "logo",
    "name": "TikTok profile on phone",
    "category": "Digital",
    "packId": "LOG-D01",
    "packName": "Social Profiles",
    "packCode": "D01",
    "output": "image",
    "surface": "Phone",
    "useCase": "Social",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "digital",
      "logo",
      "social"
    ]
  },
  {
    "id": "LOG-D01-03",
    "inputType": "logo",
    "name": "YouTube channel banner",
    "category": "Digital",
    "packId": "LOG-D01",
    "packName": "Social Profiles",
    "packCode": "D01",
    "output": "image",
    "surface": "Signage",
    "useCase": "Social",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Landscape",
    "tags": [
      "digital",
      "logo",
      "social"
    ]
  },
  {
    "id": "LOG-D01-04",
    "inputType": "logo",
    "name": "LinkedIn company page laptop",
    "category": "Digital",
    "packId": "LOG-D01",
    "packName": "Social Profiles",
    "packCode": "D01",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Social",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "digital",
      "logo",
      "social"
    ]
  },
  {
    "id": "LOG-D01-05",
    "inputType": "logo",
    "name": "Facebook page mockup",
    "category": "Digital",
    "packId": "LOG-D01",
    "packName": "Social Profiles",
    "packCode": "D01",
    "output": "image",
    "surface": "Info product",
    "useCase": "Social",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "digital",
      "logo",
      "social"
    ]
  },
  {
    "id": "LOG-D01-06",
    "inputType": "logo",
    "name": "X profile header",
    "category": "Digital",
    "packId": "LOG-D01",
    "packName": "Social Profiles",
    "packCode": "D01",
    "output": "image",
    "surface": "Digital",
    "useCase": "Social",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "digital",
      "logo",
      "social"
    ]
  },
  {
    "id": "LOG-D01-07",
    "inputType": "logo",
    "name": "Pinterest brand board",
    "category": "Digital",
    "packId": "LOG-D01",
    "packName": "Social Profiles",
    "packCode": "D01",
    "output": "image",
    "surface": "Digital",
    "useCase": "Social",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "digital",
      "logo",
      "social"
    ]
  },
  {
    "id": "LOG-D01-08",
    "inputType": "logo",
    "name": "Threads profile",
    "category": "Digital",
    "packId": "LOG-D01",
    "packName": "Social Profiles",
    "packCode": "D01",
    "output": "image",
    "surface": "Digital",
    "useCase": "Social",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "digital",
      "logo",
      "social"
    ]
  },
  {
    "id": "LOG-D01-09",
    "inputType": "logo",
    "name": "Behance portfolio header",
    "category": "Digital",
    "packId": "LOG-D01",
    "packName": "Social Profiles",
    "packCode": "D01",
    "output": "image",
    "surface": "Digital",
    "useCase": "Social",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "digital",
      "logo",
      "social"
    ]
  },
  {
    "id": "LOG-D01-10",
    "inputType": "logo",
    "name": "Dribbble profile card",
    "category": "Digital",
    "packId": "LOG-D01",
    "packName": "Social Profiles",
    "packCode": "D01",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Social",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "digital",
      "logo",
      "social"
    ]
  },
  {
    "id": "LOG-D02-01",
    "inputType": "logo",
    "name": "App icon home screen",
    "category": "Digital",
    "packId": "LOG-D02",
    "packName": "App And Icons",
    "packCode": "D02",
    "output": "image",
    "surface": "Digital",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "digital",
      "logo"
    ]
  },
  {
    "id": "LOG-D02-02",
    "inputType": "logo",
    "name": "App icon App Store page",
    "category": "Digital",
    "packId": "LOG-D02",
    "packName": "App And Icons",
    "packCode": "D02",
    "output": "image",
    "surface": "Digital",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "digital",
      "logo"
    ]
  },
  {
    "id": "LOG-D02-03",
    "inputType": "logo",
    "name": "Favicon browser tab",
    "category": "Digital",
    "packId": "LOG-D02",
    "packName": "App And Icons",
    "packCode": "D02",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Landscape",
    "tags": [
      "digital",
      "logo"
    ]
  },
  {
    "id": "LOG-D02-04",
    "inputType": "logo",
    "name": "iOS widget logo",
    "category": "Digital",
    "packId": "LOG-D02",
    "packName": "App And Icons",
    "packCode": "D02",
    "output": "image",
    "surface": "Digital",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "digital",
      "logo"
    ]
  },
  {
    "id": "LOG-D02-05",
    "inputType": "logo",
    "name": "Android launcher screen",
    "category": "Digital",
    "packId": "LOG-D02",
    "packName": "App And Icons",
    "packCode": "D02",
    "output": "image",
    "surface": "Phone",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "digital",
      "logo"
    ]
  },
  {
    "id": "LOG-D02-06",
    "inputType": "logo",
    "name": "Smartwatch app icon",
    "category": "Digital",
    "packId": "LOG-D02",
    "packName": "App And Icons",
    "packCode": "D02",
    "output": "image",
    "surface": "Digital",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "digital",
      "logo"
    ]
  },
  {
    "id": "LOG-D02-07",
    "inputType": "logo",
    "name": "SaaS login logo",
    "category": "Digital",
    "packId": "LOG-D02",
    "packName": "App And Icons",
    "packCode": "D02",
    "output": "image",
    "surface": "Digital",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "digital",
      "logo",
      "saas"
    ]
  },
  {
    "id": "LOG-D02-08",
    "inputType": "logo",
    "name": "Chrome extension card",
    "category": "Digital",
    "packId": "LOG-D02",
    "packName": "App And Icons",
    "packCode": "D02",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "digital",
      "logo"
    ]
  },
  {
    "id": "LOG-D02-09",
    "inputType": "logo",
    "name": "Desktop app dock icon",
    "category": "Digital",
    "packId": "LOG-D02",
    "packName": "App And Icons",
    "packCode": "D02",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Desk / office",
    "format": "Landscape",
    "tags": [
      "digital",
      "logo"
    ]
  },
  {
    "id": "LOG-D02-10",
    "inputType": "logo",
    "name": "Notification logo",
    "category": "Digital",
    "packId": "LOG-D02",
    "packName": "App And Icons",
    "packCode": "D02",
    "output": "image",
    "surface": "Digital",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "digital",
      "logo"
    ]
  },
  {
    "id": "LOG-D03-01",
    "inputType": "logo",
    "name": "Logo on pitch deck cover",
    "category": "Digital",
    "packId": "LOG-D03",
    "packName": "Presentation Screens",
    "packCode": "D03",
    "output": "image",
    "surface": "Digital",
    "useCase": "Client presentation",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "digital",
      "logo"
    ]
  },
  {
    "id": "LOG-D03-02",
    "inputType": "logo",
    "name": "Webinar holding slide",
    "category": "Digital",
    "packId": "LOG-D03",
    "packName": "Presentation Screens",
    "packCode": "D03",
    "output": "image",
    "surface": "Digital",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "digital",
      "logo"
    ]
  },
  {
    "id": "LOG-D03-03",
    "inputType": "logo",
    "name": "Zoom waiting room",
    "category": "Digital",
    "packId": "LOG-D03",
    "packName": "Presentation Screens",
    "packCode": "D03",
    "output": "image",
    "surface": "Digital",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "digital",
      "logo"
    ]
  },
  {
    "id": "LOG-D03-04",
    "inputType": "logo",
    "name": "TV lobby screen",
    "category": "Digital",
    "packId": "LOG-D03",
    "packName": "Presentation Screens",
    "packCode": "D03",
    "output": "image",
    "surface": "Digital",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "digital",
      "logo"
    ]
  },
  {
    "id": "LOG-D03-05",
    "inputType": "logo",
    "name": "Conference keynote screen",
    "category": "Digital",
    "packId": "LOG-D03",
    "packName": "Presentation Screens",
    "packCode": "D03",
    "output": "image",
    "surface": "Digital",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "digital",
      "logo"
    ]
  },
  {
    "id": "LOG-D03-06",
    "inputType": "logo",
    "name": "Digital menu board",
    "category": "Digital",
    "packId": "LOG-D03",
    "packName": "Presentation Screens",
    "packCode": "D03",
    "output": "image",
    "surface": "Digital",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "digital",
      "logo"
    ]
  },
  {
    "id": "LOG-D03-07",
    "inputType": "logo",
    "name": "Retail POS screen",
    "category": "Digital",
    "packId": "LOG-D03",
    "packName": "Presentation Screens",
    "packCode": "D03",
    "output": "image",
    "surface": "Digital",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "digital",
      "logo",
      "retail"
    ]
  },
  {
    "id": "LOG-D03-08",
    "inputType": "logo",
    "name": "Office dashboard splash",
    "category": "Digital",
    "packId": "LOG-D03",
    "packName": "Presentation Screens",
    "packCode": "D03",
    "output": "image",
    "surface": "Digital",
    "useCase": "Digital launch",
    "style": "Corporate",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "digital",
      "logo"
    ]
  },
  {
    "id": "LOG-D03-09",
    "inputType": "logo",
    "name": "Online course portal",
    "category": "Digital",
    "packId": "LOG-D03",
    "packName": "Presentation Screens",
    "packCode": "D03",
    "output": "image",
    "surface": "Info product",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "digital",
      "logo"
    ]
  },
  {
    "id": "LOG-D03-10",
    "inputType": "logo",
    "name": "Client proposal cover",
    "category": "Digital",
    "packId": "LOG-D03",
    "packName": "Presentation Screens",
    "packCode": "D03",
    "output": "image",
    "surface": "Digital",
    "useCase": "Client presentation",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "digital",
      "logo"
    ]
  },
  {
    "id": "LOG-D04-01",
    "inputType": "logo",
    "name": "Instagram story logo ad",
    "category": "Digital",
    "packId": "LOG-D04",
    "packName": "Social Ads",
    "packCode": "D04",
    "output": "image",
    "surface": "Digital",
    "useCase": "Social",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "digital",
      "logo",
      "social"
    ]
  },
  {
    "id": "LOG-D04-02",
    "inputType": "logo",
    "name": "LinkedIn sponsored post",
    "category": "Digital",
    "packId": "LOG-D04",
    "packName": "Social Ads",
    "packCode": "D04",
    "output": "image",
    "surface": "Digital",
    "useCase": "Social",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "digital",
      "logo",
      "social"
    ]
  },
  {
    "id": "LOG-D04-03",
    "inputType": "logo",
    "name": "YouTube bumper frame",
    "category": "Digital",
    "packId": "LOG-D04",
    "packName": "Social Ads",
    "packCode": "D04",
    "output": "image",
    "surface": "Digital",
    "useCase": "Social",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Landscape",
    "tags": [
      "digital",
      "logo",
      "social"
    ]
  },
  {
    "id": "LOG-D04-04",
    "inputType": "logo",
    "name": "TikTok intro card",
    "category": "Digital",
    "packId": "LOG-D04",
    "packName": "Social Ads",
    "packCode": "D04",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Social",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "digital",
      "logo",
      "social"
    ]
  },
  {
    "id": "LOG-D04-05",
    "inputType": "logo",
    "name": "Facebook carousel first slide",
    "category": "Digital",
    "packId": "LOG-D04",
    "packName": "Social Ads",
    "packCode": "D04",
    "output": "image",
    "surface": "Info product",
    "useCase": "Social",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "digital",
      "logo",
      "social"
    ]
  },
  {
    "id": "LOG-D04-06",
    "inputType": "logo",
    "name": "Pinterest promoted pin",
    "category": "Digital",
    "packId": "LOG-D04",
    "packName": "Social Ads",
    "packCode": "D04",
    "output": "image",
    "surface": "Digital",
    "useCase": "Social",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "digital",
      "logo",
      "social"
    ]
  },
  {
    "id": "LOG-D04-07",
    "inputType": "logo",
    "name": "Podcast cover mockup",
    "category": "Digital",
    "packId": "LOG-D04",
    "packName": "Social Ads",
    "packCode": "D04",
    "output": "image",
    "surface": "Digital",
    "useCase": "Social",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "digital",
      "logo",
      "social"
    ]
  },
  {
    "id": "LOG-D04-08",
    "inputType": "logo",
    "name": "Newsletter header",
    "category": "Digital",
    "packId": "LOG-D04",
    "packName": "Social Ads",
    "packCode": "D04",
    "output": "image",
    "surface": "Digital",
    "useCase": "Social",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "digital",
      "logo",
      "social"
    ]
  },
  {
    "id": "LOG-D04-09",
    "inputType": "logo",
    "name": "Product Hunt launch card",
    "category": "Digital",
    "packId": "LOG-D04",
    "packName": "Social Ads",
    "packCode": "D04",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Social",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "digital",
      "logo",
      "social"
    ]
  },
  {
    "id": "LOG-D04-10",
    "inputType": "logo",
    "name": "Eventbrite header",
    "category": "Digital",
    "packId": "LOG-D04",
    "packName": "Social Ads",
    "packCode": "D04",
    "output": "image",
    "surface": "Digital",
    "useCase": "Social",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "digital",
      "logo",
      "social"
    ]
  },
  {
    "id": "LOG-X01-01",
    "inputType": "logo",
    "name": "Coffee shop identity spread",
    "category": "Mixed",
    "packId": "LOG-X01",
    "packName": "Industry Kits",
    "packCode": "X01",
    "output": "image",
    "surface": "Mixed",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Cafe",
    "format": "Square",
    "tags": [
      "logo",
      "mixed"
    ]
  },
  {
    "id": "LOG-X01-02",
    "inputType": "logo",
    "name": "Fitness studio identity spread",
    "category": "Mixed",
    "packId": "LOG-X01",
    "packName": "Industry Kits",
    "packCode": "X01",
    "output": "image",
    "surface": "Mixed",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "mixed",
      "studio"
    ]
  },
  {
    "id": "LOG-X01-03",
    "inputType": "logo",
    "name": "Beauty brand identity spread",
    "category": "Mixed",
    "packId": "LOG-X01",
    "packName": "Industry Kits",
    "packCode": "X01",
    "output": "image",
    "surface": "Mixed",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "beauty",
      "logo",
      "mixed"
    ]
  },
  {
    "id": "LOG-X01-04",
    "inputType": "logo",
    "name": "Realtor signage kit",
    "category": "Mixed",
    "packId": "LOG-X01",
    "packName": "Industry Kits",
    "packCode": "X01",
    "output": "image",
    "surface": "Signage",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "mixed"
    ]
  },
  {
    "id": "LOG-X01-05",
    "inputType": "logo",
    "name": "Restaurant launch kit",
    "category": "Mixed",
    "packId": "LOG-X01",
    "packName": "Industry Kits",
    "packCode": "X01",
    "output": "image",
    "surface": "Mixed",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "mixed"
    ]
  },
  {
    "id": "LOG-X01-06",
    "inputType": "logo",
    "name": "Law firm stationery kit",
    "category": "Mixed",
    "packId": "LOG-X01",
    "packName": "Industry Kits",
    "packCode": "X01",
    "output": "image",
    "surface": "Mixed",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "mixed"
    ]
  },
  {
    "id": "LOG-X01-07",
    "inputType": "logo",
    "name": "Creator merch kit",
    "category": "Mixed",
    "packId": "LOG-X01",
    "packName": "Industry Kits",
    "packCode": "X01",
    "output": "image",
    "surface": "Mixed",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "creator",
      "logo",
      "mixed"
    ]
  },
  {
    "id": "LOG-X01-08",
    "inputType": "logo",
    "name": "Local service van kit",
    "category": "Mixed",
    "packId": "LOG-X01",
    "packName": "Industry Kits",
    "packCode": "X01",
    "output": "image",
    "surface": "Mixed",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "mixed"
    ]
  },
  {
    "id": "LOG-X01-09",
    "inputType": "logo",
    "name": "Podcast merch kit",
    "category": "Mixed",
    "packId": "LOG-X01",
    "packName": "Industry Kits",
    "packCode": "X01",
    "output": "image",
    "surface": "Mixed",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "mixed"
    ]
  },
  {
    "id": "LOG-X01-10",
    "inputType": "logo",
    "name": "SaaS swag kit",
    "category": "Mixed",
    "packId": "LOG-X01",
    "packName": "Industry Kits",
    "packCode": "X01",
    "output": "image",
    "surface": "Mixed",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "mixed",
      "saas"
    ]
  },
  {
    "id": "LOG-V01-01",
    "inputType": "logo",
    "name": "Logo intro scale-up reveal",
    "category": "Video",
    "packId": "LOG-V01",
    "packName": "Logo Reveals",
    "packCode": "V01",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "logo",
      "video"
    ]
  },
  {
    "id": "LOG-V01-02",
    "inputType": "logo",
    "name": "Soft shadow logo fade-in",
    "category": "Video",
    "packId": "LOG-V01",
    "packName": "Logo Reveals",
    "packCode": "V01",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "logo",
      "video"
    ]
  },
  {
    "id": "LOG-V01-03",
    "inputType": "logo",
    "name": "Metallic logo orbit",
    "category": "Video",
    "packId": "LOG-V01",
    "packName": "Logo Reveals",
    "packCode": "V01",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "logo",
      "video"
    ]
  },
  {
    "id": "LOG-V01-04",
    "inputType": "logo",
    "name": "Glass logo reflection pan",
    "category": "Video",
    "packId": "LOG-V01",
    "packName": "Logo Reveals",
    "packCode": "V01",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "logo",
      "video"
    ]
  },
  {
    "id": "LOG-V01-05",
    "inputType": "logo",
    "name": "Paper logo emboss reveal",
    "category": "Video",
    "packId": "LOG-V01",
    "packName": "Logo Reveals",
    "packCode": "V01",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "logo",
      "video"
    ]
  },
  {
    "id": "LOG-V01-06",
    "inputType": "logo",
    "name": "Neon sign flicker-on",
    "category": "Video",
    "packId": "LOG-V01",
    "packName": "Logo Reveals",
    "packCode": "V01",
    "output": "video",
    "surface": "Signage",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "logo",
      "video"
    ]
  },
  {
    "id": "LOG-V01-07",
    "inputType": "logo",
    "name": "Ink stamp logo press",
    "category": "Video",
    "packId": "LOG-V01",
    "packName": "Logo Reveals",
    "packCode": "V01",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "logo",
      "video"
    ]
  },
  {
    "id": "LOG-V01-08",
    "inputType": "logo",
    "name": "Foil logo glint",
    "category": "Video",
    "packId": "LOG-V01",
    "packName": "Logo Reveals",
    "packCode": "V01",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Premium",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "logo",
      "video"
    ]
  },
  {
    "id": "LOG-V01-09",
    "inputType": "logo",
    "name": "3D logo pedestal turn",
    "category": "Video",
    "packId": "LOG-V01",
    "packName": "Logo Reveals",
    "packCode": "V01",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "video"
    ]
  },
  {
    "id": "LOG-V01-10",
    "inputType": "logo",
    "name": "Minimal logo pulse",
    "category": "Video",
    "packId": "LOG-V01",
    "packName": "Logo Reveals",
    "packCode": "V01",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Minimal",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "logo",
      "video"
    ]
  },
  {
    "id": "LOG-V02-01",
    "inputType": "logo",
    "name": "T-shirt hanger slow push",
    "category": "Video",
    "packId": "LOG-V02",
    "packName": "Apparel Motion",
    "packCode": "V02",
    "output": "video",
    "surface": "T-shirt",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "apparel",
      "logo",
      "video"
    ]
  },
  {
    "id": "LOG-V02-02",
    "inputType": "logo",
    "name": "Hoodie folded pan",
    "category": "Video",
    "packId": "LOG-V02",
    "packName": "Apparel Motion",
    "packCode": "V02",
    "output": "video",
    "surface": "Hoodie / sweatshirt",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "apparel",
      "logo",
      "video"
    ]
  },
  {
    "id": "LOG-V02-03",
    "inputType": "logo",
    "name": "Cap rotation tabletop",
    "category": "Video",
    "packId": "LOG-V02",
    "packName": "Apparel Motion",
    "packCode": "V02",
    "output": "video",
    "surface": "Headwear",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "apparel",
      "logo",
      "video"
    ]
  },
  {
    "id": "LOG-V02-04",
    "inputType": "logo",
    "name": "Tote bag shoulder walk",
    "category": "Video",
    "packId": "LOG-V02",
    "packName": "Apparel Motion",
    "packCode": "V02",
    "output": "video",
    "surface": "Bag",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "apparel",
      "logo",
      "video"
    ]
  },
  {
    "id": "LOG-V02-05",
    "inputType": "logo",
    "name": "Apron cafe counter pan",
    "category": "Video",
    "packId": "LOG-V02",
    "packName": "Apparel Motion",
    "packCode": "V02",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Cafe",
    "format": "Square",
    "tags": [
      "apparel",
      "logo",
      "video"
    ]
  },
  {
    "id": "LOG-V02-06",
    "inputType": "logo",
    "name": "Beanie macro tilt",
    "category": "Video",
    "packId": "LOG-V02",
    "packName": "Apparel Motion",
    "packCode": "V02",
    "output": "video",
    "surface": "Headwear",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "apparel",
      "logo",
      "video"
    ]
  },
  {
    "id": "LOG-V02-07",
    "inputType": "logo",
    "name": "Jacket patch close-up",
    "category": "Video",
    "packId": "LOG-V02",
    "packName": "Apparel Motion",
    "packCode": "V02",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "apparel",
      "logo",
      "video"
    ]
  },
  {
    "id": "LOG-V02-08",
    "inputType": "logo",
    "name": "Shirt stack parallax",
    "category": "Video",
    "packId": "LOG-V02",
    "packName": "Apparel Motion",
    "packCode": "V02",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "apparel",
      "logo",
      "video"
    ]
  },
  {
    "id": "LOG-V02-09",
    "inputType": "logo",
    "name": "Gym tank rack slide",
    "category": "Video",
    "packId": "LOG-V02",
    "packName": "Apparel Motion",
    "packCode": "V02",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "apparel",
      "logo",
      "video"
    ]
  },
  {
    "id": "LOG-V02-10",
    "inputType": "logo",
    "name": "Label tag swing",
    "category": "Video",
    "packId": "LOG-V02",
    "packName": "Apparel Motion",
    "packCode": "V02",
    "output": "video",
    "surface": "Packaging",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "apparel",
      "logo",
      "video"
    ]
  },
  {
    "id": "LOG-V03-01",
    "inputType": "logo",
    "name": "Rotating product box",
    "category": "Video",
    "packId": "LOG-V03",
    "packName": "Packaging Motion",
    "packCode": "V03",
    "output": "video",
    "surface": "Packaging",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "logo",
      "packaging",
      "video"
    ]
  },
  {
    "id": "LOG-V03-02",
    "inputType": "logo",
    "name": "Mailer box unboxing",
    "category": "Video",
    "packId": "LOG-V03",
    "packName": "Packaging Motion",
    "packCode": "V03",
    "output": "video",
    "surface": "Packaging",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "logo",
      "packaging",
      "video"
    ]
  },
  {
    "id": "LOG-V03-03",
    "inputType": "logo",
    "name": "Coffee bag turntable",
    "category": "Video",
    "packId": "LOG-V03",
    "packName": "Packaging Motion",
    "packCode": "V03",
    "output": "video",
    "surface": "Bag",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Cafe",
    "format": "Square",
    "tags": [
      "logo",
      "packaging",
      "video"
    ]
  },
  {
    "id": "LOG-V03-04",
    "inputType": "logo",
    "name": "Bottle label slow pan",
    "category": "Video",
    "packId": "LOG-V03",
    "packName": "Packaging Motion",
    "packCode": "V03",
    "output": "video",
    "surface": "Drinkware",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "logo",
      "packaging",
      "video"
    ]
  },
  {
    "id": "LOG-V03-05",
    "inputType": "logo",
    "name": "Candle label push-in",
    "category": "Video",
    "packId": "LOG-V03",
    "packName": "Packaging Motion",
    "packCode": "V03",
    "output": "video",
    "surface": "Drinkware",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "logo",
      "packaging",
      "video"
    ]
  },
  {
    "id": "LOG-V03-06",
    "inputType": "logo",
    "name": "Soap wrap slide",
    "category": "Video",
    "packId": "LOG-V03",
    "packName": "Packaging Motion",
    "packCode": "V03",
    "output": "video",
    "surface": "Packaging",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "logo",
      "packaging",
      "video"
    ]
  },
  {
    "id": "LOG-V03-07",
    "inputType": "logo",
    "name": "Gift box lid reveal",
    "category": "Video",
    "packId": "LOG-V03",
    "packName": "Packaging Motion",
    "packCode": "V03",
    "output": "video",
    "surface": "Packaging",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "logo",
      "packaging",
      "video"
    ]
  },
  {
    "id": "LOG-V03-08",
    "inputType": "logo",
    "name": "Beer can rotation",
    "category": "Video",
    "packId": "LOG-V03",
    "packName": "Packaging Motion",
    "packCode": "V03",
    "output": "video",
    "surface": "Drinkware",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "logo",
      "packaging",
      "video"
    ]
  },
  {
    "id": "LOG-V03-09",
    "inputType": "logo",
    "name": "Cosmetic bottle orbit",
    "category": "Video",
    "packId": "LOG-V03",
    "packName": "Packaging Motion",
    "packCode": "V03",
    "output": "video",
    "surface": "Drinkware",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "logo",
      "packaging",
      "video"
    ]
  },
  {
    "id": "LOG-V03-10",
    "inputType": "logo",
    "name": "Shopping bag sway",
    "category": "Video",
    "packId": "LOG-V03",
    "packName": "Packaging Motion",
    "packCode": "V03",
    "output": "video",
    "surface": "Bag",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "logo",
      "packaging",
      "video"
    ]
  },
  {
    "id": "LOG-V04-01",
    "inputType": "logo",
    "name": "Storefront sign street pan",
    "category": "Video",
    "packId": "LOG-V04",
    "packName": "Signage Motion",
    "packCode": "V04",
    "output": "video",
    "surface": "Signage",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "logo",
      "video"
    ]
  },
  {
    "id": "LOG-V04-02",
    "inputType": "logo",
    "name": "Billboard drive-by",
    "category": "Video",
    "packId": "LOG-V04",
    "packName": "Signage Motion",
    "packCode": "V04",
    "output": "video",
    "surface": "Signage",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "logo",
      "video"
    ]
  },
  {
    "id": "LOG-V04-03",
    "inputType": "logo",
    "name": "Neon brick wall reveal",
    "category": "Video",
    "packId": "LOG-V04",
    "packName": "Signage Motion",
    "packCode": "V04",
    "output": "video",
    "surface": "Signage",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "logo",
      "video"
    ]
  },
  {
    "id": "LOG-V04-04",
    "inputType": "logo",
    "name": "Office reception pan",
    "category": "Video",
    "packId": "LOG-V04",
    "packName": "Signage Motion",
    "packCode": "V04",
    "output": "video",
    "surface": "Signage",
    "useCase": "Motion ad",
    "style": "Corporate",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "logo",
      "video"
    ]
  },
  {
    "id": "LOG-V04-05",
    "inputType": "logo",
    "name": "Van wrap rolling street",
    "category": "Video",
    "packId": "LOG-V04",
    "packName": "Signage Motion",
    "packCode": "V04",
    "output": "video",
    "surface": "Signage",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Urban",
    "format": "Square",
    "tags": [
      "logo",
      "video"
    ]
  },
  {
    "id": "LOG-V04-06",
    "inputType": "logo",
    "name": "Subway poster parallax",
    "category": "Video",
    "packId": "LOG-V04",
    "packName": "Signage Motion",
    "packCode": "V04",
    "output": "video",
    "surface": "Signage",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Urban",
    "format": "Square",
    "tags": [
      "logo",
      "video"
    ]
  },
  {
    "id": "LOG-V04-07",
    "inputType": "logo",
    "name": "Trade show booth walk-by",
    "category": "Video",
    "packId": "LOG-V04",
    "packName": "Signage Motion",
    "packCode": "V04",
    "output": "video",
    "surface": "Signage",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "logo",
      "video"
    ]
  },
  {
    "id": "LOG-V04-08",
    "inputType": "logo",
    "name": "A-frame sign sidewalk push",
    "category": "Video",
    "packId": "LOG-V04",
    "packName": "Signage Motion",
    "packCode": "V04",
    "output": "video",
    "surface": "Signage",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "logo",
      "video"
    ]
  },
  {
    "id": "LOG-V04-09",
    "inputType": "logo",
    "name": "Window decal reflection",
    "category": "Video",
    "packId": "LOG-V04",
    "packName": "Signage Motion",
    "packCode": "V04",
    "output": "video",
    "surface": "Signage",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "logo",
      "video"
    ]
  },
  {
    "id": "LOG-V04-10",
    "inputType": "logo",
    "name": "Stadium LED logo sweep",
    "category": "Video",
    "packId": "LOG-V04",
    "packName": "Signage Motion",
    "packCode": "V04",
    "output": "video",
    "surface": "Signage",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "video"
    ]
  },
  {
    "id": "LOG-V05-01",
    "inputType": "logo",
    "name": "App icon home screen zoom",
    "category": "Video",
    "packId": "LOG-V05",
    "packName": "Digital Motion",
    "packCode": "V05",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "logo",
      "video"
    ]
  },
  {
    "id": "LOG-V05-02",
    "inputType": "logo",
    "name": "Instagram profile scroll",
    "category": "Video",
    "packId": "LOG-V05",
    "packName": "Digital Motion",
    "packCode": "V05",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Portrait",
    "tags": [
      "logo",
      "video"
    ]
  },
  {
    "id": "LOG-V05-03",
    "inputType": "logo",
    "name": "YouTube banner sweep",
    "category": "Video",
    "packId": "LOG-V05",
    "packName": "Digital Motion",
    "packCode": "V05",
    "output": "video",
    "surface": "Signage",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "logo",
      "video"
    ]
  },
  {
    "id": "LOG-V05-04",
    "inputType": "logo",
    "name": "LinkedIn page pan",
    "category": "Video",
    "packId": "LOG-V05",
    "packName": "Digital Motion",
    "packCode": "V05",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "logo",
      "video"
    ]
  },
  {
    "id": "LOG-V05-05",
    "inputType": "logo",
    "name": "Pitch deck logo reveal",
    "category": "Video",
    "packId": "LOG-V05",
    "packName": "Digital Motion",
    "packCode": "V05",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "logo",
      "video"
    ]
  },
  {
    "id": "LOG-V05-06",
    "inputType": "logo",
    "name": "Webinar holding slide motion",
    "category": "Video",
    "packId": "LOG-V05",
    "packName": "Digital Motion",
    "packCode": "V05",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "logo",
      "video"
    ]
  },
  {
    "id": "LOG-V05-07",
    "inputType": "logo",
    "name": "Podcast cover turntable",
    "category": "Video",
    "packId": "LOG-V05",
    "packName": "Digital Motion",
    "packCode": "V05",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "logo",
      "video"
    ]
  },
  {
    "id": "LOG-V05-08",
    "inputType": "logo",
    "name": "Product Hunt card pop",
    "category": "Video",
    "packId": "LOG-V05",
    "packName": "Digital Motion",
    "packCode": "V05",
    "output": "video",
    "surface": "Stationery",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "logo",
      "video"
    ]
  },
  {
    "id": "LOG-V05-09",
    "inputType": "logo",
    "name": "Social ad carousel slide",
    "category": "Video",
    "packId": "LOG-V05",
    "packName": "Digital Motion",
    "packCode": "V05",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "logo",
      "social",
      "video"
    ]
  },
  {
    "id": "LOG-V05-10",
    "inputType": "logo",
    "name": "Smartwatch logo wrist turn",
    "category": "Video",
    "packId": "LOG-V05",
    "packName": "Digital Motion",
    "packCode": "V05",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "logo",
      "video"
    ]
  },
  {
    "id": "SCR-P01-01",
    "inputType": "screenshot",
    "name": "iPhone in hand cafe",
    "category": "Phone",
    "packId": "SCR-P01",
    "packName": "iPhone Core",
    "packCode": "P01",
    "output": "image",
    "surface": "Phone",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Cafe",
    "format": "Portrait",
    "tags": [
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-P01-02",
    "inputType": "screenshot",
    "name": "iPhone on marble desk",
    "category": "Phone",
    "packId": "SCR-P01",
    "packName": "iPhone Core",
    "packCode": "P01",
    "output": "image",
    "surface": "Phone",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Desk / office",
    "format": "Portrait",
    "tags": [
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-P01-03",
    "inputType": "screenshot",
    "name": "iPhone wooden desk coffee",
    "category": "Phone",
    "packId": "SCR-P01",
    "packName": "iPhone Core",
    "packCode": "P01",
    "output": "image",
    "surface": "Phone",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Cafe",
    "format": "Portrait",
    "tags": [
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-P01-04",
    "inputType": "screenshot",
    "name": "iPhone bedside lamp",
    "category": "Phone",
    "packId": "SCR-P01",
    "packName": "iPhone Core",
    "packCode": "P01",
    "output": "image",
    "surface": "Phone",
    "useCase": "Brand mockup",
    "style": "Cozy",
    "environment": "Home",
    "format": "Portrait",
    "tags": [
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-P01-05",
    "inputType": "screenshot",
    "name": "iPhone pulled from pocket",
    "category": "Phone",
    "packId": "SCR-P01",
    "packName": "iPhone Core",
    "packCode": "P01",
    "output": "image",
    "surface": "Phone",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-P01-06",
    "inputType": "screenshot",
    "name": "Two iPhones side by side",
    "category": "Phone",
    "packId": "SCR-P01",
    "packName": "iPhone Core",
    "packCode": "P01",
    "output": "image",
    "surface": "Phone",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-P01-07",
    "inputType": "screenshot",
    "name": "iPhone white studio sweep",
    "category": "Phone",
    "packId": "SCR-P01",
    "packName": "iPhone Core",
    "packCode": "P01",
    "output": "image",
    "surface": "Phone",
    "useCase": "Brand mockup",
    "style": "Minimal",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "phone",
      "screenshot",
      "studio"
    ]
  },
  {
    "id": "SCR-P01-08",
    "inputType": "screenshot",
    "name": "iPhone black studio sweep",
    "category": "Phone",
    "packId": "SCR-P01",
    "packName": "iPhone Core",
    "packCode": "P01",
    "output": "image",
    "surface": "Phone",
    "useCase": "Brand mockup",
    "style": "Dramatic",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "phone",
      "screenshot",
      "studio"
    ]
  },
  {
    "id": "SCR-P01-09",
    "inputType": "screenshot",
    "name": "iPhone hand close-up",
    "category": "Phone",
    "packId": "SCR-P01",
    "packName": "iPhone Core",
    "packCode": "P01",
    "output": "image",
    "surface": "Phone",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-P01-10",
    "inputType": "screenshot",
    "name": "iPhone over shoulder",
    "category": "Phone",
    "packId": "SCR-P01",
    "packName": "iPhone Core",
    "packCode": "P01",
    "output": "image",
    "surface": "Phone",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-P02-01",
    "inputType": "screenshot",
    "name": "iPhone on train commute",
    "category": "Phone",
    "packId": "SCR-P02",
    "packName": "iPhone Lifestyle",
    "packCode": "P02",
    "output": "image",
    "surface": "Phone",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Urban",
    "format": "Portrait",
    "tags": [
      "lifestyle",
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-P02-02",
    "inputType": "screenshot",
    "name": "iPhone at airport gate",
    "category": "Phone",
    "packId": "SCR-P02",
    "packName": "iPhone Lifestyle",
    "packCode": "P02",
    "output": "image",
    "surface": "Phone",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Urban",
    "format": "Portrait",
    "tags": [
      "lifestyle",
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-P02-03",
    "inputType": "screenshot",
    "name": "iPhone in gym locker",
    "category": "Phone",
    "packId": "SCR-P02",
    "packName": "iPhone Lifestyle",
    "packCode": "P02",
    "output": "image",
    "surface": "Phone",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "lifestyle",
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-P02-04",
    "inputType": "screenshot",
    "name": "iPhone on restaurant table",
    "category": "Phone",
    "packId": "SCR-P02",
    "packName": "iPhone Lifestyle",
    "packCode": "P02",
    "output": "image",
    "surface": "Phone",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "lifestyle",
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-P02-05",
    "inputType": "screenshot",
    "name": "iPhone beside notebook",
    "category": "Phone",
    "packId": "SCR-P02",
    "packName": "iPhone Lifestyle",
    "packCode": "P02",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "lifestyle",
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-P02-06",
    "inputType": "screenshot",
    "name": "iPhone in car mount",
    "category": "Phone",
    "packId": "SCR-P02",
    "packName": "iPhone Lifestyle",
    "packCode": "P02",
    "output": "image",
    "surface": "Phone",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "lifestyle",
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-P02-07",
    "inputType": "screenshot",
    "name": "iPhone on sofa blanket",
    "category": "Phone",
    "packId": "SCR-P02",
    "packName": "iPhone Lifestyle",
    "packCode": "P02",
    "output": "image",
    "surface": "Phone",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Portrait",
    "tags": [
      "lifestyle",
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-P02-08",
    "inputType": "screenshot",
    "name": "iPhone on kitchen counter",
    "category": "Phone",
    "packId": "SCR-P02",
    "packName": "iPhone Lifestyle",
    "packCode": "P02",
    "output": "image",
    "surface": "Phone",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Portrait",
    "tags": [
      "lifestyle",
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-P02-09",
    "inputType": "screenshot",
    "name": "iPhone at coworking table",
    "category": "Phone",
    "packId": "SCR-P02",
    "packName": "iPhone Lifestyle",
    "packCode": "P02",
    "output": "image",
    "surface": "Phone",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Desk / office",
    "format": "Portrait",
    "tags": [
      "lifestyle",
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-P02-10",
    "inputType": "screenshot",
    "name": "iPhone on retail counter",
    "category": "Phone",
    "packId": "SCR-P02",
    "packName": "iPhone Lifestyle",
    "packCode": "P02",
    "output": "image",
    "surface": "Phone",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Portrait",
    "tags": [
      "lifestyle",
      "phone",
      "retail",
      "screenshot"
    ]
  },
  {
    "id": "SCR-P03-01",
    "inputType": "screenshot",
    "name": "Android phone hand hold",
    "category": "Phone",
    "packId": "SCR-P03",
    "packName": "Android Phones",
    "packCode": "P03",
    "output": "image",
    "surface": "Phone",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-P03-02",
    "inputType": "screenshot",
    "name": "Pixel phone studio sweep",
    "category": "Phone",
    "packId": "SCR-P03",
    "packName": "Android Phones",
    "packCode": "P03",
    "output": "image",
    "surface": "Phone",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "phone",
      "screenshot",
      "studio"
    ]
  },
  {
    "id": "SCR-P03-03",
    "inputType": "screenshot",
    "name": "Samsung phone desk",
    "category": "Phone",
    "packId": "SCR-P03",
    "packName": "Android Phones",
    "packCode": "P03",
    "output": "image",
    "surface": "Phone",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Desk / office",
    "format": "Portrait",
    "tags": [
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-P03-04",
    "inputType": "screenshot",
    "name": "Android dark mode floating",
    "category": "Phone",
    "packId": "SCR-P03",
    "packName": "Android Phones",
    "packCode": "P03",
    "output": "image",
    "surface": "Phone",
    "useCase": "Brand mockup",
    "style": "Dramatic",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-P03-05",
    "inputType": "screenshot",
    "name": "Android phone cafe",
    "category": "Phone",
    "packId": "SCR-P03",
    "packName": "Android Phones",
    "packCode": "P03",
    "output": "image",
    "surface": "Phone",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Cafe",
    "format": "Portrait",
    "tags": [
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-P03-06",
    "inputType": "screenshot",
    "name": "Android phone car dashboard",
    "category": "Phone",
    "packId": "SCR-P03",
    "packName": "Android Phones",
    "packCode": "P03",
    "output": "image",
    "surface": "Phone",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-P03-07",
    "inputType": "screenshot",
    "name": "Android phone gym scene",
    "category": "Phone",
    "packId": "SCR-P03",
    "packName": "Android Phones",
    "packCode": "P03",
    "output": "image",
    "surface": "Phone",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-P03-08",
    "inputType": "screenshot",
    "name": "Android phone retail checkout",
    "category": "Phone",
    "packId": "SCR-P03",
    "packName": "Android Phones",
    "packCode": "P03",
    "output": "image",
    "surface": "Phone",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Portrait",
    "tags": [
      "phone",
      "retail",
      "screenshot"
    ]
  },
  {
    "id": "SCR-P03-09",
    "inputType": "screenshot",
    "name": "Android phone bedside",
    "category": "Phone",
    "packId": "SCR-P03",
    "packName": "Android Phones",
    "packCode": "P03",
    "output": "image",
    "surface": "Phone",
    "useCase": "Brand mockup",
    "style": "Cozy",
    "environment": "Home",
    "format": "Portrait",
    "tags": [
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-P03-10",
    "inputType": "screenshot",
    "name": "Android phone outdoor hand",
    "category": "Phone",
    "packId": "SCR-P03",
    "packName": "Android Phones",
    "packCode": "P03",
    "output": "image",
    "surface": "Phone",
    "useCase": "Brand mockup",
    "style": "Lifestyle",
    "environment": "Outdoor",
    "format": "Portrait",
    "tags": [
      "outdoor",
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-P04-01",
    "inputType": "screenshot",
    "name": "App Store product page",
    "category": "Phone",
    "packId": "SCR-P04",
    "packName": "App Store And Launch",
    "packCode": "P04",
    "output": "image",
    "surface": "Phone",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Portrait",
    "tags": [
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-P04-02",
    "inputType": "screenshot",
    "name": "Google Play product page",
    "category": "Phone",
    "packId": "SCR-P04",
    "packName": "App Store And Launch",
    "packCode": "P04",
    "output": "image",
    "surface": "Phone",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Portrait",
    "tags": [
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-P04-03",
    "inputType": "screenshot",
    "name": "iPhone app icon grid",
    "category": "Phone",
    "packId": "SCR-P04",
    "packName": "App Store And Launch",
    "packCode": "P04",
    "output": "image",
    "surface": "Phone",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Portrait",
    "tags": [
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-P04-04",
    "inputType": "screenshot",
    "name": "Phone notification promo",
    "category": "Phone",
    "packId": "SCR-P04",
    "packName": "App Store And Launch",
    "packCode": "P04",
    "output": "image",
    "surface": "Phone",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Portrait",
    "tags": [
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-P04-05",
    "inputType": "screenshot",
    "name": "App onboarding screen hand",
    "category": "Phone",
    "packId": "SCR-P04",
    "packName": "App Store And Launch",
    "packCode": "P04",
    "output": "image",
    "surface": "Phone",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Portrait",
    "tags": [
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-P04-06",
    "inputType": "screenshot",
    "name": "App feature carousel",
    "category": "Phone",
    "packId": "SCR-P04",
    "packName": "App Store And Launch",
    "packCode": "P04",
    "output": "image",
    "surface": "Phone",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Portrait",
    "tags": [
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-P04-07",
    "inputType": "screenshot",
    "name": "App rating screen",
    "category": "Phone",
    "packId": "SCR-P04",
    "packName": "App Store And Launch",
    "packCode": "P04",
    "output": "image",
    "surface": "Phone",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Portrait",
    "tags": [
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-P04-08",
    "inputType": "screenshot",
    "name": "App launch announcement",
    "category": "Phone",
    "packId": "SCR-P04",
    "packName": "App Store And Launch",
    "packCode": "P04",
    "output": "image",
    "surface": "Phone",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Portrait",
    "tags": [
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-P04-09",
    "inputType": "screenshot",
    "name": "Mobile landing page phone",
    "category": "Phone",
    "packId": "SCR-P04",
    "packName": "App Store And Launch",
    "packCode": "P04",
    "output": "image",
    "surface": "Phone",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Portrait",
    "tags": [
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-P04-10",
    "inputType": "screenshot",
    "name": "Mobile checkout screen",
    "category": "Phone",
    "packId": "SCR-P04",
    "packName": "App Store And Launch",
    "packCode": "P04",
    "output": "image",
    "surface": "Phone",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Portrait",
    "tags": [
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-P05-01",
    "inputType": "screenshot",
    "name": "Instagram feed on phone",
    "category": "Phone",
    "packId": "SCR-P05",
    "packName": "Social And Creator Apps",
    "packCode": "P05",
    "output": "image",
    "surface": "Phone",
    "useCase": "Social",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "creator",
      "phone",
      "screenshot",
      "social"
    ]
  },
  {
    "id": "SCR-P05-02",
    "inputType": "screenshot",
    "name": "TikTok profile on phone",
    "category": "Phone",
    "packId": "SCR-P05",
    "packName": "Social And Creator Apps",
    "packCode": "P05",
    "output": "image",
    "surface": "Phone",
    "useCase": "Social",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "creator",
      "phone",
      "screenshot",
      "social"
    ]
  },
  {
    "id": "SCR-P05-03",
    "inputType": "screenshot",
    "name": "YouTube mobile channel",
    "category": "Phone",
    "packId": "SCR-P05",
    "packName": "Social And Creator Apps",
    "packCode": "P05",
    "output": "image",
    "surface": "Phone",
    "useCase": "Social",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "creator",
      "phone",
      "screenshot",
      "social"
    ]
  },
  {
    "id": "SCR-P05-04",
    "inputType": "screenshot",
    "name": "Podcast app screen",
    "category": "Phone",
    "packId": "SCR-P05",
    "packName": "Social And Creator Apps",
    "packCode": "P05",
    "output": "image",
    "surface": "Phone",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "creator",
      "phone",
      "screenshot",
      "social"
    ]
  },
  {
    "id": "SCR-P05-05",
    "inputType": "screenshot",
    "name": "Creator course app",
    "category": "Phone",
    "packId": "SCR-P05",
    "packName": "Social And Creator Apps",
    "packCode": "P05",
    "output": "image",
    "surface": "Phone",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "creator",
      "phone",
      "screenshot",
      "social"
    ]
  },
  {
    "id": "SCR-P05-06",
    "inputType": "screenshot",
    "name": "Newsletter app screen",
    "category": "Phone",
    "packId": "SCR-P05",
    "packName": "Social And Creator Apps",
    "packCode": "P05",
    "output": "image",
    "surface": "Phone",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "creator",
      "phone",
      "screenshot",
      "social"
    ]
  },
  {
    "id": "SCR-P05-07",
    "inputType": "screenshot",
    "name": "Community app phone",
    "category": "Phone",
    "packId": "SCR-P05",
    "packName": "Social And Creator Apps",
    "packCode": "P05",
    "output": "image",
    "surface": "Phone",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "creator",
      "phone",
      "screenshot",
      "social"
    ]
  },
  {
    "id": "SCR-P05-08",
    "inputType": "screenshot",
    "name": "Booking app phone",
    "category": "Phone",
    "packId": "SCR-P05",
    "packName": "Social And Creator Apps",
    "packCode": "P05",
    "output": "image",
    "surface": "Phone",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "creator",
      "phone",
      "screenshot",
      "social"
    ]
  },
  {
    "id": "SCR-P05-09",
    "inputType": "screenshot",
    "name": "Fitness tracking app",
    "category": "Phone",
    "packId": "SCR-P05",
    "packName": "Social And Creator Apps",
    "packCode": "P05",
    "output": "image",
    "surface": "Phone",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "creator",
      "phone",
      "screenshot",
      "social"
    ]
  },
  {
    "id": "SCR-P05-10",
    "inputType": "screenshot",
    "name": "Habit app morning",
    "category": "Phone",
    "packId": "SCR-P05",
    "packName": "Social And Creator Apps",
    "packCode": "P05",
    "output": "image",
    "surface": "Phone",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "creator",
      "phone",
      "screenshot",
      "social"
    ]
  },
  {
    "id": "SCR-L01-01",
    "inputType": "screenshot",
    "name": "MacBook on wood desk",
    "category": "Laptop",
    "packId": "SCR-L01",
    "packName": "MacBook Core",
    "packCode": "L01",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "laptop",
      "screenshot"
    ]
  },
  {
    "id": "SCR-L01-02",
    "inputType": "screenshot",
    "name": "MacBook white minimalist desk",
    "category": "Laptop",
    "packId": "SCR-L01",
    "packName": "MacBook Core",
    "packCode": "L01",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Creator product",
    "style": "Minimal",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "laptop",
      "screenshot"
    ]
  },
  {
    "id": "SCR-L01-03",
    "inputType": "screenshot",
    "name": "MacBook in lap couch",
    "category": "Laptop",
    "packId": "SCR-L01",
    "packName": "MacBook Core",
    "packCode": "L01",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "laptop",
      "screenshot"
    ]
  },
  {
    "id": "SCR-L01-04",
    "inputType": "screenshot",
    "name": "MacBook cafe table latte",
    "category": "Laptop",
    "packId": "SCR-L01",
    "packName": "MacBook Core",
    "packCode": "L01",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Cafe",
    "format": "Square",
    "tags": [
      "laptop",
      "screenshot"
    ]
  },
  {
    "id": "SCR-L01-05",
    "inputType": "screenshot",
    "name": "MacBook studio sweep",
    "category": "Laptop",
    "packId": "SCR-L01",
    "packName": "MacBook Core",
    "packCode": "L01",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "laptop",
      "screenshot",
      "studio"
    ]
  },
  {
    "id": "SCR-L01-06",
    "inputType": "screenshot",
    "name": "MacBook coworking space",
    "category": "Laptop",
    "packId": "SCR-L01",
    "packName": "MacBook Core",
    "packCode": "L01",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "laptop",
      "screenshot"
    ]
  },
  {
    "id": "SCR-L01-07",
    "inputType": "screenshot",
    "name": "MacBook dark office",
    "category": "Laptop",
    "packId": "SCR-L01",
    "packName": "MacBook Core",
    "packCode": "L01",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Creator product",
    "style": "Corporate",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "laptop",
      "screenshot"
    ]
  },
  {
    "id": "SCR-L01-08",
    "inputType": "screenshot",
    "name": "MacBook with notebook",
    "category": "Laptop",
    "packId": "SCR-L01",
    "packName": "MacBook Core",
    "packCode": "L01",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "laptop",
      "screenshot"
    ]
  },
  {
    "id": "SCR-L01-09",
    "inputType": "screenshot",
    "name": "MacBook by window",
    "category": "Laptop",
    "packId": "SCR-L01",
    "packName": "MacBook Core",
    "packCode": "L01",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "laptop",
      "screenshot"
    ]
  },
  {
    "id": "SCR-L01-10",
    "inputType": "screenshot",
    "name": "MacBook standing desk",
    "category": "Laptop",
    "packId": "SCR-L01",
    "packName": "MacBook Core",
    "packCode": "L01",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "laptop",
      "screenshot"
    ]
  },
  {
    "id": "SCR-L02-01",
    "inputType": "screenshot",
    "name": "Analytics dashboard desk",
    "category": "Laptop",
    "packId": "SCR-L02",
    "packName": "SaaS Dashboards",
    "packCode": "L02",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "laptop",
      "saas",
      "screenshot"
    ]
  },
  {
    "id": "SCR-L02-02",
    "inputType": "screenshot",
    "name": "CRM dashboard sales call",
    "category": "Laptop",
    "packId": "SCR-L02",
    "packName": "SaaS Dashboards",
    "packCode": "L02",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "laptop",
      "saas",
      "screenshot"
    ]
  },
  {
    "id": "SCR-L02-03",
    "inputType": "screenshot",
    "name": "Finance dashboard office",
    "category": "Laptop",
    "packId": "SCR-L02",
    "packName": "SaaS Dashboards",
    "packCode": "L02",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Digital launch",
    "style": "Corporate",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "laptop",
      "saas",
      "screenshot"
    ]
  },
  {
    "id": "SCR-L02-04",
    "inputType": "screenshot",
    "name": "Project board laptop",
    "category": "Laptop",
    "packId": "SCR-L02",
    "packName": "SaaS Dashboards",
    "packCode": "L02",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "laptop",
      "saas",
      "screenshot"
    ]
  },
  {
    "id": "SCR-L02-05",
    "inputType": "screenshot",
    "name": "AI chat app laptop",
    "category": "Laptop",
    "packId": "SCR-L02",
    "packName": "SaaS Dashboards",
    "packCode": "L02",
    "output": "image",
    "surface": "Headwear",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "laptop",
      "saas",
      "screenshot"
    ]
  },
  {
    "id": "SCR-L02-06",
    "inputType": "screenshot",
    "name": "Admin panel dark mode",
    "category": "Laptop",
    "packId": "SCR-L02",
    "packName": "SaaS Dashboards",
    "packCode": "L02",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Digital launch",
    "style": "Dramatic",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "laptop",
      "saas",
      "screenshot"
    ]
  },
  {
    "id": "SCR-L02-07",
    "inputType": "screenshot",
    "name": "Ecommerce dashboard",
    "category": "Laptop",
    "packId": "SCR-L02",
    "packName": "SaaS Dashboards",
    "packCode": "L02",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "ecommerce",
      "laptop",
      "saas",
      "screenshot"
    ]
  },
  {
    "id": "SCR-L02-08",
    "inputType": "screenshot",
    "name": "Calendar app laptop",
    "category": "Laptop",
    "packId": "SCR-L02",
    "packName": "SaaS Dashboards",
    "packCode": "L02",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "laptop",
      "saas",
      "screenshot"
    ]
  },
  {
    "id": "SCR-L02-09",
    "inputType": "screenshot",
    "name": "Support inbox dashboard",
    "category": "Laptop",
    "packId": "SCR-L02",
    "packName": "SaaS Dashboards",
    "packCode": "L02",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "laptop",
      "saas",
      "screenshot"
    ]
  },
  {
    "id": "SCR-L02-10",
    "inputType": "screenshot",
    "name": "Database UI laptop",
    "category": "Laptop",
    "packId": "SCR-L02",
    "packName": "SaaS Dashboards",
    "packCode": "L02",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "laptop",
      "saas",
      "screenshot"
    ]
  },
  {
    "id": "SCR-L03-01",
    "inputType": "screenshot",
    "name": "Portfolio website on MacBook",
    "category": "Laptop",
    "packId": "SCR-L03",
    "packName": "Founder And Agency",
    "packCode": "L03",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "laptop",
      "screenshot"
    ]
  },
  {
    "id": "SCR-L03-02",
    "inputType": "screenshot",
    "name": "Agency case study desk",
    "category": "Laptop",
    "packId": "SCR-L03",
    "packName": "Founder And Agency",
    "packCode": "L03",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "laptop",
      "screenshot"
    ]
  },
  {
    "id": "SCR-L03-03",
    "inputType": "screenshot",
    "name": "Landing page review scene",
    "category": "Laptop",
    "packId": "SCR-L03",
    "packName": "Founder And Agency",
    "packCode": "L03",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "laptop",
      "screenshot"
    ]
  },
  {
    "id": "SCR-L03-04",
    "inputType": "screenshot",
    "name": "Pitch deck on laptop",
    "category": "Laptop",
    "packId": "SCR-L03",
    "packName": "Founder And Agency",
    "packCode": "L03",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Client presentation",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "laptop",
      "screenshot"
    ]
  },
  {
    "id": "SCR-L03-05",
    "inputType": "screenshot",
    "name": "Client proposal screen",
    "category": "Laptop",
    "packId": "SCR-L03",
    "packName": "Founder And Agency",
    "packCode": "L03",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Client presentation",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "laptop",
      "screenshot"
    ]
  },
  {
    "id": "SCR-L03-06",
    "inputType": "screenshot",
    "name": "Marketing funnel page",
    "category": "Laptop",
    "packId": "SCR-L03",
    "packName": "Founder And Agency",
    "packCode": "L03",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "laptop",
      "screenshot"
    ]
  },
  {
    "id": "SCR-L03-07",
    "inputType": "screenshot",
    "name": "Checkout page laptop",
    "category": "Laptop",
    "packId": "SCR-L03",
    "packName": "Founder And Agency",
    "packCode": "L03",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "laptop",
      "screenshot"
    ]
  },
  {
    "id": "SCR-L03-08",
    "inputType": "screenshot",
    "name": "Waitlist page laptop",
    "category": "Laptop",
    "packId": "SCR-L03",
    "packName": "Founder And Agency",
    "packCode": "L03",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "laptop",
      "screenshot"
    ]
  },
  {
    "id": "SCR-L03-09",
    "inputType": "screenshot",
    "name": "Product Hunt launch laptop",
    "category": "Laptop",
    "packId": "SCR-L03",
    "packName": "Founder And Agency",
    "packCode": "L03",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "laptop",
      "screenshot"
    ]
  },
  {
    "id": "SCR-L03-10",
    "inputType": "screenshot",
    "name": "Webinar registration page",
    "category": "Laptop",
    "packId": "SCR-L03",
    "packName": "Founder And Agency",
    "packCode": "L03",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "laptop",
      "screenshot"
    ]
  },
  {
    "id": "SCR-L04-01",
    "inputType": "screenshot",
    "name": "Laptop airport lounge",
    "category": "Laptop",
    "packId": "SCR-L04",
    "packName": "Laptop Environments",
    "packCode": "L04",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Urban",
    "format": "Square",
    "tags": [
      "laptop",
      "screenshot"
    ]
  },
  {
    "id": "SCR-L04-02",
    "inputType": "screenshot",
    "name": "Laptop hotel room desk",
    "category": "Laptop",
    "packId": "SCR-L04",
    "packName": "Laptop Environments",
    "packCode": "L04",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "laptop",
      "screenshot"
    ]
  },
  {
    "id": "SCR-L04-03",
    "inputType": "screenshot",
    "name": "Laptop library table",
    "category": "Laptop",
    "packId": "SCR-L04",
    "packName": "Laptop Environments",
    "packCode": "L04",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "laptop",
      "screenshot"
    ]
  },
  {
    "id": "SCR-L04-04",
    "inputType": "screenshot",
    "name": "Laptop classroom desk",
    "category": "Laptop",
    "packId": "SCR-L04",
    "packName": "Laptop Environments",
    "packCode": "L04",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "laptop",
      "screenshot"
    ]
  },
  {
    "id": "SCR-L04-05",
    "inputType": "screenshot",
    "name": "Laptop home kitchen",
    "category": "Laptop",
    "packId": "SCR-L04",
    "packName": "Laptop Environments",
    "packCode": "L04",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "laptop",
      "screenshot"
    ]
  },
  {
    "id": "SCR-L04-06",
    "inputType": "screenshot",
    "name": "Laptop rooftop workspace",
    "category": "Laptop",
    "packId": "SCR-L04",
    "packName": "Laptop Environments",
    "packCode": "L04",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "laptop",
      "screenshot"
    ]
  },
  {
    "id": "SCR-L04-07",
    "inputType": "screenshot",
    "name": "Laptop train table",
    "category": "Laptop",
    "packId": "SCR-L04",
    "packName": "Laptop Environments",
    "packCode": "L04",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Urban",
    "format": "Square",
    "tags": [
      "laptop",
      "screenshot"
    ]
  },
  {
    "id": "SCR-L04-08",
    "inputType": "screenshot",
    "name": "Laptop studio monitor setup",
    "category": "Laptop",
    "packId": "SCR-L04",
    "packName": "Laptop Environments",
    "packCode": "L04",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "laptop",
      "screenshot",
      "studio"
    ]
  },
  {
    "id": "SCR-L04-09",
    "inputType": "screenshot",
    "name": "Laptop night coding desk",
    "category": "Laptop",
    "packId": "SCR-L04",
    "packName": "Laptop Environments",
    "packCode": "L04",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Brand mockup",
    "style": "Dramatic",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "laptop",
      "screenshot"
    ]
  },
  {
    "id": "SCR-L04-10",
    "inputType": "screenshot",
    "name": "Laptop outdoor patio",
    "category": "Laptop",
    "packId": "SCR-L04",
    "packName": "Laptop Environments",
    "packCode": "L04",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Brand mockup",
    "style": "Lifestyle",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "laptop",
      "outdoor",
      "screenshot"
    ]
  },
  {
    "id": "SCR-T01-01",
    "inputType": "screenshot",
    "name": "iPad beige natural light",
    "category": "Tablet",
    "packId": "SCR-T01",
    "packName": "Tablet Core",
    "packCode": "T01",
    "output": "image",
    "surface": "Tablet",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "screenshot",
      "tablet"
    ]
  },
  {
    "id": "SCR-T01-02",
    "inputType": "screenshot",
    "name": "iPad with pencil",
    "category": "Tablet",
    "packId": "SCR-T01",
    "packName": "Tablet Core",
    "packCode": "T01",
    "output": "image",
    "surface": "Tablet",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "screenshot",
      "tablet"
    ]
  },
  {
    "id": "SCR-T01-03",
    "inputType": "screenshot",
    "name": "iPad floating studio",
    "category": "Tablet",
    "packId": "SCR-T01",
    "packName": "Tablet Core",
    "packCode": "T01",
    "output": "image",
    "surface": "Tablet",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "screenshot",
      "studio",
      "tablet"
    ]
  },
  {
    "id": "SCR-T01-04",
    "inputType": "screenshot",
    "name": "iPad on lap sofa",
    "category": "Tablet",
    "packId": "SCR-T01",
    "packName": "Tablet Core",
    "packCode": "T01",
    "output": "image",
    "surface": "Tablet",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "screenshot",
      "tablet"
    ]
  },
  {
    "id": "SCR-T01-05",
    "inputType": "screenshot",
    "name": "iPad kitchen recipe stand",
    "category": "Tablet",
    "packId": "SCR-T01",
    "packName": "Tablet Core",
    "packCode": "T01",
    "output": "image",
    "surface": "Tablet",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "screenshot",
      "tablet"
    ]
  },
  {
    "id": "SCR-T01-06",
    "inputType": "screenshot",
    "name": "iPad retail counter",
    "category": "Tablet",
    "packId": "SCR-T01",
    "packName": "Tablet Core",
    "packCode": "T01",
    "output": "image",
    "surface": "Tablet",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "retail",
      "screenshot",
      "tablet"
    ]
  },
  {
    "id": "SCR-T01-07",
    "inputType": "screenshot",
    "name": "iPad sketch desk",
    "category": "Tablet",
    "packId": "SCR-T01",
    "packName": "Tablet Core",
    "packCode": "T01",
    "output": "image",
    "surface": "Tablet",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "screenshot",
      "tablet"
    ]
  },
  {
    "id": "SCR-T01-08",
    "inputType": "screenshot",
    "name": "iPad magazine layout",
    "category": "Tablet",
    "packId": "SCR-T01",
    "packName": "Tablet Core",
    "packCode": "T01",
    "output": "image",
    "surface": "Tablet",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "screenshot",
      "tablet"
    ]
  },
  {
    "id": "SCR-T01-09",
    "inputType": "screenshot",
    "name": "iPad classroom desk",
    "category": "Tablet",
    "packId": "SCR-T01",
    "packName": "Tablet Core",
    "packCode": "T01",
    "output": "image",
    "surface": "Tablet",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "screenshot",
      "tablet"
    ]
  },
  {
    "id": "SCR-T01-10",
    "inputType": "screenshot",
    "name": "iPad bedside reading",
    "category": "Tablet",
    "packId": "SCR-T01",
    "packName": "Tablet Core",
    "packCode": "T01",
    "output": "image",
    "surface": "Tablet",
    "useCase": "Brand mockup",
    "style": "Cozy",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "screenshot",
      "tablet"
    ]
  },
  {
    "id": "SCR-T02-01",
    "inputType": "screenshot",
    "name": "Digital planner iPad",
    "category": "Tablet",
    "packId": "SCR-T02",
    "packName": "Tablet Use Cases",
    "packCode": "T02",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "screenshot",
      "tablet"
    ]
  },
  {
    "id": "SCR-T02-02",
    "inputType": "screenshot",
    "name": "Course worksheet iPad",
    "category": "Tablet",
    "packId": "SCR-T02",
    "packName": "Tablet Use Cases",
    "packCode": "T02",
    "output": "image",
    "surface": "Tablet",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "screenshot",
      "tablet"
    ]
  },
  {
    "id": "SCR-T02-03",
    "inputType": "screenshot",
    "name": "Menu ordering tablet",
    "category": "Tablet",
    "packId": "SCR-T02",
    "packName": "Tablet Use Cases",
    "packCode": "T02",
    "output": "image",
    "surface": "Tablet",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "screenshot",
      "tablet"
    ]
  },
  {
    "id": "SCR-T02-04",
    "inputType": "screenshot",
    "name": "POS tablet counter",
    "category": "Tablet",
    "packId": "SCR-T02",
    "packName": "Tablet Use Cases",
    "packCode": "T02",
    "output": "image",
    "surface": "Tablet",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "screenshot",
      "tablet"
    ]
  },
  {
    "id": "SCR-T02-05",
    "inputType": "screenshot",
    "name": "Portfolio tablet handoff",
    "category": "Tablet",
    "packId": "SCR-T02",
    "packName": "Tablet Use Cases",
    "packCode": "T02",
    "output": "image",
    "surface": "Tablet",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "screenshot",
      "tablet"
    ]
  },
  {
    "id": "SCR-T02-06",
    "inputType": "screenshot",
    "name": "Ebook preview tablet",
    "category": "Tablet",
    "packId": "SCR-T02",
    "packName": "Tablet Use Cases",
    "packCode": "T02",
    "output": "image",
    "surface": "Tablet",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "screenshot",
      "tablet"
    ]
  },
  {
    "id": "SCR-T02-07",
    "inputType": "screenshot",
    "name": "Presentation tablet",
    "category": "Tablet",
    "packId": "SCR-T02",
    "packName": "Tablet Use Cases",
    "packCode": "T02",
    "output": "image",
    "surface": "Tablet",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "screenshot",
      "tablet"
    ]
  },
  {
    "id": "SCR-T02-08",
    "inputType": "screenshot",
    "name": "Real estate listing tablet",
    "category": "Tablet",
    "packId": "SCR-T02",
    "packName": "Tablet Use Cases",
    "packCode": "T02",
    "output": "image",
    "surface": "Tablet",
    "useCase": "Ecommerce",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "screenshot",
      "tablet"
    ]
  },
  {
    "id": "SCR-T02-09",
    "inputType": "screenshot",
    "name": "Fitness class tablet",
    "category": "Tablet",
    "packId": "SCR-T02",
    "packName": "Tablet Use Cases",
    "packCode": "T02",
    "output": "image",
    "surface": "Tablet",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "screenshot",
      "tablet"
    ]
  },
  {
    "id": "SCR-T02-10",
    "inputType": "screenshot",
    "name": "Design proof tablet",
    "category": "Tablet",
    "packId": "SCR-T02",
    "packName": "Tablet Use Cases",
    "packCode": "T02",
    "output": "image",
    "surface": "Signage",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "screenshot",
      "tablet"
    ]
  },
  {
    "id": "SCR-B01-01",
    "inputType": "screenshot",
    "name": "Browser floating purple gradient",
    "category": "Browser",
    "packId": "SCR-B01",
    "packName": "Browser Windows",
    "packCode": "B01",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot"
    ]
  },
  {
    "id": "SCR-B01-02",
    "inputType": "screenshot",
    "name": "Browser tilted 3D dark",
    "category": "Browser",
    "packId": "SCR-B01",
    "packName": "Browser Windows",
    "packCode": "B01",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Dramatic",
    "environment": "Studio",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot"
    ]
  },
  {
    "id": "SCR-B01-03",
    "inputType": "screenshot",
    "name": "Browser white sweep clean",
    "category": "Browser",
    "packId": "SCR-B01",
    "packName": "Browser Windows",
    "packCode": "B01",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Minimal",
    "environment": "Studio",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot"
    ]
  },
  {
    "id": "SCR-B01-04",
    "inputType": "screenshot",
    "name": "Browser tilted orange gradient",
    "category": "Browser",
    "packId": "SCR-B01",
    "packName": "Browser Windows",
    "packCode": "B01",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot"
    ]
  },
  {
    "id": "SCR-B01-05",
    "inputType": "screenshot",
    "name": "Browser desktop stack",
    "category": "Browser",
    "packId": "SCR-B01",
    "packName": "Browser Windows",
    "packCode": "B01",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Desk / office",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot"
    ]
  },
  {
    "id": "SCR-B01-06",
    "inputType": "screenshot",
    "name": "Browser tabs close-up",
    "category": "Browser",
    "packId": "SCR-B01",
    "packName": "Browser Windows",
    "packCode": "B01",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot"
    ]
  },
  {
    "id": "SCR-B01-07",
    "inputType": "screenshot",
    "name": "Browser window on grid",
    "category": "Browser",
    "packId": "SCR-B01",
    "packName": "Browser Windows",
    "packCode": "B01",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot"
    ]
  },
  {
    "id": "SCR-B01-08",
    "inputType": "screenshot",
    "name": "Browser dark mode hero",
    "category": "Browser",
    "packId": "SCR-B01",
    "packName": "Browser Windows",
    "packCode": "B01",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Dramatic",
    "environment": "Studio",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot"
    ]
  },
  {
    "id": "SCR-B01-09",
    "inputType": "screenshot",
    "name": "Browser split screen",
    "category": "Browser",
    "packId": "SCR-B01",
    "packName": "Browser Windows",
    "packCode": "B01",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot"
    ]
  },
  {
    "id": "SCR-B01-10",
    "inputType": "screenshot",
    "name": "Browser analytics page",
    "category": "Browser",
    "packId": "SCR-B01",
    "packName": "Browser Windows",
    "packCode": "B01",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot"
    ]
  },
  {
    "id": "SCR-B02-01",
    "inputType": "screenshot",
    "name": "iMac home office plant",
    "category": "Browser",
    "packId": "SCR-B02",
    "packName": "Desktop Screens",
    "packCode": "B02",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Corporate",
    "environment": "Desk / office",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot"
    ]
  },
  {
    "id": "SCR-B02-02",
    "inputType": "screenshot",
    "name": "Desktop monitor studio",
    "category": "Browser",
    "packId": "SCR-B02",
    "packName": "Desktop Screens",
    "packCode": "B02",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Desk / office",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot",
      "studio"
    ]
  },
  {
    "id": "SCR-B02-03",
    "inputType": "screenshot",
    "name": "Dual monitor workspace",
    "category": "Browser",
    "packId": "SCR-B02",
    "packName": "Desktop Screens",
    "packCode": "B02",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Desk / office",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot"
    ]
  },
  {
    "id": "SCR-B02-04",
    "inputType": "screenshot",
    "name": "Ultrawide dashboard",
    "category": "Browser",
    "packId": "SCR-B02",
    "packName": "Desktop Screens",
    "packCode": "B02",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Desk / office",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot"
    ]
  },
  {
    "id": "SCR-B02-05",
    "inputType": "screenshot",
    "name": "TV screen presentation",
    "category": "Browser",
    "packId": "SCR-B02",
    "packName": "Desktop Screens",
    "packCode": "B02",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Desk / office",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot"
    ]
  },
  {
    "id": "SCR-B02-06",
    "inputType": "screenshot",
    "name": "Kiosk screen lobby",
    "category": "Browser",
    "packId": "SCR-B02",
    "packName": "Desktop Screens",
    "packCode": "B02",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Desk / office",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot"
    ]
  },
  {
    "id": "SCR-B02-07",
    "inputType": "screenshot",
    "name": "POS screen retail",
    "category": "Browser",
    "packId": "SCR-B02",
    "packName": "Desktop Screens",
    "packCode": "B02",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Desk / office",
    "format": "Landscape",
    "tags": [
      "browser",
      "retail",
      "screenshot"
    ]
  },
  {
    "id": "SCR-B02-08",
    "inputType": "screenshot",
    "name": "Wall-mounted office screen",
    "category": "Browser",
    "packId": "SCR-B02",
    "packName": "Desktop Screens",
    "packCode": "B02",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Corporate",
    "environment": "Desk / office",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot"
    ]
  },
  {
    "id": "SCR-B02-09",
    "inputType": "screenshot",
    "name": "Gaming monitor app",
    "category": "Browser",
    "packId": "SCR-B02",
    "packName": "Desktop Screens",
    "packCode": "B02",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Desk / office",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot"
    ]
  },
  {
    "id": "SCR-B02-10",
    "inputType": "screenshot",
    "name": "Large display conference room",
    "category": "Browser",
    "packId": "SCR-B02",
    "packName": "Desktop Screens",
    "packCode": "B02",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Desk / office",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot"
    ]
  },
  {
    "id": "SCR-B03-01",
    "inputType": "screenshot",
    "name": "Phone laptop combo",
    "category": "Browser",
    "packId": "SCR-B03",
    "packName": "Multi-Device",
    "packCode": "B03",
    "output": "image",
    "surface": "Phone",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "browser",
      "screenshot"
    ]
  },
  {
    "id": "SCR-B03-02",
    "inputType": "screenshot",
    "name": "Tablet laptop combo",
    "category": "Browser",
    "packId": "SCR-B03",
    "packName": "Multi-Device",
    "packCode": "B03",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot"
    ]
  },
  {
    "id": "SCR-B03-03",
    "inputType": "screenshot",
    "name": "Three-device responsive set",
    "category": "Browser",
    "packId": "SCR-B03",
    "packName": "Multi-Device",
    "packCode": "B03",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot"
    ]
  },
  {
    "id": "SCR-B03-04",
    "inputType": "screenshot",
    "name": "Full Apple device lineup",
    "category": "Browser",
    "packId": "SCR-B03",
    "packName": "Multi-Device",
    "packCode": "B03",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot"
    ]
  },
  {
    "id": "SCR-B03-05",
    "inputType": "screenshot",
    "name": "Android and desktop set",
    "category": "Browser",
    "packId": "SCR-B03",
    "packName": "Multi-Device",
    "packCode": "B03",
    "output": "image",
    "surface": "Phone",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Desk / office",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot"
    ]
  },
  {
    "id": "SCR-B03-06",
    "inputType": "screenshot",
    "name": "Phone tablet laptop stack",
    "category": "Browser",
    "packId": "SCR-B03",
    "packName": "Multi-Device",
    "packCode": "B03",
    "output": "image",
    "surface": "Phone",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "browser",
      "screenshot"
    ]
  },
  {
    "id": "SCR-B03-07",
    "inputType": "screenshot",
    "name": "Responsive website fan",
    "category": "Browser",
    "packId": "SCR-B03",
    "packName": "Multi-Device",
    "packCode": "B03",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot"
    ]
  },
  {
    "id": "SCR-B03-08",
    "inputType": "screenshot",
    "name": "Device pyramid studio",
    "category": "Browser",
    "packId": "SCR-B03",
    "packName": "Multi-Device",
    "packCode": "B03",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot",
      "studio"
    ]
  },
  {
    "id": "SCR-B03-09",
    "inputType": "screenshot",
    "name": "Mobile plus browser window",
    "category": "Browser",
    "packId": "SCR-B03",
    "packName": "Multi-Device",
    "packCode": "B03",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot"
    ]
  },
  {
    "id": "SCR-B03-10",
    "inputType": "screenshot",
    "name": "SaaS launch device spread",
    "category": "Browser",
    "packId": "SCR-B03",
    "packName": "Multi-Device",
    "packCode": "B03",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Landscape",
    "tags": [
      "browser",
      "saas",
      "screenshot"
    ]
  },
  {
    "id": "SCR-B04-01",
    "inputType": "screenshot",
    "name": "Twitter/X post browser",
    "category": "Browser",
    "packId": "SCR-B04",
    "packName": "Social Browser",
    "packCode": "B04",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot",
      "social"
    ]
  },
  {
    "id": "SCR-B04-02",
    "inputType": "screenshot",
    "name": "LinkedIn post browser",
    "category": "Browser",
    "packId": "SCR-B04",
    "packName": "Social Browser",
    "packCode": "B04",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot",
      "social"
    ]
  },
  {
    "id": "SCR-B04-03",
    "inputType": "screenshot",
    "name": "YouTube channel desktop",
    "category": "Browser",
    "packId": "SCR-B04",
    "packName": "Social Browser",
    "packCode": "B04",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Desk / office",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot",
      "social"
    ]
  },
  {
    "id": "SCR-B04-04",
    "inputType": "screenshot",
    "name": "Substack newsletter browser",
    "category": "Browser",
    "packId": "SCR-B04",
    "packName": "Social Browser",
    "packCode": "B04",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot",
      "social"
    ]
  },
  {
    "id": "SCR-B04-05",
    "inputType": "screenshot",
    "name": "Medium article browser",
    "category": "Browser",
    "packId": "SCR-B04",
    "packName": "Social Browser",
    "packCode": "B04",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot",
      "social"
    ]
  },
  {
    "id": "SCR-B04-06",
    "inputType": "screenshot",
    "name": "Product Hunt launch browser",
    "category": "Browser",
    "packId": "SCR-B04",
    "packName": "Social Browser",
    "packCode": "B04",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot",
      "social"
    ]
  },
  {
    "id": "SCR-B04-07",
    "inputType": "screenshot",
    "name": "Gumroad product page",
    "category": "Browser",
    "packId": "SCR-B04",
    "packName": "Social Browser",
    "packCode": "B04",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot",
      "social"
    ]
  },
  {
    "id": "SCR-B04-08",
    "inputType": "screenshot",
    "name": "Shopify product page",
    "category": "Browser",
    "packId": "SCR-B04",
    "packName": "Social Browser",
    "packCode": "B04",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot",
      "social"
    ]
  },
  {
    "id": "SCR-B04-09",
    "inputType": "screenshot",
    "name": "Etsy listing browser",
    "category": "Browser",
    "packId": "SCR-B04",
    "packName": "Social Browser",
    "packCode": "B04",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot",
      "social"
    ]
  },
  {
    "id": "SCR-B04-10",
    "inputType": "screenshot",
    "name": "Booking calendar browser",
    "category": "Browser",
    "packId": "SCR-B04",
    "packName": "Social Browser",
    "packCode": "B04",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot",
      "social"
    ]
  },
  {
    "id": "SCR-U01-01",
    "inputType": "screenshot",
    "name": "Phone selfie-style app demo",
    "category": "Phone",
    "packId": "SCR-U01",
    "packName": "UGC And Hands",
    "packCode": "U01",
    "output": "image",
    "surface": "Phone",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-U01-02",
    "inputType": "screenshot",
    "name": "Hand tapping CTA",
    "category": "Phone",
    "packId": "SCR-U01",
    "packName": "UGC And Hands",
    "packCode": "U01",
    "output": "image",
    "surface": "Phone",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-U01-03",
    "inputType": "screenshot",
    "name": "Thumb scrolling feed",
    "category": "Phone",
    "packId": "SCR-U01",
    "packName": "UGC And Hands",
    "packCode": "U01",
    "output": "image",
    "surface": "Phone",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-U01-04",
    "inputType": "screenshot",
    "name": "Hand swiping onboarding",
    "category": "Phone",
    "packId": "SCR-U01",
    "packName": "UGC And Hands",
    "packCode": "U01",
    "output": "image",
    "surface": "Phone",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-U01-05",
    "inputType": "screenshot",
    "name": "Phone over cafe table",
    "category": "Phone",
    "packId": "SCR-U01",
    "packName": "UGC And Hands",
    "packCode": "U01",
    "output": "image",
    "surface": "Phone",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Cafe",
    "format": "Portrait",
    "tags": [
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-U01-06",
    "inputType": "screenshot",
    "name": "Phone held in queue",
    "category": "Phone",
    "packId": "SCR-U01",
    "packName": "UGC And Hands",
    "packCode": "U01",
    "output": "image",
    "surface": "Phone",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-U01-07",
    "inputType": "screenshot",
    "name": "Phone handed to friend",
    "category": "Phone",
    "packId": "SCR-U01",
    "packName": "UGC And Hands",
    "packCode": "U01",
    "output": "image",
    "surface": "Phone",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-U01-08",
    "inputType": "screenshot",
    "name": "Phone checkout at counter",
    "category": "Phone",
    "packId": "SCR-U01",
    "packName": "UGC And Hands",
    "packCode": "U01",
    "output": "image",
    "surface": "Phone",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-U01-09",
    "inputType": "screenshot",
    "name": "Phone app in taxi",
    "category": "Phone",
    "packId": "SCR-U01",
    "packName": "UGC And Hands",
    "packCode": "U01",
    "output": "image",
    "surface": "Phone",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-U01-10",
    "inputType": "screenshot",
    "name": "Phone with headphones",
    "category": "Phone",
    "packId": "SCR-U01",
    "packName": "UGC And Hands",
    "packCode": "U01",
    "output": "image",
    "surface": "Phone",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "phone",
      "screenshot"
    ]
  },
  {
    "id": "SCR-M01-01",
    "inputType": "screenshot",
    "name": "Website hero 16:9",
    "category": "Browser",
    "packId": "SCR-M01",
    "packName": "Marketing Formats",
    "packCode": "M01",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot"
    ]
  },
  {
    "id": "SCR-M01-02",
    "inputType": "screenshot",
    "name": "Website hero 4:5 ad",
    "category": "Browser",
    "packId": "SCR-M01",
    "packName": "Marketing Formats",
    "packCode": "M01",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot"
    ]
  },
  {
    "id": "SCR-M01-03",
    "inputType": "screenshot",
    "name": "Landing page story crop",
    "category": "Browser",
    "packId": "SCR-M01",
    "packName": "Marketing Formats",
    "packCode": "M01",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Portrait",
    "tags": [
      "browser",
      "screenshot"
    ]
  },
  {
    "id": "SCR-M01-04",
    "inputType": "screenshot",
    "name": "SaaS feature screenshot",
    "category": "Browser",
    "packId": "SCR-M01",
    "packName": "Marketing Formats",
    "packCode": "M01",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Landscape",
    "tags": [
      "browser",
      "saas",
      "screenshot"
    ]
  },
  {
    "id": "SCR-M01-05",
    "inputType": "screenshot",
    "name": "Testimonial page mockup",
    "category": "Browser",
    "packId": "SCR-M01",
    "packName": "Marketing Formats",
    "packCode": "M01",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot"
    ]
  },
  {
    "id": "SCR-M01-06",
    "inputType": "screenshot",
    "name": "Pricing page mockup",
    "category": "Browser",
    "packId": "SCR-M01",
    "packName": "Marketing Formats",
    "packCode": "M01",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot"
    ]
  },
  {
    "id": "SCR-M01-07",
    "inputType": "screenshot",
    "name": "Mobile ad screenshot",
    "category": "Browser",
    "packId": "SCR-M01",
    "packName": "Marketing Formats",
    "packCode": "M01",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot"
    ]
  },
  {
    "id": "SCR-M01-08",
    "inputType": "screenshot",
    "name": "LinkedIn carousel screen",
    "category": "Browser",
    "packId": "SCR-M01",
    "packName": "Marketing Formats",
    "packCode": "M01",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot"
    ]
  },
  {
    "id": "SCR-M01-09",
    "inputType": "screenshot",
    "name": "Email newsletter preview",
    "category": "Browser",
    "packId": "SCR-M01",
    "packName": "Marketing Formats",
    "packCode": "M01",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot"
    ]
  },
  {
    "id": "SCR-M01-10",
    "inputType": "screenshot",
    "name": "Case study browser hero",
    "category": "Browser",
    "packId": "SCR-M01",
    "packName": "Marketing Formats",
    "packCode": "M01",
    "output": "image",
    "surface": "Browser / desktop",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Landscape",
    "tags": [
      "browser",
      "screenshot"
    ]
  },
  {
    "id": "SCR-N01-01",
    "inputType": "screenshot",
    "name": "Restaurant ordering app",
    "category": "Mixed",
    "packId": "SCR-N01",
    "packName": "Niche Apps",
    "packCode": "N01",
    "output": "image",
    "surface": "Mixed",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "mixed",
      "screenshot"
    ]
  },
  {
    "id": "SCR-N01-02",
    "inputType": "screenshot",
    "name": "Realtor listing app",
    "category": "Mixed",
    "packId": "SCR-N01",
    "packName": "Niche Apps",
    "packCode": "N01",
    "output": "image",
    "surface": "Mixed",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "mixed",
      "screenshot"
    ]
  },
  {
    "id": "SCR-N01-03",
    "inputType": "screenshot",
    "name": "Salon booking app",
    "category": "Mixed",
    "packId": "SCR-N01",
    "packName": "Niche Apps",
    "packCode": "N01",
    "output": "image",
    "surface": "Info product",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "mixed",
      "screenshot"
    ]
  },
  {
    "id": "SCR-N01-04",
    "inputType": "screenshot",
    "name": "Fitness coaching app",
    "category": "Mixed",
    "packId": "SCR-N01",
    "packName": "Niche Apps",
    "packCode": "N01",
    "output": "image",
    "surface": "Mixed",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "mixed",
      "screenshot"
    ]
  },
  {
    "id": "SCR-N01-05",
    "inputType": "screenshot",
    "name": "Finance budgeting app",
    "category": "Mixed",
    "packId": "SCR-N01",
    "packName": "Niche Apps",
    "packCode": "N01",
    "output": "image",
    "surface": "Mixed",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "mixed",
      "screenshot"
    ]
  },
  {
    "id": "SCR-N01-06",
    "inputType": "screenshot",
    "name": "Meditation app",
    "category": "Mixed",
    "packId": "SCR-N01",
    "packName": "Niche Apps",
    "packCode": "N01",
    "output": "image",
    "surface": "Mixed",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "mixed",
      "screenshot"
    ]
  },
  {
    "id": "SCR-N01-07",
    "inputType": "screenshot",
    "name": "Course portal",
    "category": "Mixed",
    "packId": "SCR-N01",
    "packName": "Niche Apps",
    "packCode": "N01",
    "output": "image",
    "surface": "Info product",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "mixed",
      "screenshot"
    ]
  },
  {
    "id": "SCR-N01-08",
    "inputType": "screenshot",
    "name": "Event ticketing app",
    "category": "Mixed",
    "packId": "SCR-N01",
    "packName": "Niche Apps",
    "packCode": "N01",
    "output": "image",
    "surface": "Mixed",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "mixed",
      "screenshot"
    ]
  },
  {
    "id": "SCR-N01-09",
    "inputType": "screenshot",
    "name": "Local delivery app",
    "category": "Mixed",
    "packId": "SCR-N01",
    "packName": "Niche Apps",
    "packCode": "N01",
    "output": "image",
    "surface": "Mixed",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "mixed",
      "screenshot"
    ]
  },
  {
    "id": "SCR-N01-10",
    "inputType": "screenshot",
    "name": "Healthcare portal",
    "category": "Mixed",
    "packId": "SCR-N01",
    "packName": "Niche Apps",
    "packCode": "N01",
    "output": "image",
    "surface": "Mixed",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "mixed",
      "screenshot"
    ]
  },
  {
    "id": "SCR-V01-01",
    "inputType": "screenshot",
    "name": "Slow zoom into iPhone",
    "category": "Video",
    "packId": "SCR-V01",
    "packName": "Phone Motion",
    "packCode": "V01",
    "output": "video",
    "surface": "Phone",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "screenshot",
      "video"
    ]
  },
  {
    "id": "SCR-V01-02",
    "inputType": "screenshot",
    "name": "Phone 360 rotation",
    "category": "Video",
    "packId": "SCR-V01",
    "packName": "Phone Motion",
    "packCode": "V01",
    "output": "video",
    "surface": "Phone",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "screenshot",
      "video"
    ]
  },
  {
    "id": "SCR-V01-03",
    "inputType": "screenshot",
    "name": "Thumb scroll demo",
    "category": "Video",
    "packId": "SCR-V01",
    "packName": "Phone Motion",
    "packCode": "V01",
    "output": "video",
    "surface": "Phone",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "screenshot",
      "video"
    ]
  },
  {
    "id": "SCR-V01-04",
    "inputType": "screenshot",
    "name": "App onboarding swipe",
    "category": "Video",
    "packId": "SCR-V01",
    "packName": "Phone Motion",
    "packCode": "V01",
    "output": "video",
    "surface": "Phone",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "screenshot",
      "video"
    ]
  },
  {
    "id": "SCR-V01-05",
    "inputType": "screenshot",
    "name": "Phone hand tilt",
    "category": "Video",
    "packId": "SCR-V01",
    "packName": "Phone Motion",
    "packCode": "V01",
    "output": "video",
    "surface": "Phone",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "screenshot",
      "video"
    ]
  },
  {
    "id": "SCR-V01-06",
    "inputType": "screenshot",
    "name": "Phone notification reveal",
    "category": "Video",
    "packId": "SCR-V01",
    "packName": "Phone Motion",
    "packCode": "V01",
    "output": "video",
    "surface": "Phone",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "screenshot",
      "video"
    ]
  },
  {
    "id": "SCR-V01-07",
    "inputType": "screenshot",
    "name": "Phone lock-screen wake",
    "category": "Video",
    "packId": "SCR-V01",
    "packName": "Phone Motion",
    "packCode": "V01",
    "output": "video",
    "surface": "Phone",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "screenshot",
      "video"
    ]
  },
  {
    "id": "SCR-V01-08",
    "inputType": "screenshot",
    "name": "Phone cafe push-in",
    "category": "Video",
    "packId": "SCR-V01",
    "packName": "Phone Motion",
    "packCode": "V01",
    "output": "video",
    "surface": "Phone",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Cafe",
    "format": "Square",
    "tags": [
      "screenshot",
      "video"
    ]
  },
  {
    "id": "SCR-V01-09",
    "inputType": "screenshot",
    "name": "Phone pocket pull reveal",
    "category": "Video",
    "packId": "SCR-V01",
    "packName": "Phone Motion",
    "packCode": "V01",
    "output": "video",
    "surface": "Phone",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "screenshot",
      "video"
    ]
  },
  {
    "id": "SCR-V01-10",
    "inputType": "screenshot",
    "name": "Dual phone parallax",
    "category": "Video",
    "packId": "SCR-V01",
    "packName": "Phone Motion",
    "packCode": "V01",
    "output": "video",
    "surface": "Phone",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "screenshot",
      "video"
    ]
  },
  {
    "id": "SCR-V02-01",
    "inputType": "screenshot",
    "name": "Tilted browser parallax",
    "category": "Video",
    "packId": "SCR-V02",
    "packName": "Browser Motion",
    "packCode": "V02",
    "output": "video",
    "surface": "Browser / desktop",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "screenshot",
      "video"
    ]
  },
  {
    "id": "SCR-V02-02",
    "inputType": "screenshot",
    "name": "Browser scale-up reveal",
    "category": "Video",
    "packId": "SCR-V02",
    "packName": "Browser Motion",
    "packCode": "V02",
    "output": "video",
    "surface": "Browser / desktop",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "screenshot",
      "video"
    ]
  },
  {
    "id": "SCR-V02-03",
    "inputType": "screenshot",
    "name": "Browser stack carousel",
    "category": "Video",
    "packId": "SCR-V02",
    "packName": "Browser Motion",
    "packCode": "V02",
    "output": "video",
    "surface": "Browser / desktop",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "screenshot",
      "video"
    ]
  },
  {
    "id": "SCR-V02-04",
    "inputType": "screenshot",
    "name": "Landing page scroll",
    "category": "Video",
    "packId": "SCR-V02",
    "packName": "Browser Motion",
    "packCode": "V02",
    "output": "video",
    "surface": "Browser / desktop",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "screenshot",
      "video"
    ]
  },
  {
    "id": "SCR-V02-05",
    "inputType": "screenshot",
    "name": "Dashboard side pan",
    "category": "Video",
    "packId": "SCR-V02",
    "packName": "Browser Motion",
    "packCode": "V02",
    "output": "video",
    "surface": "Browser / desktop",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "screenshot",
      "video"
    ]
  },
  {
    "id": "SCR-V02-06",
    "inputType": "screenshot",
    "name": "Browser dark mode float",
    "category": "Video",
    "packId": "SCR-V02",
    "packName": "Browser Motion",
    "packCode": "V02",
    "output": "video",
    "surface": "Browser / desktop",
    "useCase": "Motion ad",
    "style": "Dramatic",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "screenshot",
      "video"
    ]
  },
  {
    "id": "SCR-V02-07",
    "inputType": "screenshot",
    "name": "Website hero zoom",
    "category": "Video",
    "packId": "SCR-V02",
    "packName": "Browser Motion",
    "packCode": "V02",
    "output": "video",
    "surface": "Browser / desktop",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "screenshot",
      "video"
    ]
  },
  {
    "id": "SCR-V02-08",
    "inputType": "screenshot",
    "name": "Pricing page sweep",
    "category": "Video",
    "packId": "SCR-V02",
    "packName": "Browser Motion",
    "packCode": "V02",
    "output": "video",
    "surface": "Browser / desktop",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "screenshot",
      "video"
    ]
  },
  {
    "id": "SCR-V02-09",
    "inputType": "screenshot",
    "name": "Product Hunt launch reveal",
    "category": "Video",
    "packId": "SCR-V02",
    "packName": "Browser Motion",
    "packCode": "V02",
    "output": "video",
    "surface": "Browser / desktop",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "screenshot",
      "video"
    ]
  },
  {
    "id": "SCR-V02-10",
    "inputType": "screenshot",
    "name": "Multi-tab browser slide",
    "category": "Video",
    "packId": "SCR-V02",
    "packName": "Browser Motion",
    "packCode": "V02",
    "output": "video",
    "surface": "Browser / desktop",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "screenshot",
      "video"
    ]
  },
  {
    "id": "SCR-V03-01",
    "inputType": "screenshot",
    "name": "Slow pan past laptop",
    "category": "Video",
    "packId": "SCR-V03",
    "packName": "Device Motion",
    "packCode": "V03",
    "output": "video",
    "surface": "Laptop",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "screenshot",
      "video"
    ]
  },
  {
    "id": "SCR-V03-02",
    "inputType": "screenshot",
    "name": "MacBook open reveal",
    "category": "Video",
    "packId": "SCR-V03",
    "packName": "Device Motion",
    "packCode": "V03",
    "output": "video",
    "surface": "Laptop",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "screenshot",
      "video"
    ]
  },
  {
    "id": "SCR-V03-03",
    "inputType": "screenshot",
    "name": "Laptop desk push-in",
    "category": "Video",
    "packId": "SCR-V03",
    "packName": "Device Motion",
    "packCode": "V03",
    "output": "video",
    "surface": "Laptop",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "screenshot",
      "video"
    ]
  },
  {
    "id": "SCR-V03-04",
    "inputType": "screenshot",
    "name": "iPad pencil hover",
    "category": "Video",
    "packId": "SCR-V03",
    "packName": "Device Motion",
    "packCode": "V03",
    "output": "video",
    "surface": "Tablet",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "screenshot",
      "video"
    ]
  },
  {
    "id": "SCR-V03-05",
    "inputType": "screenshot",
    "name": "Tablet rotation",
    "category": "Video",
    "packId": "SCR-V03",
    "packName": "Device Motion",
    "packCode": "V03",
    "output": "video",
    "surface": "Tablet",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "screenshot",
      "video"
    ]
  },
  {
    "id": "SCR-V03-06",
    "inputType": "screenshot",
    "name": "Multi-device orbit",
    "category": "Video",
    "packId": "SCR-V03",
    "packName": "Device Motion",
    "packCode": "V03",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "screenshot",
      "video"
    ]
  },
  {
    "id": "SCR-V03-07",
    "inputType": "screenshot",
    "name": "Desktop monitor dolly",
    "category": "Video",
    "packId": "SCR-V03",
    "packName": "Device Motion",
    "packCode": "V03",
    "output": "video",
    "surface": "Browser / desktop",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "screenshot",
      "video"
    ]
  },
  {
    "id": "SCR-V03-08",
    "inputType": "screenshot",
    "name": "Ultrawide dashboard sweep",
    "category": "Video",
    "packId": "SCR-V03",
    "packName": "Device Motion",
    "packCode": "V03",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "screenshot",
      "video"
    ]
  },
  {
    "id": "SCR-V03-09",
    "inputType": "screenshot",
    "name": "SaaS device lineup reveal",
    "category": "Video",
    "packId": "SCR-V03",
    "packName": "Device Motion",
    "packCode": "V03",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "saas",
      "screenshot",
      "video"
    ]
  },
  {
    "id": "SCR-V03-10",
    "inputType": "screenshot",
    "name": "Responsive stack motion",
    "category": "Video",
    "packId": "SCR-V03",
    "packName": "Device Motion",
    "packCode": "V03",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "screenshot",
      "video"
    ]
  },
  {
    "id": "PRO-S01-01",
    "inputType": "product",
    "name": "White Carrara marble",
    "category": "Studio",
    "packId": "PRO-S01",
    "packName": "Studio Surfaces",
    "packCode": "S01",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Minimal",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S01-02",
    "inputType": "product",
    "name": "Black marble dramatic",
    "category": "Studio",
    "packId": "PRO-S01",
    "packName": "Studio Surfaces",
    "packCode": "S01",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Dramatic",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S01-03",
    "inputType": "product",
    "name": "Walnut wood grain",
    "category": "Studio",
    "packId": "PRO-S01",
    "packName": "Studio Surfaces",
    "packCode": "S01",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S01-04",
    "inputType": "product",
    "name": "Polished concrete cool",
    "category": "Studio",
    "packId": "PRO-S01",
    "packName": "Studio Surfaces",
    "packCode": "S01",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Streetwear",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S01-05",
    "inputType": "product",
    "name": "Linen flat lay",
    "category": "Studio",
    "packId": "PRO-S01",
    "packName": "Studio Surfaces",
    "packCode": "S01",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Cozy",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S01-06",
    "inputType": "product",
    "name": "White sweep clean",
    "category": "Studio",
    "packId": "PRO-S01",
    "packName": "Studio Surfaces",
    "packCode": "S01",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Minimal",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S01-07",
    "inputType": "product",
    "name": "Black backdrop dramatic",
    "category": "Studio",
    "packId": "PRO-S01",
    "packName": "Studio Surfaces",
    "packCode": "S01",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Dramatic",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S01-08",
    "inputType": "product",
    "name": "Beige stone pedestal",
    "category": "Studio",
    "packId": "PRO-S01",
    "packName": "Studio Surfaces",
    "packCode": "S01",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S01-09",
    "inputType": "product",
    "name": "Brushed brass surface",
    "category": "Studio",
    "packId": "PRO-S01",
    "packName": "Studio Surfaces",
    "packCode": "S01",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S01-10",
    "inputType": "product",
    "name": "Floating white drop shadow",
    "category": "Studio",
    "packId": "PRO-S01",
    "packName": "Studio Surfaces",
    "packCode": "S01",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Minimal",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S02-01",
    "inputType": "product",
    "name": "Travertine pedestal",
    "category": "Studio",
    "packId": "PRO-S02",
    "packName": "Premium Studio",
    "packCode": "S02",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Premium",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S02-02",
    "inputType": "product",
    "name": "Smoked glass reflection",
    "category": "Studio",
    "packId": "PRO-S02",
    "packName": "Premium Studio",
    "packCode": "S02",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Premium",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S02-03",
    "inputType": "product",
    "name": "Matte clay plinth",
    "category": "Studio",
    "packId": "PRO-S02",
    "packName": "Premium Studio",
    "packCode": "S02",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Premium",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S02-04",
    "inputType": "product",
    "name": "Chrome reflective table",
    "category": "Studio",
    "packId": "PRO-S02",
    "packName": "Premium Studio",
    "packCode": "S02",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Premium",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S02-05",
    "inputType": "product",
    "name": "Warm oak block",
    "category": "Studio",
    "packId": "PRO-S02",
    "packName": "Premium Studio",
    "packCode": "S02",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Premium",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S02-06",
    "inputType": "product",
    "name": "Frosted acrylic riser",
    "category": "Studio",
    "packId": "PRO-S02",
    "packName": "Premium Studio",
    "packCode": "S02",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Premium",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S02-07",
    "inputType": "product",
    "name": "Sandstone slab",
    "category": "Studio",
    "packId": "PRO-S02",
    "packName": "Premium Studio",
    "packCode": "S02",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Premium",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S02-08",
    "inputType": "product",
    "name": "Charcoal slate surface",
    "category": "Studio",
    "packId": "PRO-S02",
    "packName": "Premium Studio",
    "packCode": "S02",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Premium",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S02-09",
    "inputType": "product",
    "name": "Cream paper sweep",
    "category": "Studio",
    "packId": "PRO-S02",
    "packName": "Premium Studio",
    "packCode": "S02",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Premium",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S02-10",
    "inputType": "product",
    "name": "High-key catalog white",
    "category": "Studio",
    "packId": "PRO-S02",
    "packName": "Premium Studio",
    "packCode": "S02",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Premium",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S03-01",
    "inputType": "product",
    "name": "Soft pink studio",
    "category": "Studio",
    "packId": "PRO-S03",
    "packName": "Color Studios",
    "packCode": "S03",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S03-02",
    "inputType": "product",
    "name": "Sage green studio",
    "category": "Studio",
    "packId": "PRO-S03",
    "packName": "Color Studios",
    "packCode": "S03",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S03-03",
    "inputType": "product",
    "name": "Butter yellow studio",
    "category": "Studio",
    "packId": "PRO-S03",
    "packName": "Color Studios",
    "packCode": "S03",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S03-04",
    "inputType": "product",
    "name": "Sky blue studio",
    "category": "Studio",
    "packId": "PRO-S03",
    "packName": "Color Studios",
    "packCode": "S03",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S03-05",
    "inputType": "product",
    "name": "Terracotta studio",
    "category": "Studio",
    "packId": "PRO-S03",
    "packName": "Color Studios",
    "packCode": "S03",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S03-06",
    "inputType": "product",
    "name": "Deep burgundy studio",
    "category": "Studio",
    "packId": "PRO-S03",
    "packName": "Color Studios",
    "packCode": "S03",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S03-07",
    "inputType": "product",
    "name": "Cobalt studio",
    "category": "Studio",
    "packId": "PRO-S03",
    "packName": "Color Studios",
    "packCode": "S03",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S03-08",
    "inputType": "product",
    "name": "Lavender studio",
    "category": "Studio",
    "packId": "PRO-S03",
    "packName": "Color Studios",
    "packCode": "S03",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S03-09",
    "inputType": "product",
    "name": "Monochrome grey studio",
    "category": "Studio",
    "packId": "PRO-S03",
    "packName": "Color Studios",
    "packCode": "S03",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S03-10",
    "inputType": "product",
    "name": "Split color backdrop",
    "category": "Studio",
    "packId": "PRO-S03",
    "packName": "Color Studios",
    "packCode": "S03",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S04-01",
    "inputType": "product",
    "name": "Amazon-style white hero",
    "category": "Studio",
    "packId": "PRO-S04",
    "packName": "E-Commerce Clean",
    "packCode": "S04",
    "output": "image",
    "surface": "Studio",
    "useCase": "Ecommerce",
    "style": "Minimal",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S04-02",
    "inputType": "product",
    "name": "Shopify square product",
    "category": "Studio",
    "packId": "PRO-S04",
    "packName": "E-Commerce Clean",
    "packCode": "S04",
    "output": "image",
    "surface": "Studio",
    "useCase": "Retail",
    "style": "Minimal",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S04-03",
    "inputType": "product",
    "name": "Marketplace 4:5 crop",
    "category": "Studio",
    "packId": "PRO-S04",
    "packName": "E-Commerce Clean",
    "packCode": "S04",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Minimal",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S04-04",
    "inputType": "product",
    "name": "Product with shadow only",
    "category": "Studio",
    "packId": "PRO-S04",
    "packName": "E-Commerce Clean",
    "packCode": "S04",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Minimal",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S04-05",
    "inputType": "product",
    "name": "Product front and angle",
    "category": "Studio",
    "packId": "PRO-S04",
    "packName": "E-Commerce Clean",
    "packCode": "S04",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Minimal",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S04-06",
    "inputType": "product",
    "name": "Product on transparent-style sweep",
    "category": "Studio",
    "packId": "PRO-S04",
    "packName": "E-Commerce Clean",
    "packCode": "S04",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Minimal",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S04-07",
    "inputType": "product",
    "name": "Small product macro",
    "category": "Studio",
    "packId": "PRO-S04",
    "packName": "E-Commerce Clean",
    "packCode": "S04",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Minimal",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S04-08",
    "inputType": "product",
    "name": "Tall bottle hero",
    "category": "Studio",
    "packId": "PRO-S04",
    "packName": "E-Commerce Clean",
    "packCode": "S04",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Brand mockup",
    "style": "Minimal",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S04-09",
    "inputType": "product",
    "name": "Wide bundle layout",
    "category": "Studio",
    "packId": "PRO-S04",
    "packName": "E-Commerce Clean",
    "packCode": "S04",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Minimal",
    "environment": "Studio",
    "format": "Wide",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S04-10",
    "inputType": "product",
    "name": "Product pair comparison",
    "category": "Studio",
    "packId": "PRO-S04",
    "packName": "E-Commerce Clean",
    "packCode": "S04",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Minimal",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S05-01",
    "inputType": "product",
    "name": "Skincare on marble",
    "category": "Studio",
    "packId": "PRO-S05",
    "packName": "Beauty Studio",
    "packCode": "S05",
    "output": "image",
    "surface": "Beauty product",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "beauty",
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S05-02",
    "inputType": "product",
    "name": "Cosmetic bottle lineup",
    "category": "Studio",
    "packId": "PRO-S05",
    "packName": "Beauty Studio",
    "packCode": "S05",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "beauty",
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S05-03",
    "inputType": "product",
    "name": "Lip balm macro",
    "category": "Studio",
    "packId": "PRO-S05",
    "packName": "Beauty Studio",
    "packCode": "S05",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "beauty",
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S05-04",
    "inputType": "product",
    "name": "Perfume bottle reflection",
    "category": "Studio",
    "packId": "PRO-S05",
    "packName": "Beauty Studio",
    "packCode": "S05",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "beauty",
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S05-05",
    "inputType": "product",
    "name": "Makeup palette top-down",
    "category": "Studio",
    "packId": "PRO-S05",
    "packName": "Beauty Studio",
    "packCode": "S05",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "beauty",
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S05-06",
    "inputType": "product",
    "name": "Dropper bottle splash",
    "category": "Studio",
    "packId": "PRO-S05",
    "packName": "Beauty Studio",
    "packCode": "S05",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "beauty",
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S05-07",
    "inputType": "product",
    "name": "Serum with glass shadow",
    "category": "Studio",
    "packId": "PRO-S05",
    "packName": "Beauty Studio",
    "packCode": "S05",
    "output": "image",
    "surface": "Beauty product",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "beauty",
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S05-08",
    "inputType": "product",
    "name": "Cream jar open lid",
    "category": "Studio",
    "packId": "PRO-S05",
    "packName": "Beauty Studio",
    "packCode": "S05",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "beauty",
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S05-09",
    "inputType": "product",
    "name": "Beauty tube upright",
    "category": "Studio",
    "packId": "PRO-S05",
    "packName": "Beauty Studio",
    "packCode": "S05",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "beauty",
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S05-10",
    "inputType": "product",
    "name": "Spa product trio",
    "category": "Studio",
    "packId": "PRO-S05",
    "packName": "Beauty Studio",
    "packCode": "S05",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "beauty",
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S06-01",
    "inputType": "product",
    "name": "Snack pouch studio",
    "category": "Studio",
    "packId": "PRO-S06",
    "packName": "Food Studio",
    "packCode": "S06",
    "output": "image",
    "surface": "Bag",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S06-02",
    "inputType": "product",
    "name": "Sauce jar studio",
    "category": "Studio",
    "packId": "PRO-S06",
    "packName": "Food Studio",
    "packCode": "S06",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S06-03",
    "inputType": "product",
    "name": "Coffee bag studio",
    "category": "Studio",
    "packId": "PRO-S06",
    "packName": "Food Studio",
    "packCode": "S06",
    "output": "image",
    "surface": "Bag",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Cafe",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S06-04",
    "inputType": "product",
    "name": "Tea tin studio",
    "category": "Studio",
    "packId": "PRO-S06",
    "packName": "Food Studio",
    "packCode": "S06",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S06-05",
    "inputType": "product",
    "name": "Honey jar macro",
    "category": "Studio",
    "packId": "PRO-S06",
    "packName": "Food Studio",
    "packCode": "S06",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S06-06",
    "inputType": "product",
    "name": "Chocolate bar wrapper",
    "category": "Studio",
    "packId": "PRO-S06",
    "packName": "Food Studio",
    "packCode": "S06",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S06-07",
    "inputType": "product",
    "name": "Bakery box studio",
    "category": "Studio",
    "packId": "PRO-S06",
    "packName": "Food Studio",
    "packCode": "S06",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S06-08",
    "inputType": "product",
    "name": "Beverage can studio",
    "category": "Studio",
    "packId": "PRO-S06",
    "packName": "Food Studio",
    "packCode": "S06",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S06-09",
    "inputType": "product",
    "name": "Granola pouch studio",
    "category": "Studio",
    "packId": "PRO-S06",
    "packName": "Food Studio",
    "packCode": "S06",
    "output": "image",
    "surface": "Bag",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-S06-10",
    "inputType": "product",
    "name": "Supplement tub studio",
    "category": "Studio",
    "packId": "PRO-S06",
    "packName": "Food Studio",
    "packCode": "S06",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-H01-01",
    "inputType": "product",
    "name": "Modern white kitchen",
    "category": "Home",
    "packId": "PRO-H01",
    "packName": "Kitchen And Cafe",
    "packCode": "H01",
    "output": "image",
    "surface": "Home",
    "useCase": "Brand mockup",
    "style": "Minimal",
    "environment": "Cafe",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-H01-02",
    "inputType": "product",
    "name": "Marble kitchen island",
    "category": "Home",
    "packId": "PRO-H01",
    "packName": "Kitchen And Cafe",
    "packCode": "H01",
    "output": "image",
    "surface": "Home",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Cafe",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-H01-03",
    "inputType": "product",
    "name": "Coffee bar espresso",
    "category": "Home",
    "packId": "PRO-H01",
    "packName": "Kitchen And Cafe",
    "packCode": "H01",
    "output": "image",
    "surface": "Home",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Cafe",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-H01-04",
    "inputType": "product",
    "name": "Breakfast table morning",
    "category": "Home",
    "packId": "PRO-H01",
    "packName": "Kitchen And Cafe",
    "packCode": "H01",
    "output": "image",
    "surface": "Home",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Cafe",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-H01-05",
    "inputType": "product",
    "name": "Pantry shelf",
    "category": "Home",
    "packId": "PRO-H01",
    "packName": "Kitchen And Cafe",
    "packCode": "H01",
    "output": "image",
    "surface": "Home",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Cafe",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-H01-06",
    "inputType": "product",
    "name": "Cutting board counter",
    "category": "Home",
    "packId": "PRO-H01",
    "packName": "Kitchen And Cafe",
    "packCode": "H01",
    "output": "image",
    "surface": "Home",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Cafe",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-H01-07",
    "inputType": "product",
    "name": "Cafe table window",
    "category": "Home",
    "packId": "PRO-H01",
    "packName": "Kitchen And Cafe",
    "packCode": "H01",
    "output": "image",
    "surface": "Home",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Cafe",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-H01-08",
    "inputType": "product",
    "name": "Restaurant counter",
    "category": "Home",
    "packId": "PRO-H01",
    "packName": "Kitchen And Cafe",
    "packCode": "H01",
    "output": "image",
    "surface": "Home",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Cafe",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-H01-09",
    "inputType": "product",
    "name": "Tea tray setup",
    "category": "Home",
    "packId": "PRO-H01",
    "packName": "Kitchen And Cafe",
    "packCode": "H01",
    "output": "image",
    "surface": "Home",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Cafe",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-H01-10",
    "inputType": "product",
    "name": "Home bar cart",
    "category": "Home",
    "packId": "PRO-H01",
    "packName": "Kitchen And Cafe",
    "packCode": "H01",
    "output": "image",
    "surface": "Home",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Cafe",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-H02-01",
    "inputType": "product",
    "name": "Spa bathroom eucalyptus",
    "category": "Home",
    "packId": "PRO-H02",
    "packName": "Bathroom And Spa",
    "packCode": "H02",
    "output": "image",
    "surface": "Home",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-H02-02",
    "inputType": "product",
    "name": "Marble bathroom candle towel",
    "category": "Home",
    "packId": "PRO-H02",
    "packName": "Bathroom And Spa",
    "packCode": "H02",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-H02-03",
    "inputType": "product",
    "name": "Shower shelf product",
    "category": "Home",
    "packId": "PRO-H02",
    "packName": "Bathroom And Spa",
    "packCode": "H02",
    "output": "image",
    "surface": "Home",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-H02-04",
    "inputType": "product",
    "name": "Sink counter skincare",
    "category": "Home",
    "packId": "PRO-H02",
    "packName": "Bathroom And Spa",
    "packCode": "H02",
    "output": "image",
    "surface": "Beauty product",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-H02-05",
    "inputType": "product",
    "name": "Bath tray scene",
    "category": "Home",
    "packId": "PRO-H02",
    "packName": "Bathroom And Spa",
    "packCode": "H02",
    "output": "image",
    "surface": "Home",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-H02-06",
    "inputType": "product",
    "name": "Hotel bathroom vanity",
    "category": "Home",
    "packId": "PRO-H02",
    "packName": "Bathroom And Spa",
    "packCode": "H02",
    "output": "image",
    "surface": "Home",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-H02-07",
    "inputType": "product",
    "name": "Linen closet shelf",
    "category": "Home",
    "packId": "PRO-H02",
    "packName": "Bathroom And Spa",
    "packCode": "H02",
    "output": "image",
    "surface": "Home",
    "useCase": "Retail",
    "style": "Cozy",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-H02-08",
    "inputType": "product",
    "name": "Makeup mirror counter",
    "category": "Home",
    "packId": "PRO-H02",
    "packName": "Bathroom And Spa",
    "packCode": "H02",
    "output": "image",
    "surface": "Home",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-H02-09",
    "inputType": "product",
    "name": "Spa stones and towel",
    "category": "Home",
    "packId": "PRO-H02",
    "packName": "Bathroom And Spa",
    "packCode": "H02",
    "output": "image",
    "surface": "Home",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-H02-10",
    "inputType": "product",
    "name": "Minimal bathroom niche",
    "category": "Home",
    "packId": "PRO-H02",
    "packName": "Bathroom And Spa",
    "packCode": "H02",
    "output": "image",
    "surface": "Home",
    "useCase": "Brand mockup",
    "style": "Minimal",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-H03-01",
    "inputType": "product",
    "name": "Bedside nightstand evening",
    "category": "Home",
    "packId": "PRO-H03",
    "packName": "Living Spaces",
    "packCode": "H03",
    "output": "image",
    "surface": "Home",
    "useCase": "Brand mockup",
    "style": "Cozy",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-H03-02",
    "inputType": "product",
    "name": "White linen sheets morning",
    "category": "Home",
    "packId": "PRO-H03",
    "packName": "Living Spaces",
    "packCode": "H03",
    "output": "image",
    "surface": "Home",
    "useCase": "Brand mockup",
    "style": "Cozy",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-H03-03",
    "inputType": "product",
    "name": "Cozy coffee table evening",
    "category": "Home",
    "packId": "PRO-H03",
    "packName": "Living Spaces",
    "packCode": "H03",
    "output": "image",
    "surface": "Home",
    "useCase": "Brand mockup",
    "style": "Cozy",
    "environment": "Cafe",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-H03-04",
    "inputType": "product",
    "name": "Window seat plants",
    "category": "Home",
    "packId": "PRO-H03",
    "packName": "Living Spaces",
    "packCode": "H03",
    "output": "image",
    "surface": "Home",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-H03-05",
    "inputType": "product",
    "name": "Bookshelf among books",
    "category": "Home",
    "packId": "PRO-H03",
    "packName": "Living Spaces",
    "packCode": "H03",
    "output": "image",
    "surface": "Info product",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-H03-06",
    "inputType": "product",
    "name": "Sofa side table",
    "category": "Home",
    "packId": "PRO-H03",
    "packName": "Living Spaces",
    "packCode": "H03",
    "output": "image",
    "surface": "Home",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-H03-07",
    "inputType": "product",
    "name": "Reading chair scene",
    "category": "Home",
    "packId": "PRO-H03",
    "packName": "Living Spaces",
    "packCode": "H03",
    "output": "image",
    "surface": "Home",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-H03-08",
    "inputType": "product",
    "name": "Entryway console",
    "category": "Home",
    "packId": "PRO-H03",
    "packName": "Living Spaces",
    "packCode": "H03",
    "output": "image",
    "surface": "Home",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-H03-09",
    "inputType": "product",
    "name": "Fireplace mantle",
    "category": "Home",
    "packId": "PRO-H03",
    "packName": "Living Spaces",
    "packCode": "H03",
    "output": "image",
    "surface": "Home",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-H03-10",
    "inputType": "product",
    "name": "Home office shelf",
    "category": "Home",
    "packId": "PRO-H03",
    "packName": "Living Spaces",
    "packCode": "H03",
    "output": "image",
    "surface": "Home",
    "useCase": "Retail",
    "style": "Corporate",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-H04-01",
    "inputType": "product",
    "name": "Product in tote by door",
    "category": "Home",
    "packId": "PRO-H04",
    "packName": "Family And Everyday",
    "packCode": "H04",
    "output": "image",
    "surface": "Bag",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-H04-02",
    "inputType": "product",
    "name": "Product on family breakfast table",
    "category": "Home",
    "packId": "PRO-H04",
    "packName": "Family And Everyday",
    "packCode": "H04",
    "output": "image",
    "surface": "Home",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-H04-03",
    "inputType": "product",
    "name": "Laundry room shelf",
    "category": "Home",
    "packId": "PRO-H04",
    "packName": "Family And Everyday",
    "packCode": "H04",
    "output": "image",
    "surface": "Home",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-H04-04",
    "inputType": "product",
    "name": "Nursery dresser",
    "category": "Home",
    "packId": "PRO-H04",
    "packName": "Family And Everyday",
    "packCode": "H04",
    "output": "image",
    "surface": "Home",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-H04-05",
    "inputType": "product",
    "name": "Pet corner scene",
    "category": "Home",
    "packId": "PRO-H04",
    "packName": "Family And Everyday",
    "packCode": "H04",
    "output": "image",
    "surface": "Home",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-H04-06",
    "inputType": "product",
    "name": "Craft table",
    "category": "Home",
    "packId": "PRO-H04",
    "packName": "Family And Everyday",
    "packCode": "H04",
    "output": "image",
    "surface": "Home",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-H04-07",
    "inputType": "product",
    "name": "Kids desk",
    "category": "Home",
    "packId": "PRO-H04",
    "packName": "Family And Everyday",
    "packCode": "H04",
    "output": "image",
    "surface": "Home",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-H04-08",
    "inputType": "product",
    "name": "Apartment kitchen",
    "category": "Home",
    "packId": "PRO-H04",
    "packName": "Family And Everyday",
    "packCode": "H04",
    "output": "image",
    "surface": "Home",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-H04-09",
    "inputType": "product",
    "name": "Weekend brunch table",
    "category": "Home",
    "packId": "PRO-H04",
    "packName": "Family And Everyday",
    "packCode": "H04",
    "output": "image",
    "surface": "Home",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-H04-10",
    "inputType": "product",
    "name": "Hallway catch-all tray",
    "category": "Home",
    "packId": "PRO-H04",
    "packName": "Family And Everyday",
    "packCode": "H04",
    "output": "image",
    "surface": "Home",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-O01-01",
    "inputType": "product",
    "name": "Beach golden hour sand",
    "category": "Outdoor",
    "packId": "PRO-O01",
    "packName": "Nature Outdoor",
    "packCode": "O01",
    "output": "image",
    "surface": "Outdoor",
    "useCase": "Brand mockup",
    "style": "Premium",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "outdoor",
      "product"
    ]
  },
  {
    "id": "PRO-O01-02",
    "inputType": "product",
    "name": "Forest moss dappled light",
    "category": "Outdoor",
    "packId": "PRO-O01",
    "packName": "Nature Outdoor",
    "packCode": "O01",
    "output": "image",
    "surface": "Outdoor",
    "useCase": "Brand mockup",
    "style": "Lifestyle",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "outdoor",
      "product"
    ]
  },
  {
    "id": "PRO-O01-03",
    "inputType": "product",
    "name": "Garden patio breakfast",
    "category": "Outdoor",
    "packId": "PRO-O01",
    "packName": "Nature Outdoor",
    "packCode": "O01",
    "output": "image",
    "surface": "Outdoor",
    "useCase": "Brand mockup",
    "style": "Lifestyle",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "outdoor",
      "product"
    ]
  },
  {
    "id": "PRO-O01-04",
    "inputType": "product",
    "name": "Rooftop sunset skyline",
    "category": "Outdoor",
    "packId": "PRO-O01",
    "packName": "Nature Outdoor",
    "packCode": "O01",
    "output": "image",
    "surface": "Outdoor",
    "useCase": "Brand mockup",
    "style": "Lifestyle",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "outdoor",
      "product"
    ]
  },
  {
    "id": "PRO-O01-05",
    "inputType": "product",
    "name": "Picnic blanket gingham",
    "category": "Outdoor",
    "packId": "PRO-O01",
    "packName": "Nature Outdoor",
    "packCode": "O01",
    "output": "image",
    "surface": "Outdoor",
    "useCase": "Brand mockup",
    "style": "Lifestyle",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "outdoor",
      "product"
    ]
  },
  {
    "id": "PRO-O01-06",
    "inputType": "product",
    "name": "Mountain trail rock",
    "category": "Outdoor",
    "packId": "PRO-O01",
    "packName": "Nature Outdoor",
    "packCode": "O01",
    "output": "image",
    "surface": "Outdoor",
    "useCase": "Brand mockup",
    "style": "Lifestyle",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "outdoor",
      "product"
    ]
  },
  {
    "id": "PRO-O01-07",
    "inputType": "product",
    "name": "Lake dock morning",
    "category": "Outdoor",
    "packId": "PRO-O01",
    "packName": "Nature Outdoor",
    "packCode": "O01",
    "output": "image",
    "surface": "Outdoor",
    "useCase": "Brand mockup",
    "style": "Lifestyle",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "outdoor",
      "product"
    ]
  },
  {
    "id": "PRO-O01-08",
    "inputType": "product",
    "name": "Desert rock warm light",
    "category": "Outdoor",
    "packId": "PRO-O01",
    "packName": "Nature Outdoor",
    "packCode": "O01",
    "output": "image",
    "surface": "Outdoor",
    "useCase": "Brand mockup",
    "style": "Lifestyle",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "outdoor",
      "product"
    ]
  },
  {
    "id": "PRO-O01-09",
    "inputType": "product",
    "name": "Snowy pine scene",
    "category": "Outdoor",
    "packId": "PRO-O01",
    "packName": "Nature Outdoor",
    "packCode": "O01",
    "output": "image",
    "surface": "Outdoor",
    "useCase": "Brand mockup",
    "style": "Lifestyle",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "outdoor",
      "product"
    ]
  },
  {
    "id": "PRO-O01-10",
    "inputType": "product",
    "name": "Wildflower meadow",
    "category": "Outdoor",
    "packId": "PRO-O01",
    "packName": "Nature Outdoor",
    "packCode": "O01",
    "output": "image",
    "surface": "Outdoor",
    "useCase": "Brand mockup",
    "style": "Lifestyle",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "outdoor",
      "product"
    ]
  },
  {
    "id": "PRO-O02-01",
    "inputType": "product",
    "name": "City sidewalk cafe",
    "category": "Outdoor",
    "packId": "PRO-O02",
    "packName": "Urban Outdoor",
    "packCode": "O02",
    "output": "image",
    "surface": "Outdoor",
    "useCase": "Brand mockup",
    "style": "Streetwear",
    "environment": "Cafe",
    "format": "Square",
    "tags": [
      "outdoor",
      "product"
    ]
  },
  {
    "id": "PRO-O02-02",
    "inputType": "product",
    "name": "Brick wall street",
    "category": "Outdoor",
    "packId": "PRO-O02",
    "packName": "Urban Outdoor",
    "packCode": "O02",
    "output": "image",
    "surface": "Outdoor",
    "useCase": "Brand mockup",
    "style": "Streetwear",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "outdoor",
      "product"
    ]
  },
  {
    "id": "PRO-O02-03",
    "inputType": "product",
    "name": "Concrete steps",
    "category": "Outdoor",
    "packId": "PRO-O02",
    "packName": "Urban Outdoor",
    "packCode": "O02",
    "output": "image",
    "surface": "Outdoor",
    "useCase": "Brand mockup",
    "style": "Streetwear",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "outdoor",
      "product"
    ]
  },
  {
    "id": "PRO-O02-04",
    "inputType": "product",
    "name": "Park bench",
    "category": "Outdoor",
    "packId": "PRO-O02",
    "packName": "Urban Outdoor",
    "packCode": "O02",
    "output": "image",
    "surface": "Outdoor",
    "useCase": "Brand mockup",
    "style": "Streetwear",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "outdoor",
      "product"
    ]
  },
  {
    "id": "PRO-O02-05",
    "inputType": "product",
    "name": "Bike basket",
    "category": "Outdoor",
    "packId": "PRO-O02",
    "packName": "Urban Outdoor",
    "packCode": "O02",
    "output": "image",
    "surface": "Outdoor",
    "useCase": "Brand mockup",
    "style": "Streetwear",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "outdoor",
      "product"
    ]
  },
  {
    "id": "PRO-O02-06",
    "inputType": "product",
    "name": "Street market stall",
    "category": "Outdoor",
    "packId": "PRO-O02",
    "packName": "Urban Outdoor",
    "packCode": "O02",
    "output": "image",
    "surface": "Outdoor",
    "useCase": "Brand mockup",
    "style": "Streetwear",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "outdoor",
      "product"
    ]
  },
  {
    "id": "PRO-O02-07",
    "inputType": "product",
    "name": "Rooftop concrete",
    "category": "Outdoor",
    "packId": "PRO-O02",
    "packName": "Urban Outdoor",
    "packCode": "O02",
    "output": "image",
    "surface": "Outdoor",
    "useCase": "Brand mockup",
    "style": "Streetwear",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "outdoor",
      "product"
    ]
  },
  {
    "id": "PRO-O02-08",
    "inputType": "product",
    "name": "Outdoor cafe chair",
    "category": "Outdoor",
    "packId": "PRO-O02",
    "packName": "Urban Outdoor",
    "packCode": "O02",
    "output": "image",
    "surface": "Outdoor",
    "useCase": "Brand mockup",
    "style": "Streetwear",
    "environment": "Cafe",
    "format": "Square",
    "tags": [
      "outdoor",
      "product"
    ]
  },
  {
    "id": "PRO-O02-09",
    "inputType": "product",
    "name": "Graffiti wall",
    "category": "Outdoor",
    "packId": "PRO-O02",
    "packName": "Urban Outdoor",
    "packCode": "O02",
    "output": "image",
    "surface": "Outdoor",
    "useCase": "Brand mockup",
    "style": "Streetwear",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "outdoor",
      "product"
    ]
  },
  {
    "id": "PRO-O02-10",
    "inputType": "product",
    "name": "Commuter bag scene",
    "category": "Outdoor",
    "packId": "PRO-O02",
    "packName": "Urban Outdoor",
    "packCode": "O02",
    "output": "image",
    "surface": "Bag",
    "useCase": "Brand mockup",
    "style": "Streetwear",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "outdoor",
      "product"
    ]
  },
  {
    "id": "PRO-O03-01",
    "inputType": "product",
    "name": "Hotel balcony",
    "category": "Outdoor",
    "packId": "PRO-O03",
    "packName": "Travel Outdoor",
    "packCode": "O03",
    "output": "image",
    "surface": "Outdoor",
    "useCase": "Brand mockup",
    "style": "Lifestyle",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "outdoor",
      "product"
    ]
  },
  {
    "id": "PRO-O03-02",
    "inputType": "product",
    "name": "Airport tray table",
    "category": "Outdoor",
    "packId": "PRO-O03",
    "packName": "Travel Outdoor",
    "packCode": "O03",
    "output": "image",
    "surface": "Outdoor",
    "useCase": "Brand mockup",
    "style": "Lifestyle",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "outdoor",
      "product"
    ]
  },
  {
    "id": "PRO-O03-03",
    "inputType": "product",
    "name": "Suitcase packing scene",
    "category": "Outdoor",
    "packId": "PRO-O03",
    "packName": "Travel Outdoor",
    "packCode": "O03",
    "output": "image",
    "surface": "Outdoor",
    "useCase": "Brand mockup",
    "style": "Lifestyle",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "outdoor",
      "product"
    ]
  },
  {
    "id": "PRO-O03-04",
    "inputType": "product",
    "name": "Beach bag setup",
    "category": "Outdoor",
    "packId": "PRO-O03",
    "packName": "Travel Outdoor",
    "packCode": "O03",
    "output": "image",
    "surface": "Bag",
    "useCase": "Brand mockup",
    "style": "Lifestyle",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "outdoor",
      "product"
    ]
  },
  {
    "id": "PRO-O03-05",
    "inputType": "product",
    "name": "Camper van table",
    "category": "Outdoor",
    "packId": "PRO-O03",
    "packName": "Travel Outdoor",
    "packCode": "O03",
    "output": "image",
    "surface": "Outdoor",
    "useCase": "Brand mockup",
    "style": "Lifestyle",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "outdoor",
      "product"
    ]
  },
  {
    "id": "PRO-O03-06",
    "inputType": "product",
    "name": "Hiking backpack pocket",
    "category": "Outdoor",
    "packId": "PRO-O03",
    "packName": "Travel Outdoor",
    "packCode": "O03",
    "output": "image",
    "surface": "Bag",
    "useCase": "Brand mockup",
    "style": "Lifestyle",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "outdoor",
      "product"
    ]
  },
  {
    "id": "PRO-O03-07",
    "inputType": "product",
    "name": "Train window table",
    "category": "Outdoor",
    "packId": "PRO-O03",
    "packName": "Travel Outdoor",
    "packCode": "O03",
    "output": "image",
    "surface": "Outdoor",
    "useCase": "Brand mockup",
    "style": "Lifestyle",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "outdoor",
      "product"
    ]
  },
  {
    "id": "PRO-O03-08",
    "inputType": "product",
    "name": "Poolside lounger",
    "category": "Outdoor",
    "packId": "PRO-O03",
    "packName": "Travel Outdoor",
    "packCode": "O03",
    "output": "image",
    "surface": "Outdoor",
    "useCase": "Brand mockup",
    "style": "Lifestyle",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "outdoor",
      "product"
    ]
  },
  {
    "id": "PRO-O03-09",
    "inputType": "product",
    "name": "Vacation rental kitchen",
    "category": "Outdoor",
    "packId": "PRO-O03",
    "packName": "Travel Outdoor",
    "packCode": "O03",
    "output": "image",
    "surface": "Outdoor",
    "useCase": "Brand mockup",
    "style": "Lifestyle",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "outdoor",
      "product"
    ]
  },
  {
    "id": "PRO-O03-10",
    "inputType": "product",
    "name": "Weekend duffel bag",
    "category": "Outdoor",
    "packId": "PRO-O03",
    "packName": "Travel Outdoor",
    "packCode": "O03",
    "output": "image",
    "surface": "Bag",
    "useCase": "Brand mockup",
    "style": "Lifestyle",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "outdoor",
      "product"
    ]
  },
  {
    "id": "PRO-R01-01",
    "inputType": "product",
    "name": "Hand holding product neutral",
    "category": "Retail",
    "packId": "PRO-R01",
    "packName": "Hands And Human",
    "packCode": "R01",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-R01-02",
    "inputType": "product",
    "name": "Two hands cradling",
    "category": "Retail",
    "packId": "PRO-R01",
    "packName": "Hands And Human",
    "packCode": "R01",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-R01-03",
    "inputType": "product",
    "name": "Hand reaching from frame",
    "category": "Retail",
    "packId": "PRO-R01",
    "packName": "Hands And Human",
    "packCode": "R01",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-R01-04",
    "inputType": "product",
    "name": "Person opening packaging",
    "category": "Retail",
    "packId": "PRO-R01",
    "packName": "Hands And Human",
    "packCode": "R01",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "packaging",
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-R01-05",
    "inputType": "product",
    "name": "Hand applying product",
    "category": "Retail",
    "packId": "PRO-R01",
    "packName": "Hands And Human",
    "packCode": "R01",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-R01-06",
    "inputType": "product",
    "name": "Hand placing product on shelf",
    "category": "Retail",
    "packId": "PRO-R01",
    "packName": "Hands And Human",
    "packCode": "R01",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-R01-07",
    "inputType": "product",
    "name": "Hand holding bottle outdoor",
    "category": "Retail",
    "packId": "PRO-R01",
    "packName": "Hands And Human",
    "packCode": "R01",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Retail",
    "style": "Lifestyle",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "outdoor",
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-R01-08",
    "inputType": "product",
    "name": "Hand presenting box",
    "category": "Retail",
    "packId": "PRO-R01",
    "packName": "Hands And Human",
    "packCode": "R01",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-R01-09",
    "inputType": "product",
    "name": "Hand unboxing tissue",
    "category": "Retail",
    "packId": "PRO-R01",
    "packName": "Hands And Human",
    "packCode": "R01",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-R01-10",
    "inputType": "product",
    "name": "Hand with shopping bag",
    "category": "Retail",
    "packId": "PRO-R01",
    "packName": "Hands And Human",
    "packCode": "R01",
    "output": "image",
    "surface": "Bag",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-R02-01",
    "inputType": "product",
    "name": "Boutique shelf display",
    "category": "Retail",
    "packId": "PRO-R02",
    "packName": "Retail Shelves",
    "packCode": "R02",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-R02-02",
    "inputType": "product",
    "name": "Grocery shelf placement",
    "category": "Retail",
    "packId": "PRO-R02",
    "packName": "Retail Shelves",
    "packCode": "R02",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-R02-03",
    "inputType": "product",
    "name": "Beauty store shelf",
    "category": "Retail",
    "packId": "PRO-R02",
    "packName": "Retail Shelves",
    "packCode": "R02",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "beauty",
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-R02-04",
    "inputType": "product",
    "name": "Pharmacy shelf",
    "category": "Retail",
    "packId": "PRO-R02",
    "packName": "Retail Shelves",
    "packCode": "R02",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-R02-05",
    "inputType": "product",
    "name": "Coffee shop retail wall",
    "category": "Retail",
    "packId": "PRO-R02",
    "packName": "Retail Shelves",
    "packCode": "R02",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Cafe",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-R02-06",
    "inputType": "product",
    "name": "Bookstore display table",
    "category": "Retail",
    "packId": "PRO-R02",
    "packName": "Retail Shelves",
    "packCode": "R02",
    "output": "image",
    "surface": "Info product",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-R02-07",
    "inputType": "product",
    "name": "Pop-up market table",
    "category": "Retail",
    "packId": "PRO-R02",
    "packName": "Retail Shelves",
    "packCode": "R02",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-R02-08",
    "inputType": "product",
    "name": "Concept store pedestal",
    "category": "Retail",
    "packId": "PRO-R02",
    "packName": "Retail Shelves",
    "packCode": "R02",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-R02-09",
    "inputType": "product",
    "name": "Checkout counter impulse display",
    "category": "Retail",
    "packId": "PRO-R02",
    "packName": "Retail Shelves",
    "packCode": "R02",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-R02-10",
    "inputType": "product",
    "name": "Farmers market crate",
    "category": "Retail",
    "packId": "PRO-R02",
    "packName": "Retail Shelves",
    "packCode": "R02",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-R03-01",
    "inputType": "product",
    "name": "Product with price tag",
    "category": "Retail",
    "packId": "PRO-R03",
    "packName": "Launch And Ads",
    "packCode": "R03",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-R03-02",
    "inputType": "product",
    "name": "Product hero with blank copy space",
    "category": "Retail",
    "packId": "PRO-R03",
    "packName": "Launch And Ads",
    "packCode": "R03",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-R03-03",
    "inputType": "product",
    "name": "Product bundle sale layout",
    "category": "Retail",
    "packId": "PRO-R03",
    "packName": "Launch And Ads",
    "packCode": "R03",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-R03-04",
    "inputType": "product",
    "name": "Before-after comparison surface",
    "category": "Retail",
    "packId": "PRO-R03",
    "packName": "Launch And Ads",
    "packCode": "R03",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-R03-05",
    "inputType": "product",
    "name": "Product testimonial card scene",
    "category": "Retail",
    "packId": "PRO-R03",
    "packName": "Launch And Ads",
    "packCode": "R03",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-R03-06",
    "inputType": "product",
    "name": "Influencer mailer spread",
    "category": "Retail",
    "packId": "PRO-R03",
    "packName": "Launch And Ads",
    "packCode": "R03",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-R03-07",
    "inputType": "product",
    "name": "Press kit table",
    "category": "Retail",
    "packId": "PRO-R03",
    "packName": "Launch And Ads",
    "packCode": "R03",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-R03-08",
    "inputType": "product",
    "name": "Gift guide layout",
    "category": "Retail",
    "packId": "PRO-R03",
    "packName": "Launch And Ads",
    "packCode": "R03",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-R03-09",
    "inputType": "product",
    "name": "New arrival display",
    "category": "Retail",
    "packId": "PRO-R03",
    "packName": "Launch And Ads",
    "packCode": "R03",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-R03-10",
    "inputType": "product",
    "name": "Limited edition launch",
    "category": "Retail",
    "packId": "PRO-R03",
    "packName": "Launch And Ads",
    "packCode": "R03",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-R04-01",
    "inputType": "product",
    "name": "Mailer box opened",
    "category": "Retail",
    "packId": "PRO-R04",
    "packName": "Packaging Context",
    "packCode": "R04",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "packaging",
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-R04-02",
    "inputType": "product",
    "name": "Subscription box reveal",
    "category": "Retail",
    "packId": "PRO-R04",
    "packName": "Packaging Context",
    "packCode": "R04",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "packaging",
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-R04-03",
    "inputType": "product",
    "name": "Product inside tissue",
    "category": "Retail",
    "packId": "PRO-R04",
    "packName": "Packaging Context",
    "packCode": "R04",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "packaging",
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-R04-04",
    "inputType": "product",
    "name": "Product next to shipping box",
    "category": "Retail",
    "packId": "PRO-R04",
    "packName": "Packaging Context",
    "packCode": "R04",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "packaging",
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-R04-05",
    "inputType": "product",
    "name": "Branded insert card scene",
    "category": "Retail",
    "packId": "PRO-R04",
    "packName": "Packaging Context",
    "packCode": "R04",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "packaging",
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-R04-06",
    "inputType": "product",
    "name": "Product and ribbon gift",
    "category": "Retail",
    "packId": "PRO-R04",
    "packName": "Packaging Context",
    "packCode": "R04",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "packaging",
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-R04-07",
    "inputType": "product",
    "name": "Product with paper bag",
    "category": "Retail",
    "packId": "PRO-R04",
    "packName": "Packaging Context",
    "packCode": "R04",
    "output": "image",
    "surface": "Bag",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "packaging",
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-R04-08",
    "inputType": "product",
    "name": "Product in clear pouch",
    "category": "Retail",
    "packId": "PRO-R04",
    "packName": "Packaging Context",
    "packCode": "R04",
    "output": "image",
    "surface": "Bag",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "packaging",
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-R04-09",
    "inputType": "product",
    "name": "Product with hang tag",
    "category": "Retail",
    "packId": "PRO-R04",
    "packName": "Packaging Context",
    "packCode": "R04",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "packaging",
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-R04-10",
    "inputType": "product",
    "name": "Product in kraft tray",
    "category": "Retail",
    "packId": "PRO-R04",
    "packName": "Packaging Context",
    "packCode": "R04",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "packaging",
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-I01-01",
    "inputType": "product",
    "name": "3D paperback floating",
    "category": "Info Products",
    "packId": "PRO-I01",
    "packName": "Books And Ebooks",
    "packCode": "I01",
    "output": "image",
    "surface": "Info product",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-I01-02",
    "inputType": "product",
    "name": "3D hardcover wood desk",
    "category": "Info Products",
    "packId": "PRO-I01",
    "packName": "Books And Ebooks",
    "packCode": "I01",
    "output": "image",
    "surface": "Info product",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-I01-03",
    "inputType": "product",
    "name": "Book stack three",
    "category": "Info Products",
    "packId": "PRO-I01",
    "packName": "Books And Ebooks",
    "packCode": "I01",
    "output": "image",
    "surface": "Info product",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-I01-04",
    "inputType": "product",
    "name": "Kindle e-reader bed",
    "category": "Info Products",
    "packId": "PRO-I01",
    "packName": "Books And Ebooks",
    "packCode": "I01",
    "output": "image",
    "surface": "Info product",
    "useCase": "Creator product",
    "style": "Cozy",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-I01-05",
    "inputType": "product",
    "name": "iPad ebook cover",
    "category": "Info Products",
    "packId": "PRO-I01",
    "packName": "Books And Ebooks",
    "packCode": "I01",
    "output": "image",
    "surface": "Tablet",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-I01-06",
    "inputType": "product",
    "name": "Book beside coffee",
    "category": "Info Products",
    "packId": "PRO-I01",
    "packName": "Books And Ebooks",
    "packCode": "I01",
    "output": "image",
    "surface": "Info product",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Cafe",
    "format": "Square",
    "tags": [
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-I01-07",
    "inputType": "product",
    "name": "Book on linen",
    "category": "Info Products",
    "packId": "PRO-I01",
    "packName": "Books And Ebooks",
    "packCode": "I01",
    "output": "image",
    "surface": "Info product",
    "useCase": "Creator product",
    "style": "Cozy",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-I01-08",
    "inputType": "product",
    "name": "Book in hand",
    "category": "Info Products",
    "packId": "PRO-I01",
    "packName": "Books And Ebooks",
    "packCode": "I01",
    "output": "image",
    "surface": "Info product",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-I01-09",
    "inputType": "product",
    "name": "Workbook spread",
    "category": "Info Products",
    "packId": "PRO-I01",
    "packName": "Books And Ebooks",
    "packCode": "I01",
    "output": "image",
    "surface": "Info product",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-I01-10",
    "inputType": "product",
    "name": "Spiral-bound guide",
    "category": "Info Products",
    "packId": "PRO-I01",
    "packName": "Books And Ebooks",
    "packCode": "I01",
    "output": "image",
    "surface": "Info product",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-I02-01",
    "inputType": "product",
    "name": "Course on MacBook",
    "category": "Info Products",
    "packId": "PRO-I02",
    "packName": "Courses And Digital",
    "packCode": "I02",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-I02-02",
    "inputType": "product",
    "name": "Course on iPad",
    "category": "Info Products",
    "packId": "PRO-I02",
    "packName": "Courses And Digital",
    "packCode": "I02",
    "output": "image",
    "surface": "Tablet",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-I02-03",
    "inputType": "product",
    "name": "Online course dashboard",
    "category": "Info Products",
    "packId": "PRO-I02",
    "packName": "Courses And Digital",
    "packCode": "I02",
    "output": "image",
    "surface": "Info product",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-I02-04",
    "inputType": "product",
    "name": "Video lesson laptop",
    "category": "Info Products",
    "packId": "PRO-I02",
    "packName": "Courses And Digital",
    "packCode": "I02",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "info products",
      "product",
      "video"
    ]
  },
  {
    "id": "PRO-I02-05",
    "inputType": "product",
    "name": "Webinar replay screen",
    "category": "Info Products",
    "packId": "PRO-I02",
    "packName": "Courses And Digital",
    "packCode": "I02",
    "output": "image",
    "surface": "Info product",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-I02-06",
    "inputType": "product",
    "name": "Digital planner tablet",
    "category": "Info Products",
    "packId": "PRO-I02",
    "packName": "Courses And Digital",
    "packCode": "I02",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-I02-07",
    "inputType": "product",
    "name": "PDF guide stack",
    "category": "Info Products",
    "packId": "PRO-I02",
    "packName": "Courses And Digital",
    "packCode": "I02",
    "output": "image",
    "surface": "Info product",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-I02-08",
    "inputType": "product",
    "name": "Template bundle laptop",
    "category": "Info Products",
    "packId": "PRO-I02",
    "packName": "Courses And Digital",
    "packCode": "I02",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-I02-09",
    "inputType": "product",
    "name": "Notion dashboard screen",
    "category": "Info Products",
    "packId": "PRO-I02",
    "packName": "Courses And Digital",
    "packCode": "I02",
    "output": "image",
    "surface": "Info product",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-I02-10",
    "inputType": "product",
    "name": "Membership portal desk",
    "category": "Info Products",
    "packId": "PRO-I02",
    "packName": "Courses And Digital",
    "packCode": "I02",
    "output": "image",
    "surface": "Info product",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-I03-01",
    "inputType": "product",
    "name": "Podcast cover on phone",
    "category": "Info Products",
    "packId": "PRO-I03",
    "packName": "Creator Products",
    "packCode": "I03",
    "output": "image",
    "surface": "Phone",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "creator",
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-I03-02",
    "inputType": "product",
    "name": "Newsletter product page",
    "category": "Info Products",
    "packId": "PRO-I03",
    "packName": "Creator Products",
    "packCode": "I03",
    "output": "image",
    "surface": "Info Products",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "creator",
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-I03-03",
    "inputType": "product",
    "name": "Coaching workbook",
    "category": "Info Products",
    "packId": "PRO-I03",
    "packName": "Creator Products",
    "packCode": "I03",
    "output": "image",
    "surface": "Info product",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "creator",
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-I03-04",
    "inputType": "product",
    "name": "Paid community dashboard",
    "category": "Info Products",
    "packId": "PRO-I03",
    "packName": "Creator Products",
    "packCode": "I03",
    "output": "image",
    "surface": "Info Products",
    "useCase": "Digital launch",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "creator",
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-I03-05",
    "inputType": "product",
    "name": "Gumroad download page",
    "category": "Info Products",
    "packId": "PRO-I03",
    "packName": "Creator Products",
    "packCode": "I03",
    "output": "image",
    "surface": "Info Products",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "creator",
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-I03-06",
    "inputType": "product",
    "name": "Shopify digital product page",
    "category": "Info Products",
    "packId": "PRO-I03",
    "packName": "Creator Products",
    "packCode": "I03",
    "output": "image",
    "surface": "Info Products",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "creator",
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-I03-07",
    "inputType": "product",
    "name": "Etsy printable listing",
    "category": "Info Products",
    "packId": "PRO-I03",
    "packName": "Creator Products",
    "packCode": "I03",
    "output": "image",
    "surface": "Info Products",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "creator",
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-I03-08",
    "inputType": "product",
    "name": "Canva template preview",
    "category": "Info Products",
    "packId": "PRO-I03",
    "packName": "Creator Products",
    "packCode": "I03",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "creator",
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-I03-09",
    "inputType": "product",
    "name": "Lightroom preset pack",
    "category": "Info Products",
    "packId": "PRO-I03",
    "packName": "Creator Products",
    "packCode": "I03",
    "output": "image",
    "surface": "Info Products",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "creator",
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-I03-10",
    "inputType": "product",
    "name": "Fitness program PDF",
    "category": "Info Products",
    "packId": "PRO-I03",
    "packName": "Creator Products",
    "packCode": "I03",
    "output": "image",
    "surface": "Info product",
    "useCase": "Creator product",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "creator",
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-I04-01",
    "inputType": "product",
    "name": "USB drive on desk",
    "category": "Info Products",
    "packId": "PRO-I04",
    "packName": "Physical Media",
    "packCode": "I04",
    "output": "image",
    "surface": "Info Products",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-I04-02",
    "inputType": "product",
    "name": "SD card packaging",
    "category": "Info Products",
    "packId": "PRO-I04",
    "packName": "Physical Media",
    "packCode": "I04",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "info products",
      "packaging",
      "product"
    ]
  },
  {
    "id": "PRO-I04-03",
    "inputType": "product",
    "name": "Vinyl record sleeve",
    "category": "Info Products",
    "packId": "PRO-I04",
    "packName": "Physical Media",
    "packCode": "I04",
    "output": "image",
    "surface": "Info Products",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-I04-04",
    "inputType": "product",
    "name": "CD jewel case",
    "category": "Info Products",
    "packId": "PRO-I04",
    "packName": "Physical Media",
    "packCode": "I04",
    "output": "image",
    "surface": "Info Products",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-I04-05",
    "inputType": "product",
    "name": "Cassette tape nostalgia",
    "category": "Info Products",
    "packId": "PRO-I04",
    "packName": "Physical Media",
    "packCode": "I04",
    "output": "image",
    "surface": "Info Products",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-I04-06",
    "inputType": "product",
    "name": "Memory card case",
    "category": "Info Products",
    "packId": "PRO-I04",
    "packName": "Physical Media",
    "packCode": "I04",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-I04-07",
    "inputType": "product",
    "name": "Game box mockup",
    "category": "Info Products",
    "packId": "PRO-I04",
    "packName": "Physical Media",
    "packCode": "I04",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-I04-08",
    "inputType": "product",
    "name": "Software box 3D shrink wrap",
    "category": "Info Products",
    "packId": "PRO-I04",
    "packName": "Physical Media",
    "packCode": "I04",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-I04-09",
    "inputType": "product",
    "name": "QR card product",
    "category": "Info Products",
    "packId": "PRO-I04",
    "packName": "Physical Media",
    "packCode": "I04",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-I04-10",
    "inputType": "product",
    "name": "NFC card product",
    "category": "Info Products",
    "packId": "PRO-I04",
    "packName": "Physical Media",
    "packCode": "I04",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-A01-01",
    "inputType": "product",
    "name": "Quiet luxury beige",
    "category": "Aesthetics",
    "packId": "PRO-A01",
    "packName": "Minimal Aesthetics",
    "packCode": "A01",
    "output": "image",
    "surface": "Aesthetics",
    "useCase": "Brand mockup",
    "style": "Premium",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "aesthetics",
      "product"
    ]
  },
  {
    "id": "PRO-A01-02",
    "inputType": "product",
    "name": "Japandi wood neutral",
    "category": "Aesthetics",
    "packId": "PRO-A01",
    "packName": "Minimal Aesthetics",
    "packCode": "A01",
    "output": "image",
    "surface": "Aesthetics",
    "useCase": "Brand mockup",
    "style": "Minimal",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "aesthetics",
      "product"
    ]
  },
  {
    "id": "PRO-A01-03",
    "inputType": "product",
    "name": "Brutalist concrete",
    "category": "Aesthetics",
    "packId": "PRO-A01",
    "packName": "Minimal Aesthetics",
    "packCode": "A01",
    "output": "image",
    "surface": "Aesthetics",
    "useCase": "Brand mockup",
    "style": "Streetwear",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "aesthetics",
      "product"
    ]
  },
  {
    "id": "PRO-A01-04",
    "inputType": "product",
    "name": "Mediterranean white blue",
    "category": "Aesthetics",
    "packId": "PRO-A01",
    "packName": "Minimal Aesthetics",
    "packCode": "A01",
    "output": "image",
    "surface": "Aesthetics",
    "useCase": "Brand mockup",
    "style": "Minimal",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "aesthetics",
      "product"
    ]
  },
  {
    "id": "PRO-A01-05",
    "inputType": "product",
    "name": "Scandinavian light wood",
    "category": "Aesthetics",
    "packId": "PRO-A01",
    "packName": "Minimal Aesthetics",
    "packCode": "A01",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Brand mockup",
    "style": "Minimal",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "aesthetics",
      "product"
    ]
  },
  {
    "id": "PRO-A01-06",
    "inputType": "product",
    "name": "Monochrome white",
    "category": "Aesthetics",
    "packId": "PRO-A01",
    "packName": "Minimal Aesthetics",
    "packCode": "A01",
    "output": "image",
    "surface": "Aesthetics",
    "useCase": "Brand mockup",
    "style": "Minimal",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "aesthetics",
      "product"
    ]
  },
  {
    "id": "PRO-A01-07",
    "inputType": "product",
    "name": "Soft organic modern",
    "category": "Aesthetics",
    "packId": "PRO-A01",
    "packName": "Minimal Aesthetics",
    "packCode": "A01",
    "output": "image",
    "surface": "Aesthetics",
    "useCase": "Brand mockup",
    "style": "Minimal",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "aesthetics",
      "product"
    ]
  },
  {
    "id": "PRO-A01-08",
    "inputType": "product",
    "name": "Gallery pedestal",
    "category": "Aesthetics",
    "packId": "PRO-A01",
    "packName": "Minimal Aesthetics",
    "packCode": "A01",
    "output": "image",
    "surface": "Aesthetics",
    "useCase": "Brand mockup",
    "style": "Minimal",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "aesthetics",
      "product"
    ]
  },
  {
    "id": "PRO-A01-09",
    "inputType": "product",
    "name": "Editorial shadow play",
    "category": "Aesthetics",
    "packId": "PRO-A01",
    "packName": "Minimal Aesthetics",
    "packCode": "A01",
    "output": "image",
    "surface": "Aesthetics",
    "useCase": "Brand mockup",
    "style": "Minimal",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "aesthetics",
      "product"
    ]
  },
  {
    "id": "PRO-A01-10",
    "inputType": "product",
    "name": "Neutral linen premium",
    "category": "Aesthetics",
    "packId": "PRO-A01",
    "packName": "Minimal Aesthetics",
    "packCode": "A01",
    "output": "image",
    "surface": "Aesthetics",
    "useCase": "Brand mockup",
    "style": "Premium",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "aesthetics",
      "product"
    ]
  },
  {
    "id": "PRO-A02-01",
    "inputType": "product",
    "name": "Memphis color blocks",
    "category": "Aesthetics",
    "packId": "PRO-A02",
    "packName": "Bold Aesthetics",
    "packCode": "A02",
    "output": "image",
    "surface": "Aesthetics",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "aesthetics",
      "product"
    ]
  },
  {
    "id": "PRO-A02-02",
    "inputType": "product",
    "name": "Y2K chrome pink",
    "category": "Aesthetics",
    "packId": "PRO-A02",
    "packName": "Bold Aesthetics",
    "packCode": "A02",
    "output": "image",
    "surface": "Aesthetics",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "aesthetics",
      "product"
    ]
  },
  {
    "id": "PRO-A02-03",
    "inputType": "product",
    "name": "Vaporwave gradient",
    "category": "Aesthetics",
    "packId": "PRO-A02",
    "packName": "Bold Aesthetics",
    "packCode": "A02",
    "output": "image",
    "surface": "Aesthetics",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "aesthetics",
      "product"
    ]
  },
  {
    "id": "PRO-A02-04",
    "inputType": "product",
    "name": "Maximalist pattern",
    "category": "Aesthetics",
    "packId": "PRO-A02",
    "packName": "Bold Aesthetics",
    "packCode": "A02",
    "output": "image",
    "surface": "Aesthetics",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "aesthetics",
      "product"
    ]
  },
  {
    "id": "PRO-A02-05",
    "inputType": "product",
    "name": "Streetwear concrete",
    "category": "Aesthetics",
    "packId": "PRO-A02",
    "packName": "Bold Aesthetics",
    "packCode": "A02",
    "output": "image",
    "surface": "Aesthetics",
    "useCase": "Brand mockup",
    "style": "Streetwear",
    "environment": "Urban",
    "format": "Square",
    "tags": [
      "aesthetics",
      "product"
    ]
  },
  {
    "id": "PRO-A02-06",
    "inputType": "product",
    "name": "Futuristic silver",
    "category": "Aesthetics",
    "packId": "PRO-A02",
    "packName": "Bold Aesthetics",
    "packCode": "A02",
    "output": "image",
    "surface": "Aesthetics",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "aesthetics",
      "product"
    ]
  },
  {
    "id": "PRO-A02-07",
    "inputType": "product",
    "name": "Pop-art primary colors",
    "category": "Aesthetics",
    "packId": "PRO-A02",
    "packName": "Bold Aesthetics",
    "packCode": "A02",
    "output": "image",
    "surface": "Aesthetics",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "aesthetics",
      "product"
    ]
  },
  {
    "id": "PRO-A02-08",
    "inputType": "product",
    "name": "Neon night",
    "category": "Aesthetics",
    "packId": "PRO-A02",
    "packName": "Bold Aesthetics",
    "packCode": "A02",
    "output": "image",
    "surface": "Aesthetics",
    "useCase": "Brand mockup",
    "style": "Dramatic",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "aesthetics",
      "product"
    ]
  },
  {
    "id": "PRO-A02-09",
    "inputType": "product",
    "name": "High contrast black red",
    "category": "Aesthetics",
    "packId": "PRO-A02",
    "packName": "Bold Aesthetics",
    "packCode": "A02",
    "output": "image",
    "surface": "Aesthetics",
    "useCase": "Brand mockup",
    "style": "Dramatic",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "aesthetics",
      "product"
    ]
  },
  {
    "id": "PRO-A02-10",
    "inputType": "product",
    "name": "Sporty electric blue",
    "category": "Aesthetics",
    "packId": "PRO-A02",
    "packName": "Bold Aesthetics",
    "packCode": "A02",
    "output": "image",
    "surface": "Aesthetics",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "aesthetics",
      "product"
    ]
  },
  {
    "id": "PRO-A03-01",
    "inputType": "product",
    "name": "Handmade ceramic table",
    "category": "Aesthetics",
    "packId": "PRO-A03",
    "packName": "Craft Aesthetics",
    "packCode": "A03",
    "output": "image",
    "surface": "Aesthetics",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "aesthetics",
      "product"
    ]
  },
  {
    "id": "PRO-A03-02",
    "inputType": "product",
    "name": "Artisan paper texture",
    "category": "Aesthetics",
    "packId": "PRO-A03",
    "packName": "Craft Aesthetics",
    "packCode": "A03",
    "output": "image",
    "surface": "Aesthetics",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "aesthetics",
      "product"
    ]
  },
  {
    "id": "PRO-A03-03",
    "inputType": "product",
    "name": "Natural fiber basket",
    "category": "Aesthetics",
    "packId": "PRO-A03",
    "packName": "Craft Aesthetics",
    "packCode": "A03",
    "output": "image",
    "surface": "Aesthetics",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "aesthetics",
      "product"
    ]
  },
  {
    "id": "PRO-A03-04",
    "inputType": "product",
    "name": "Clay studio table",
    "category": "Aesthetics",
    "packId": "PRO-A03",
    "packName": "Craft Aesthetics",
    "packCode": "A03",
    "output": "image",
    "surface": "Aesthetics",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "aesthetics",
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-A03-05",
    "inputType": "product",
    "name": "Botanical pressed flowers",
    "category": "Aesthetics",
    "packId": "PRO-A03",
    "packName": "Craft Aesthetics",
    "packCode": "A03",
    "output": "image",
    "surface": "Aesthetics",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "aesthetics",
      "product"
    ]
  },
  {
    "id": "PRO-A03-06",
    "inputType": "product",
    "name": "Recycled kraft paper",
    "category": "Aesthetics",
    "packId": "PRO-A03",
    "packName": "Craft Aesthetics",
    "packCode": "A03",
    "output": "image",
    "surface": "Aesthetics",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "aesthetics",
      "product"
    ]
  },
  {
    "id": "PRO-A03-07",
    "inputType": "product",
    "name": "Wabi-sabi stone",
    "category": "Aesthetics",
    "packId": "PRO-A03",
    "packName": "Craft Aesthetics",
    "packCode": "A03",
    "output": "image",
    "surface": "Aesthetics",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "aesthetics",
      "product"
    ]
  },
  {
    "id": "PRO-A03-08",
    "inputType": "product",
    "name": "Rustic farmhouse wood",
    "category": "Aesthetics",
    "packId": "PRO-A03",
    "packName": "Craft Aesthetics",
    "packCode": "A03",
    "output": "image",
    "surface": "Aesthetics",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "aesthetics",
      "product"
    ]
  },
  {
    "id": "PRO-A03-09",
    "inputType": "product",
    "name": "Handmade market stall",
    "category": "Aesthetics",
    "packId": "PRO-A03",
    "packName": "Craft Aesthetics",
    "packCode": "A03",
    "output": "image",
    "surface": "Aesthetics",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "aesthetics",
      "product"
    ]
  },
  {
    "id": "PRO-A03-10",
    "inputType": "product",
    "name": "Slow-living linen",
    "category": "Aesthetics",
    "packId": "PRO-A03",
    "packName": "Craft Aesthetics",
    "packCode": "A03",
    "output": "image",
    "surface": "Aesthetics",
    "useCase": "Brand mockup",
    "style": "Cozy",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "aesthetics",
      "product"
    ]
  },
  {
    "id": "PRO-A04-01",
    "inputType": "product",
    "name": "Beauty clinic clean",
    "category": "Aesthetics",
    "packId": "PRO-A04",
    "packName": "Industry Aesthetics",
    "packCode": "A04",
    "output": "image",
    "surface": "Aesthetics",
    "useCase": "Brand mockup",
    "style": "Minimal",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "aesthetics",
      "beauty",
      "product"
    ]
  },
  {
    "id": "PRO-A04-02",
    "inputType": "product",
    "name": "Coffee roastery warm",
    "category": "Aesthetics",
    "packId": "PRO-A04",
    "packName": "Industry Aesthetics",
    "packCode": "A04",
    "output": "image",
    "surface": "Aesthetics",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Cafe",
    "format": "Square",
    "tags": [
      "aesthetics",
      "product"
    ]
  },
  {
    "id": "PRO-A04-03",
    "inputType": "product",
    "name": "Fitness studio bold",
    "category": "Aesthetics",
    "packId": "PRO-A04",
    "packName": "Industry Aesthetics",
    "packCode": "A04",
    "output": "image",
    "surface": "Aesthetics",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "aesthetics",
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-A04-04",
    "inputType": "product",
    "name": "Realtor desk premium",
    "category": "Aesthetics",
    "packId": "PRO-A04",
    "packName": "Industry Aesthetics",
    "packCode": "A04",
    "output": "image",
    "surface": "Aesthetics",
    "useCase": "Brand mockup",
    "style": "Premium",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "aesthetics",
      "product"
    ]
  },
  {
    "id": "PRO-A04-05",
    "inputType": "product",
    "name": "Wedding vendor soft",
    "category": "Aesthetics",
    "packId": "PRO-A04",
    "packName": "Industry Aesthetics",
    "packCode": "A04",
    "output": "image",
    "surface": "Aesthetics",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "aesthetics",
      "product"
    ]
  },
  {
    "id": "PRO-A04-06",
    "inputType": "product",
    "name": "Restaurant table editorial",
    "category": "Aesthetics",
    "packId": "PRO-A04",
    "packName": "Industry Aesthetics",
    "packCode": "A04",
    "output": "image",
    "surface": "Aesthetics",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "aesthetics",
      "product"
    ]
  },
  {
    "id": "PRO-A04-07",
    "inputType": "product",
    "name": "Therapist office calm",
    "category": "Aesthetics",
    "packId": "PRO-A04",
    "packName": "Industry Aesthetics",
    "packCode": "A04",
    "output": "image",
    "surface": "Aesthetics",
    "useCase": "Client presentation",
    "style": "Corporate",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "aesthetics",
      "product"
    ]
  },
  {
    "id": "PRO-A04-08",
    "inputType": "product",
    "name": "Tech startup desk",
    "category": "Aesthetics",
    "packId": "PRO-A04",
    "packName": "Industry Aesthetics",
    "packCode": "A04",
    "output": "image",
    "surface": "Aesthetics",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "aesthetics",
      "product"
    ]
  },
  {
    "id": "PRO-A04-09",
    "inputType": "product",
    "name": "Jewelry boutique luxe",
    "category": "Aesthetics",
    "packId": "PRO-A04",
    "packName": "Industry Aesthetics",
    "packCode": "A04",
    "output": "image",
    "surface": "Aesthetics",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "aesthetics",
      "product"
    ]
  },
  {
    "id": "PRO-A04-10",
    "inputType": "product",
    "name": "Kids brand playful",
    "category": "Aesthetics",
    "packId": "PRO-A04",
    "packName": "Industry Aesthetics",
    "packCode": "A04",
    "output": "image",
    "surface": "Aesthetics",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "aesthetics",
      "product"
    ]
  },
  {
    "id": "PRO-SE01-01",
    "inputType": "product",
    "name": "Christmas pine warm lights",
    "category": "Seasonal",
    "packId": "PRO-SE01",
    "packName": "Seasonal Retail",
    "packCode": "SE01",
    "output": "image",
    "surface": "Seasonal",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail",
      "seasonal"
    ]
  },
  {
    "id": "PRO-SE01-02",
    "inputType": "product",
    "name": "Spring garden pastel flowers",
    "category": "Seasonal",
    "packId": "PRO-SE01",
    "packName": "Seasonal Retail",
    "packCode": "SE01",
    "output": "image",
    "surface": "Seasonal",
    "useCase": "Retail",
    "style": "Lifestyle",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail",
      "seasonal"
    ]
  },
  {
    "id": "PRO-SE01-03",
    "inputType": "product",
    "name": "Autumn cozy knit",
    "category": "Seasonal",
    "packId": "PRO-SE01",
    "packName": "Seasonal Retail",
    "packCode": "SE01",
    "output": "image",
    "surface": "Seasonal",
    "useCase": "Retail",
    "style": "Cozy",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail",
      "seasonal"
    ]
  },
  {
    "id": "PRO-SE01-04",
    "inputType": "product",
    "name": "Summer poolside color",
    "category": "Seasonal",
    "packId": "PRO-SE01",
    "packName": "Seasonal Retail",
    "packCode": "SE01",
    "output": "image",
    "surface": "Seasonal",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail",
      "seasonal"
    ]
  },
  {
    "id": "PRO-SE01-05",
    "inputType": "product",
    "name": "Valentine's blush scene",
    "category": "Seasonal",
    "packId": "PRO-SE01",
    "packName": "Seasonal Retail",
    "packCode": "SE01",
    "output": "image",
    "surface": "Seasonal",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail",
      "seasonal"
    ]
  },
  {
    "id": "PRO-SE01-06",
    "inputType": "product",
    "name": "Halloween dark candle",
    "category": "Seasonal",
    "packId": "PRO-SE01",
    "packName": "Seasonal Retail",
    "packCode": "SE01",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Retail",
    "style": "Dramatic",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail",
      "seasonal"
    ]
  },
  {
    "id": "PRO-SE01-07",
    "inputType": "product",
    "name": "Black Friday sale table",
    "category": "Seasonal",
    "packId": "PRO-SE01",
    "packName": "Seasonal Retail",
    "packCode": "SE01",
    "output": "image",
    "surface": "Seasonal",
    "useCase": "Retail",
    "style": "Dramatic",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail",
      "seasonal"
    ]
  },
  {
    "id": "PRO-SE01-08",
    "inputType": "product",
    "name": "Cyber Monday desk",
    "category": "Seasonal",
    "packId": "PRO-SE01",
    "packName": "Seasonal Retail",
    "packCode": "SE01",
    "output": "image",
    "surface": "Seasonal",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "product",
      "retail",
      "seasonal"
    ]
  },
  {
    "id": "PRO-SE01-09",
    "inputType": "product",
    "name": "Mother's Day brunch",
    "category": "Seasonal",
    "packId": "PRO-SE01",
    "packName": "Seasonal Retail",
    "packCode": "SE01",
    "output": "image",
    "surface": "Seasonal",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail",
      "seasonal"
    ]
  },
  {
    "id": "PRO-SE01-10",
    "inputType": "product",
    "name": "Father's Day workbench",
    "category": "Seasonal",
    "packId": "PRO-SE01",
    "packName": "Seasonal Retail",
    "packCode": "SE01",
    "output": "image",
    "surface": "Seasonal",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail",
      "seasonal"
    ]
  },
  {
    "id": "PRO-SE02-01",
    "inputType": "product",
    "name": "Gift box under tree",
    "category": "Seasonal",
    "packId": "PRO-SE02",
    "packName": "Holiday Packaging",
    "packCode": "SE02",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "packaging",
      "product",
      "seasonal"
    ]
  },
  {
    "id": "PRO-SE02-02",
    "inputType": "product",
    "name": "Ribbon-wrapped product",
    "category": "Seasonal",
    "packId": "PRO-SE02",
    "packName": "Holiday Packaging",
    "packCode": "SE02",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "packaging",
      "product",
      "seasonal"
    ]
  },
  {
    "id": "PRO-SE02-03",
    "inputType": "product",
    "name": "Stocking stuffer layout",
    "category": "Seasonal",
    "packId": "PRO-SE02",
    "packName": "Holiday Packaging",
    "packCode": "SE02",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "packaging",
      "product",
      "seasonal"
    ]
  },
  {
    "id": "PRO-SE02-04",
    "inputType": "product",
    "name": "Holiday shipping box",
    "category": "Seasonal",
    "packId": "PRO-SE02",
    "packName": "Holiday Packaging",
    "packCode": "SE02",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "packaging",
      "product",
      "seasonal"
    ]
  },
  {
    "id": "PRO-SE02-05",
    "inputType": "product",
    "name": "Festive table setting",
    "category": "Seasonal",
    "packId": "PRO-SE02",
    "packName": "Holiday Packaging",
    "packCode": "SE02",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "packaging",
      "product",
      "seasonal"
    ]
  },
  {
    "id": "PRO-SE02-06",
    "inputType": "product",
    "name": "Spring gift basket",
    "category": "Seasonal",
    "packId": "PRO-SE02",
    "packName": "Holiday Packaging",
    "packCode": "SE02",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "packaging",
      "product",
      "seasonal"
    ]
  },
  {
    "id": "PRO-SE02-07",
    "inputType": "product",
    "name": "Wedding favor table",
    "category": "Seasonal",
    "packId": "PRO-SE02",
    "packName": "Holiday Packaging",
    "packCode": "SE02",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "packaging",
      "product",
      "seasonal"
    ]
  },
  {
    "id": "PRO-SE02-08",
    "inputType": "product",
    "name": "Birthday confetti surface",
    "category": "Seasonal",
    "packId": "PRO-SE02",
    "packName": "Holiday Packaging",
    "packCode": "SE02",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "packaging",
      "product",
      "seasonal"
    ]
  },
  {
    "id": "PRO-SE02-09",
    "inputType": "product",
    "name": "Back-to-school desk",
    "category": "Seasonal",
    "packId": "PRO-SE02",
    "packName": "Holiday Packaging",
    "packCode": "SE02",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "packaging",
      "product",
      "seasonal"
    ]
  },
  {
    "id": "PRO-SE02-10",
    "inputType": "product",
    "name": "New Year sparkle",
    "category": "Seasonal",
    "packId": "PRO-SE02",
    "packName": "Holiday Packaging",
    "packCode": "SE02",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "packaging",
      "product",
      "seasonal"
    ]
  },
  {
    "id": "PRO-C01-01",
    "inputType": "product",
    "name": "Candle on marble bath",
    "category": "Home",
    "packId": "PRO-C01",
    "packName": "Candles And Home Goods",
    "packCode": "C01",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-C01-02",
    "inputType": "product",
    "name": "Candle on coffee table",
    "category": "Home",
    "packId": "PRO-C01",
    "packName": "Candles And Home Goods",
    "packCode": "C01",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Cafe",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-C01-03",
    "inputType": "product",
    "name": "Candle bedside glow",
    "category": "Home",
    "packId": "PRO-C01",
    "packName": "Candles And Home Goods",
    "packCode": "C01",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Brand mockup",
    "style": "Cozy",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-C01-04",
    "inputType": "product",
    "name": "Candle gift box",
    "category": "Home",
    "packId": "PRO-C01",
    "packName": "Candles And Home Goods",
    "packCode": "C01",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-C01-05",
    "inputType": "product",
    "name": "Reed diffuser shelf",
    "category": "Home",
    "packId": "PRO-C01",
    "packName": "Candles And Home Goods",
    "packCode": "C01",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-C01-06",
    "inputType": "product",
    "name": "Room spray bathroom",
    "category": "Home",
    "packId": "PRO-C01",
    "packName": "Candles And Home Goods",
    "packCode": "C01",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-C01-07",
    "inputType": "product",
    "name": "Pillow on sofa",
    "category": "Home",
    "packId": "PRO-C01",
    "packName": "Candles And Home Goods",
    "packCode": "C01",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-C01-08",
    "inputType": "product",
    "name": "Throw blanket stack",
    "category": "Home",
    "packId": "PRO-C01",
    "packName": "Candles And Home Goods",
    "packCode": "C01",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-C01-09",
    "inputType": "product",
    "name": "Ceramic vase console",
    "category": "Home",
    "packId": "PRO-C01",
    "packName": "Candles And Home Goods",
    "packCode": "C01",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-C01-10",
    "inputType": "product",
    "name": "Framed print wall shelf",
    "category": "Home",
    "packId": "PRO-C01",
    "packName": "Candles And Home Goods",
    "packCode": "C01",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-C02-01",
    "inputType": "product",
    "name": "Ring box velvet",
    "category": "Studio",
    "packId": "PRO-C02",
    "packName": "Jewelry And Accessories",
    "packCode": "C02",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Premium",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-C02-02",
    "inputType": "product",
    "name": "Necklace on linen",
    "category": "Studio",
    "packId": "PRO-C02",
    "packName": "Jewelry And Accessories",
    "packCode": "C02",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Cozy",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-C02-03",
    "inputType": "product",
    "name": "Bracelet on stone",
    "category": "Studio",
    "packId": "PRO-C02",
    "packName": "Jewelry And Accessories",
    "packCode": "C02",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-C02-04",
    "inputType": "product",
    "name": "Watch on wrist-adjacent table",
    "category": "Studio",
    "packId": "PRO-C02",
    "packName": "Jewelry And Accessories",
    "packCode": "C02",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-C02-05",
    "inputType": "product",
    "name": "Sunglasses poolside",
    "category": "Studio",
    "packId": "PRO-C02",
    "packName": "Jewelry And Accessories",
    "packCode": "C02",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-C02-06",
    "inputType": "product",
    "name": "Wallet desk",
    "category": "Studio",
    "packId": "PRO-C02",
    "packName": "Jewelry And Accessories",
    "packCode": "C02",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-C02-07",
    "inputType": "product",
    "name": "Keychain flat lay",
    "category": "Studio",
    "packId": "PRO-C02",
    "packName": "Jewelry And Accessories",
    "packCode": "C02",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-C02-08",
    "inputType": "product",
    "name": "Phone case studio",
    "category": "Studio",
    "packId": "PRO-C02",
    "packName": "Jewelry And Accessories",
    "packCode": "C02",
    "output": "image",
    "surface": "Phone",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-C02-09",
    "inputType": "product",
    "name": "Hair clip beauty counter",
    "category": "Studio",
    "packId": "PRO-C02",
    "packName": "Jewelry And Accessories",
    "packCode": "C02",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "beauty",
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-C02-10",
    "inputType": "product",
    "name": "Scarf folded silk",
    "category": "Studio",
    "packId": "PRO-C02",
    "packName": "Jewelry And Accessories",
    "packCode": "C02",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-C03-01",
    "inputType": "product",
    "name": "Supplement bottle gym",
    "category": "Retail",
    "packId": "PRO-C03",
    "packName": "Wellness And Fitness",
    "packCode": "C03",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-C03-02",
    "inputType": "product",
    "name": "Protein tub kitchen",
    "category": "Retail",
    "packId": "PRO-C03",
    "packName": "Wellness And Fitness",
    "packCode": "C03",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-C03-03",
    "inputType": "product",
    "name": "Yoga mat product",
    "category": "Retail",
    "packId": "PRO-C03",
    "packName": "Wellness And Fitness",
    "packCode": "C03",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-C03-04",
    "inputType": "product",
    "name": "Water bottle workout",
    "category": "Retail",
    "packId": "PRO-C03",
    "packName": "Wellness And Fitness",
    "packCode": "C03",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-C03-05",
    "inputType": "product",
    "name": "Resistance bands flat lay",
    "category": "Retail",
    "packId": "PRO-C03",
    "packName": "Wellness And Fitness",
    "packCode": "C03",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-C03-06",
    "inputType": "product",
    "name": "Wellness tincture shelf",
    "category": "Retail",
    "packId": "PRO-C03",
    "packName": "Wellness And Fitness",
    "packCode": "C03",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-C03-07",
    "inputType": "product",
    "name": "Vitamins morning counter",
    "category": "Retail",
    "packId": "PRO-C03",
    "packName": "Wellness And Fitness",
    "packCode": "C03",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-C03-08",
    "inputType": "product",
    "name": "Recovery balm sports bag",
    "category": "Retail",
    "packId": "PRO-C03",
    "packName": "Wellness And Fitness",
    "packCode": "C03",
    "output": "image",
    "surface": "Bag",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-C03-09",
    "inputType": "product",
    "name": "Fitness guide bundle",
    "category": "Retail",
    "packId": "PRO-C03",
    "packName": "Wellness And Fitness",
    "packCode": "C03",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-C03-10",
    "inputType": "product",
    "name": "Spa oil treatment scene",
    "category": "Retail",
    "packId": "PRO-C03",
    "packName": "Wellness And Fitness",
    "packCode": "C03",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-C04-01",
    "inputType": "product",
    "name": "Coffee bag grinder scene",
    "category": "Home",
    "packId": "PRO-C04",
    "packName": "Food And Beverage Context",
    "packCode": "C04",
    "output": "image",
    "surface": "Bag",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Cafe",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-C04-02",
    "inputType": "product",
    "name": "Tea tin teapot scene",
    "category": "Home",
    "packId": "PRO-C04",
    "packName": "Food And Beverage Context",
    "packCode": "C04",
    "output": "image",
    "surface": "Home",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-C04-03",
    "inputType": "product",
    "name": "Sauce bottle pasta counter",
    "category": "Home",
    "packId": "PRO-C04",
    "packName": "Food And Beverage Context",
    "packCode": "C04",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-C04-04",
    "inputType": "product",
    "name": "Jam jar breakfast table",
    "category": "Home",
    "packId": "PRO-C04",
    "packName": "Food And Beverage Context",
    "packCode": "C04",
    "output": "image",
    "surface": "Home",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-C04-05",
    "inputType": "product",
    "name": "Beer can cooler",
    "category": "Home",
    "packId": "PRO-C04",
    "packName": "Food And Beverage Context",
    "packCode": "C04",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-C04-06",
    "inputType": "product",
    "name": "Wine bottle dinner table",
    "category": "Home",
    "packId": "PRO-C04",
    "packName": "Food And Beverage Context",
    "packCode": "C04",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-C04-07",
    "inputType": "product",
    "name": "Juice bottle picnic",
    "category": "Home",
    "packId": "PRO-C04",
    "packName": "Food And Beverage Context",
    "packCode": "C04",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-C04-08",
    "inputType": "product",
    "name": "Snack bag movie night",
    "category": "Home",
    "packId": "PRO-C04",
    "packName": "Food And Beverage Context",
    "packCode": "C04",
    "output": "image",
    "surface": "Bag",
    "useCase": "Brand mockup",
    "style": "Dramatic",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-C04-09",
    "inputType": "product",
    "name": "Honey jar toast scene",
    "category": "Home",
    "packId": "PRO-C04",
    "packName": "Food And Beverage Context",
    "packCode": "C04",
    "output": "image",
    "surface": "Home",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-C04-10",
    "inputType": "product",
    "name": "Spice jar kitchen",
    "category": "Home",
    "packId": "PRO-C04",
    "packName": "Food And Beverage Context",
    "packCode": "C04",
    "output": "image",
    "surface": "Home",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-C05-01",
    "inputType": "product",
    "name": "Baby product nursery",
    "category": "Home",
    "packId": "PRO-C05",
    "packName": "Kids And Pets",
    "packCode": "C05",
    "output": "image",
    "surface": "Home",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-C05-02",
    "inputType": "product",
    "name": "Toy product playroom",
    "category": "Home",
    "packId": "PRO-C05",
    "packName": "Kids And Pets",
    "packCode": "C05",
    "output": "image",
    "surface": "Home",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-C05-03",
    "inputType": "product",
    "name": "Kids book bedroom",
    "category": "Home",
    "packId": "PRO-C05",
    "packName": "Kids And Pets",
    "packCode": "C05",
    "output": "image",
    "surface": "Info product",
    "useCase": "Creator product",
    "style": "Cozy",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-C05-04",
    "inputType": "product",
    "name": "Lunchbox school desk",
    "category": "Home",
    "packId": "PRO-C05",
    "packName": "Kids And Pets",
    "packCode": "C05",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-C05-05",
    "inputType": "product",
    "name": "Pet shampoo bathroom",
    "category": "Home",
    "packId": "PRO-C05",
    "packName": "Kids And Pets",
    "packCode": "C05",
    "output": "image",
    "surface": "Home",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-C05-06",
    "inputType": "product",
    "name": "Dog treat jar kitchen",
    "category": "Home",
    "packId": "PRO-C05",
    "packName": "Kids And Pets",
    "packCode": "C05",
    "output": "image",
    "surface": "Home",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-C05-07",
    "inputType": "product",
    "name": "Cat product window shelf",
    "category": "Home",
    "packId": "PRO-C05",
    "packName": "Kids And Pets",
    "packCode": "C05",
    "output": "image",
    "surface": "Home",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-C05-08",
    "inputType": "product",
    "name": "Kids craft kit table",
    "category": "Home",
    "packId": "PRO-C05",
    "packName": "Kids And Pets",
    "packCode": "C05",
    "output": "image",
    "surface": "Home",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-C05-09",
    "inputType": "product",
    "name": "Baby blanket crib",
    "category": "Home",
    "packId": "PRO-C05",
    "packName": "Kids And Pets",
    "packCode": "C05",
    "output": "image",
    "surface": "Home",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-C05-10",
    "inputType": "product",
    "name": "Family game table",
    "category": "Home",
    "packId": "PRO-C05",
    "packName": "Kids And Pets",
    "packCode": "C05",
    "output": "image",
    "surface": "Home",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "home",
      "product"
    ]
  },
  {
    "id": "PRO-C06-01",
    "inputType": "product",
    "name": "Water bottle trail",
    "category": "Outdoor",
    "packId": "PRO-C06",
    "packName": "Outdoor Gear",
    "packCode": "C06",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Brand mockup",
    "style": "Lifestyle",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "outdoor",
      "product"
    ]
  },
  {
    "id": "PRO-C06-02",
    "inputType": "product",
    "name": "Sunscreen beach towel",
    "category": "Outdoor",
    "packId": "PRO-C06",
    "packName": "Outdoor Gear",
    "packCode": "C06",
    "output": "image",
    "surface": "Outdoor",
    "useCase": "Brand mockup",
    "style": "Lifestyle",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "outdoor",
      "product"
    ]
  },
  {
    "id": "PRO-C06-03",
    "inputType": "product",
    "name": "Camping mug fire pit",
    "category": "Outdoor",
    "packId": "PRO-C06",
    "packName": "Outdoor Gear",
    "packCode": "C06",
    "output": "image",
    "surface": "Drinkware",
    "useCase": "Brand mockup",
    "style": "Lifestyle",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "outdoor",
      "product"
    ]
  },
  {
    "id": "PRO-C06-04",
    "inputType": "product",
    "name": "Trail snack backpack",
    "category": "Outdoor",
    "packId": "PRO-C06",
    "packName": "Outdoor Gear",
    "packCode": "C06",
    "output": "image",
    "surface": "Bag",
    "useCase": "Brand mockup",
    "style": "Lifestyle",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "outdoor",
      "product"
    ]
  },
  {
    "id": "PRO-C06-05",
    "inputType": "product",
    "name": "Running gel pavement",
    "category": "Outdoor",
    "packId": "PRO-C06",
    "packName": "Outdoor Gear",
    "packCode": "C06",
    "output": "image",
    "surface": "Outdoor",
    "useCase": "Brand mockup",
    "style": "Lifestyle",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "outdoor",
      "product"
    ]
  },
  {
    "id": "PRO-C06-06",
    "inputType": "product",
    "name": "Bike accessory handlebar",
    "category": "Outdoor",
    "packId": "PRO-C06",
    "packName": "Outdoor Gear",
    "packCode": "C06",
    "output": "image",
    "surface": "Outdoor",
    "useCase": "Brand mockup",
    "style": "Lifestyle",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "outdoor",
      "product"
    ]
  },
  {
    "id": "PRO-C06-07",
    "inputType": "product",
    "name": "Travel toiletry pouch",
    "category": "Outdoor",
    "packId": "PRO-C06",
    "packName": "Outdoor Gear",
    "packCode": "C06",
    "output": "image",
    "surface": "Bag",
    "useCase": "Brand mockup",
    "style": "Lifestyle",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "outdoor",
      "product"
    ]
  },
  {
    "id": "PRO-C06-08",
    "inputType": "product",
    "name": "Picnic product basket",
    "category": "Outdoor",
    "packId": "PRO-C06",
    "packName": "Outdoor Gear",
    "packCode": "C06",
    "output": "image",
    "surface": "Outdoor",
    "useCase": "Brand mockup",
    "style": "Lifestyle",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "outdoor",
      "product"
    ]
  },
  {
    "id": "PRO-C06-09",
    "inputType": "product",
    "name": "Ski lodge table",
    "category": "Outdoor",
    "packId": "PRO-C06",
    "packName": "Outdoor Gear",
    "packCode": "C06",
    "output": "image",
    "surface": "Outdoor",
    "useCase": "Brand mockup",
    "style": "Lifestyle",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "outdoor",
      "product"
    ]
  },
  {
    "id": "PRO-C06-10",
    "inputType": "product",
    "name": "Garden tool bench",
    "category": "Outdoor",
    "packId": "PRO-C06",
    "packName": "Outdoor Gear",
    "packCode": "C06",
    "output": "image",
    "surface": "Outdoor",
    "useCase": "Brand mockup",
    "style": "Lifestyle",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "outdoor",
      "product"
    ]
  },
  {
    "id": "PRO-C07-01",
    "inputType": "product",
    "name": "Salon product station",
    "category": "Retail",
    "packId": "PRO-C07",
    "packName": "Retail Niches",
    "packCode": "C07",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-C07-02",
    "inputType": "product",
    "name": "Barber shelf product",
    "category": "Retail",
    "packId": "PRO-C07",
    "packName": "Retail Niches",
    "packCode": "C07",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-C07-03",
    "inputType": "product",
    "name": "Tattoo aftercare counter",
    "category": "Retail",
    "packId": "PRO-C07",
    "packName": "Retail Niches",
    "packCode": "C07",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-C07-04",
    "inputType": "product",
    "name": "Florist counter product",
    "category": "Retail",
    "packId": "PRO-C07",
    "packName": "Retail Niches",
    "packCode": "C07",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-C07-05",
    "inputType": "product",
    "name": "Bakery boxed product",
    "category": "Retail",
    "packId": "PRO-C07",
    "packName": "Retail Niches",
    "packCode": "C07",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-C07-06",
    "inputType": "product",
    "name": "Boutique jewelry tray",
    "category": "Retail",
    "packId": "PRO-C07",
    "packName": "Retail Niches",
    "packCode": "C07",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-C07-07",
    "inputType": "product",
    "name": "Hotel amenity tray",
    "category": "Retail",
    "packId": "PRO-C07",
    "packName": "Retail Niches",
    "packCode": "C07",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-C07-08",
    "inputType": "product",
    "name": "Spa retail shelf",
    "category": "Retail",
    "packId": "PRO-C07",
    "packName": "Retail Niches",
    "packCode": "C07",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-C07-09",
    "inputType": "product",
    "name": "Museum gift shop table",
    "category": "Retail",
    "packId": "PRO-C07",
    "packName": "Retail Niches",
    "packCode": "C07",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-C07-10",
    "inputType": "product",
    "name": "Farmers market label",
    "category": "Retail",
    "packId": "PRO-C07",
    "packName": "Retail Niches",
    "packCode": "C07",
    "output": "image",
    "surface": "Packaging",
    "useCase": "Packaging",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-C08-01",
    "inputType": "product",
    "name": "Etsy hero square",
    "category": "Retail",
    "packId": "PRO-C08",
    "packName": "Social Listing Images",
    "packCode": "C08",
    "output": "image",
    "surface": "Retail",
    "useCase": "Social",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail",
      "social"
    ]
  },
  {
    "id": "PRO-C08-02",
    "inputType": "product",
    "name": "Etsy lifestyle secondary",
    "category": "Retail",
    "packId": "PRO-C08",
    "packName": "Social Listing Images",
    "packCode": "C08",
    "output": "image",
    "surface": "Retail",
    "useCase": "Social",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "lifestyle",
      "product",
      "retail",
      "social"
    ]
  },
  {
    "id": "PRO-C08-03",
    "inputType": "product",
    "name": "Shopify collection tile",
    "category": "Retail",
    "packId": "PRO-C08",
    "packName": "Social Listing Images",
    "packCode": "C08",
    "output": "image",
    "surface": "Retail",
    "useCase": "Social",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail",
      "social"
    ]
  },
  {
    "id": "PRO-C08-04",
    "inputType": "product",
    "name": "Amazon image with use context",
    "category": "Retail",
    "packId": "PRO-C08",
    "packName": "Social Listing Images",
    "packCode": "C08",
    "output": "image",
    "surface": "Retail",
    "useCase": "Social",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail",
      "social"
    ]
  },
  {
    "id": "PRO-C08-05",
    "inputType": "product",
    "name": "Instagram shop post",
    "category": "Retail",
    "packId": "PRO-C08",
    "packName": "Social Listing Images",
    "packCode": "C08",
    "output": "image",
    "surface": "Retail",
    "useCase": "Social",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail",
      "social"
    ]
  },
  {
    "id": "PRO-C08-06",
    "inputType": "product",
    "name": "Pinterest product pin",
    "category": "Retail",
    "packId": "PRO-C08",
    "packName": "Social Listing Images",
    "packCode": "C08",
    "output": "image",
    "surface": "Retail",
    "useCase": "Social",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail",
      "social"
    ]
  },
  {
    "id": "PRO-C08-07",
    "inputType": "product",
    "name": "Facebook marketplace listing",
    "category": "Retail",
    "packId": "PRO-C08",
    "packName": "Social Listing Images",
    "packCode": "C08",
    "output": "image",
    "surface": "Info product",
    "useCase": "Social",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail",
      "social"
    ]
  },
  {
    "id": "PRO-C08-08",
    "inputType": "product",
    "name": "TikTok shop still",
    "category": "Retail",
    "packId": "PRO-C08",
    "packName": "Social Listing Images",
    "packCode": "C08",
    "output": "image",
    "surface": "Retail",
    "useCase": "Social",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Portrait",
    "tags": [
      "product",
      "retail",
      "social"
    ]
  },
  {
    "id": "PRO-C08-09",
    "inputType": "product",
    "name": "Email product hero",
    "category": "Retail",
    "packId": "PRO-C08",
    "packName": "Social Listing Images",
    "packCode": "C08",
    "output": "image",
    "surface": "Retail",
    "useCase": "Social",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail",
      "social"
    ]
  },
  {
    "id": "PRO-C08-10",
    "inputType": "product",
    "name": "Ad creative with copy space",
    "category": "Retail",
    "packId": "PRO-C08",
    "packName": "Social Listing Images",
    "packCode": "C08",
    "output": "image",
    "surface": "Retail",
    "useCase": "Social",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail",
      "social"
    ]
  },
  {
    "id": "PRO-C09-01",
    "inputType": "product",
    "name": "Folded shirt product stack",
    "category": "Retail",
    "packId": "PRO-C09",
    "packName": "Apparel Product Context",
    "packCode": "C09",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "apparel",
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-C09-02",
    "inputType": "product",
    "name": "Hoodie product on chair",
    "category": "Retail",
    "packId": "PRO-C09",
    "packName": "Apparel Product Context",
    "packCode": "C09",
    "output": "image",
    "surface": "Hoodie / sweatshirt",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "apparel",
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-C09-03",
    "inputType": "product",
    "name": "Cap product on shelf",
    "category": "Retail",
    "packId": "PRO-C09",
    "packName": "Apparel Product Context",
    "packCode": "C09",
    "output": "image",
    "surface": "Headwear",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "apparel",
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-C09-04",
    "inputType": "product",
    "name": "Tote product with contents",
    "category": "Retail",
    "packId": "PRO-C09",
    "packName": "Apparel Product Context",
    "packCode": "C09",
    "output": "image",
    "surface": "Bag",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "apparel",
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-C09-05",
    "inputType": "product",
    "name": "Socks product drawer",
    "category": "Retail",
    "packId": "PRO-C09",
    "packName": "Apparel Product Context",
    "packCode": "C09",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "apparel",
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-C09-06",
    "inputType": "product",
    "name": "Apron product kitchen rail",
    "category": "Retail",
    "packId": "PRO-C09",
    "packName": "Apparel Product Context",
    "packCode": "C09",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "apparel",
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-C09-07",
    "inputType": "product",
    "name": "Activewear product locker",
    "category": "Retail",
    "packId": "PRO-C09",
    "packName": "Apparel Product Context",
    "packCode": "C09",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "apparel",
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-C09-08",
    "inputType": "product",
    "name": "Baby onesie product nursery",
    "category": "Retail",
    "packId": "PRO-C09",
    "packName": "Apparel Product Context",
    "packCode": "C09",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "apparel",
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-C09-09",
    "inputType": "product",
    "name": "Scarf product boutique table",
    "category": "Retail",
    "packId": "PRO-C09",
    "packName": "Apparel Product Context",
    "packCode": "C09",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "apparel",
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-C09-10",
    "inputType": "product",
    "name": "Merchandise bundle flat lay",
    "category": "Retail",
    "packId": "PRO-C09",
    "packName": "Apparel Product Context",
    "packCode": "C09",
    "output": "image",
    "surface": "Retail",
    "useCase": "Retail",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "apparel",
      "product",
      "retail"
    ]
  },
  {
    "id": "PRO-C10-01",
    "inputType": "product",
    "name": "Art print in frame",
    "category": "Info Products",
    "packId": "PRO-C10",
    "packName": "Paper Goods And Art",
    "packCode": "C10",
    "output": "image",
    "surface": "Info Products",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-C10-02",
    "inputType": "product",
    "name": "Poster on studio wall",
    "category": "Info Products",
    "packId": "PRO-C10",
    "packName": "Paper Goods And Art",
    "packCode": "C10",
    "output": "image",
    "surface": "Signage",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "info products",
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-C10-03",
    "inputType": "product",
    "name": "Greeting card mantel",
    "category": "Info Products",
    "packId": "PRO-C10",
    "packName": "Paper Goods And Art",
    "packCode": "C10",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-C10-04",
    "inputType": "product",
    "name": "Wedding invitation suite",
    "category": "Info Products",
    "packId": "PRO-C10",
    "packName": "Paper Goods And Art",
    "packCode": "C10",
    "output": "image",
    "surface": "Info Products",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-C10-05",
    "inputType": "product",
    "name": "Sticker sheet desk",
    "category": "Info Products",
    "packId": "PRO-C10",
    "packName": "Paper Goods And Art",
    "packCode": "C10",
    "output": "image",
    "surface": "Info Products",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-C10-06",
    "inputType": "product",
    "name": "Planner page spread",
    "category": "Info Products",
    "packId": "PRO-C10",
    "packName": "Paper Goods And Art",
    "packCode": "C10",
    "output": "image",
    "surface": "Stationery",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-C10-07",
    "inputType": "product",
    "name": "Calendar on wall",
    "category": "Info Products",
    "packId": "PRO-C10",
    "packName": "Paper Goods And Art",
    "packCode": "C10",
    "output": "image",
    "surface": "Info Products",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-C10-08",
    "inputType": "product",
    "name": "Magazine cover table",
    "category": "Info Products",
    "packId": "PRO-C10",
    "packName": "Paper Goods And Art",
    "packCode": "C10",
    "output": "image",
    "surface": "Info Products",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-C10-09",
    "inputType": "product",
    "name": "Zine stack",
    "category": "Info Products",
    "packId": "PRO-C10",
    "packName": "Paper Goods And Art",
    "packCode": "C10",
    "output": "image",
    "surface": "Info Products",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-C10-10",
    "inputType": "product",
    "name": "Photography print portfolio",
    "category": "Info Products",
    "packId": "PRO-C10",
    "packName": "Paper Goods And Art",
    "packCode": "C10",
    "output": "image",
    "surface": "Info Products",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "info products",
      "product"
    ]
  },
  {
    "id": "PRO-C11-01",
    "inputType": "product",
    "name": "Phone case pedestal",
    "category": "Studio",
    "packId": "PRO-C11",
    "packName": "Tech Accessories",
    "packCode": "C11",
    "output": "image",
    "surface": "Phone",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Portrait",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-C11-02",
    "inputType": "product",
    "name": "Laptop sleeve desk",
    "category": "Studio",
    "packId": "PRO-C11",
    "packName": "Tech Accessories",
    "packCode": "C11",
    "output": "image",
    "surface": "Laptop",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-C11-03",
    "inputType": "product",
    "name": "Keyboard cover flat lay",
    "category": "Studio",
    "packId": "PRO-C11",
    "packName": "Tech Accessories",
    "packCode": "C11",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-C11-04",
    "inputType": "product",
    "name": "Mouse pad workspace",
    "category": "Studio",
    "packId": "PRO-C11",
    "packName": "Tech Accessories",
    "packCode": "C11",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-C11-05",
    "inputType": "product",
    "name": "Camera strap product",
    "category": "Studio",
    "packId": "PRO-C11",
    "packName": "Tech Accessories",
    "packCode": "C11",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-C11-06",
    "inputType": "product",
    "name": "Cable organizer pouch",
    "category": "Studio",
    "packId": "PRO-C11",
    "packName": "Tech Accessories",
    "packCode": "C11",
    "output": "image",
    "surface": "Bag",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-C11-07",
    "inputType": "product",
    "name": "AirPods case surface",
    "category": "Studio",
    "packId": "PRO-C11",
    "packName": "Tech Accessories",
    "packCode": "C11",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-C11-08",
    "inputType": "product",
    "name": "Smartwatch band display",
    "category": "Studio",
    "packId": "PRO-C11",
    "packName": "Tech Accessories",
    "packCode": "C11",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-C11-09",
    "inputType": "product",
    "name": "Desk mat setup",
    "category": "Studio",
    "packId": "PRO-C11",
    "packName": "Tech Accessories",
    "packCode": "C11",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Commercial",
    "environment": "Desk / office",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-C11-10",
    "inputType": "product",
    "name": "Charger stand nightstand",
    "category": "Studio",
    "packId": "PRO-C11",
    "packName": "Tech Accessories",
    "packCode": "C11",
    "output": "image",
    "surface": "Studio",
    "useCase": "Brand mockup",
    "style": "Dramatic",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio"
    ]
  },
  {
    "id": "PRO-V01-01",
    "inputType": "product",
    "name": "360 rotation white sweep",
    "category": "Video",
    "packId": "PRO-V01",
    "packName": "Studio Motion",
    "packCode": "V01",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Minimal",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio",
      "video"
    ]
  },
  {
    "id": "PRO-V01-02",
    "inputType": "product",
    "name": "360 rotation marble counter",
    "category": "Video",
    "packId": "PRO-V01",
    "packName": "Studio Motion",
    "packCode": "V01",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio",
      "video"
    ]
  },
  {
    "id": "PRO-V01-03",
    "inputType": "product",
    "name": "Slow push-in studio",
    "category": "Video",
    "packId": "PRO-V01",
    "packName": "Studio Motion",
    "packCode": "V01",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio",
      "video"
    ]
  },
  {
    "id": "PRO-V01-04",
    "inputType": "product",
    "name": "Slow push-in marble",
    "category": "Video",
    "packId": "PRO-V01",
    "packName": "Studio Motion",
    "packCode": "V01",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio",
      "video"
    ]
  },
  {
    "id": "PRO-V01-05",
    "inputType": "product",
    "name": "Product hover bob",
    "category": "Video",
    "packId": "PRO-V01",
    "packName": "Studio Motion",
    "packCode": "V01",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio",
      "video"
    ]
  },
  {
    "id": "PRO-V01-06",
    "inputType": "product",
    "name": "Side pan cinematic",
    "category": "Video",
    "packId": "PRO-V01",
    "packName": "Studio Motion",
    "packCode": "V01",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio",
      "video"
    ]
  },
  {
    "id": "PRO-V01-07",
    "inputType": "product",
    "name": "Top-down spin flat lay",
    "category": "Video",
    "packId": "PRO-V01",
    "packName": "Studio Motion",
    "packCode": "V01",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio",
      "video"
    ]
  },
  {
    "id": "PRO-V01-08",
    "inputType": "product",
    "name": "Pedestal orbit",
    "category": "Video",
    "packId": "PRO-V01",
    "packName": "Studio Motion",
    "packCode": "V01",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio",
      "video"
    ]
  },
  {
    "id": "PRO-V01-09",
    "inputType": "product",
    "name": "Reflection sweep",
    "category": "Video",
    "packId": "PRO-V01",
    "packName": "Studio Motion",
    "packCode": "V01",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio",
      "video"
    ]
  },
  {
    "id": "PRO-V01-10",
    "inputType": "product",
    "name": "Shadow reveal",
    "category": "Video",
    "packId": "PRO-V01",
    "packName": "Studio Motion",
    "packCode": "V01",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "studio",
      "video"
    ]
  },
  {
    "id": "PRO-V02-01",
    "inputType": "product",
    "name": "Lifestyle reveal pull-back",
    "category": "Video",
    "packId": "PRO-V02",
    "packName": "Lifestyle Motion",
    "packCode": "V02",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "lifestyle",
      "product",
      "video"
    ]
  },
  {
    "id": "PRO-V02-02",
    "inputType": "product",
    "name": "Hand places product",
    "category": "Video",
    "packId": "PRO-V02",
    "packName": "Lifestyle Motion",
    "packCode": "V02",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "lifestyle",
      "product",
      "video"
    ]
  },
  {
    "id": "PRO-V02-03",
    "inputType": "product",
    "name": "Hand picks up product",
    "category": "Video",
    "packId": "PRO-V02",
    "packName": "Lifestyle Motion",
    "packCode": "V02",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "lifestyle",
      "product",
      "video"
    ]
  },
  {
    "id": "PRO-V02-04",
    "inputType": "product",
    "name": "Cafe table push-in",
    "category": "Video",
    "packId": "PRO-V02",
    "packName": "Lifestyle Motion",
    "packCode": "V02",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Cafe",
    "format": "Square",
    "tags": [
      "lifestyle",
      "product",
      "video"
    ]
  },
  {
    "id": "PRO-V02-05",
    "inputType": "product",
    "name": "Bathroom shelf pan",
    "category": "Video",
    "packId": "PRO-V02",
    "packName": "Lifestyle Motion",
    "packCode": "V02",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "lifestyle",
      "product",
      "video"
    ]
  },
  {
    "id": "PRO-V02-06",
    "inputType": "product",
    "name": "Kitchen counter dolly",
    "category": "Video",
    "packId": "PRO-V02",
    "packName": "Lifestyle Motion",
    "packCode": "V02",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "lifestyle",
      "product",
      "video"
    ]
  },
  {
    "id": "PRO-V02-07",
    "inputType": "product",
    "name": "Bedside candle glow",
    "category": "Video",
    "packId": "PRO-V02",
    "packName": "Lifestyle Motion",
    "packCode": "V02",
    "output": "video",
    "surface": "Drinkware",
    "useCase": "Motion ad",
    "style": "Cozy",
    "environment": "Home",
    "format": "Square",
    "tags": [
      "lifestyle",
      "product",
      "video"
    ]
  },
  {
    "id": "PRO-V02-08",
    "inputType": "product",
    "name": "Outdoor golden hour pan",
    "category": "Video",
    "packId": "PRO-V02",
    "packName": "Lifestyle Motion",
    "packCode": "V02",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Premium",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "lifestyle",
      "outdoor",
      "product",
      "video"
    ]
  },
  {
    "id": "PRO-V02-09",
    "inputType": "product",
    "name": "Rooftop product reveal",
    "category": "Video",
    "packId": "PRO-V02",
    "packName": "Lifestyle Motion",
    "packCode": "V02",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Outdoor",
    "format": "Square",
    "tags": [
      "lifestyle",
      "product",
      "video"
    ]
  },
  {
    "id": "PRO-V02-10",
    "inputType": "product",
    "name": "Window light slow move",
    "category": "Video",
    "packId": "PRO-V02",
    "packName": "Lifestyle Motion",
    "packCode": "V02",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "lifestyle",
      "product",
      "video"
    ]
  },
  {
    "id": "PRO-V03-01",
    "inputType": "product",
    "name": "Product shelf slide",
    "category": "Video",
    "packId": "PRO-V03",
    "packName": "Retail Motion",
    "packCode": "V03",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail",
      "video"
    ]
  },
  {
    "id": "PRO-V03-02",
    "inputType": "product",
    "name": "Unboxing tissue reveal",
    "category": "Video",
    "packId": "PRO-V03",
    "packName": "Retail Motion",
    "packCode": "V03",
    "output": "video",
    "surface": "Packaging",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail",
      "video"
    ]
  },
  {
    "id": "PRO-V03-03",
    "inputType": "product",
    "name": "Box lid lift",
    "category": "Video",
    "packId": "PRO-V03",
    "packName": "Retail Motion",
    "packCode": "V03",
    "output": "video",
    "surface": "Packaging",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail",
      "video"
    ]
  },
  {
    "id": "PRO-V03-04",
    "inputType": "product",
    "name": "Shopping bag reveal",
    "category": "Video",
    "packId": "PRO-V03",
    "packName": "Retail Motion",
    "packCode": "V03",
    "output": "video",
    "surface": "Bag",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail",
      "video"
    ]
  },
  {
    "id": "PRO-V03-05",
    "inputType": "product",
    "name": "Bundle carousel",
    "category": "Video",
    "packId": "PRO-V03",
    "packName": "Retail Motion",
    "packCode": "V03",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail",
      "video"
    ]
  },
  {
    "id": "PRO-V03-06",
    "inputType": "product",
    "name": "Price tag close-up",
    "category": "Video",
    "packId": "PRO-V03",
    "packName": "Retail Motion",
    "packCode": "V03",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail",
      "video"
    ]
  },
  {
    "id": "PRO-V03-07",
    "inputType": "product",
    "name": "Pop-up table pan",
    "category": "Video",
    "packId": "PRO-V03",
    "packName": "Retail Motion",
    "packCode": "V03",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail",
      "video"
    ]
  },
  {
    "id": "PRO-V03-08",
    "inputType": "product",
    "name": "Checkout counter push",
    "category": "Video",
    "packId": "PRO-V03",
    "packName": "Retail Motion",
    "packCode": "V03",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail",
      "video"
    ]
  },
  {
    "id": "PRO-V03-09",
    "inputType": "product",
    "name": "Gift wrap turn",
    "category": "Video",
    "packId": "PRO-V03",
    "packName": "Retail Motion",
    "packCode": "V03",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail",
      "video"
    ]
  },
  {
    "id": "PRO-V03-10",
    "inputType": "product",
    "name": "Launch display sweep",
    "category": "Video",
    "packId": "PRO-V03",
    "packName": "Retail Motion",
    "packCode": "V03",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Retail",
    "format": "Square",
    "tags": [
      "product",
      "retail",
      "video"
    ]
  },
  {
    "id": "PRO-V04-01",
    "inputType": "product",
    "name": "Book 3D rotation",
    "category": "Video",
    "packId": "PRO-V04",
    "packName": "Info Product Motion",
    "packCode": "V04",
    "output": "video",
    "surface": "Info product",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "product",
      "video"
    ]
  },
  {
    "id": "PRO-V04-02",
    "inputType": "product",
    "name": "Ebook tablet swipe",
    "category": "Video",
    "packId": "PRO-V04",
    "packName": "Info Product Motion",
    "packCode": "V04",
    "output": "video",
    "surface": "Tablet",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "product",
      "video"
    ]
  },
  {
    "id": "PRO-V04-03",
    "inputType": "product",
    "name": "Course laptop zoom",
    "category": "Video",
    "packId": "PRO-V04",
    "packName": "Info Product Motion",
    "packCode": "V04",
    "output": "video",
    "surface": "Laptop",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "product",
      "video"
    ]
  },
  {
    "id": "PRO-V04-04",
    "inputType": "product",
    "name": "Workbook page flip",
    "category": "Video",
    "packId": "PRO-V04",
    "packName": "Info Product Motion",
    "packCode": "V04",
    "output": "video",
    "surface": "Info product",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "product",
      "video"
    ]
  },
  {
    "id": "PRO-V04-05",
    "inputType": "product",
    "name": "PDF stack reveal",
    "category": "Video",
    "packId": "PRO-V04",
    "packName": "Info Product Motion",
    "packCode": "V04",
    "output": "video",
    "surface": "Info product",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "product",
      "video"
    ]
  },
  {
    "id": "PRO-V04-06",
    "inputType": "product",
    "name": "Kindle reading pan",
    "category": "Video",
    "packId": "PRO-V04",
    "packName": "Info Product Motion",
    "packCode": "V04",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "product",
      "video"
    ]
  },
  {
    "id": "PRO-V04-07",
    "inputType": "product",
    "name": "Template bundle carousel",
    "category": "Video",
    "packId": "PRO-V04",
    "packName": "Info Product Motion",
    "packCode": "V04",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "product",
      "video"
    ]
  },
  {
    "id": "PRO-V04-08",
    "inputType": "product",
    "name": "Membership dashboard scroll",
    "category": "Video",
    "packId": "PRO-V04",
    "packName": "Info Product Motion",
    "packCode": "V04",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "product",
      "video"
    ]
  },
  {
    "id": "PRO-V04-09",
    "inputType": "product",
    "name": "Podcast cover rotation",
    "category": "Video",
    "packId": "PRO-V04",
    "packName": "Info Product Motion",
    "packCode": "V04",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "product",
      "video"
    ]
  },
  {
    "id": "PRO-V04-10",
    "inputType": "product",
    "name": "Software box spin",
    "category": "Video",
    "packId": "PRO-V04",
    "packName": "Info Product Motion",
    "packCode": "V04",
    "output": "video",
    "surface": "Packaging",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "product",
      "video"
    ]
  },
  {
    "id": "PRO-V05-01",
    "inputType": "product",
    "name": "Holiday gift reveal",
    "category": "Video",
    "packId": "PRO-V05",
    "packName": "Seasonal Motion",
    "packCode": "V05",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "product",
      "seasonal",
      "video"
    ]
  },
  {
    "id": "PRO-V05-02",
    "inputType": "product",
    "name": "Christmas lights product pan",
    "category": "Video",
    "packId": "PRO-V05",
    "packName": "Seasonal Motion",
    "packCode": "V05",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "product",
      "seasonal",
      "video"
    ]
  },
  {
    "id": "PRO-V05-03",
    "inputType": "product",
    "name": "Valentine's blush push-in",
    "category": "Video",
    "packId": "PRO-V05",
    "packName": "Seasonal Motion",
    "packCode": "V05",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "product",
      "seasonal",
      "video"
    ]
  },
  {
    "id": "PRO-V05-04",
    "inputType": "product",
    "name": "Summer poolside shimmer",
    "category": "Video",
    "packId": "PRO-V05",
    "packName": "Seasonal Motion",
    "packCode": "V05",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "product",
      "seasonal",
      "video"
    ]
  },
  {
    "id": "PRO-V05-05",
    "inputType": "product",
    "name": "Autumn knit cozy pan",
    "category": "Video",
    "packId": "PRO-V05",
    "packName": "Seasonal Motion",
    "packCode": "V05",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Cozy",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "product",
      "seasonal",
      "video"
    ]
  },
  {
    "id": "PRO-V05-06",
    "inputType": "product",
    "name": "Black Friday table reveal",
    "category": "Video",
    "packId": "PRO-V05",
    "packName": "Seasonal Motion",
    "packCode": "V05",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Dramatic",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "product",
      "seasonal",
      "video"
    ]
  },
  {
    "id": "PRO-V05-07",
    "inputType": "product",
    "name": "Spring flower motion",
    "category": "Video",
    "packId": "PRO-V05",
    "packName": "Seasonal Motion",
    "packCode": "V05",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "product",
      "seasonal",
      "video"
    ]
  },
  {
    "id": "PRO-V05-08",
    "inputType": "product",
    "name": "Birthday confetti product",
    "category": "Video",
    "packId": "PRO-V05",
    "packName": "Seasonal Motion",
    "packCode": "V05",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "product",
      "seasonal",
      "video"
    ]
  },
  {
    "id": "PRO-V05-09",
    "inputType": "product",
    "name": "Wedding favor glide",
    "category": "Video",
    "packId": "PRO-V05",
    "packName": "Seasonal Motion",
    "packCode": "V05",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "product",
      "seasonal",
      "video"
    ]
  },
  {
    "id": "PRO-V05-10",
    "inputType": "product",
    "name": "New Year sparkle sweep",
    "category": "Video",
    "packId": "PRO-V05",
    "packName": "Seasonal Motion",
    "packCode": "V05",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Studio",
    "format": "Square",
    "tags": [
      "product",
      "seasonal",
      "video"
    ]
  },
  {
    "id": "PRO-V06-01",
    "inputType": "product",
    "name": "Instagram product hero motion",
    "category": "Video",
    "packId": "PRO-V06",
    "packName": "Social Ad Motion",
    "packCode": "V06",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Portrait",
    "tags": [
      "product",
      "social",
      "video"
    ]
  },
  {
    "id": "PRO-V06-02",
    "inputType": "product",
    "name": "TikTok shop push-in",
    "category": "Video",
    "packId": "PRO-V06",
    "packName": "Social Ad Motion",
    "packCode": "V06",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Portrait",
    "tags": [
      "product",
      "social",
      "video"
    ]
  },
  {
    "id": "PRO-V06-03",
    "inputType": "product",
    "name": "Pinterest pin vertical pan",
    "category": "Video",
    "packId": "PRO-V06",
    "packName": "Social Ad Motion",
    "packCode": "V06",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "product",
      "social",
      "video"
    ]
  },
  {
    "id": "PRO-V06-04",
    "inputType": "product",
    "name": "Email hero reveal",
    "category": "Video",
    "packId": "PRO-V06",
    "packName": "Social Ad Motion",
    "packCode": "V06",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "product",
      "social",
      "video"
    ]
  },
  {
    "id": "PRO-V06-05",
    "inputType": "product",
    "name": "Etsy listing video still motion",
    "category": "Video",
    "packId": "PRO-V06",
    "packName": "Social Ad Motion",
    "packCode": "V06",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "product",
      "social",
      "video"
    ]
  },
  {
    "id": "PRO-V06-06",
    "inputType": "product",
    "name": "Shopify collection carousel",
    "category": "Video",
    "packId": "PRO-V06",
    "packName": "Social Ad Motion",
    "packCode": "V06",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "product",
      "social",
      "video"
    ]
  },
  {
    "id": "PRO-V06-07",
    "inputType": "product",
    "name": "Amazon lifestyle zoom",
    "category": "Video",
    "packId": "PRO-V06",
    "packName": "Social Ad Motion",
    "packCode": "V06",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "lifestyle",
      "product",
      "social",
      "video"
    ]
  },
  {
    "id": "PRO-V06-08",
    "inputType": "product",
    "name": "UGC hand-held product pan",
    "category": "Video",
    "packId": "PRO-V06",
    "packName": "Social Ad Motion",
    "packCode": "V06",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "product",
      "social",
      "video"
    ]
  },
  {
    "id": "PRO-V06-09",
    "inputType": "product",
    "name": "Product comparison slide",
    "category": "Video",
    "packId": "PRO-V06",
    "packName": "Social Ad Motion",
    "packCode": "V06",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "product",
      "social",
      "video"
    ]
  },
  {
    "id": "PRO-V06-10",
    "inputType": "product",
    "name": "Limited drop countdown scene",
    "category": "Video",
    "packId": "PRO-V06",
    "packName": "Social Ad Motion",
    "packCode": "V06",
    "output": "video",
    "surface": "Motion scene",
    "useCase": "Motion ad",
    "style": "Commercial",
    "environment": "Motion",
    "format": "Square",
    "tags": [
      "product",
      "social",
      "video"
    ]
  }
] satisfies ExpansionPresetCatalogItem[]
