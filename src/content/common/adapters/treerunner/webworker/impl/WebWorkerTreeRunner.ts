// This file runs on main thread (content script).
import WebWorker from "../webworker?worker"
import type { Command } from "@core/application/dto/Command"
import type { TreeRunner } from "@common/ports/TreeRunner"

let worker: Worker | null = null

export const WebWorkerTreeRunner: TreeRunner = {
  run(command: Command) {
    // initialize worker if not set
    if (!worker) {
      worker = new WebWorker()
      worker.onmessage = (e: { data: { response: Response } }) => {
        const response = e.data.response
        // handle worker response at main
        console.log("Response from Worker:", e.data)
      }
    }

    // send command to worker
    if (command.cmd === "INITIALIZE") {
      // transfer array buffer
      worker!.postMessage({ command }, [command.treeData])
    } else {
      worker!.postMessage({ command })
    }
  }
}
