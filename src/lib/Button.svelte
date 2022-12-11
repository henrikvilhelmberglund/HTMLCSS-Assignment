<script>
import { base } from "$app/paths";
export let type;
export let src;
export let alt;
let clicked = false;
import { menuClicked } from "./stores.js";
</script>

{#if type === "menu"}
  {#if clicked}
    <div
      on:click={() => {
        clicked = false;
        menuClicked.set(false);
      }}
      on:keydown={() => {
        clicked = false;
        menuClicked.set(false);
      }}
      class="relative right-16 top-14 flex-1">
      <img
        {src}
        {alt}
        class="z-100 absolute bottom-0 m-0 min-w-[96vw] p-0 filter-none md:min-w-[70vw]" />
      <div
        class="absolute top-0 h-[100vh] w-[96vw] {$menuClicked
          ? 'backdrop-blur-lg backdrop-brightness-50'
          : ''}" />
      <div
        class="absolute bottom-[43vh] h-[100vh] w-[96vw] {$menuClicked
          ? 'backdrop-blur-lg backdrop-brightness-50'
          : ''}" />
    </div>
  {/if}
  <button
    on:click={() => {
      if (clicked) {
        clicked = false;
        menuClicked.set(false);
      } else {
        clicked = true;
        menuClicked.set(true);
      }
    }}
    class="rounded-lg border-2 border-orange-700 bg-orange-400 p-2 text-center text-3xl font-thin transition-all
    hover:bg-orange-300">
    <slot />
  </button>
{:else}
  warning!!!!!!! empty button!!!!!!
{/if}
