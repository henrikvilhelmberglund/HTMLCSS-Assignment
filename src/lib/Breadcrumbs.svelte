<script>
import { base } from "$app/paths";
import { page } from "$app/stores";
import DarkModeButton from "./DarkModeButton.svelte";
import { darkStore } from "./stores.js";
</script>

{#if !$page.error}
  <nav
    aria-label="secondary-navigation"
    class="bg-gradient-to-b from-sky-200 to-emerald-200 py-2 text-black dark:bg-emerald-800 dark:from-sky-900 dark:to-emerald-800 dark:text-white">
    {#each $page.route.id.split("/") as url, i}
      {#if i === 0}
        {#if $page.route.id.length === 1}
          <a
            href="{base}/{url}"
            class="m-1 ml-0  rounded border border-black bg-emerald-400 p-1 underline dark:text-black">
            Home</a>
        {:else}
          <a
            href="{base}/{url}"
            class="m-1 ml-0 rounded border border-black p-1 ">Home</a>
          <span>/</span>
        {/if}
      {:else if i === 1}
        {#if $page.route.id.split("/").length !== 3}
          {#if $page.route.id.length !== 1}
            <a
              href="{base}/{url}"
              class="m-1 rounded border border-black bg-emerald-400 p-1 underline dark:text-black">
              {url}</a>
          {/if}
        {:else}
          <a href="{base}/{url}" class="m-1 rounded border border-black p-1">
            {url}</a>
          <span>/</span>
        {/if}
      {:else if i === 2}
        <a
          href="{base}{$page.route.id}"
          class="m-1 rounded border border-black bg-emerald-400 p-1 underline dark:text-black">
          {url}</a>
      {/if}
    {/each}
    <div class="relative">
      <DarkModeButton _class="absolute right-0 -bottom-2" />
    </div>
  </nav>
{/if}

<style>
</style>
