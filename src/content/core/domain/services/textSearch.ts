import { SearchResult } from "../entities/SearchResult"
import type { Tree } from "../entities/Tree"

export function textSearch(tree: Tree, query: string): SearchResult {
  return new SearchResult()
}
