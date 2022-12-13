<script>
export let type = undefined;
export let _class = undefined;
let shared = "font-h dark:text-emerald-300 text-emerald-800 p-2";
</script>

{#if type === "h1"}
  <h1 class="text-3xl {shared} {_class}">
    <slot />
  </h1>
{:else if type === "h2"}
  <h2 class="text-2xl {shared} {_class}">
    <slot />
  </h2>
{:else if type === "h3"}
  <h3 class="text-xl {shared} {_class}">
    <slot />
  </h3>
{:else if type === "h4"}
  <h4 class="text-xl {shared} {_class}">
    <slot />
  </h4>
{:else if type === "h5"}
  <h5 class="text-xl {shared} {_class}">
    <slot />
  </h5>
{:else if type === "h6"}
  <h6 class="text-xl {shared} {_class}">
    <slot />
  </h6>
{:else}
  <p class="text-5xl">no type set for H component!!!!! WARNING :O</p>
{/if}

<style>
</style>
