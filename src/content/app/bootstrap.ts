import {
  handleSelectMouseClick,
  handleSelectMouseMove
} from "@features/select/ui/input/mouse"
import { WebWorkerTreeRunner } from "../common/adapters/treerunner/webworker/impl/WebWorkerTreeRunner"
import type { TreeRunner } from "../common/ports/TreeRunner"

// select infrastructure
// run tree related use cases at web worker
const treeUseCaseRunner: TreeRunner = WebWorkerTreeRunner

// input adapters
export function registerListeners() {
  // Select
  document.addEventListener("mousemove", handleSelectMouseMove)
  // to stop propagation to block click action when selecting region
  window.addEventListener("click", handleSelectMouseClick, true)

  // Search

  // Result
}
