import type { Tree } from "@core/domain/entities/Tree"

export type SearchRegion = HTMLElement

// convert to dto
// @ts-ignore
export function convertSearchRegionToTree(searchRegion: SearchRegion): Tree {
  // return new Tree({})
}

export interface SearchRegionStore {
  getSearchRegion(): SearchRegion
  setSearchRegion(region: SearchRegion): boolean

  regionToTree(): Tree
  [extra: string]: any
}
