let isListeningSelect = $state(false)
let currentListeningRegion: HTMLElement | null = $state(null)

// is listening select functions
export function isListening() {
  return isListeningSelect
}
export function startListening() {
  isListeningSelect = true
}
export function endListening() {
  isListeningSelect = false
}

// current listening region functions
export function setCurrentListeningRegion(region: HTMLElement) {
  currentListeningRegion = region
}
