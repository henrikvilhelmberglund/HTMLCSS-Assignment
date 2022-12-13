<script>
import DarkSVG from "$lib/DarkSVG.svelte";
import LightSVG from "$lib/LightSVG.svelte";
import { darkStore } from "./stores.js";
import { browser } from "$app/environment";
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
if (browser) {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.classList.add("dark");
    dark = true;
    darkStore.set(true);
  } else {
    document.documentElement.classList.remove("dark");
    dark = false;
    darkStore.set(false);
  }
}
</script>

<div class="flex items-center justify-center">
<button
  aria-label={dark ? "toggle: enable light mode" : "toggle: enable dark mode"}
  class="mb-1 h-8 w-16 rounded-full border-2 border-solid border-black bg-slate-100 dark:border-white dark:bg-slate-800 md:mr-7 lg:mb-28 lg:h-36 lg:w-36 lg:rounded-lg {_class}"
  on:click={toggle}>
    {#if dark}
      <!-- <span class="font-matr text-2xl text-yellow-300 lg:text-8xl"
      >light_mode</span> -->
      <LightSVG />
    {:else}
      <!-- <span class="font-matr text-2xl text-black lg:text-8xl">dark_mode</span> -->
      <DarkSVG />
    {/if}
  </button>
</div>

<style>
</style>
