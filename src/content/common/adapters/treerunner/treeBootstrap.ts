import type { Command } from "@core/application/dto/Command"
import type { TreeStore } from "@core/application/ports/TreeStore"
import { createInitializeTreeUseCase } from "@core/application/usecases/initializeTree"
import { createSearchUseCase } from "@core/application/usecases/search"
import { createUpdateTreeNodeUseCase } from "@core/application/usecases/updateTreeNode"
import { globalTreeStore } from "@core/adapters/tree/globalTreeStore"

export type TreeUseCaseRegistry = Record<Command["cmd"], (...any: any) => any>

// This is needed because web worker is different file entry to content script main.
// so all codes that's possible to run at web worker should be here
// it's up to composition root(`app/bootstrap.ts`) to whether run these at main thread or worker thread
export function runTreeBootstrap(): TreeUseCaseRegistry {
  // select output ports
  const treeStore: TreeStore = globalTreeStore

  // create use cases
  const initializeTree = createInitializeTreeUseCase(treeStore)
  const search = createSearchUseCase(treeStore)
  const updateTreeNode = createUpdateTreeNodeUseCase(treeStore)

  // create use case registry
  const treeUseCaseRegistry: TreeUseCaseRegistry = {
    INITIALIZE: initializeTree,
    SEARCH: search,
    UPDATE_NODE: updateTreeNode
  }

  return treeUseCaseRegistry
}
