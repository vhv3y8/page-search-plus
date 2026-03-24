// This file is entry point of web worker.
import type { Command } from "@core/application/dto/Command"
import { runTreeBootstrap } from "../treeBootstrap"

// run tree bootstrap
const treeUseCaseRegistry = runTreeBootstrap()

// handle message
self.onmessage = async ({ data }: { data: { command: Command } }) => {
  self.postMessage(`[hi from worker!]`)
  const { command } = data

  // run use case
  treeUseCaseRegistry[command.cmd](command)
}
