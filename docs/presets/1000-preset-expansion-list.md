# 1,000 Preset Expansion List

This is the concrete expansion plan used to grow the launch library of 130 presets by exactly 1,000 presets.

The list stays inside Mockstack's scope:

- Logo: brand marks applied to commercial mockup surfaces.
- Screenshot: websites, apps, dashboards, and digital products shown on devices or browser surfaces.
- Product: uploaded product photos placed into mockup contexts, not full Dezygn-style product photography fulfillment.

## Target Counts

- Total presets: 1,000
- Image presets: 860
- Video presets: 140
- Logo presets: 350
- Screenshot presets: 210
- Product presets: 440

The video ratio is 14%, matching the current launch library closely.

## Status

Implemented as of 2026-05-07.

- Structured catalog: `src/data/presetExpansionCatalog.ts`
- Runtime adapter: `src/data/expandedPresets.ts`
- Thumbnail prompt manifest: `docs/presets/thumbnail-prompts-expansion.json`
- Thumbnail assets: `public/preset-thumbnails/{lowercase-expansion-id}.png`
- Missing expansion thumbnails: 0

## Research Notes

Competitor libraries strongly validate these buckets:

- Renderforest groups mockups into Apparel, Devices, Branding, Products, Print, Interior, Packaging, Logos, and Mug.
- Renderforest product/category pages call out apparel subtypes, devices, branding, product, print, interior, and packaging categories.
- Mediamodifier publishes large counts across Technology, Logo Mockups, Marketing, Print, Products, Apparel, Image Effects, and Social Media.
- Placeit emphasizes mockups, videos, logos, social designs, and practical surfaces like t-shirts, flyers, mugs, and business cards.
- Mokkify groups mockups by Devices, Advertising, Print, Packaging, Branding, and Apparel.
- Mockup World-style libraries consistently surface iPhone, iPad, MacBook, iMac, packaging, signs, vehicles, apparel, food and beverage, cosmetics, books, posters, and print.

Mockstack should use those demand patterns, but reshape them into its three input lanes instead of becoming a general design-template marketplace.

## UI Filter Implementation

The expanded preset modal includes:

- Output: Image, Video
- Category: existing top-level category
- Surface/device: t-shirt, mug, phone, laptop, box, bottle, shelf, book, poster, etc.
- Use case: Etsy, SaaS, launch, portfolio, ads, client presentation, social, ecommerce, packaging
- Format: square, portrait, landscape, story, wide
- Style: minimal, premium, cozy, editorial, streetwear, corporate, UGC, retail, seasonal
- Environment: studio, desk, home, cafe, street, outdoor, retail, bathroom, kitchen, office

## Logo Presets: 350 Total

### Image Presets: 300

