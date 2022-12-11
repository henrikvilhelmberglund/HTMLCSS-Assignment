<script>
import { page } from "$app/stores";
export let href;
</script>

{#if href === $page.url.pathname}
  <a
    {href}
    class="h-10 rounded-md border-2 border-solid border-emerald-700 bg-emerald-400 p-1 text-base text-black dark:border-emerald-400 dark:bg-emerald-600 md:p-8 md:text-xl ">
    <slot />
  </a>
{:else}
  <a
    {href}
    class="h-10 rounded-md border-2 border-solid border-sky-300 bg-sky-200 p-1 text-base hover:border-emerald-500 hover:bg-emerald-200 dark:border-sky-700 dark:bg-sky-800 dark:text-white md:p-8 md:text-xl">
    <slot />
  </a>
{/if}
