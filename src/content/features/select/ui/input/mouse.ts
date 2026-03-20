import { phase } from "@core/adapters/ui/states/phase.svelte"

let timer: ReturnType<typeof setTimeout> | null = null
let nextRafId: ReturnType<typeof requestAnimationFrame> | null = null
let lastTarget: HTMLElement | null = null

let mouseX = 0
let mouseY = 0

let overlayElem: HTMLElement | null = null

function createOverlayAndAppend() {
  // create overlay
  const overlay = document.createElement("div")
  overlay.style.position = "fixed"
  overlay.style.pointerEvents = "none"
  overlay.style.padding = "4px"
  overlay.style.borderRadius = "4px"
  overlay.style.border = "2px solid #007bff"
  overlay.style.backgroundColor = "rgba(0, 123, 255, 0.1)"
  overlay.style.zIndex = "9999"
  overlay.style.display = "none"
  // overlay.style.transition = "all 0.05s ease-out"

  // append
  document.body.appendChild(overlay)
  overlayElem = overlay
}

// dom content loaded
document.addEventListener("DOMContentLoaded", () => {
  createOverlayAndAppend()
})

// mousemove
export function handleSelectMouseMove(e: MouseEvent) {
  if (phase === "select") {
    mouseX = e.clientX
    mouseY = e.clientY

    nextRafId = requestAnimationFrame(updateOverlay)
  }
}

function updateOverlay() {
  // if (timer) clearTimeout(timer)
  // timer = setTimeout(() => {}, 100)

  const x = mouseX
  const y = mouseY

  const target = document.elementFromPoint(x, y) as HTMLElement | null

  if (
    !target ||
    target === document.body ||
    target === document.documentElement
  ) {
    overlayElem!.style.display = "none"
    return
  }

  if (target !== lastTarget) {
    lastTarget = target

    const rect = target.getBoundingClientRect()

    overlayElem!.style.display = "block"
    overlayElem!.style.width = `${rect.width}px`
    overlayElem!.style.height = `${rect.height}px`
    overlayElem!.style.top = `${rect.top - 4 - 2}px`
    overlayElem!.style.left = `${rect.left - 4 - 2}px`
  }

  // console.log("[target]", target, overlayElem)

  nextRafId = requestAnimationFrame(updateOverlay)
}

// click
export function handleSelectMouseClick() {}