| Pack | Category | Presets |
|---|---|---|
| LOG-A01 Core T-Shirts | Apparel | White tee hanger, Black tee hanger, Heather grey tee flat lay, Cream oversized tee, Streetwear tee on model torso, Rolled sleeve tee close-up, Pocket tee embroidery, Ringer tee vintage, Heavyweight tee studio sweep, Washed tee folded stack |
| LOG-A02 Premium Apparel | Apparel | Cream hoodie hanger, Black hoodie folded, Zip hoodie front chest, Crewneck sweatshirt bed, Quarter-zip pullover, Varsity jacket patch, Denim jacket back logo, Bomber jacket sleeve patch, Workwear overshirt label, Fleece pullover chest mark |
| LOG-A03 Headwear | Apparel | Navy baseball cap, Black dad hat, Cream five-panel cap, Trucker cap mesh, Beanie cuff embroidery, Bucket hat side logo, Visor tennis club, Snapback flat brim, Running cap reflective logo, Wool cap premium close-up |
| LOG-A04 Activewear | Apparel | Gym tank on rack, Yoga crop top flat lay, Running singlet, Sports bra studio, Performance tee folded, Cycling jersey front, Team jersey locker room, Sweatband embroidery, Athletic shorts label, Gym duffel tag |
| LOG-A05 Work Uniforms | Apparel | Cafe apron hanging, Chef coat chest logo, Mechanic work shirt, Barber cape logo, Spa robe embroidery, Hotel staff polo, Security jacket patch, Delivery jacket chest, Event staff tee, Cleaning service polo |
| LOG-A06 Labels And Tags | Apparel | Neck label inside tee, Hang tag on string, Woven hem tag, Leather patch on beanie, Size label macro, Clothing care label, Kraft swing tag stack, Embossed denim patch, Satin label close-up, Branded tissue with garment |
| LOG-A07 Bags | Drinkware & Bags | Canvas tote shoulder, Tote on kitchen table, Black shopper tote, Jute market bag, Paper shopping bag, Drawstring gym bag, Backpack front pocket, Laptop sleeve logo, Makeup pouch, Reusable grocery bag |
| LOG-A08 Drinkware Core | Drinkware & Bags | White ceramic mug desk, Black matte mug marble, Camp mug enamel, Glass tumbler, Stainless travel mug, Insulated bottle hike, Clear water bottle gym, Latte cup sleeve, Tea cup saucer, Stack of branded cups |
| LOG-A09 Cafe Brandware | Drinkware & Bags | Takeaway cup hand hold, Coffee cup carrier, Espresso cup bar, Cold brew bottle label, Bakery bag and cup, Cafe counter cup lineup, Napkin and cup set, Loyalty card beside mug, Pour-over scene, Coffee beans with logo stamp |
| LOG-S01 Business Cards | Stationery | Single card marble, Business card stack kraft, Rounded corner cards, Vertical business card, Black foil card, Letterpress card, Spot UV card, Cards in hand, Cards beside laptop, Business card holder |
| LOG-S02 Office Stationery | Stationery | Letterhead fountain pen, Envelope wax seal, A4 invoice sheet, Branded folder, Clipboard with logo, Desk pad planner, Notepad top binding, Sticky note cube, File tab folders, Office stationery spread |
| LOG-S03 Notebooks | Stationery | Leather notebook embossed, Spiral notebook cover, Moleskine-style journal, Planner on desk, Sketchbook flat lay, Pocket notebook stack, Hardcover agenda, Notebook with pen loop, Kraft notebook set, Meeting notes scene |
| LOG-S04 Print Collateral | Stationery | Flyer stack, Folded brochure, Tri-fold brochure, Postcard front, Invitation card fabric, Greeting card envelope, Menu card restaurant, Table tent card, Event badge lanyard, Thank-you card insert |
| LOG-S05 Stickers And Stamps | Stationery | Round sticker roll, Die-cut sticker sheet, Envelope sticker seal, Rubber stamp on paper, Ink stamp close-up, Product label sticker, Window sticker decal, Laptop sticker placement, Shipping label sticker, Packaging sticker sheet |
| LOG-G01 Storefront Signs | Signage | Storefront vinyl decal, Blade sign brick wall, Awning logo, Window gold lettering, A-frame sidewalk sign, Hanging wooden sign, Neon storefront sign, Door hours decal, Cafe chalkboard sign, Retail entrance mat |
| LOG-G02 Office Signs | Signage | Reception raised letters, Glass wall decal, Conference room frosted logo, Lobby directory sign, Elevator wall sign, Acrylic desk sign, Office door plaque, Backlit wall logo, Meeting room screen saver, Corporate campus sign |
| LOG-G03 Outdoor Ads | Signage | Highway billboard sunset, City billboard daytime, Bus shelter poster, Subway poster ad, Street pole banner, Construction fence banner, Mall lightbox ad, Airport digital billboard, Stadium LED board, Parking lot pylon sign |
| LOG-G04 Vehicle Branding | Signage | Delivery van wrap, Food truck side logo, Scooter delivery box, Car door decal, Pickup truck tailgate, Service van rear doors, Box truck city street, Bicycle courier bag, Taxi roof ad, Boat hull logo |
| LOG-G05 Events And Booths | Signage | Trade show booth wall, Step-and-repeat backdrop, Pull-up banner, Exhibition counter, Event wristband, Name badge, Conference tote table, Stage screen logo, Sponsor board, Photo booth backdrop |
| LOG-P01 Shipping Packaging | Packaging | Kraft shipping box, White mailer box, Black mailer box, Corrugated box stack, Tissue paper unboxing, Branded packing tape, Shipping label box, Poly mailer, Compostable mailer, Product insert card |
| LOG-P02 Premium Boxes | Packaging | White embossed box, Black matte gold foil box, Magnetic gift box, Drawer box open, Rigid box ribbon, Jewelry box velvet, Watch box close-up, Subscription box spread, Gift box lid, Luxury box pedestal |
| LOG-P03 Food Packaging | Packaging | Coffee bag standing, Tea pouch label, Bakery paper bag, Takeout box, Pizza box top, Sauce jar label, Honey jar lid, Cereal box, Chocolate bar wrapper, Snack pouch |
| LOG-P04 Beverage Packaging | Packaging | Wine bottle label, Beer can wrap, Craft beer bottle, Sparkling water can, Juice bottle label, Kombucha bottle, Whiskey label, Milk carton, Soda can lineup, Champagne neck label |
| LOG-P05 Beauty Packaging | Packaging | Cosmetic dropper bottle, Skincare jar lid, Lotion pump bottle, Shampoo bottle, Lip balm tube, Perfume box, Soap bar wrapped paper, Candle label, Sunscreen tube, Makeup palette |
| LOG-P06 Retail Brand Systems | Packaging | Shopping bag and box, Receipt folder, Gift card sleeve, Loyalty card and cup, Tissue and sticker set, Branded ribbon, Counter display card, Hang tag and bag, Ecommerce insert bundle, Retail shelf talker |
| LOG-D01 Social Profiles | Digital | Instagram profile on phone, TikTok profile on phone, YouTube channel banner, LinkedIn company page laptop, Facebook page mockup, X profile header, Pinterest brand board, Threads profile, Behance portfolio header, Dribbble profile card |
| LOG-D02 App And Icons | Digital | App icon home screen, App icon App Store page, Favicon browser tab, iOS widget logo, Android launcher screen, Smartwatch app icon, SaaS login logo, Chrome extension card, Desktop app dock icon, Notification logo |
| LOG-D03 Presentation Screens | Digital | Logo on pitch deck cover, Webinar holding slide, Zoom waiting room, TV lobby screen, Conference keynote screen, Digital menu board, Retail POS screen, Office dashboard splash, Online course portal, Client proposal cover |
| LOG-D04 Social Ads | Digital | Instagram story logo ad, LinkedIn sponsored post, YouTube bumper frame, TikTok intro card, Facebook carousel first slide, Pinterest promoted pin, Podcast cover mockup, Newsletter header, Product Hunt launch card, Eventbrite header |
| LOG-X01 Industry Kits | Mixed | Coffee shop identity spread, Fitness studio identity spread, Beauty brand identity spread, Realtor signage kit, Restaurant launch kit, Law firm stationery kit, Creator merch kit, Local service van kit, Podcast merch kit, SaaS swag kit |

