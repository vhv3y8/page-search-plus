import { phase, setPhase } from "../states/phase.svelte"

export function handleCoreKeydown(e: KeyboardEvent) {
  console.log("[core keydown] [e.key] ", e.key)

  switch (e.key) {
    case "f":
    case "F": {
      // Ctrl+F to start
      if (e.ctrlKey) {
        e.preventDefault()
        if (phase === "none") {
          setPhase("select")

          if (import.meta.env.MODE === "development")
            console.log("[set to select]")
        }
      }
      break
    }
    case "ESC": {
      if (phase !== "none") {
        setPhase("none")

        if (import.meta.env.MODE === "development") console.log("[set to none]")
      }
      break
    }
  }
}
