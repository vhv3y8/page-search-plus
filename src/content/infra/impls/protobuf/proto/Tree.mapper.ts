import { Tree as TreeEntity } from "@core/domain/entities/Tree"
import type { Tree as TreeProto } from "./Tree.proto"
import { TextNode } from "@core/domain/entities/Node"
import type { DevLogger } from "@infra/interfaces/DevLogger"
import type { EntityMapper } from "../ProtobufSerializer"

export function createTreeEntityMapper(devLogger?: DevLogger) {
  const treeEntityMapper: EntityMapper<TreeProto, TreeEntity> = (decoded) => {
    devLogger?.log("treeEntityMapper", "decoded", decoded)
    return new TreeEntity(new TextNode("hi"))
  }
  return treeEntityMapper
}
