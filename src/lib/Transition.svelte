<script>
import { fly } from "svelte/transition";
</script>

<div
  class="transition-wrapper"
  in:fly={{ y: -5, duration: 200, delay: 200 }}
  out:fly={{ y: 5, duration: 200 }}>
  <slot />
</div>
