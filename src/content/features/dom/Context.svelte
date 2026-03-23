<script>
  import { onMount } from "svelte"
  import { handleCoreKeydown } from "./input/keyboard"

  onMount(() => {
    // register observers
  })
</script>

<!-- HTML -->

<svelte:body onkeydown={handleCoreKeydown} />
