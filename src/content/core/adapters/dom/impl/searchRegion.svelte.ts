import type { DOMRegion } from "../model/DOMRegion"
import type { SearchRegionStore } from "../../../application/ports/SearchRegionStore"

// dom region to search
let searchRegion: DOMRegion | null = $state(null)

export const searchRegionStore: SearchRegionStore = {
  getSearchRegion() {
    if (!searchRegion) {
      searchRegion = document.body
    }
    return searchRegion
  },
  setSearchRegion(region: DOMRegion) {
    searchRegion = region
    return true
  }
}
