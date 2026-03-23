// This file is entry point of web worker.
import type { Command } from "@features/tree/usecases/dto/Command"
import { treeUseCaseRegistryMapper } from "../treeBootstrap"

self.onmessage = async ({ data }: { data: { command: Command } }) => {
  self.postMessage(`[hi from worker!]`)

  const { command } = data
  const useCase = treeUseCaseRegistryMapper(command)
  const response = useCase(command)
  if (response) {
    self.postMessage({ response })
  }
}
