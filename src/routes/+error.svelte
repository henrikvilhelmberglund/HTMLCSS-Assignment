<script>
  import { page } from "$app/stores";
</script>

<h1 class="text-3xl">{$page.status}: {$page.error.message}</h1>

<img src="/images/error.jpg" alt="sad duck" srcset="" />
{#if $page.status === 404}
  <p class="text-lg p-2 italic">The duck you're looking for isn't in here.</p>
  <p class="text-lg p-2">
    If you arrived on this page trying to book a time slot, we are performing
    maintenance on our booking system. Please be patient and until it works
    again, not booking a time is completely fine. Welcome!
  </p>
{:else}
  <p class="text-lg">Unknown error.</p>
{/if}

<style>
</style>
