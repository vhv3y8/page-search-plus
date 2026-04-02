import type { DOMRegion } from "@core/adapters/dom/models/DOMRegion"

export interface DOMRegionSerializer {
  serialize(domRegion: DOMRegion): any
}
