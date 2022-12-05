<script>
  export let type;
</script>

{#if type === "index"}
  <p class="p-4 bg-emerald-800 text-emerald-200 border-b border-solid border-black">
    <slot />
  </p>
{:else if type === "other"}
  <p class="p-4">
    <slot />
  </p>
{/if}