### Video Presets: 50

| Pack | Category | Presets |
|---|---|---|
| LOG-V01 Logo Reveals | Video | Logo intro scale-up reveal, Soft shadow logo fade-in, Metallic logo orbit, Glass logo reflection pan, Paper logo emboss reveal, Neon sign flicker-on, Ink stamp logo press, Foil logo glint, 3D logo pedestal turn, Minimal logo pulse |
| LOG-V02 Apparel Motion | Video | T-shirt hanger slow push, Hoodie folded pan, Cap rotation tabletop, Tote bag shoulder walk, Apron cafe counter pan, Beanie macro tilt, Jacket patch close-up, Shirt stack parallax, Gym tank rack slide, Label tag swing |
| LOG-V03 Packaging Motion | Video | Rotating product box, Mailer box unboxing, Coffee bag turntable, Bottle label slow pan, Candle label push-in, Soap wrap slide, Gift box lid reveal, Beer can rotation, Cosmetic bottle orbit, Shopping bag sway |
| LOG-V04 Signage Motion | Video | Storefront sign street pan, Billboard drive-by, Neon brick wall reveal, Office reception pan, Van wrap rolling street, Subway poster parallax, Trade show booth walk-by, A-frame sign sidewalk push, Window decal reflection, Stadium LED logo sweep |
| LOG-V05 Digital Motion | Video | App icon home screen zoom, Instagram profile scroll, YouTube banner sweep, LinkedIn page pan, Pitch deck logo reveal, Webinar holding slide motion, Podcast cover turntable, Product Hunt card pop, Social ad carousel slide, Smartwatch logo wrist turn |

