import type { DevLogger } from "@infra/interfaces/DevLogger"
import type { Transport } from "@infra/interfaces/Transport"
import type { TransferableSerializer } from "./TransferableSerializer"

export function createWebWorkerTransport(
  worker: Worker,
  transferableSerializer: TransferableSerializer,
  devLogger?: DevLogger
): Transport {
  // worker.onmessage =
  const transport: Transport = {
    async send(payload) {
      devLogger?.log("WebWorkerTransport", "payload", payload)
      const {
        message: serializedMessage,
        transfer: serializedMessageTransfer
      } = transferableSerializer.serialize(payload)
      devLogger?.log("Serialized Payload", serializedMessage)
      devLogger?.log(
        "Buffer Bytelength?",
        (serializedMessage["message"] as Uint8Array).buffer.byteLength
      )
      worker.postMessage(serializedMessage, serializedMessageTransfer)
      devLogger?.log(
        "Buffer Bytelength After Transfer?",
        (serializedMessage["message"] as Uint8Array).buffer.byteLength
      )
    }
  }
  return transport
}
