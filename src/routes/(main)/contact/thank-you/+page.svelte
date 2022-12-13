<script>
export let form;
import P from "$lib/P.svelte";
import H from "$lib/H.svelte";
</script>

<main class="flex w-[100vw] h-[45vh] md:h-[54vh] flex-col break-words">
  {#if form.textarea}
    <H type="h1"
      >Thank you for your feedback, {form.email || "unknown person"}!</H>
    <H type="h2">Your feedback was:</H>
    <P>{form.textarea}</P>
  {:else}
    <H type="h1">
      Thank you for your worthless feedback, {form.email || "unknown person"}.
      :(
    </H>
    <H type="h2">Next time please type something in the field...</H>
  {/if}
</main>

<style>
</style>
