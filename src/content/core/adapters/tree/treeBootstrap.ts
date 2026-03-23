// This is needed because web worker is different file entry to content script main.
// so all codes that's possible to run at web worker should be here
// it's up to composition root(`app/bootstrap.ts`) to whether run these at main thread or worker thread
import type { Command } from "@features/tree/usecases/dto/Command"

import { initializeTree } from "@features/tree/usecases/initializeTree"
import { updateTreeNode } from "@features/tree/usecases/updateTreeNode"
import { search } from "@features/tree/usecases/search"

// handle all use cases
export const treeUseCaseRegistry = {
  INITIALIZE: initializeTree,
  UPDATE_NODE: updateTreeNode,
  SEARCH: search
} satisfies Record<Command["cmd"], (...any: any) => any>

export function treeUseCaseRegistryMapper<T extends Command>(command: T) {
  return treeUseCaseRegistry[command.cmd] as (command: T) => any
}

// import all adapters
// TODO
