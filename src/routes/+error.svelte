<script>
import { base } from "$app/paths";
import { page } from "$app/stores";
import H from "$lib/H.svelte";
import P from "$lib/P.svelte";
try {
  let route = page.route.id;
} catch (err) {
  let route = false;
}
</script>

{route}

<main class="bg-emerald-200">
  <H type="h1" class="text-3xl">{$page.status}: {$page.error.message}</H>

  <img src="{base}/images/error.webp" alt="sad duck" width="512" height="512" />
  {#if $page.status === 404}
    <P _class="text-lg p-2 italic"
      >The duck you're looking for isn't in here.</P>
  {:else}
    <P _class="text-lg">Unknown error.</P>
  {/if}
</main>

<style>
</style>
