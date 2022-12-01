<script>
  import { page } from "$app/stores";
</script>

<h1>{$page.status}: {$page.error.message}</h1>

{#if $page.status === 404}
  <p>The duck you're looking for isn't in here.</p>
{:else}
  <p>Unknown error.</p>
{/if}

<style>
</style>