## Screenshot Presets: 210 Total

### Image Presets: 180

| Pack | Category | Presets |
|---|---|---|
| SCR-P01 iPhone Core | Phone | iPhone in hand cafe, iPhone on marble desk, iPhone wooden desk coffee, iPhone bedside lamp, iPhone pulled from pocket, Two iPhones side by side, iPhone white studio sweep, iPhone black studio sweep, iPhone hand close-up, iPhone over shoulder |
| SCR-P02 iPhone Lifestyle | Phone | iPhone on train commute, iPhone at airport gate, iPhone in gym locker, iPhone on restaurant table, iPhone beside notebook, iPhone in car mount, iPhone on sofa blanket, iPhone on kitchen counter, iPhone at coworking table, iPhone on retail counter |
| SCR-P03 Android Phones | Phone | Android phone hand hold, Pixel phone studio sweep, Samsung phone desk, Android dark mode floating, Android phone cafe, Android phone car dashboard, Android phone gym scene, Android phone retail checkout, Android phone bedside, Android phone outdoor hand |
| SCR-P04 App Store And Launch | Phone | App Store product page, Google Play product page, iPhone app icon grid, Phone notification promo, App onboarding screen hand, App feature carousel, App rating screen, App launch announcement, Mobile landing page phone, Mobile checkout screen |
| SCR-P05 Social And Creator Apps | Phone | Instagram feed on phone, TikTok profile on phone, YouTube mobile channel, Podcast app screen, Creator course app, Newsletter app screen, Community app phone, Booking app phone, Fitness tracking app, Habit app morning |
| SCR-L01 MacBook Core | Laptop | MacBook on wood desk, MacBook white minimalist desk, MacBook in lap couch, MacBook cafe table latte, MacBook studio sweep, MacBook coworking space, MacBook dark office, MacBook with notebook, MacBook by window, MacBook standing desk |
| SCR-L02 SaaS Dashboards | Laptop | Analytics dashboard desk, CRM dashboard sales call, Finance dashboard office, Project board laptop, AI chat app laptop, Admin panel dark mode, Ecommerce dashboard, Calendar app laptop, Support inbox dashboard, Database UI laptop |
| SCR-L03 Founder And Agency | Laptop | Portfolio website on MacBook, Agency case study desk, Landing page review scene, Pitch deck on laptop, Client proposal screen, Marketing funnel page, Checkout page laptop, Waitlist page laptop, Product Hunt launch laptop, Webinar registration page |
| SCR-L04 Laptop Environments | Laptop | Laptop airport lounge, Laptop hotel room desk, Laptop library table, Laptop classroom desk, Laptop home kitchen, Laptop rooftop workspace, Laptop train table, Laptop studio monitor setup, Laptop night coding desk, Laptop outdoor patio |
| SCR-T01 Tablet Core | Tablet | iPad beige natural light, iPad with pencil, iPad floating studio, iPad on lap sofa, iPad kitchen recipe stand, iPad retail counter, iPad sketch desk, iPad magazine layout, iPad classroom desk, iPad bedside reading |
| SCR-T02 Tablet Use Cases | Tablet | Digital planner iPad, Course worksheet iPad, Menu ordering tablet, POS tablet counter, Portfolio tablet handoff, Ebook preview tablet, Presentation tablet, Real estate listing tablet, Fitness class tablet, Design proof tablet |
| SCR-B01 Browser Windows | Browser | Browser floating purple gradient, Browser tilted 3D dark, Browser white sweep clean, Browser tilted orange gradient, Browser desktop stack, Browser tabs close-up, Browser window on grid, Browser dark mode hero, Browser split screen, Browser analytics page |
| SCR-B02 Desktop Screens | Browser | iMac home office plant, Desktop monitor studio, Dual monitor workspace, Ultrawide dashboard, TV screen presentation, Kiosk screen lobby, POS screen retail, Wall-mounted office screen, Gaming monitor app, Large display conference room |
| SCR-B03 Multi-Device | Browser | Phone laptop combo, Tablet laptop combo, Three-device responsive set, Full Apple device lineup, Android and desktop set, Phone tablet laptop stack, Responsive website fan, Device pyramid studio, Mobile plus browser window, SaaS launch device spread |
| SCR-B04 Social Browser | Browser | Twitter/X post browser, LinkedIn post browser, YouTube channel desktop, Substack newsletter browser, Medium article browser, Product Hunt launch browser, Gumroad product page, Shopify product page, Etsy listing browser, Booking calendar browser |
| SCR-U01 UGC And Hands | Phone | Phone selfie-style app demo, Hand tapping CTA, Thumb scrolling feed, Hand swiping onboarding, Phone over cafe table, Phone held in queue, Phone handed to friend, Phone checkout at counter, Phone app in taxi, Phone with headphones |
| SCR-M01 Marketing Formats | Browser | Website hero 16:9, Website hero 4:5 ad, Landing page story crop, SaaS feature screenshot, Testimonial page mockup, Pricing page mockup, Mobile ad screenshot, LinkedIn carousel screen, Email newsletter preview, Case study browser hero |
| SCR-N01 Niche Apps | Mixed | Restaurant ordering app, Realtor listing app, Salon booking app, Fitness coaching app, Finance budgeting app, Meditation app, Course portal, Event ticketing app, Local delivery app, Healthcare portal |

