import { createDispatcher } from "@infra/impls/webworker/Dispatcher"
import { createTreeCommandExecutor } from "./TreeCommandBus"
import { createTreeImplFacade } from "./TreeFacade"
import { workerDevLogger } from "@infra/impls/devlogger/webworker"
import {
  adaptTypedSerializerToTransferable
  // createJSONSerializer
} from "@infra/impls/webworker/TransferableSerializer"
import { ProtobufSerializer } from "@infra/impls/protobuf/ProtobufSerializer"
import { Tree } from "@infra/impls/protobuf/proto/Tree.proto"
import { createTreeEntityMapper } from "@infra/impls/protobuf/proto/Tree.mapper"

workerDevLogger.log("HI FROM WEBWORKER")
const testSerializer = new ProtobufSerializer(
  Tree,
  createTreeEntityMapper(workerDevLogger),
  workerDevLogger
)
workerDevLogger.log("testSerializer", testSerializer)

const treeUseCaseFacade = createTreeImplFacade(workerDevLogger)

const serializer = adaptTypedSerializerToTransferable(
  new ProtobufSerializer(
    Tree,
    createTreeEntityMapper(workerDevLogger),
    workerDevLogger
  )
)
// const serializer = createJSONSerializer(workerDevLogger)
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
