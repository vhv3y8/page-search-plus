import type { Command } from "@features/tree/usecases/dto/Command"

export interface TreeRunner {
  run(command: Command): void
}
