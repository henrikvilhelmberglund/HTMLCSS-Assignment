<script>
import { base } from "$app/paths";
import { fade } from "svelte/transition";
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
      <div
        class="fixed top-0 right-0 left-0 bottom-0 h-[100vh] w-[100vw] md:fixed md:bottom-0 md:top-0 md:right-0 md:left-0 md:h-[100vh] md:w-[100vw]  {$menuClicked
          ? 'backdrop-blur-lg backdrop-brightness-50'
          : ''}" />
    </div>
  {/if}
  {#if clicked}
    <div
      in:fade={{ duration: 300 }}
      out:fade={{ duration: 100 }}
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
        on:click={() => {
          clicked = false;
          menuClicked.set(false);
        }}
        on:keydown={() => {
          clicked = false;
          menuClicked.set(false);
        }}
        {src}
        {alt}
        class="z-100 absolute bottom-0 m-0 min-w-[100vw] p-0 md:-bottom-32 md:min-w-[45vw]" />
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
{/if}

{#if type === "submit"}
  <button
    class="rounded-lg border-2 border-orange-700 bg-orange-400 p-2 text-center text-3xl font-thin transition-all
  hover:bg-orange-300">
    <slot />
  </button>
{:else}
  warning!!!!!!! empty button!!!!!!
{/if}
