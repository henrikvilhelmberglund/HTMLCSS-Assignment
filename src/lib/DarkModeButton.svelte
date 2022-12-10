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

<button class="border-2 border-anka-50 rounded p-1" on:click={toggle}>
  {#if dark}
    <p class="font-mat text-2xl">light_mode</p>
  {:else}
    <p class="font-matr text-2xl">dark_mode</p>
  {/if}
</button>

<style>
</style>
