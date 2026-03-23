import { setSearchRegion } from "@features/dom/states/region.svelte"
import { getRegionTarget } from "../ui/states/listen.svelte"

export function setRegionToSearch() {
  setSearchRegion(getRegionTarget()!)
}
