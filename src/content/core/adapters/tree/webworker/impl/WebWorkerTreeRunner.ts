// This file runs on main thread (content script).
import type { TreeRunner } from "@core/application/ports/TreeRunner"
import type { Command } from "@features/tree/usecases/dto/Command"

import WebWorker from "../webworker?worker"

let worker: Worker | null = null

export const WebWorkerTreeRunner: TreeRunner = {
  run(command: Command) {
    // initialize worker if not set
    if (!worker) {
      worker = new WebWorker()
      worker.onmessage = (e) => {
        console.log("Worker로부터 응답:", e.data)
      }
    }

    // send command to worker
    // if there is ArrayBuffer, add it at second parameter array to transfer
    worker!.postMessage({ command })
  }
}