### Video Presets: 30

| Pack | Category | Presets |
|---|---|---|
| SCR-V01 Phone Motion | Video | Slow zoom into iPhone, Phone 360 rotation, Thumb scroll demo, App onboarding swipe, Phone hand tilt, Phone notification reveal, Phone lock-screen wake, Phone cafe push-in, Phone pocket pull reveal, Dual phone parallax |
| SCR-V02 Browser Motion | Video | Tilted browser parallax, Browser scale-up reveal, Browser stack carousel, Landing page scroll, Dashboard side pan, Browser dark mode float, Website hero zoom, Pricing page sweep, Product Hunt launch reveal, Multi-tab browser slide |
| SCR-V03 Device Motion | Video | Slow pan past laptop, MacBook open reveal, Laptop desk push-in, iPad pencil hover, Tablet rotation, Multi-device orbit, Desktop monitor dolly, Ultrawide dashboard sweep, SaaS device lineup reveal, Responsive stack motion |

## Product Presets: 440 Total

### Image Presets: 380

| Pack | Category | Presets |
|---|---|---|
| PRO-S01 Studio Surfaces | Studio | White Carrara marble, Black marble dramatic, Walnut wood grain, Polished concrete cool, Linen flat lay, White sweep clean, Black backdrop dramatic, Beige stone pedestal, Brushed brass surface, Floating white drop shadow |
| PRO-S02 Premium Studio | Studio | Travertine pedestal, Smoked glass reflection, Matte clay plinth, Chrome reflective table, Warm oak block, Frosted acrylic riser, Sandstone slab, Charcoal slate surface, Cream paper sweep, High-key catalog white |
| PRO-S03 Color Studios | Studio | Soft pink studio, Sage green studio, Butter yellow studio, Sky blue studio, Terracotta studio, Deep burgundy studio, Cobalt studio, Lavender studio, Monochrome grey studio, Split color backdrop |
| PRO-S04 E-Commerce Clean | Studio | Amazon-style white hero, Shopify square product, Marketplace 4:5 crop, Product with shadow only, Product front and angle, Product on transparent-style sweep, Small product macro, Tall bottle hero, Wide bundle layout, Product pair comparison |
| PRO-S05 Beauty Studio | Studio | Skincare on marble, Cosmetic bottle lineup, Lip balm macro, Perfume bottle reflection, Makeup palette top-down, Dropper bottle splash, Serum with glass shadow, Cream jar open lid, Beauty tube upright, Spa product trio |
| PRO-S06 Food Studio | Studio | Snack pouch studio, Sauce jar studio, Coffee bag studio, Tea tin studio, Honey jar macro, Chocolate bar wrapper, Bakery box studio, Beverage can studio, Granola pouch studio, Supplement tub studio |
| PRO-H01 Kitchen And Cafe | Home | Modern white kitchen, Marble kitchen island, Coffee bar espresso, Breakfast table morning, Pantry shelf, Cutting board counter, Cafe table window, Restaurant counter, Tea tray setup, Home bar cart |
| PRO-H02 Bathroom And Spa | Home | Spa bathroom eucalyptus, Marble bathroom candle towel, Shower shelf product, Sink counter skincare, Bath tray scene, Hotel bathroom vanity, Linen closet shelf, Makeup mirror counter, Spa stones and towel, Minimal bathroom niche |
| PRO-H03 Living Spaces | Home | Bedside nightstand evening, White linen sheets morning, Cozy coffee table evening, Window seat plants, Bookshelf among books, Sofa side table, Reading chair scene, Entryway console, Fireplace mantle, Home office shelf |
| PRO-H04 Family And Everyday | Home | Product in tote by door, Product on family breakfast table, Laundry room shelf, Nursery dresser, Pet corner scene, Craft table, Kids desk, Apartment kitchen, Weekend brunch table, Hallway catch-all tray |
| PRO-O01 Nature Outdoor | Outdoor | Beach golden hour sand, Forest moss dappled light, Garden patio breakfast, Rooftop sunset skyline, Picnic blanket gingham, Mountain trail rock, Lake dock morning, Desert rock warm light, Snowy pine scene, Wildflower meadow |
| PRO-O02 Urban Outdoor | Outdoor | City sidewalk cafe, Brick wall street, Concrete steps, Park bench, Bike basket, Street market stall, Rooftop concrete, Outdoor cafe chair, Graffiti wall, Commuter bag scene |
| PRO-O03 Travel Outdoor | Outdoor | Hotel balcony, Airport tray table, Suitcase packing scene, Beach bag setup, Camper van table, Hiking backpack pocket, Train window table, Poolside lounger, Vacation rental kitchen, Weekend duffel bag |
| PRO-R01 Hands And Human | Retail | Hand holding product neutral, Two hands cradling, Hand reaching from frame, Person opening packaging, Hand applying product, Hand placing product on shelf, Hand holding bottle outdoor, Hand presenting box, Hand unboxing tissue, Hand with shopping bag |
| PRO-R02 Retail Shelves | Retail | Boutique shelf display, Grocery shelf placement, Beauty store shelf, Pharmacy shelf, Coffee shop retail wall, Bookstore display table, Pop-up market table, Concept store pedestal, Checkout counter impulse display, Farmers market crate |
| PRO-R03 Launch And Ads | Retail | Product with price tag, Product hero with blank copy space, Product bundle sale layout, Before-after comparison surface, Product testimonial card scene, Influencer mailer spread, Press kit table, Gift guide layout, New arrival display, Limited edition launch |
| PRO-R04 Packaging Context | Retail | Mailer box opened, Subscription box reveal, Product inside tissue, Product next to shipping box, Branded insert card scene, Product and ribbon gift, Product with paper bag, Product in clear pouch, Product with hang tag, Product in kraft tray |
| PRO-I01 Books And Ebooks | Info Products | 3D paperback floating, 3D hardcover wood desk, Book stack three, Kindle e-reader bed, iPad ebook cover, Book beside coffee, Book on linen, Book in hand, Workbook spread, Spiral-bound guide |
| PRO-I02 Courses And Digital | Info Products | Course on MacBook, Course on iPad, Online course dashboard, Video lesson laptop, Webinar replay screen, Digital planner tablet, PDF guide stack, Template bundle laptop, Notion dashboard screen, Membership portal desk |
| PRO-I03 Creator Products | Info Products | Podcast cover on phone, Newsletter product page, Coaching workbook, Paid community dashboard, Gumroad download page, Shopify digital product page, Etsy printable listing, Canva template preview, Lightroom preset pack, Fitness program PDF |
| PRO-I04 Physical Media | Info Products | USB drive on desk, SD card packaging, Vinyl record sleeve, CD jewel case, Cassette tape nostalgia, Memory card case, Game box mockup, Software box 3D shrink wrap, QR card product, NFC card product |
| PRO-A01 Minimal Aesthetics | Aesthetics | Quiet luxury beige, Japandi wood neutral, Brutalist concrete, Mediterranean white blue, Scandinavian light wood, Monochrome white, Soft organic modern, Gallery pedestal, Editorial shadow play, Neutral linen premium |
| PRO-A02 Bold Aesthetics | Aesthetics | Memphis color blocks, Y2K chrome pink, Vaporwave gradient, Maximalist pattern, Streetwear concrete, Futuristic silver, Pop-art primary colors, Neon night, High contrast black red, Sporty electric blue |
| PRO-A03 Craft Aesthetics | Aesthetics | Handmade ceramic table, Artisan paper texture, Natural fiber basket, Clay studio table, Botanical pressed flowers, Recycled kraft paper, Wabi-sabi stone, Rustic farmhouse wood, Handmade market stall, Slow-living linen |
| PRO-A04 Industry Aesthetics | Aesthetics | Beauty clinic clean, Coffee roastery warm, Fitness studio bold, Realtor desk premium, Wedding vendor soft, Restaurant table editorial, Therapist office calm, Tech startup desk, Jewelry boutique luxe, Kids brand playful |
| PRO-SE01 Seasonal Retail | Seasonal | Christmas pine warm lights, Spring garden pastel flowers, Autumn cozy knit, Summer poolside color, Valentine's blush scene, Halloween dark candle, Black Friday sale table, Cyber Monday desk, Mother's Day brunch, Father's Day workbench |
| PRO-SE02 Holiday Packaging | Seasonal | Gift box under tree, Ribbon-wrapped product, Stocking stuffer layout, Holiday shipping box, Festive table setting, Spring gift basket, Wedding favor table, Birthday confetti surface, Back-to-school desk, New Year sparkle |
| PRO-C01 Candles And Home Goods | Home | Candle on marble bath, Candle on coffee table, Candle bedside glow, Candle gift box, Reed diffuser shelf, Room spray bathroom, Pillow on sofa, Throw blanket stack, Ceramic vase console, Framed print wall shelf |
| PRO-C02 Jewelry And Accessories | Studio | Ring box velvet, Necklace on linen, Bracelet on stone, Watch on wrist-adjacent table, Sunglasses poolside, Wallet desk, Keychain flat lay, Phone case studio, Hair clip beauty counter, Scarf folded silk |
| PRO-C03 Wellness And Fitness | Retail | Supplement bottle gym, Protein tub kitchen, Yoga mat product, Water bottle workout, Resistance bands flat lay, Wellness tincture shelf, Vitamins morning counter, Recovery balm sports bag, Fitness guide bundle, Spa oil treatment scene |
| PRO-C04 Food And Beverage Context | Home | Coffee bag grinder scene, Tea tin teapot scene, Sauce bottle pasta counter, Jam jar breakfast table, Beer can cooler, Wine bottle dinner table, Juice bottle picnic, Snack bag movie night, Honey jar toast scene, Spice jar kitchen |
| PRO-C05 Kids And Pets | Home | Baby product nursery, Toy product playroom, Kids book bedroom, Lunchbox school desk, Pet shampoo bathroom, Dog treat jar kitchen, Cat product window shelf, Kids craft kit table, Baby blanket crib, Family game table |
| PRO-C06 Outdoor Gear | Outdoor | Water bottle trail, Sunscreen beach towel, Camping mug fire pit, Trail snack backpack, Running gel pavement, Bike accessory handlebar, Travel toiletry pouch, Picnic product basket, Ski lodge table, Garden tool bench |
| PRO-C07 Retail Niches | Retail | Salon product station, Barber shelf product, Tattoo aftercare counter, Florist counter product, Bakery boxed product, Boutique jewelry tray, Hotel amenity tray, Spa retail shelf, Museum gift shop table, Farmers market label |
| PRO-C08 Social Listing Images | Retail | Etsy hero square, Etsy lifestyle secondary, Shopify collection tile, Amazon image with use context, Instagram shop post, Pinterest product pin, Facebook marketplace listing, TikTok shop still, Email product hero, Ad creative with copy space |
| PRO-C09 Apparel Product Context | Retail | Folded shirt product stack, Hoodie product on chair, Cap product on shelf, Tote product with contents, Socks product drawer, Apron product kitchen rail, Activewear product locker, Baby onesie product nursery, Scarf product boutique table, Merchandise bundle flat lay |
| PRO-C10 Paper Goods And Art | Info Products | Art print in frame, Poster on studio wall, Greeting card mantel, Wedding invitation suite, Sticker sheet desk, Planner page spread, Calendar on wall, Magazine cover table, Zine stack, Photography print portfolio |
| PRO-C11 Tech Accessories | Studio | Phone case pedestal, Laptop sleeve desk, Keyboard cover flat lay, Mouse pad workspace, Camera strap product, Cable organizer pouch, AirPods case surface, Smartwatch band display, Desk mat setup, Charger stand nightstand |

