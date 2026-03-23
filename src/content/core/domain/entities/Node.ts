export type Node = TreeNode | EmptyNode

// empty node
type EmptyNode = {
  readonly type: "EMPTY"
}

// create singleton
export const EMPTY_NODE: EmptyNode = Object.freeze({
  type: "EMPTY"
})

// search node
export type TreeNode = {}
