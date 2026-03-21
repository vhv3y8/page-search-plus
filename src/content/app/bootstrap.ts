import { startWorkerPool } from "@core/adapters/worker/pool"

export default function bootstrap() {
  // web worker pool
  startWorkerPool()
  // dependency injection
}
