let searchRegion: HTMLElement | null = $state(null)

let showRegionOverlay = $state(false)
let regionOverlayRafId: ReturnType<typeof requestAnimationFrame> | null = null

$effect.root(() => {
  $effect(() => {
    console.log("[search region updated]", searchRegion)
  })

  $effect(() => {
    if (showRegionOverlay) {
      // show overlay for serach region with rAF recursively
    }
  })
})

// search region functions
export function getSearchRegion() {
  return searchRegion
}
export function setSearchRegion(elem: HTMLElement) {
  searchRegion = elem
}

// show region overlay functions
export function isShowingRegionOverlay() {
  return showRegionOverlay
}
export function startShowingRegionOverlay() {
  showRegionOverlay = true
}
export function endShowingRegionOverlay() {
  showRegionOverlay = false
}
