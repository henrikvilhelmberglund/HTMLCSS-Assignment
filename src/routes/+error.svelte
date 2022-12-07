<script>
  import { page } from "$app/stores";
</script>

<h1 class="text-3xl">{$page.status}: {$page.error.message}</h1>

<img src="/images/error.jpg" alt="sad duck" srcset="" />
{#if $page.status === 404}
  <p class="text-lg">The duck you're looking for isn't in here.</p>
{:else}
  <p class="text-lg">Unknown error.</p>
{/if}

<style>
</style>
