export let isListeningSelect = $state(false)
export let currentListenRegion: HTMLElement | null = $state(null)

export function startListening() {
  isListeningSelect = true
}
export function endListening() {
  isListeningSelect = false
}
