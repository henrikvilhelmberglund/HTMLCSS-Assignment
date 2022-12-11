<script>
import { darkStore } from "./stores.js";
let dark = false;
export let _class;

function toggle() {
  if (dark) {
    dark = false;
    darkStore.set(false);
    document.documentElement.classList.remove("dark");
  } else if (!dark) {
    dark = true;
    darkStore.set(true);
    document.documentElement.classList.add("dark");
  }
}
</script>

<button
  class="mb-1 h-8 w-8 rounded border-2 border-anka-50 bg-slate-600 {_class}"
  on:click={toggle}>
  {#if dark}
    <p class="font-matr text-2xl text-orange-300">light_mode</p>
  {:else}
    <p class="font-matr text-2xl text-orange-300">dark_mode</p>
  {/if}
</button>

<style>
</style>
