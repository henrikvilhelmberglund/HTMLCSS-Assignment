<script>
  import { page } from "$app/stores";
  export let href;
  export let thisPage;
</script>

{#if thisPage === $page.url.pathname.replaceAll("/", "")}
  <a
    {href}
    class="p-1 text-base text-white rounded-md border-2 border-solid border-emerald-700 bg-emerald-500">
    <slot />
  </a>
{:else}
  <a
    {href}
    class="p-1 text-base rounded-md border-2 border-solid border-slate-300
    hover:border-emerald-500 ">
    <slot />
  </a>
{/if}
