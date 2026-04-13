import type { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire"
import type { DevLogger } from "@infra/interfaces/DevLogger"
import type { Serializer } from "@infra/interfaces/Serializer"

// ts-proto
interface TsProtoCodecWrapper<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter
  decode(input: BinaryReader | Uint8Array, length?: number): T
  fromPartial(object: any): T
}

export class ProtobufSerializer<T> implements Serializer {
  constructor(
    public codec: TsProtoCodecWrapper<T>,
    public devLogger?: DevLogger
  ) {}

  serialize(payload: Partial<T>): Uint8Array {
    this.devLogger?.log("ProtobufSerializer", "serialize", "payload", payload)
    const message = this.codec.fromPartial(payload)
    this.devLogger?.log(
      "ProtobufSerializer",
      "serialize",
      ".fromPartial(payload)",
      message
    )
    const encoded = this.codec.encode(message).finish()
    this.devLogger?.log("ProtobufSerializer", "serialize", "encoded", encoded)
    return encoded
  }

  deserialize(buffer: Uint8Array, mapper: Function): T {
    this.devLogger?.log("ProtobufSerializer", "deserialize", "buffer", buffer)
    const decoded = this.codec.decode(buffer)
    this.devLogger?.log("ProtobufSerializer", "deserialize", "decoded", decoded)
    return decoded
  }
}
