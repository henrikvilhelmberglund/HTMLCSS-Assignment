<script>
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  let second;
</script>

<!-- {base + "/"} -->
<!-- {$page.url.pathname.split("/")} -->
{#each $page.route.id.split("/") as url, i}
  {#if i === 0}
    {#if $page.route.id.length === 1}
      <a href="{base}/{url}" class="underline">Home</a>
    {:else}
      <a href="{base}/{url}">Home/</a>
    {/if}
  {:else if i === 1}
    {#if $page.route.id.split("/").length !== 3}
      <a href="{base}/{url}" class="underline">{url}/</a>
    {:else}
      <a href="{base}/{url}" class="">{url}/</a>
    {/if}
  {:else if i === 2}
    <a href="{base}{$page.route.id}" class="underline">{url}/</a>
  {/if}
{/each}

<style>
</style>
