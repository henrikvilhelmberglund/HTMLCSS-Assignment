<script>
export let type = undefined;
export let _class = undefined;
let shared =
  "font-p dark:bg-emerald-900 dark:text-emerald-200 bg-emerald-300 text-emerald-900 border-b border-solid border-black md:w-[30vw] md:p-4 md:m-4 md:rounded-xl md:border";
</script>

{#if type === "index"}
  <p class="p-2 text-center {shared} {_class}">
    <slot />
  </p>
{:else if type === "menu"}
  <p class="p-2 text-center {shared} {_class}">
    <slot />
  </p>
{:else if type === "history"}
  <p class="p-2 {shared} {_class}">
    <slot />
  </p>
{:else if type === "contact"}
  <p class="p-2 {shared} {_class}">
    <slot />
  </p>
{:else if type === "motto"}
  <p class="p-2 font-h font-bold {_class}">
    <slot />
  </p>
{:else if type === "header"}
  <p
    class="relative 
  md:bottom-4 {_class}">
    <slot />
  </p>
{:else}
  <p class={_class}>
    <slot />
  </p>
{/if}
