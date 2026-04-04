import type { DynamicStrategy } from "../ports/DynamicStrategy"
import type { Transport } from "@infra/ports/Transport"

type TransportName = "main" | "webworker"
export type TransportRecord = Partial<Record<TransportName, Transport>>

export interface TransportResolver extends DynamicStrategy {
  getStrategy(): Transport
  setStrategy(name: TransportName): void
  // setTransportTo(name: TransportName): void
}

export function createTransportResolver(
  transports: TransportRecord
): TransportResolver {
  let treeTransportName: TransportName = "webworker"

  const treeTransportResolver = {
    getStrategy() {
      return transports[treeTransportName]!
    },
    setStrategy(name) {
      treeTransportName = name
    }
  } satisfies TransportResolver
  return treeTransportResolver
}
