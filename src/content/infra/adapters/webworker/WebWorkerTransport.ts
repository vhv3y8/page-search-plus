import type { Serializer } from "../../ports/Serializer"
import type { Transport } from "src/content/infra/ports/Transport"

// @ts-ignore
export function createWebWorkerTransport(
  worker: Worker,
  serializer: Serializer
): Transport {}
