import type { DOMRegion } from "@core/adapters/dom/models/SearchRegion"

export interface DOMRegionSerializer {
  serialize(domRegion: DOMRegion): any
}
