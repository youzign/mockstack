import { type ReactNode, useEffect, useMemo, useState } from "react"
import { fal } from "@fal-ai/client"
import {
  ArrowRight,
  BadgeCheck,
  Box,
  Check,
  CircleHelp,
  CreditCard,
  Download,
  Eye,
  ExternalLink,
  Images,
  KeyRound,
  Loader2,
  Maximize2,
  Monitor,
  Pencil,
  Play,
  Settings,
  ShieldCheck,
  Sparkles,
  Trash2,
  Upload,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { imageModel, presets, videoModel, type InputType, type Preset } from "@/data/presets"

type AppView = "create" | "library"
type Route = "sales" | "special" | "app" | "thanks"
type HelpArticleId = "first-mockup" | "fal-key" | "use-fal-key" | "troubleshooting"

type Result = Preset & {
  status: "queued" | "uploading" | "generating" | "done" | "error"
  imageUrl?: string
  videoUrl?: string
  error?: string
}

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

type PreviewItem = {
  name: string
  mediaType: "image" | "video"
  mediaUrl: string
}

type HelpArticle = {
  id: HelpArticleId
  title: string
  summary: string
  sections: Array<{
    title: string
    body: ReactNode
  }>
}

const inputTypes: Array<{
  id: InputType
  label: string
  hint: string
  icon: typeof BadgeCheck
}> = [
  {
    id: "logo",
    label: "Logo",
    hint: "Brand mark, transparent PNG",
    icon: BadgeCheck,
  },
  {
    id: "screenshot",
    label: "Screenshot",
    hint: "Site, app, dashboard",
    icon: Monitor,
  },
  {
    id: "product",
    label: "Product photo",
    hint: "For mockup contexts only",
    icon: Box,
  },
]

const uploadHints: Record<InputType, { main: string; hint: string; title: string }> = {
  logo: {
    main: "Drop your logo or click to browse",
    hint: "PNG with transparent background works best",
    title: "Pick mockup contexts for your logo",
  },
  screenshot: {
    main: "Drop your screenshot or click to browse",
    hint: "Full screenshots of sites, apps, dashboards",
    title: "Pick mockup contexts for your screenshot",
  },
  product: {
    main: "Drop your product photo or click to browse",
    hint: "Clean background works best. This is for mockup contexts.",
    title: "Pick mockup contexts for your product photo",
  },
}

const uploadLoaderMessages = [
  "Grabbing your image...",
  "Prepping the file...",
  "Sending it to fal.ai...",
]

const generateLoaderMessages = [
  "Reading your image...",
  "Choosing the best mockup angle...",
  "Placing your design...",
  "Matching light and shadows...",
  "Cleaning up the details...",
  "Finishing your mockup...",
]

const libraryStorageKey = "mockstack-library"
const checkoutUrl =
  import.meta.env.VITE_STRIPE_PAYMENT_LINK || "https://buy.stripe.com/6oU28javmh2wbyogt43Nm06"

const helpArticles: HelpArticle[] = [
  {
    id: "first-mockup",
    title: "Create your first mockup",
    summary: "Upload an asset, choose scenes, generate, then download or revisit results in Library.",
    sections: [
      {
        title: "1. Choose the right input",
        body: "Use Logo for brand marks, Screenshot for websites or app screens, and Product photo for a clean product image you want placed into mockup scenes.",
      },
      {
        title: "2. Upload your image",
        body: "Drop a PNG, JPG, or WebP into the upload area. Mockstack only sends it to fal.ai when you start generation.",
      },
      {
        title: "3. Pick scenes",
        body: "Use the inline scene browser for quick picks. Use the expand icon when you want a larger view of the full launch preset library.",
      },
      {
        title: "4. Generate and save",
        body: "Each selected scene creates one mockup. Finished results can be downloaded from Results and are also added to your local Library in this browser.",
      },
    ],
  },
  {
    id: "fal-key",
    title: "Get your fal.ai key",
    summary: "Create a fal.ai account, add credits, and create the API key Mockstack needs for generation.",
    sections: [
      {
        title: "Watch the tutorial",
        body: (
          <TutorialVideo
            title="How to get fal.ai API key"
            url="https://www.youtube.com/watch?v=uCHIqUxUtxU"
            embedUrl="https://www.youtube.com/embed/uCHIqUxUtxU"
          />
        ),
      },
      {
        title: "1. Create or open fal.ai",
        body: (
          <>
            Go to{" "}
            <a className="underline underline-offset-4" href="https://fal.ai" target="_blank" rel="noreferrer">
              fal.ai
            </a>{" "}
            and sign in or create an account.
          </>
        ),
      },
      {
        title: "2. Add credits",
        body: (
          <>
            Buy at least $10 in credits to fund your usage from{" "}
            <a
              className="underline underline-offset-4"
              href="https://fal.ai/dashboard/usage-billing/credits"
              target="_blank"
              rel="noreferrer"
            >
              fal.ai credits
            </a>
            .
          </>
        ),
      },
      {
        title: "3. Create an API key",
        body: (
          <>
            Create a new key from the{" "}
            <a
              className="underline underline-offset-4"
              href="https://fal.ai/dashboard/keys"
              target="_blank"
              rel="noreferrer"
            >
              fal.ai API keys page
            </a>
            , copy it, then return to Mockstack and paste it into Settings.
          </>
        ),
      },
      {
        title: "4. Check usage",
        body: (
          <>
            Check your{" "}
            <a
              className="underline underline-offset-4"
              href="https://fal.ai/dashboard/usage-billing"
              target="_blank"
              rel="noreferrer"
            >
              fal.ai usage
            </a>{" "}
            by model to see exactly how much each generation costs.
          </>
        ),
      },
    ],
  },
  {
    id: "use-fal-key",
    title: "Use your fal.ai key",
    summary: "Save your fal.ai key in Mockstack Settings so generations can run from this browser.",
    sections: [
      {
        title: "Watch the tutorial",
        body: (
          <TutorialVideo
            title="How to save fal.ai API key in Mockstack"
            url="https://www.youtube.com/watch?v=UMQvubXvGqU"
            embedUrl="https://www.youtube.com/embed/UMQvubXvGqU"
          />
        ),
      },
      {
        title: "1. Open Settings",
        body: "Click the Settings icon in the top-right of Mockstack.",
      },
      {
        title: "2. Paste your key",
        body: "Paste the API key you copied from fal.ai into the fal.ai API key field.",
      },
      {
        title: "3. Save",
        body: "Click Save. Mockstack stores the key only in this browser's local storage.",
      },
      {
        title: "4. Confirm connection",
        body: "When the header shows Connected, you can upload an image, choose scenes, and generate mockups.",
      },
    ],
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    summary: "Check the common fal.ai account and usage issues when a generation fails.",
    sections: [
      {
        title: "If generation fails",
        body: (
          <>
            Check that your API key is valid, your fal.ai account has credits or billing enabled, and you are not rate
            limited.
          </>
        ),
      },
      {
        title: "Check credits",
        body: (
          <>
            Open the{" "}
            <a
              className="underline underline-offset-4"
              href="https://fal.ai/dashboard/usage-billing/credits"
              target="_blank"
              rel="noreferrer"
            >
              fal.ai credits page
            </a>{" "}
            to confirm you have enough balance for new generations.
          </>
        ),
      },
      {
        title: "Check usage",
        body: (
          <>
            Open{" "}
            <a
              className="underline underline-offset-4"
              href="https://fal.ai/dashboard/usage-billing"
              target="_blank"
              rel="noreferrer"
            >
              fal.ai usage
            </a>{" "}
            to review recent generations, model usage, and costs.
          </>
        ),
      },
    ],
  },
]

function App() {
  const [route, setRoute] = useState<Route>(() => getRoute(window.location.pathname))
  const [view, setView] = useState<AppView>("create")
  const [step, setStep] = useState<1 | 2>(1)
  const [inputType, setInputType] = useState<InputType>("logo")
  const [activeCategory, setActiveCategory] = useState("All")
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [file, setFile] = useState<File | null>(null)
  const [fileName, setFileName] = useState("")
  const [previewUrl, setPreviewUrl] = useState("")
  const [customDirection, setCustomDirection] = useState("")
  const [apiKey, setApiKey] = useState(() => localStorage.getItem("mockstack-fal-key") ?? "")
  const [draftKey, setDraftKey] = useState(apiKey)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [helpOpen, setHelpOpen] = useState(false)
  const [activeHelpArticleId, setActiveHelpArticleId] = useState<HelpArticleId>("first-mockup")
  const [presetPickerOpen, setPresetPickerOpen] = useState(false)
  const [generating, setGenerating] = useState(false)
  const [results, setResults] = useState<Result[]>([])
  const [libraryItems, setLibraryItems] = useState<LibraryItem[]>(readLibraryItems)
  const [previewItem, setPreviewItem] = useState<PreviewItem | null>(null)
  const [editTarget, setEditTarget] = useState<Result | null>(null)
  const [editPrompt, setEditPrompt] = useState("")
  const [editingResultId, setEditingResultId] = useState("")

  const group = presets[inputType]
  const hint = uploadHints[inputType]
  const activeHelpArticle = helpArticles.find((article) => article.id === activeHelpArticleId) ?? helpArticles[0]
  const filteredPresets = useMemo(() => {
    if (activeCategory === "All") return group.items
    if (activeCategory === "Featured") return group.items.filter((preset) => preset.featured)
    return group.items.filter((preset) => preset.category === activeCategory)
  }, [activeCategory, group.items])
  const selectedPresets = useMemo(
    () => group.items.filter((preset) => selected.has(preset.id)),
    [group.items, selected]
  )

  useEffect(() => {
    const syncRoute = () => setRoute(getRoute(window.location.pathname))
    window.addEventListener("popstate", syncRoute)
    return () => window.removeEventListener("popstate", syncRoute)
  }, [])

  const canAdvance = Boolean(previewUrl)
  const canGenerate = Boolean(apiKey && previewUrl && selected.size > 0 && !generating)

  function navigate(path: string) {
    window.history.pushState(null, "", path)
    setRoute(getRoute(path))
    window.scrollTo({ top: 0, behavior: "auto" })
  }

  function changeInputType(nextType: InputType) {
    if (nextType === inputType) return

    setInputType(nextType)
    setActiveCategory("All")
    setSelected(new Set())
    setFile(null)
    setFileName("")
    setPreviewUrl("")
    setCustomDirection("")
    setResults([])
    setStep(1)
    setPresetPickerOpen(false)
  }

  function handleFile(file: File) {
    setFile(file)
    setFileName(file.name)
    setPreviewUrl(URL.createObjectURL(file))
  }

  function clearUpload() {
    setFile(null)
    setFileName("")
    setPreviewUrl("")
    setCustomDirection("")
    setResults([])
    setStep(1)
    setPresetPickerOpen(false)
  }

  function togglePreset(id: string) {
    const next = new Set(selected)
    if (next.has(id)) next.delete(id)
    else next.add(id)
    setSelected(next)
  }

  function saveApiKey() {
    const next = draftKey.trim()
    setApiKey(next)
    if (next) localStorage.setItem("mockstack-fal-key", next)
    else localStorage.removeItem("mockstack-fal-key")
    setSettingsOpen(false)
  }

  function handleSettingsOpenChange(open: boolean) {
    setSettingsOpen(open)
    if (open) setDraftKey(apiKey)
  }

  function saveLibraryItem(item: LibraryItem) {
    setLibraryItems((current) => {
      const next = [item, ...current].slice(0, 100)
      writeLibraryItems(next)
      return next
    })
  }

  function removeLibraryItem(id: string) {
    setLibraryItems((current) => {
      const next = current.filter((item) => item.id !== id)
      writeLibraryItems(next)
      return next
    })
  }

  function clearLibrary() {
    setLibraryItems([])
    writeLibraryItems([])
  }

  function openEditResult(result: Result) {
    setEditTarget(result)
    setEditPrompt("")
  }

  async function editResult() {
    if (!editTarget?.imageUrl || !editPrompt.trim()) return

    if (!apiKey) {
      setSettingsOpen(true)
      return
    }

    const prompt = buildEditPrompt(editPrompt)
    setEditingResultId(editTarget.id)
    fal.config({ credentials: apiKey })

    try {
      const result = await fal.subscribe(imageModel, {
        input: {
          image_urls: [editTarget.imageUrl],
          prompt,
          num_images: 1,
          aspect_ratio: "auto",
          output_format: "png",
          safety_tolerance: "4",
          resolution: "1K",
          limit_generations: true,
        },
        logs: true,
      })
      const outputUrl = result.data.images?.[0]?.url
      if (!outputUrl) throw new Error("No edited image returned")

      setResults((current) =>
        current.map((item) =>
          item.id === editTarget.id ? { ...item, imageUrl: outputUrl, status: "done" } : item
        )
      )
      saveLibraryItem({
        id: `${Date.now()}-${editTarget.id}-edit`,
        presetId: editTarget.id,
        presetName: `${editTarget.name} edit`,
        inputType,
        category: editTarget.category,
        mediaType: "image",
        mediaUrl: outputUrl,
        model: imageModel,
        prompt,
        sourceFileName: fileName,
        createdAt: new Date().toISOString(),
      })
      setPreviewItem((current) =>
        current && current.mediaUrl === editTarget.imageUrl ? { ...current, mediaUrl: outputUrl } : current
      )
      setEditTarget(null)
      setEditPrompt("")
    } catch (error) {
      setResults((current) =>
        current.map((item) =>
          item.id === editTarget.id
            ? {
                ...item,
                status: "error",
                error: error instanceof Error ? error.message : "Edit failed",
              }
            : item
        )
      )
    } finally {
      setEditingResultId("")
    }
  }

  async function generateMockups() {
    if (!canGenerate || !file) return

    const selectedItems = group.items
      .filter((preset) => selected.has(preset.id))
      .map((preset) => ({ ...preset, status: "queued" as const }))

    setResults(selectedItems)
    setGenerating(true)

    fal.config({ credentials: apiKey })

    try {
      setResults((current) => current.map((item) => ({ ...item, status: "uploading" })))
      const imageUrl = await fal.storage.upload(file)

      for (const preset of selectedItems) {
        const prompt = buildPresetPrompt(preset.prompt, customDirection)

        setResults((current) =>
          current.map((item) =>
            item.id === preset.id ? { ...item, status: "generating" } : item
          )
        )

        try {
          const result = preset.video
            ? await fal.subscribe(videoModel, {
                input: {
                  image_url: imageUrl,
                  prompt,
                  resolution: "480p",
                  duration: "5",
                  aspect_ratio: preset.aspectRatio,
                  generate_audio: false,
                },
                logs: true,
              })
            : await fal.subscribe(imageModel, {
                input: {
                  image_urls: [imageUrl],
                  prompt,
                  num_images: 1,
                  aspect_ratio: preset.aspectRatio,
                  output_format: "png",
                  safety_tolerance: "4",
                  resolution: "1K",
                  limit_generations: true,
                },
                logs: true,
              })
          const outputUrl = preset.video
            ? result.data.video?.url
            : result.data.images?.[0]?.url

          if (outputUrl) {
            saveLibraryItem({
              id: `${Date.now()}-${preset.id}`,
              presetId: preset.id,
              presetName: preset.name,
              inputType,
              category: preset.category,
              mediaType: preset.video ? "video" : "image",
              mediaUrl: outputUrl,
              model: preset.video ? videoModel : imageModel,
              prompt,
              sourceFileName: fileName,
              createdAt: new Date().toISOString(),
            })
          }

          setResults((current) =>
            current.map((item) =>
              item.id === preset.id && outputUrl
                ? preset.video
                  ? { ...item, status: "done", videoUrl: outputUrl }
                  : { ...item, status: "done", imageUrl: outputUrl }
                : item.id === preset.id
                  ? { ...item, status: "error", error: `No ${preset.video ? "video" : "image"} returned` }
                  : item
            )
          )
        } catch (error) {
          setResults((current) =>
            current.map((item) =>
              item.id === preset.id
                ? {
                    ...item,
                    status: "error",
                    error: error instanceof Error ? error.message : "Generation failed",
                  }
                : item
            )
          )
        }
      }
    } catch (error) {
      setResults((current) =>
        current.map((item) => ({
          ...item,
          status: "error",
          error: error instanceof Error ? error.message : "Upload failed",
        }))
      )
    } finally {
      setGenerating(false)
    }
  }

  if (route === "sales") {
    return <SalesPage onNavigate={navigate} />
  }

  if (route === "special") {
    return <SpecialPage />
  }

  if (route === "thanks") {
    return <ThankYouPage onNavigate={navigate} />
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#faf9f5] text-[#1a1a1a]">
      <header className="sticky top-0 z-40 border-b border-black/10 bg-[#faf9f5]/85 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-[1180px] items-center px-4 py-3 sm:px-8">
          <div className="flex items-center gap-2.5">
            <span className="flex size-7 items-center justify-center">
              <img className="size-6" src="/logo-mark.svg" alt="" />
            </span>
            <button
              className="text-[15px] font-medium tracking-[-0.005em]"
              type="button"
              onClick={() => navigate("/app")}
            >
              Mockstack
            </button>
          </div>

          <nav className="ml-6 hidden items-center gap-1 rounded-full border border-black/10 bg-white p-1 sm:flex">
            <button
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-medium transition",
                view === "create" ? "bg-[#1a1a1a] text-white" : "text-[#6b6b6b] hover:bg-[#f5f4ef]"
              )}
              type="button"
              onClick={() => setView("create")}
            >
              Create
            </button>
            <button
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition",
                view === "library" ? "bg-[#1a1a1a] text-white" : "text-[#6b6b6b] hover:bg-[#f5f4ef]"
              )}
              type="button"
              onClick={() => setView("library")}
            >
              Library
              {libraryItems.length > 0 && (
                <span className={cn("text-[10px]", view === "library" ? "text-white/70" : "text-[#9a9a9a]")}>
                  {libraryItems.length}
                </span>
              )}
            </button>
          </nav>

          <div className="ml-auto flex items-center gap-2.5">
            <Button
              className="sm:hidden"
              size="sm"
              variant="outline"
              onClick={() => setView(view === "library" ? "create" : "library")}
            >
              {view === "library" ? "Create" : "Library"}
            </Button>
            <span
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11.5px] font-medium",
                apiKey
                  ? "border-[#1A6E47]/20 bg-[#1A6E47]/5 text-[#1A6E47]"
                  : "border-[#BA7517]/25 bg-[#BA7517]/10 text-[#BA7517]"
              )}
            >
              <span className={cn("size-1.5 rounded-full", apiKey ? "bg-[#1A6E47]" : "bg-[#BA7517]")} />
              {apiKey ? "Connected" : "No key"}
            </span>

            <Dialog open={helpOpen} onOpenChange={setHelpOpen}>
              <DialogTrigger
                render={
                  <Button variant="outline" size="icon" aria-label="Help">
                    <CircleHelp className="size-4" />
                  </Button>
                }
              />
              <DialogContent className="flex max-h-[calc(100vh-32px)] min-h-0 w-[calc(100vw-32px)] !max-w-none flex-col gap-0 overflow-hidden p-0 sm:h-[min(720px,calc(100vh-64px))] sm:w-[min(860px,calc(100vw-64px))] sm:!max-w-none">
                <div className="shrink-0 border-b border-black/10 bg-white px-5 py-4 pr-12 sm:px-6">
                  <DialogHeader>
                    <DialogTitle>Help</DialogTitle>
                    <DialogDescription>
                      Short guides for setting up Mockstack and generating your first mockup.
                    </DialogDescription>
                  </DialogHeader>
                </div>
                <div className="grid min-h-0 flex-1 grid-cols-1 sm:grid-cols-[240px_1fr]">
                  <div className="border-b border-black/10 bg-[#faf9f5] p-3 sm:border-b-0 sm:border-r">
                    <div className="flex gap-2 overflow-x-auto sm:flex-col sm:overflow-visible">
                      {helpArticles.map((article) => {
                        const active = article.id === activeHelpArticleId
                        return (
                          <button
                            className={cn(
                              "w-[210px] shrink-0 rounded-lg border p-3 text-left transition sm:w-full",
                              active
                                ? "border-[#1a1a1a] bg-white shadow-[0_0_0_1px_#1a1a1a]"
                                : "border-black/10 bg-white/60 hover:bg-white"
                            )}
                            key={article.id}
                            type="button"
                            onClick={() => setActiveHelpArticleId(article.id)}
                          >
                            <span className="block text-[13px] font-medium text-[#1a1a1a]">
                              {article.title}
                            </span>
                            <span className="mt-1 block text-[11.5px] leading-4 text-[#6b6b6b]">
                              {article.summary}
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                  <article className="min-h-0 overflow-y-auto px-5 py-5 sm:px-6">
                    <h2 className="text-xl font-medium tracking-[-0.015em]">{activeHelpArticle.title}</h2>
                    <p className="mt-1 max-w-[620px] text-[13px] leading-5 text-[#6b6b6b]">
                      {activeHelpArticle.summary}
                    </p>
                    <div className="mt-5 grid gap-3">
                      {activeHelpArticle.sections.map((section) => (
                        <section className="rounded-[10px] border border-black/10 bg-white p-4" key={section.title}>
                          <h3 className="text-[13px] font-medium text-[#1a1a1a]">{section.title}</h3>
                          <p className="mt-1.5 text-[12.5px] leading-5 text-[#6b6b6b]">{section.body}</p>
                        </section>
                      ))}
                    </div>
                    {activeHelpArticle.id === "fal-key" && (
                      <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                        <Button
                          nativeButton={false}
                          render={<a href="https://fal.ai/dashboard/keys" target="_blank" rel="noreferrer" />}
                        >
                          Open fal.ai keys
                          <ExternalLink className="size-4" />
                        </Button>
                        <Button variant="outline" onClick={() => setSettingsOpen(true)}>
                          Open Settings
                          <Settings className="size-4" />
                        </Button>
                      </div>
                    )}
                  </article>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog open={settingsOpen} onOpenChange={handleSettingsOpenChange}>
              <DialogTrigger
                render={
                  <Button variant="outline" size="icon" aria-label="Settings">
                    <Settings className="size-4" />
                  </Button>
                }
              />
              <DialogContent className="max-w-[420px] p-6">
                <DialogHeader>
                  <DialogTitle>Settings</DialogTitle>
                  <DialogDescription>
                    Paste your fal.ai API key. Mockstack stores it only in this browser's local storage and never sends it to our servers.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-2">
                  <label className="text-xs text-muted-foreground" htmlFor="fal-key">
                    fal.ai API key
                  </label>
                  <Input
                    id="fal-key"
                    type="password"
                    value={draftKey}
                    placeholder="fal_••••••••••••••••"
                    onChange={(event) => setDraftKey(event.target.value)}
                  />
                  <a
                    className="text-xs text-muted-foreground underline underline-offset-4"
                    href="https://fal.ai/dashboard/keys"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Get a key at fal.ai
                  </a>
                  <div className="mt-2 rounded-lg border border-[#1A6E47]/15 bg-[#1A6E47]/5 p-3 text-xs leading-5 text-[#315944]">
                    Your key remains on this device. Generations bill directly through your fal.ai account, with no Mockstack markup.
                  </div>
                </div>
                <DialogFooter>
                  <Button onClick={saveApiKey}>Save</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      {view === "library" ? (
        <LibraryView items={libraryItems} onClear={clearLibrary} onRemove={removeLibraryItem} />
      ) : (
      <main className="mx-auto grid w-full max-w-[1180px] flex-1 grid-cols-1 gap-6 px-4 py-6 sm:px-8 lg:grid-cols-2 lg:gap-8">
        <section className="min-w-0">
          <div className="mb-3 inline-flex items-center gap-1 rounded-full border border-black/10 bg-white p-1">
                    <WizardButton
              active={step === 1}
              complete={Boolean(previewUrl)}
              label="Upload"
              step={1}
              onClick={() => setStep(1)}
            />
            <WizardButton
              active={step === 2}
              complete={selected.size > 0}
              count={selected.size}
              disabled={!canAdvance}
              label="Pick scenes"
              step={2}
              onClick={() => canAdvance && setStep(2)}
            />
          </div>

          <div className="rounded-xl border border-black/10 bg-white px-5 py-5 sm:px-6">
            {step === 1 ? (
              <>
                <h1 className="text-xl font-medium tracking-[-0.015em]">What are you mocking up?</h1>
                <p className="mt-1 text-[13px] leading-5 text-[#6b6b6b]">
                  Pick a kind, drop in your image. We'll handle the rest.
                </p>

                <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                  {inputTypes.map((type) => {
                    const Icon = type.icon
                    const active = type.id === inputType

                    return (
                      <button
                        className={cn(
                          "flex min-h-[92px] items-start gap-3 rounded-[10px] border bg-white p-3.5 text-left transition",
                          active
                            ? "border-[#1a1a1a] shadow-[0_0_0_1px_#1a1a1a]"
                            : "border-black/10 hover:border-black/20"
                        )}
                        key={type.id}
                        type="button"
                        onClick={() => changeInputType(type.id)}
                      >
                        <span
                          className={cn(
                            "flex size-8 shrink-0 items-center justify-center rounded-lg",
                            active ? "bg-[#1a1a1a] text-white" : "bg-[#f5f4ef] text-[#1a1a1a]"
                          )}
                        >
                          <Icon className="size-4" />
                        </span>
                        <span className="min-w-0 pt-0.5">
                          <span className="block text-[13px] font-medium">{type.label}</span>
                          <span className="mt-0.5 block text-[11px] leading-4 text-[#6b6b6b]">
                            {type.hint}
                          </span>
                        </span>
                      </button>
                    )
                  })}
                </div>

                {previewUrl ? (
                  <div className="mt-3 flex items-center gap-3 rounded-[10px] border border-black/10 bg-white p-3">
                    <div className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-md bg-[#f5f4ef]">
                      <img className="max-h-full max-w-full object-contain" src={previewUrl} alt="" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-[13px] font-medium">{fileName}</div>
                      <div className="mt-0.5 text-[11.5px] text-[#1A6E47]">Upload ready</div>
                    </div>
                    <Button variant="outline" size="sm" onClick={clearUpload}>
                      Replace
                    </Button>
                  </div>
                ) : (
                  <label className="mt-3 flex min-h-[132px] cursor-pointer flex-col items-center justify-center gap-1.5 rounded-[10px] border border-dashed border-black/20 bg-white p-6 text-center transition hover:bg-[#f5f4ef]">
                    <span className="mb-1 flex size-9 items-center justify-center rounded-full bg-[#f5f4ef]">
                      <Upload className="size-4.5 text-[#6b6b6b]" />
                    </span>
                    <span className="text-[13px] font-medium">{hint.main}</span>
                    <span className="text-[11.5px] text-[#9a9a9a]">{hint.hint}</span>
                    <input
                      className="hidden"
                      type="file"
                      accept="image/png,image/jpeg,image/webp"
                      onChange={(event) => {
                        const file = event.currentTarget.files?.[0]
                        if (file) handleFile(file)
                      }}
                    />
                  </label>
                )}

                <div className="mt-4 flex items-center justify-between gap-3 border-t border-black/10 pt-3.5">
                  <span className="text-[12.5px] text-[#6b6b6b]">
                    {previewUrl ? "Looks good." : "Add an image to continue."}
                  </span>
                  <Button disabled={!canAdvance} onClick={() => setStep(2)}>
                    Next: Pick scenes
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h1 className="text-xl font-medium tracking-[-0.015em]">{hint.title}</h1>
                    <p className="mt-1 text-[13px] leading-5 text-[#6b6b6b]">
                      Each scene becomes one mockup. Pick quickly here, or open the larger browser to scan the full launch library.
                    </p>
                  </div>
                  <span className="shrink-0 pt-1 text-[13px]">
                    <strong className="font-medium text-[#1a1a1a]">{selected.size}</strong>
                    <span className="text-[#9a9a9a]"> selected</span>
                  </span>
                </div>

                <div className="mt-4 rounded-[10px] border border-black/10 bg-white p-3">
                  <div className="flex items-center gap-2 pb-2">
                    <div className="flex min-w-0 flex-1 gap-1.5 overflow-x-auto">
                      {group.categories.map((category) => {
                        const active = category === activeCategory
                        return (
                          <button
                            className={cn(
                              "inline-flex shrink-0 items-center gap-1 rounded-full border px-3 py-1.5 text-xs transition",
                              active
                                ? "border-[#1a1a1a] bg-[#1a1a1a] text-white"
                                : "border-black/10 bg-transparent text-[#6b6b6b] hover:bg-[#f5f4ef]"
                            )}
                            key={category}
                            type="button"
                            onClick={() => setActiveCategory(category)}
                          >
                            {category === "Video" && <Play className="size-3 fill-current" />}
                            {category}
                          </button>
                        )
                      })}
                    </div>
                    <Button
                      className="size-8 shrink-0"
                      size="icon"
                      title="Expand scene browser"
                      type="button"
                      variant="outline"
                      onClick={() => setPresetPickerOpen(true)}
                    >
                      <Maximize2 className="size-3.5" />
                    </Button>
                  </div>
                  <div className="mt-1 grid max-h-[350px] grid-cols-[repeat(auto-fill,minmax(122px,1fr))] gap-2 overflow-y-auto pr-1 sm:grid-cols-[repeat(auto-fill,minmax(140px,1fr))]">
                    {filteredPresets.map((preset) => (
                      <PresetCard
                        compact
                        key={preset.id}
                        preset={preset}
                        selected={selected.has(preset.id)}
                        onToggle={togglePreset}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-3 rounded-[10px] border border-black/10 bg-[#faf9f5] p-3">
                  <div className="flex items-baseline justify-between gap-3">
                    <label className="text-[12px] font-medium text-[#1a1a1a]" htmlFor="custom-direction">
                      Optional direction
                    </label>
                    <span className="text-[10.5px] text-[#9a9a9a]">Applies to selected scenes</span>
                  </div>
                  <textarea
                    className="mt-2 min-h-[58px] w-full resize-none rounded-md border border-black/10 bg-white px-3 py-2 text-[12.5px] leading-5 outline-none transition placeholder:text-[#b8b8b8] focus:border-black/25 focus:ring-3 focus:ring-black/5 disabled:cursor-not-allowed disabled:opacity-60"
                    disabled={generating}
                    id="custom-direction"
                    maxLength={240}
                    placeholder="e.g. make the mug red, use a darker background, add holiday styling"
                    value={customDirection}
                    onChange={(event) => setCustomDirection(event.target.value)}
                  />
                </div>

                <div className="mt-4 flex flex-col gap-3 border-t border-black/10 pt-3.5 sm:flex-row sm:items-center">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <span className="flex-1 text-center text-[12.5px]">
                    {selected.size === 0 ? (
                      <span className="text-[#6b6b6b]">Pick at least one scene.</span>
                    ) : apiKey ? (
                      <span className="text-[#1A6E47]">
                        Ready to generate {selected.size} scene{selected.size === 1 ? "" : "s"}.
                      </span>
                    ) : (
                      <span className="text-[#BA7517]">fal.ai key required.</span>
                    )}
                  </span>
                  <Button className="h-10 px-5" disabled={!canGenerate} onClick={generateMockups}>
                    {generating ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        Generating
                      </>
                    ) : selected.size ? (
                      `Generate ${selected.size} mockup${selected.size === 1 ? "" : "s"}`
                    ) : (
                      "Generate"
                    )}
                  </Button>
                </div>
              </>
            )}
          </div>
        </section>

        <aside className="min-w-0 lg:sticky lg:top-[86px]">
          <section className="rounded-xl border border-black/10 bg-white p-4.5 sm:p-[18px]">
            <div className="mb-3 flex items-baseline justify-between">
              <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-[#6b6b6b]">
                Results
              </span>
              <span className="text-[11.5px] text-[#9a9a9a]">
                {results.length > 0
                  ? `${results.filter((result) => result.status === "done").length} / ${results.length} ready`
                  : selectedPresets.length > 0
                    ? `${selectedPresets.length} selected`
                    : ""}
              </span>
            </div>

            {selectedPresets.length === 0 && results.length === 0 ? (
              <div className="flex min-h-[260px] flex-col items-center justify-center rounded-lg border border-dashed border-black/15 px-4 text-center">
                <Download className="size-8 text-[#c8c8c8]" />
                <span className="mt-2 text-xs text-[#9a9a9a]">Pick scenes to preview</span>
                <span className="mt-0.5 text-[11px] text-[#b8b8b8]">
                  Mockups appear here once you hit Generate
                </span>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                {(results.length > 0 ? results : selectedPresets).map((result) => (
                  <ResultTile
                    editing={editingResultId === result.id}
                    key={result.id}
                    result={result}
                    onEdit={openEditResult}
                    onView={setPreviewItem}
                  />
                ))}
              </div>
            )}

          </section>
        </aside>
      </main>
      )}

      <Dialog open={Boolean(previewItem)} onOpenChange={(open) => !open && setPreviewItem(null)}>
        <DialogContent className="w-[calc(100vw-32px)] max-w-none p-4 sm:w-[min(1120px,calc(100vw-64px))] sm:p-5">
          <DialogHeader>
            <DialogTitle>{previewItem?.name ?? "Preview"}</DialogTitle>
          </DialogHeader>
          {previewItem && (
            <div className="flex h-[min(78vh,820px)] items-center justify-center overflow-hidden rounded-lg border border-black/10 bg-[#f5f4ef]">
              {previewItem.mediaType === "video" ? (
                <video className="h-full w-full object-contain" src={previewItem.mediaUrl} controls autoPlay loop muted playsInline />
              ) : (
                <img className="h-full w-full object-contain" src={previewItem.mediaUrl} alt={previewItem.name} />
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={presetPickerOpen} onOpenChange={setPresetPickerOpen}>
        <DialogContent className="min-h-0 h-[calc(100vh-24px)] w-[calc(100vw-24px)] !max-w-none gap-0 overflow-hidden p-0 sm:h-[calc(100vh-48px)] sm:w-[calc(100vw-48px)] sm:!max-w-none">
          <PresetPickerWorkspace
            activeCategory={activeCategory}
            categories={group.categories}
            filteredPresets={filteredPresets}
            selected={selected}
            selectedCount={selected.size}
            title={hint.title}
            totalCount={group.items.length}
            onCategoryChange={setActiveCategory}
            onDone={() => setPresetPickerOpen(false)}
            onTogglePreset={togglePreset}
          />
        </DialogContent>
      </Dialog>

      <Dialog open={Boolean(editTarget)} onOpenChange={(open) => !open && setEditTarget(null)}>
        <DialogContent className="max-w-[460px] p-6">
          <DialogHeader>
            <DialogTitle>Edit result</DialogTitle>
            <DialogDescription>
              Send this image back to Nano Banana with a short instruction.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-2">
            <label className="text-xs text-muted-foreground" htmlFor="result-edit-prompt">
              Edit instruction
            </label>
            <textarea
              className="min-h-[96px] w-full resize-none rounded-md border border-black/10 bg-white px-3 py-2 text-[13px] leading-5 outline-none transition placeholder:text-[#b8b8b8] focus:border-black/25 focus:ring-3 focus:ring-black/5 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={Boolean(editingResultId)}
              id="result-edit-prompt"
              maxLength={300}
              placeholder="e.g. make the mug red, remove the shadow, use a darker background"
              value={editPrompt}
              onChange={(event) => setEditPrompt(event.target.value)}
            />
          </div>
          <DialogFooter>
            <Button disabled={!editPrompt.trim() || Boolean(editingResultId)} onClick={editResult}>
              {editingResultId ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Editing
                </>
              ) : (
                "Apply edit"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <footer className="mx-auto flex w-full max-w-[1180px] flex-col gap-2 border-t border-black/10 px-4 py-5 text-xs text-[#9a9a9a] sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span>
          Made with <span className="text-[#1a1a1a]">❤︎</span> in Belgium countryside by{" "}
          <a className="border-b border-black/25 pb-px text-[#1a1a1a]" href="https://dezygn.com" target="_blank" rel="noreferrer">
            Dezygn
          </a>
        </span>
        <a className="text-[#1a1a1a]" href="mailto:support@youzign.com">
          Contact
        </a>
      </footer>
    </div>
  )
}

function SalesPage({ onNavigate }: { onNavigate: (path: string) => void }) {
  const featured = [
    presets.logo.items[0],
    presets.logo.items[10],
    presets.screenshot.items[0],
    presets.product.items[0],
    presets.product.items[8],
    presets.screenshot.items[7],
  ].filter(Boolean)

  return (
    <div className="min-h-screen bg-[#faf9f5] text-[#1a1a1a]">
      <header className="sticky top-0 z-40 border-b border-black/10 bg-[#faf9f5]/85 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between px-4 py-3 sm:px-8">
          <button className="flex items-center gap-2.5" type="button" onClick={() => onNavigate("/")}>
            <span className="flex size-7 items-center justify-center">
              <img className="size-6" src="/logo-mark.svg" alt="" />
            </span>
            <span className="text-[15px] font-medium tracking-[-0.005em]">Mockstack</span>
          </button>
          <div className="flex items-center gap-2">
            <Button nativeButton={false} render={<a href={checkoutUrl} />}>
              Get Mockstack
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto grid min-h-[calc(100vh-66px)] w-full max-w-[1180px] items-center gap-8 px-4 py-10 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:py-14">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs text-[#6b6b6b]">
              <Sparkles className="size-3.5 text-[#1a1a1a]" />
              Lifetime launch access
            </div>
            <h1 className="max-w-[720px] text-[44px] font-medium leading-[0.98] tracking-[-0.035em] sm:text-[64px]">
              Bring your own API key. Generate mockups at cost.
            </h1>
            <p className="mt-5 max-w-[560px] text-lg leading-8 text-[#565656]">
              Upload a logo, screenshot, or product photo. Mockstack turns it into polished image and video mockups using your own API keys, with no usage markup and no monthly fee.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button className="h-11 px-5 text-[15px]" nativeButton={false} render={<a href={checkoutUrl} />}>
                YES - Get Mockstack lifetime
                <ArrowRight className="size-4" />
              </Button>
            </div>
            <div className="mt-5 grid gap-2 text-sm text-[#565656] sm:grid-cols-3">
              <ValuePill icon={BadgeCheck} label="Logo mockups" />
              <ValuePill icon={Monitor} label="Screenshot mockups" />
              <ValuePill icon={Box} label="Product contexts" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {featured.map((preset) => (
              <div className="rounded-[10px] border border-black/10 bg-white p-1.5 shadow-sm" key={preset.id}>
                <div className="relative aspect-square overflow-hidden rounded-md bg-[#f5f4ef]">
                  {preset.thumbnail ? (
                    <img className="h-full w-full object-cover" src={preset.thumbnail} alt="" />
                  ) : (
                    <div className="h-full w-full" style={{ background: preset.color }} />
                  )}
                </div>
                <div className="truncate px-1 pb-1 pt-2 text-[12px] text-[#6b6b6b]">{preset.name}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-black/10 bg-white">
          <div className="mx-auto grid w-full max-w-[1180px] gap-0 px-4 sm:px-8 lg:grid-cols-3">
            <FeatureBlock
              icon={KeyRound}
              title="BYOK fal.ai"
              copy="Bring your own fal.ai key and pay AI's actual generation cost directly. Mockstack does not mark up image or video usage."
            />
            <FeatureBlock
              icon={CreditCard}
              title="One payment"
              copy="Lifetime access, no monthly mockup subscription. Built for a focused test launch."
            />
            <FeatureBlock
              icon={ShieldCheck}
              title="Private by default"
              copy="Your fal.ai key is saved only in your browser local storage. It is never stored on Mockstack servers."
            />
          </div>
        </section>

        <section className="mx-auto w-full max-w-[900px] px-4 py-16 text-center sm:px-8">
          <h2 className="text-3xl font-medium tracking-[-0.025em] sm:text-4xl">
            If you can drag a file, you can run Mockstack.
          </h2>
          <p className="mx-auto mt-4 max-w-[680px] text-base leading-7 text-[#565656]">
            Drop a logo, screenshot, or product photo. Pick scenes from the launch preset library. Generate polished mockups through your own fal.ai account and save the results locally in your browser.
          </p>
          <div className="mt-7">
            <Button className="h-11 px-5 text-[15px]" nativeButton={false} render={<a href={checkoutUrl} />}>
              Get lifetime access
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}

function SpecialPage() {
  return (
    <iframe
      className="block h-screen w-full border-0 bg-white"
      src="/special.html"
      title="Mockstack special offer"
    />
  )
}

function ThankYouPage({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <div className="min-h-screen bg-[#faf9f5] text-[#1a1a1a]">
      <main className="mx-auto flex min-h-screen w-full max-w-[860px] flex-col justify-center px-4 py-10 sm:px-8">
        <div className="mb-6 flex items-center gap-2.5">
          <img className="size-7" src="/logo-mark.svg" alt="" />
          <span className="text-[15px] font-medium">Mockstack</span>
        </div>
        <section className="rounded-xl border border-black/10 bg-white p-6 sm:p-8">
          <div className="inline-flex size-11 items-center justify-center rounded-full bg-[#1A6E47]/10 text-[#1A6E47]">
            <Check className="size-5" />
          </div>
          <h1 className="mt-5 text-3xl font-medium tracking-[-0.025em] sm:text-5xl">
            You are in.
          </h1>
          <p className="mt-4 max-w-[640px] text-base leading-7 text-[#565656]">
            Mockstack runs as a hosted web app. Open the app, add your fal.ai API key, upload a logo, screenshot, or product photo, then choose scenes and generate.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <StepCard number="1" title="Open the app" copy="Bookmark it so you do not have to hunt for the link later." />
            <StepCard number="2" title="Add fal.ai" copy="Paste your own key. It stays in this browser, never on our servers." />
            <StepCard number="3" title="Generate" copy="Pick presets, create mockups, and download your finished assets." />
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button className="h-11 px-5 text-[15px]" onClick={() => onNavigate("/app")}>
              Open Mockstack
              <ArrowRight className="size-4" />
            </Button>
            <Button
              className="h-11 px-5 text-[15px]"
              nativeButton={false}
              variant="outline"
              render={<a href="https://fal.ai/dashboard/keys" target="_blank" rel="noreferrer" />}
            >
              Get fal.ai key
              <ExternalLink className="size-4" />
            </Button>
          </div>

          <div className="mt-6 rounded-lg border border-[#BA7517]/20 bg-[#BA7517]/8 p-4 text-sm leading-6 text-[#68430f]">
            Tip: install Mockstack from your browser menu when prompted, or bookmark `/app`. It behaves like an app, but your settings and library are stored locally in this browser.
          </div>
        </section>
      </main>
    </div>
  )
}

function ValuePill({ icon: Icon, label }: { icon: typeof BadgeCheck; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2">
      <Icon className="size-4 text-[#1a1a1a]" />
      {label}
    </span>
  )
}

function FeatureBlock({ icon: Icon, title, copy }: { icon: typeof BadgeCheck; title: string; copy: string }) {
  return (
    <div className="border-black/10 py-8 lg:border-r lg:px-7 lg:last:border-r-0">
      <Icon className="size-5 text-[#1a1a1a]" />
      <h2 className="mt-4 text-lg font-medium tracking-[-0.015em]">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-[#6b6b6b]">{copy}</p>
    </div>
  )
}

function TutorialVideo({
  embedUrl,
  title,
  url,
}: {
  embedUrl: string
  title: string
  url: string
}) {
  return (
    <div>
      <div className="aspect-video overflow-hidden rounded-lg border border-black/10 bg-[#f5f4ef]">
        <iframe
          className="h-full w-full"
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <a className="mt-2 inline-block underline underline-offset-4" href={url} target="_blank" rel="noreferrer">
        Open on YouTube
      </a>
    </div>
  )
}

function StepCard({ number, title, copy }: { number: string; title: string; copy: string }) {
  return (
    <div className="rounded-[10px] border border-black/10 bg-[#faf9f5] p-4">
      <div className="flex size-7 items-center justify-center rounded-full bg-[#1a1a1a] text-xs font-medium text-white">
        {number}
      </div>
      <h2 className="mt-3 text-sm font-medium">{title}</h2>
      <p className="mt-1 text-xs leading-5 text-[#6b6b6b]">{copy}</p>
    </div>
  )
}

function PresetPickerWorkspace({
  activeCategory,
  categories,
  filteredPresets,
  selected,
  selectedCount,
  title,
  totalCount,
  onCategoryChange,
  onDone,
  onTogglePreset,
}: {
  activeCategory: string
  categories: string[]
  filteredPresets: Preset[]
  selected: Set<string>
  selectedCount: number
  title: string
  totalCount: number
  onCategoryChange: (category: string) => void
  onDone: () => void
  onTogglePreset: (id: string) => void
}) {
  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden bg-[#faf9f5]">
      <div className="shrink-0 border-b border-black/10 bg-white px-5 py-4 sm:px-6">
        <div className="flex flex-col gap-3 pr-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <DialogTitle className="text-xl leading-6 tracking-[-0.015em]">{title}</DialogTitle>
            <DialogDescription className="mt-1 text-[13px]">
              Browse {totalCount} launch presets. Each selected scene becomes one generated mockup.
            </DialogDescription>
          </div>
          <div className="text-left text-[13px] sm:text-right">
            <strong className="font-medium text-[#1a1a1a]">{selectedCount}</strong>
            <span className="text-[#9a9a9a]"> selected</span>
          </div>
        </div>
      </div>

      <div className="shrink-0 border-b border-black/10 bg-white px-5 py-3 sm:px-6">
        <div className="flex gap-1.5 overflow-x-auto pb-1">
          {categories.map((category) => {
            const active = category === activeCategory
            return (
              <button
                className={cn(
                  "inline-flex shrink-0 items-center gap-1 rounded-full border px-3 py-1.5 text-xs transition",
                  active
                    ? "border-[#1a1a1a] bg-[#1a1a1a] text-white"
                    : "border-black/10 bg-transparent text-[#6b6b6b] hover:bg-[#f5f4ef]"
                )}
                key={category}
                type="button"
                onClick={() => onCategoryChange(category)}
              >
                {category === "Video" && <Play className="size-3 fill-current" />}
                {category}
              </button>
            )
          })}
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-6">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(156px,1fr))] gap-3 sm:grid-cols-[repeat(auto-fill,minmax(178px,1fr))]">
          {filteredPresets.map((preset) => (
            <PresetCard
              key={preset.id}
              preset={preset}
              selected={selected.has(preset.id)}
              onToggle={onTogglePreset}
            />
          ))}
        </div>
      </div>

      <div className="flex shrink-0 flex-col gap-3 border-t border-black/10 bg-white px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <span className="text-[12.5px] text-[#6b6b6b]">
          {selectedCount === 0 ? "Pick at least one scene to generate." : `${selectedCount} scene${selectedCount === 1 ? "" : "s"} ready.`}
        </span>
        <Button className="h-9 px-5" type="button" onClick={onDone}>
          Done
        </Button>
      </div>
    </div>
  )
}

function PresetCard({
  compact = false,
  preset,
  selected,
  onToggle,
}: {
  compact?: boolean
  preset: Preset
  selected: boolean
  onToggle: (id: string) => void
}) {
  return (
    <button
      className={cn(
        "relative rounded-[10px] border bg-white text-left transition hover:-translate-y-px hover:border-black/20",
        compact ? "p-1" : "p-1.5",
        selected
          ? "border-[#1a1a1a] shadow-[0_0_0_1px_#1a1a1a]"
          : "border-black/10"
      )}
      type="button"
      onClick={() => onToggle(preset.id)}
    >
      <span
        className="relative flex aspect-square items-center justify-center overflow-hidden rounded-md"
        style={{
          background: preset.color,
          border: preset.border ? "1px solid rgba(0,0,0,0.08)" : undefined,
        }}
      >
        {preset.thumbnail ? (
          <img
            className="h-full w-full object-cover"
            src={preset.thumbnail}
            alt=""
            loading="lazy"
          />
        ) : (
          <>
            <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(0,0,0,0.06))]" />
            <span
              className="size-[44%] rounded shadow-sm"
              style={{ background: contrastBlock(preset.color) }}
            />
          </>
        )}
        {preset.video && (
          <span className="absolute bottom-1.5 left-1.5 flex size-5 items-center justify-center rounded-full bg-black/55">
            <Play className="size-2.5 fill-white text-white" />
          </span>
        )}
        <span className="absolute left-2 top-2 rounded-full bg-white/85 px-2 py-0.5 text-[9px] font-medium uppercase tracking-[0.04em] text-[#6b6b6b] shadow-sm backdrop-blur-sm">
          {preset.category}
        </span>
        {selected && (
          <span className="absolute right-2 top-2 flex size-5 items-center justify-center rounded-full bg-[#1a1a1a] text-white">
            <Check className="size-3" />
          </span>
        )}
      </span>
      <span className={cn("block px-1 pb-0.5", compact ? "pt-1" : "pt-1.5")}>
        <span className={cn("block truncate leading-4 text-[#1a1a1a]", compact ? "text-[11.5px]" : "text-[12px]")}>
          {preset.name}
        </span>
      </span>
    </button>
  )
}

function WizardButton({
  active,
  complete,
  count,
  disabled,
  label,
  onClick,
  step,
}: {
  active: boolean
  complete: boolean
  count?: number
  disabled?: boolean
  label: string
  onClick: () => void
  step: 1 | 2
}) {
  return (
    <button
      className={cn(
        "inline-flex items-center gap-2 rounded-full py-1.5 pl-1.5 pr-3.5 text-[13px] font-medium transition",
        active ? "bg-[#f5f4ef] text-[#1a1a1a]" : "text-[#6b6b6b]",
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
      )}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      <span
        className={cn(
          "flex size-[22px] items-center justify-center rounded-full text-[11px]",
          active || complete ? "bg-[#1a1a1a] text-white" : "border border-black/20 text-[#9a9a9a]"
        )}
      >
        {complete && !active ? <Check className="size-2.5" /> : step}
      </span>
      {label}
      {step === 2 && Boolean(count) && (
        <span className="ml-0.5 rounded-full bg-[#1a1a1a] px-1.5 py-px text-[10.5px] text-white">
          {count}
        </span>
      )}
    </button>
  )
}

function LibraryView({
  items,
  onClear,
  onRemove,
}: {
  items: LibraryItem[]
  onClear: () => void
  onRemove: (id: string) => void
}) {
  return (
    <main className="mx-auto w-full max-w-[1180px] flex-1 px-4 py-6 sm:px-8">
      <section className="rounded-xl border border-black/10 bg-white p-5 sm:p-6">
        <div className="flex flex-col gap-3 border-b border-black/10 pb-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Images className="size-4 text-[#6b6b6b]" />
              <h1 className="text-xl font-medium tracking-[-0.015em]">Library</h1>
            </div>
            <p className="mt-1 text-[13px] leading-5 text-[#6b6b6b]">
              Recent mockups saved in this browser.
            </p>
          </div>
          {items.length > 0 && (
            <Button variant="outline" size="sm" onClick={onClear}>
              Clear library
            </Button>
          )}
        </div>

        {items.length === 0 ? (
          <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
            <div className="flex size-11 items-center justify-center rounded-full bg-[#f5f4ef]">
              <Images className="size-5 text-[#9a9a9a]" />
            </div>
            <h2 className="mt-3 text-sm font-medium">No saved mockups yet</h2>
            <p className="mt-1 max-w-[320px] text-xs leading-5 text-[#9a9a9a]">
              Finished generations will appear here automatically on this browser.
            </p>
          </div>
        ) : (
          <div className="mt-5 grid grid-cols-[repeat(auto-fill,minmax(190px,1fr))] gap-4">
            {items.map((item) => (
              <LibraryCard key={item.id} item={item} onRemove={onRemove} />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

function LibraryCard({
  item,
  onRemove,
}: {
  item: LibraryItem
  onRemove: (id: string) => void
}) {
  return (
    <article className="min-w-0 rounded-[10px] border border-black/10 bg-white p-1.5">
      <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-md border border-black/10 bg-[#f5f4ef]">
        {item.mediaType === "video" ? (
          <video className="h-full w-full object-cover" src={item.mediaUrl} controls loop muted playsInline />
        ) : (
          <img className="h-full w-full object-cover" src={item.mediaUrl} alt={item.presetName} />
        )}
        <span className="absolute left-2 top-2 rounded-full bg-white/85 px-2 py-0.5 text-[9px] font-medium uppercase tracking-[0.04em] text-[#6b6b6b] shadow-sm backdrop-blur-sm">
          {item.mediaType}
        </span>
      </div>
      <div className="px-1 pb-1 pt-2">
        <div className="truncate text-[12px] font-medium leading-4 text-[#1a1a1a]">{item.presetName}</div>
        <div className="mt-0.5 flex items-center justify-between gap-2 text-[11px] text-[#9a9a9a]">
          <span className="truncate">{formatLibraryDate(item.createdAt)}</span>
          <span className="shrink-0 capitalize">{item.inputType}</span>
        </div>
        <div className="mt-2 grid grid-cols-3 gap-1.5">
          <Button
            className="h-8"
            size="icon"
            title={`Download ${item.presetName}`}
            type="button"
            variant="outline"
            onClick={() =>
              downloadMedia(
                item.mediaUrl,
                `${item.presetId}.${item.mediaType === "video" ? "mp4" : "png"}`
              )
            }
          >
            <Download className="size-3.5" />
          </Button>
          <a
            className="group/button inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-input bg-background text-sm font-medium whitespace-nowrap transition-all outline-none select-none hover:bg-accent hover:text-accent-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px"
            href={item.mediaUrl}
            rel="noreferrer"
            target="_blank"
            title={`Open ${item.presetName}`}
          >
            <ExternalLink className="size-3.5" />
          </a>
          <Button
            className="h-8"
            size="icon"
            title={`Remove ${item.presetName}`}
            type="button"
            variant="outline"
            onClick={() => onRemove(item.id)}
          >
            <Trash2 className="size-3.5" />
          </Button>
        </div>
      </div>
    </article>
  )
}

function ResultTile({
  editing,
  result,
  onEdit,
  onView,
}: {
  editing: boolean
  result: Preset | Result
  onEdit: (result: Result) => void
  onView: (item: PreviewItem) => void
}) {
  const status = "status" in result ? result.status : "pending"
  const imageUrl = "imageUrl" in result ? result.imageUrl : undefined
  const videoUrl = "videoUrl" in result ? result.videoUrl : undefined
  const error = "error" in result ? result.error : undefined
  const mediaUrl = imageUrl ?? videoUrl
  const canEdit = status === "done" && Boolean(imageUrl) && "status" in result

  return (
    <div className="min-w-0">
      <div
        className={cn(
          "relative flex aspect-square items-center justify-center overflow-hidden rounded-lg",
          status === "done" ? "border border-black/10" : "border border-dashed border-black/15 bg-[#f5f4ef]"
        )}
        style={status === "done" && !imageUrl && !videoUrl ? { background: result.color } : undefined}
      >
        {status === "pending" && (
          <span className="text-[11px] uppercase tracking-[0.06em] text-[#9a9a9a]">selected</span>
        )}
        {status === "queued" && (
          <span className="text-[11px] uppercase tracking-[0.06em] text-[#9a9a9a]">queued</span>
        )}
        {status === "uploading" && (
          <MockstackLoader dwellMs={2400} messages={uploadLoaderMessages} />
        )}
        {status === "generating" && (
          <MockstackLoader dwellMs={6000} messages={generateLoaderMessages} />
        )}
        {status === "done" && imageUrl && (
          <img className="h-full w-full object-cover" src={imageUrl} alt={result.name} />
        )}
        {status === "done" && videoUrl && (
          <video className="h-full w-full object-cover" src={videoUrl} controls loop muted playsInline />
        )}
        {status === "done" && !imageUrl && !videoUrl && (
          <span className="flex size-[55%] items-center justify-center rounded bg-white/55">
            {result.video && <Play className="size-3 fill-white text-white" />}
          </span>
        )}
        {status === "error" && (
          <span className="px-2 text-center text-[10px] leading-4 text-red-700">{error}</span>
        )}
        {status === "done" && mediaUrl && (
          <div className="absolute right-2 top-2 flex gap-1.5">
            <Button
              className="size-8 border-black/10 bg-white/90 text-[#1a1a1a] shadow-sm backdrop-blur-sm hover:bg-white"
              size="icon"
              title={`View ${result.name}`}
              type="button"
              variant="outline"
              onClick={() =>
                onView({
                  name: result.name,
                  mediaType: videoUrl ? "video" : "image",
                  mediaUrl,
                })
              }
            >
              <Eye className="size-3.5" />
            </Button>
            {canEdit && (
              <Button
                className="size-8 border-black/10 bg-white/90 text-[#1a1a1a] shadow-sm backdrop-blur-sm hover:bg-white"
                disabled={editing}
                size="icon"
                title={`Edit ${result.name}`}
                type="button"
                variant="outline"
                onClick={() => onEdit(result)}
              >
                {editing ? <Loader2 className="size-3.5 animate-spin" /> : <Pencil className="size-3.5" />}
              </Button>
            )}
            <Button
              className="size-8 border-black/10 bg-white/90 text-[#1a1a1a] shadow-sm backdrop-blur-sm hover:bg-white"
              size="icon"
              title={`Download ${result.name}`}
              type="button"
              variant="outline"
              onClick={() =>
                downloadMedia(
                  mediaUrl,
                  `${result.id}.${videoUrl ? "mp4" : "png"}`
                )
              }
            >
              <Download className="size-3.5" />
            </Button>
          </div>
        )}
      </div>
      <div className="mt-1.5 truncate text-xs text-[#6b6b6b]">{result.name}</div>
    </div>
  )
}

function MockstackLoader({ dwellMs = 6000, messages }: { dwellMs?: number; messages: string[] }) {
  const [messageIndex, setMessageIndex] = useState(0)
  const label = messages[messageIndex] ?? messages[0] ?? "Generating..."

  useEffect(() => {
    if (messages.length <= 1) return

    const interval = window.setInterval(() => {
      setMessageIndex((current) => Math.min(current + 1, messages.length - 1))
    }, dwellMs)

    return () => window.clearInterval(interval)
  }, [dwellMs, messages])

  return (
    <div className="flex flex-col items-center gap-2 text-center" role="status" aria-label={label}>
      <svg className="mockstack-loader-logo" viewBox="0 0 64 64" aria-hidden="true">
        <rect className="mockstack-loader-bar mockstack-loader-bar-top" x="10" y="14" width="32" height="10" rx="2" />
        <rect className="mockstack-loader-bar mockstack-loader-bar-mid" x="16" y="27" width="32" height="10" rx="2" />
        <rect className="mockstack-loader-bar mockstack-loader-bar-low" x="22" y="40" width="32" height="10" rx="2" />
      </svg>
      <span className="text-[10px] uppercase tracking-[0.06em] text-[#9a9a9a]">{label}</span>
    </div>
  )
}

function buildPresetPrompt(basePrompt: string, customDirection: string) {
  const direction = customDirection.trim()
  if (!direction) return basePrompt

  return `${basePrompt}

User direction: ${direction}
Respect this direction unless it conflicts with the selected mockup context or accurate preservation of the uploaded image.`
}

function buildEditPrompt(editInstruction: string) {
  return `Edit the uploaded mockup image with this instruction: ${editInstruction.trim()}

Preserve the core mockup composition, product placement, perspective, and brand/logo details unless the instruction explicitly asks to change them. Return a polished final mockup image.`
}

async function downloadMedia(mediaUrl: string, fileName: string) {
  const fallbackWindow = window.open("about:blank", "_blank")
  if (fallbackWindow) fallbackWindow.opener = null

  try {
    const response = await fetch(mediaUrl)
    if (!response.ok) throw new Error("Download failed")

    const blob = await response.blob()
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    link.remove()
    URL.revokeObjectURL(url)
    fallbackWindow?.close()
  } catch {
    if (fallbackWindow) fallbackWindow.location.href = mediaUrl
    else window.location.href = mediaUrl
  }
}

function readLibraryItems(): LibraryItem[] {
  try {
    const raw = localStorage.getItem(libraryStorageKey)
    if (!raw) return []

    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []

    return parsed.filter(isLibraryItem)
  } catch {
    return []
  }
}

function writeLibraryItems(items: LibraryItem[]) {
  localStorage.setItem(libraryStorageKey, JSON.stringify(items))
}

function isLibraryItem(item: unknown): item is LibraryItem {
  if (!item || typeof item !== "object") return false
  const candidate = item as Partial<LibraryItem>

  return (
    typeof candidate.id === "string" &&
    typeof candidate.presetId === "string" &&
    typeof candidate.presetName === "string" &&
    typeof candidate.mediaUrl === "string" &&
    (candidate.mediaType === "image" || candidate.mediaType === "video") &&
    typeof candidate.createdAt === "string"
  )
}

function formatLibraryDate(value: string) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return "Saved locally"

  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(date)
}

function getRoute(pathname: string): Route {
  if (pathname === "/app") return "app"
  if (pathname === "/" || pathname === "/special") return "special"
  if (pathname === "/sales") return "sales"
  if (pathname === "/thank-you") return "thanks"
  return "special"
}

function contrastBlock(hex: string) {
  const color = hex.replace("#", "")
  const r = parseInt(color.substring(0, 2), 16)
  const g = parseInt(color.substring(2, 4), 16)
  const b = parseInt(color.substring(4, 6), 16)
  const luma = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luma > 0.55 ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.6)"
}

export default App
