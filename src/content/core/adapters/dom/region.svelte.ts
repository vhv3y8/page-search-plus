import type { DOMRegion } from "../../domain/entities/dom/DOMRegion"
import type { DOMRegionStore } from "../../application/ports/DOMRegionStore"
import { initializeTree } from "@core/application/usecases/initializeTree"

// dom region to search
let searchRegion: DOMRegion = $state(null)

$effect.root(() => {
  $effect(() => {
    // send initialize tree command
    // ArrayBuffer 어쩌고로 먼저 10만개 처리해서 Transferable로 보내기 같은 구현 선택은 어디서?
    // initializeTree()
  })
})

export function getSearchRegion() {
  return searchRegion
}
export function setSearchRegion(elem: HTMLElement) {
  searchRegion = elem
}

export const globalDOMRegionStore: DOMRegionStore = {}
