import type { TreeRunner } from "@core/application/ports/TreeRunner"
import { WebWorkerTreeRunner } from "@core/adapters/webworker/impl/WebWorkerTreeRunner"

// dependency injection
export const treeUseCaseRunner: TreeRunner = WebWorkerTreeRunner
