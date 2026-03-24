<script>
  import { onMount } from "svelte"
  import Select from "../features/select/Select.svelte"

  // run bootstrap on mount
  onMount(async () => {
    const { registerListeners } = await import("./bootstrap")
    registerListeners()
  })
</script>

<!-- HTML -->

<Select />
