<script>
  import { darkStore } from "./stores.js";
  let dark = false;

  function toggle() {
    if (dark) {
      dark = false;
      darkStore.set(false);
    } else if (!dark) {
      dark = true;
      darkStore.set(true);
    }
  }
</script>

<button class="border" on:click={toggle}>
  {#if dark}
    Toggle Light Mode
  {:else}
    Toggle Dark Mode
  {/if}
</button>

<style>
</style>
