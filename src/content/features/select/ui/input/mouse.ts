import { getPhase } from "@core/adapters/ui/states/phase.svelte"
import { endListening, isListening } from "../states/listen.svelte"
import { setSearchRegion } from "@core/adapters/ui/states/region.svelte"
import { colors, createOverlay } from "@core/adapters/ui/overlay"

let timer: ReturnType<typeof setTimeout> | null = null
let nextRafId: ReturnType<typeof requestAnimationFrame> | null = null

// target to set to search region
let target: HTMLElement | null = null
// for immediate overlay for reactivity
let immediateTarget: HTMLElement | null = null

let mouseX = 0
let mouseY = 0

// create target overlay and append
let {
  overlayElem: targetOverlayElem,
  transitOverlay: transitTargetOverlay,
  hideOverlay: hideTargetOverlay
} = createOverlay()
document.body.appendChild(targetOverlayElem)

// create target immediate overlay and append
let {
  overlayElem: immediateOverlayElem,
  transitOverlay: transitImmediateOverlay,
  hideOverlay: hideImmediateOverlay
} = createOverlay({
  zIndex: 9998,
  borderWidth: 0,
  borderRadius: 0,
  borderColor: colors["immediateGray"].borderColor,
  backgroundColor: colors["immediateGray"].backgroundColor
})
document.body.appendChild(immediateOverlayElem)

// onmousemove
export function handleSelectMouseMove(e: MouseEvent) {
  if (getPhase() === "select") {
    mouseX = e.clientX
    mouseY = e.clientY

    // set immediateTarget
    immediateTarget = document.elementFromPoint(
      mouseX,
      mouseY
    ) as HTMLElement | null

    // set target with debounce
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      target = immediateTarget
    }, 250)

    // start loop
    if (isListening() && !nextRafId) {
      nextRafId = requestAnimationFrame(updateOverlayLoop)
    }
  }
}

// loop function
function updateOverlayLoop() {
  if (!isListening()) {
    cancelAnimationFrame(nextRafId!)
    nextRafId = null
    return
  }

  // return when immediate target is invalid
  if (
    immediateTarget === null ||
    immediateTarget === document.documentElement
  ) {
    console.log("[immediateTarget is null or html element]", immediateTarget)
    hideTargetOverlay()
    hideImmediateOverlay()

    cancelAnimationFrame(nextRafId!)
    nextRafId = null
    return
  }

  // immediate target overlay
  if (immediateTarget) {
    const rect = (immediateTarget as HTMLElement).getBoundingClientRect()
    transitImmediateOverlay(rect)
  }

  // target overlay
  if (target) {
    const rect = (target as HTMLElement).getBoundingClientRect()
    transitTargetOverlay(rect)
  }

  // run recursively
  nextRafId = requestAnimationFrame(updateOverlayLoop)
}

// onclick
export function handleSelectMouseClick() {
  if (isListening() && target) {
    endListening()
    setSearchRegion(target)

    // hideTargetOverlay()
    hideImmediateOverlay()
    console.log("[onclick] [set search region]", target)
  }
}
