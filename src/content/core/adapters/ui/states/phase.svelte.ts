type Phase = "none" | "select" | "search" | "result"
export let phase: Phase = $state("none")

export function setPhase(phase: Phase) {
  phase = phase
}
