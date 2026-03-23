<script>
  import { onMount } from "svelte"
  import Select from "../features/select/Select.svelte"
  import { handleCoreKeydown } from "../features/dom/ui/input/keyboard"

  // run bootstrap on mount
  onMount(async () => {
    await import("./bootstrap")
  })
</script>

<!-- HTML -->

<svelte:body onkeydown={handleCoreKeydown} />

<Select />

<!-- Style -->
