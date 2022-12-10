<script>
  export let type;
  let shared = "font-h text-emerald-300 ";
</script>

{#if type === "h1"}
  <h1 class="text-3xl {shared}">
    <slot />
  </h1>
{:else if type === "h2"}
  <h2 class="text-2xl {shared}">
    <slot />
  </h2>
{:else if type === "h3"}
  <h3 class="text-xl {shared}">
    <slot />
  </h3>
{:else if type === "h4"}
  <h4 class="text-xl {shared}">
    <slot />
  </h4>
{:else if type === "h5"}
  <h5 class="text-xl {shared}">
    <slot />
  </h5>
{:else if type === "h6"}
  <h6 class="text-xl {shared}">
    <slot />
  </h6>
{:else}
  <p class="text-5xl">no type set for H component!!!!! WARNING :O</p>
{/if}

<style>
</style>
