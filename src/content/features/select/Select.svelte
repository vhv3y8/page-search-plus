<script lang="ts">
  import { onMount } from "svelte"
  import {
    handleSelectMouseClick,
    handleSelectMouseMove
  } from "./ui/input/mouse"

  onMount(() => {
    // to stop propagation to block click action when selecting region
    window.addEventListener("click", handleSelectMouseClick, true)
  })
</script>

<!-- HTML -->

<svelte:body onmousemove={handleSelectMouseMove} />

<!-- Style -->
