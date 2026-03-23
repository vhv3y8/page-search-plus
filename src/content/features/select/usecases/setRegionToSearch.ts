import { setSearchRegion } from "@features/dom/ui/states/region.svelte"
import { getRegionTarget } from "../ui/states/listen.svelte"

export function setRegionToSearch() {
  setSearchRegion(getRegionTarget()!)
}
