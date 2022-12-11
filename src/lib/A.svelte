<script>
import { page } from "$app/stores";
export let href;
</script>

{#if href === $page.url.pathname}
  <a
    {href}
    class="h-10 rounded-md border-2 border-solid border-emerald-700 bg-emerald-500 p-1 text-base text-black">
    <slot />
  </a>
{:else}
  <a
    {href}
    class="h-10 rounded-md border-2 border-solid border-slate-600 p-1 text-base text-white
    hover:border-emerald-500 ">
    <slot />
  </a>
{/if}
