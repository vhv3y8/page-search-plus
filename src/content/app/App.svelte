<script>
  import { onMount } from "svelte"
  import Select from "../features/select/Select.svelte"
  import Context from "@features/dom/Context.svelte"

  // run bootstrap on mount
  onMount(async () => {
    await import("./bootstrap")
  })
</script>

<!-- HTML -->

<Context />

<Select />

<!-- Style -->
