<script>
  import { page } from "$app/stores";
  export let href;
  export let thisPage;
</script>

{#if thisPage === $page.url.pathname.replaceAll("/", "")}
  <a
    {href}
    class="text-base hover:text-emerald-600 text-emerald-600 underline decoration-emerald-600">
    <slot />
  </a>
{:else}
  <a {href} class="text-base hover:text-emerald-600">
    <slot />
  </a>
{/if}
