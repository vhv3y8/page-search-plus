import type { DOMRegion } from "@core/adapters/dom/model/DOMRegion"

export interface SearchRegionStore {
  getSearchRegion(): DOMRegion
  setSearchRegion(region: DOMRegion): boolean
}
