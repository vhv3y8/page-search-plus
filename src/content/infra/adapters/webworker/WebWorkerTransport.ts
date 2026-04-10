import type { DevLogger } from "@infra/ports/DevLogger"
import type { Transport } from "src/content/infra/ports/Transport"
import type { TransferableSerializer } from "./TransferableSerializer"

export function createWebWorkerTransport(
  worker: Worker,
  serializer: TransferableSerializer,
  devLogger?: DevLogger
): Transport {
  // worker.onmessage =
  const transport: Transport = {
    async send(payload) {
      const serializedPayload = serializer.serialize(payload)
      devLogger?.log("Serialized Payload", serializedPayload)
      devLogger?.log(
        "Buffer Bytelength?",
        (serializedPayload[0] as Uint8Array).buffer.byteLength
      )
      worker.postMessage(...serializedPayload)
      devLogger?.log(
        "Buffer Bytelength After Transfer?",
        (serializedPayload[0] as Uint8Array).buffer.byteLength
      )
    }
  }
  return transport
}
