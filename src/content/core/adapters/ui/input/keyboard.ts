import { getPhase, setPhase } from "../states/phase.svelte"

export function handleCoreKeydown(e: KeyboardEvent) {
  switch (e.key) {
    case "f":
    case "F": {
      // Ctrl+F to start
      if (e.ctrlKey) {
        e.preventDefault()
        if (getPhase() === "none") {
          setPhase("select")

          if (import.meta.env.MODE === "development")
            console.log("[phase set to select]")
        }
      }
      break
    }
    case "Escape": {
      if (getPhase() !== "none") {
        setPhase("none")

        if (import.meta.env.MODE === "development")
          console.log("[phase set to none]")
      }
      break
    }
    default: {
      break
    }
  }
}
