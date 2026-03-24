import type { TreeStore } from "../ports/TreeStore"
import type { UpdateNodeCommand } from "./dto/Command"

// 옵저버에서 dom 트리가 바뀔 때마다 실행
export function updateTreeNode(
  command: UpdateNodeCommand,
  treeStore: TreeStore
) {}
