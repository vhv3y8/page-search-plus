import type { TreeRunner } from "@core/application/ports/TreeRunner"
import { WebWorkerTreeRunner } from "../core/adapters/tree/webworker/impl/WebWorkerTreeRunner"

// run tree codes at web worker
export const treeUseCaseRunner: TreeRunner = WebWorkerTreeRunner
