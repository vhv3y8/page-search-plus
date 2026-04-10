import { createDispatcher } from "@infra/adapters/webworker/Dispatcher"
import { createTreeCommandExecutor } from "./TreeCommandBus"
import { createTreeImplFacade } from "./TreeFacade"
import { workerDevLogger } from "@infra/adapters/devlogger/webworker"
import { createJSONSerializer } from "@infra/adapters/webworker/TransferableSerializer"

workerDevLogger.log("HI FROM WEBWORKER")

const treeUseCaseFacade = createTreeImplFacade(workerDevLogger)

const serializer = createJSONSerializer(workerDevLogger)
const commandExecutor = createTreeCommandExecutor(treeUseCaseFacade)
const dispatcher = createDispatcher(
  serializer,
  commandExecutor,
  workerDevLogger
)

self.addEventListener("message", (e: MessageEvent) => {
  // workerDevLogger.log("[message]", e.data)
  dispatcher.handle(e.data)
})
