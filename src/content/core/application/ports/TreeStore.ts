import type { Tree } from "../../domain/entities/Tree"

export interface TreeStore {
  initializeTree(tree: Tree): boolean
  getTree(): Tree | null
}
