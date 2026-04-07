import {
  convertSearchRegionToTree,
  type SearchRegion,
  type SearchRegionStore
} from "../models/SearchRegion"

// dom region to search
let searchRegion: SearchRegion = $state(document.body)

export const searchRegionStore: SearchRegionStore = {
  getSearchRegion() {
    return searchRegion
  },
  setSearchRegion(region: SearchRegion) {
    searchRegion = region
    return true
  },

  regionToTree() {
    return convertSearchRegionToTree(searchRegion)
  }
}
