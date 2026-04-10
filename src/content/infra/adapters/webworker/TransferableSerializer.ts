import type { DevLogger } from "@infra/ports/DevLogger"
import type { Serializer } from "@infra/ports/Transport"

export interface TransferableSerializer extends Serializer {
  serialize(payload: any): [message: any, transfer: Transferable[]]
}

export function createJSONSerializer(
  devLogger?: DevLogger
): TransferableSerializer {
  const transferableSerializer = {
    serialize(data) {
      const transfer: Transferable[] = []

      // simple transferable testing with json stringify
      const encoder = new TextEncoder()
      const uint8Array = encoder.encode(JSON.stringify(data))
      devLogger?.log("Transferable Serializer", "uint8Array", [uint8Array])
      transfer.push(uint8Array.buffer)
      devLogger?.log("Transferable Serializer", "Transferable[]", [transfer])
      return [uint8Array, transfer]

      // if typed array
      // if (data instanceof Uint8Array || data instanceof Float32Array) {
      //   devLogger?.log("Transferable Serializer", "IS TYPED ARRAY!")
      //   transfer.push(data.buffer)
      // } else if (data instanceof ArrayBuffer) {
      //   transfer.push(data)
      // }
      // return [data, transfer]
    },
    deserialize(data) {
      const decoder = new TextDecoder()
      const jsonString = decoder.decode(data)
      const parsedData = JSON.parse(jsonString)
      return parsedData
    }
  } satisfies TransferableSerializer
  return transferableSerializer
}

// proto
// export function createProtobufTransferableSerializer(
//   devLogger?: DevLogger
// ): TransferableSerializer {}

export class ProtobufSerializer implements TransferableSerializer {
  constructor(public devLogger?: DevLogger) {}

  serialize(payload: any): [message: any, transfer: Transferable[]] {
    return [payload, []]
  }
  deserialize(data: any) {}
}
