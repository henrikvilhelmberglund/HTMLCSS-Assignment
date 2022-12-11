<script>
import { page } from "$app/stores";
export let href;
</script>

{#if href === $page.url.pathname}
  <a
    {href}
    class="h-10 rounded-md border-2 border-solid border-emerald-700 bg-emerald-400 p-1 text-base dark:border-emerald-700 dark:bg-emerald-500 dark:text-black">
    <slot />
  </a>
{:else}
  <a
    {href}
    class="h-10 rounded-md border-2 border-solid border-slate-300 bg-slate-400 p-1 text-base hover:border-emerald-500 hover:bg-emerald-200 dark:border-slate-600 dark:text-white
    dark:hover:border-emerald-500 ">
    <slot />
  </a>
{/if}
