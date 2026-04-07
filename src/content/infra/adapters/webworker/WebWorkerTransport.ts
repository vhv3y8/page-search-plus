import type { Serializer, Transport } from "src/content/infra/ports/Transport"

// serializer
export interface WebWorkerSerializer extends Serializer {
  serialize(payload: any): [message: any, transfer: Transferable[]]
}
export function createTransferableSerializer(): WebWorkerSerializer {
  const transferableSerializer = {
    serialize(data) {
      const transfer: Transferable[] = []

      // if typed array
      if (data instanceof Uint8Array || data instanceof Float32Array) {
        transfer.push(data.buffer)
      } else if (data instanceof ArrayBuffer) {
        transfer.push(data)
      }

      return [data, transfer]
    },
    deserialize(data) {
      return data
    }
  } satisfies WebWorkerSerializer
  return transferableSerializer
}

// transport
export function createWebWorkerTransport(
  worker: Worker,
  serializer: WebWorkerSerializer
): Transport {
  // worker.onmessage =
  const transport: Transport = {
    async send(payload) {
      const serializedPayload = serializer.serialize(payload)
      worker.postMessage(...serializedPayload)
    }
  }
  return transport
}
