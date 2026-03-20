<script>
  import { onMount } from "svelte"
  import Select from "../features/select/Select.svelte"
  import bootstrap from "./bootstrap"
  import { handleCoreKeydown } from "../core/adapters/ui/input/keyboard"

  // run bootstrap on mount
  onMount(() => {
    bootstrap()
  })
</script>

<!-- HTML -->

<svelte:body onkeydown={handleCoreKeydown} />

<Select />

<!-- Style -->
