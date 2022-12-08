<script>
  import { base } from "$app/paths";
  import { page } from "$app/stores";
</script>

<!-- {$page.url.pathname} -->
<!-- {$page.url.pathname.split("/")} -->
{#each $page.url.pathname.split("/") as url, i}
  {#if i === 0}
    {#if $page.url.pathname === "/"}
      <a href="{base}/{url}">{base}home</a>
    {:else}
      <a href="{base}/{url}/">{base}home/</a>
    {/if}
  {:else if i === 1}
    <a href="{base}/{url}/">{base}{url}/</a>
  {:else if i === 2}
    <a href="{base}{url}">{base}{url}/</a>
  {/if}
{/each}

<style>
</style>
