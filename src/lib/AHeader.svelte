<script>
  import { page } from "$app/stores";
  export let href;
</script>

{#if href === $page.url.pathname}
  <a
    {href}
    class="p-1 text-base text-black rounded-md border-2 border-solid border-emerald-700 bg-emerald-500 h-10">
    <slot />
  </a>
{:else}
  <a
    {href}
    class="p-1 text-base rounded-md border-2 border-solid border-slate-300 h-10
    hover:border-emerald-500">
    <slot />
  </a>
{/if}