### Video Presets: 60

| Pack | Category | Presets |
|---|---|---|
| PRO-V01 Studio Motion | Video | 360 rotation white sweep, 360 rotation marble counter, Slow push-in studio, Slow push-in marble, Product hover bob, Side pan cinematic, Top-down spin flat lay, Pedestal orbit, Reflection sweep, Shadow reveal |
| PRO-V02 Lifestyle Motion | Video | Lifestyle reveal pull-back, Hand places product, Hand picks up product, Cafe table push-in, Bathroom shelf pan, Kitchen counter dolly, Bedside candle glow, Outdoor golden hour pan, Rooftop product reveal, Window light slow move |
| PRO-V03 Retail Motion | Video | Product shelf slide, Unboxing tissue reveal, Box lid lift, Shopping bag reveal, Bundle carousel, Price tag close-up, Pop-up table pan, Checkout counter push, Gift wrap turn, Launch display sweep |
| PRO-V04 Info Product Motion | Video | Book 3D rotation, Ebook tablet swipe, Course laptop zoom, Workbook page flip, PDF stack reveal, Kindle reading pan, Template bundle carousel, Membership dashboard scroll, Podcast cover rotation, Software box spin |
| PRO-V05 Seasonal Motion | Video | Holiday gift reveal, Christmas lights product pan, Valentine's blush push-in, Summer poolside shimmer, Autumn knit cozy pan, Black Friday table reveal, Spring flower motion, Birthday confetti product, Wedding favor glide, New Year sparkle sweep |
| PRO-V06 Social Ad Motion | Video | Instagram product hero motion, TikTok shop push-in, Pinterest pin vertical pan, Email hero reveal, Etsy listing video still motion, Shopify collection carousel, Amazon lifestyle zoom, UGC hand-held product pan, Product comparison slide, Limited drop countdown scene |

