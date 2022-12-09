<script>
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  let second;
</script>

<!-- {base + "/"} -->
<!-- {$page.url.pathname.split("/")} -->
<nav aria-label="secondary-navigation" class="py-2">
  {#each $page.route.id.split("/") as url, i}
    {#if i === 0}
      {#if $page.route.id.length === 1}
        <a
          href="{base}/{url}"
          class="underline m-1 ml-0 p-1  border border-black rounded bg-emerald-500"
          >Home</a>
      {:else}
        <a href="{base}/{url}" class="m-1 ml-0 p-1 border border-black rounded"
          >Home</a
        ><span>/</span>
      {/if}
    {:else if i === 1}
      {#if $page.route.id.split("/").length !== 3}
        {#if $page.route.id.length !== 1}
          <a
            href="{base}/{url}"
            class="underline m-1 p-1 border border-black rounded bg-emerald-500"
            >{url}</a>
        {/if}
      {:else}
        <a href="{base}/{url}" class="m-1 p-1 border border-black rounded"
          >{url}</a
        ><span>/</span>
      {/if}
    {:else if i === 2}
      <a
        href="{base}{$page.route.id}"
        class="underline m-1 p-1 border border-black rounded bg-emerald-500"
        >{url}</a>
    {/if}
  {/each}
</nav>

<style>
</style>
