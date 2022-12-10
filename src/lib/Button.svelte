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
      class="relative flex-1 right-16 top-14">
      <img
        {src}
        {alt}
        class="absolute bottom-0 p-0 m-0 min-w-[96vw] z-100 filter-none" />
      <div
        class="absolute w-[96vw] h-[100vh] top-0 {$menuClicked
          ? 'backdrop-blur-lg backdrop-brightness-50'
          : ''}" />
      <div
        class="absolute w-[96vw] h-[100vh] bottom-[397px] {$menuClicked
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
    class="transition-all text-center bg-orange-400 font-thin text-3xl border-2 border-orange-700 rounded-lg p-2
    hover:bg-orange-300">
    <slot />
  </button>
{:else}
  warning!!!!!!! empty button!!!!!!
{/if}
