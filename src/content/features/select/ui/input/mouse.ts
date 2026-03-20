let timer: ReturnType<typeof setTimeout> | null = null
let lastTarget: HTMLElement | null = null

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
document.body.appendChild(overlay)

export function handleMouseMove(e: MouseEvent) {
  if (timer) clearTimeout(timer)

  timer = setTimeout(() => {
    const x = e.clientX
    const y = e.clientY

    const target = document.elementFromPoint(x, y) as HTMLElement | null

    if (
      !target ||
      target === document.body ||
      target === document.documentElement
    ) {
      overlay.style.display = "none"
      return
    }

    if (target !== lastTarget) {
      lastTarget = target

      const rect = target.getBoundingClientRect()

      overlay.style.display = "block"
      overlay.style.width = `${rect.width}px`
      overlay.style.height = `${rect.height}px`
      overlay.style.top = `${rect.top - 4 - 2}px`
      overlay.style.left = `${rect.left - 4 - 2}px`
    }

    // console.log("[target]", target, overlay)
  }, 100)
}

export function handleMouseClick() {}
