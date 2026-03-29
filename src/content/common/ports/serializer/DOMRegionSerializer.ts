import type { DOMRegion } from "@core/adapters/dom/model/DOMRegion"

export interface DOMRegionSerializer {
  serialize(domRegion: DOMRegion): any
}
