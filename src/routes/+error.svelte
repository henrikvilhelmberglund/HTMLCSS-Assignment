<script>
  import { page } from "$app/stores";
  import H from "$lib/H.svelte";
</script>

<main class="bg-emerald-700">
  <H type="h1" class="text-3xl">{$page.status}: {$page.error.message}</H>

  <img src="/images/error.jpg" alt="sad duck" srcset="" />
  {#if $page.status === 404}
    <p class="text-lg p-2 italic">The duck you're looking for isn't in here.</p>
  {:else}
    <p class="text-lg">Unknown error.</p>
  {/if}
</main>

<style>
</style>
