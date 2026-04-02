import type { DOMRegion } from "@core/adapters/dom/models/DOMRegion"

export interface SearchRegionStore {
  getSearchRegion(): DOMRegion
  setSearchRegion(region: DOMRegion): boolean
}