## Original Pack Priority

The original build priority was:

1. Logo apparel, drinkware, signage, packaging, and digital profile packs.
2. Screenshot phone, laptop, browser, multi-device, SaaS dashboard, and app store packs.
3. Product studio, ecommerce clean, beauty, kitchen, bathroom, retail shelf, info product, and social listing packs.
4. Video packs last, because they cost more to smoke test and should be selected for the highest commercial use cases.

## Implementation Notes

- Existing categories were kept for compatibility, with secondary metadata fields for filters.
- `surface`, `useCase`, `style`, `environment`, and `format` are present in the generated catalog/runtime shape.
- The expansion catalog lazy-loads in the expanded modal instead of shipping all 1,000 in the first app bundle.
- Thumbnails were generated pack-by-pack and stored under `/preset-thumbnails/{lowercase-id}.png`.
- Reserve `featured: true` for about 10% of the library, not every strong preset.
- Avoid adding product photography workflows like retouching, background removal, client revisions, shot lists, or agency delivery. Those remain Dezygn territory.

## Sources Consulted

- Renderforest mockup categories and product mockup pages.
- Renderforest video template category documentation.
- Placeit app and support pages describing mockups, videos, and asset scale.
- Mediamodifier mockup category counts.
- Mokkify mockup category overview.
- Mockup World and free mockup directories for category coverage and surface examples.
