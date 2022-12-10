<script>
  export let type;
  export let _class = "";
  let shared =
    "font-p bg-emerald-800 text-emerald-200 border-b border-solid border-black";
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
{:else if type === "motto"}
  <p class="p-2 font-h font-bold {_class}">
    <slot />
  </p>
{:else}
  <p class="p-2 {_class}">
    <slot />
  </p>
{/if}
