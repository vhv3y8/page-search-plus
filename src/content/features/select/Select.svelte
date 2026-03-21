<script lang="ts">
  import {
    handleSelectMouseClick,
    handleSelectMouseMove
  } from "./ui/input/mouse"
</script>

<!-- HTML -->

<svelte:body
  onmousemove={handleSelectMouseMove}
  onclick={handleSelectMouseClick}
/>

<!-- Style -->
