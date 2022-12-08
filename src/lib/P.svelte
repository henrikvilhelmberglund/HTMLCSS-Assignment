<script>
  export let type;
  export let _class = "";
</script>

{#if type === "index"}
  <p
    class="p-2 bg-emerald-800 text-emerald-200 border-b border-solid border-black text-center {_class}">
    <slot />
  </p>
{:else if type === "menu"}
  <p
    class="p-2  bg-emerald-800 text-emerald-200 border-b border-solid border-black text-center {_class}">
    <slot />
  </p>
{:else}
  <p class="p-2">
    <slot />
  </p>
{/if}
