import { setSearchRegion } from "../../../core/ui/region.svelte"
import { currentListenRegion } from "../ui/states/listen.svelte"

export function setRegionToSearch() {
  if (currentListenRegion) setSearchRegion(currentListenRegion)
}
