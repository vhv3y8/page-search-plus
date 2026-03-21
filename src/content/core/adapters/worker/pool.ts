import WebWorker from "./webworker?worker&inline"

export function startWorkerPool() {
  const worker = new WebWorker()

  worker.postMessage("hello")
  worker.onmessage = (e) => {
    console.log("Worker로부터 응답:", e.data)
  }
}
