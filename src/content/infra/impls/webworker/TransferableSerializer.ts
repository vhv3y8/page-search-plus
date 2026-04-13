import type { DevLogger } from "@infra/interfaces/DevLogger"
import type { Serializer } from "@infra/interfaces/Serializer"

export interface TransferableSerializer extends Serializer {
  serialize(payload: any): { message: any; transfer: Transferable[] }
}

export function adaptTypedSerializerToTransferable(
  serializer: Serializer
): TransferableSerializer {
  const transferableSerializer: TransferableSerializer = {
    serialize(payload: any) {
      // add only transferables
      let transfer: Transferable[] = []
      const typedArray: { buffer: ArrayBuffer } = serializer.serialize(payload)
      return {
        message: typedArray,
        transfer: [typedArray.buffer]
      }
    },
    deserialize(data) {
      return serializer.deserialize(data)
    }
  }
  return transferableSerializer
}

// simple transferable testing with json stringify
export function createJSONSerializer(
  devLogger?: DevLogger
): TransferableSerializer {
  const transferableSerializer = {
    serialize(data) {
      const transfer: Transferable[] = []
      const encoder = new TextEncoder()
      const uint8Array = encoder.encode(JSON.stringify(data))
      devLogger?.log("Transferable Serializer", "uint8Array", [uint8Array])
      transfer.push(uint8Array.buffer)
      devLogger?.log("Transferable Serializer", "Transferable[]", [transfer])
      return {
        message: uint8Array,
        transfer
      }
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
