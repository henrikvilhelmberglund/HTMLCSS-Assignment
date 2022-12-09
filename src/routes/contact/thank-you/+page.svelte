<script>
  export let form;
  import P from "$lib/P.svelte";
</script>

<main class="h-[45vh]">
  {#if form.textarea}
    <h1>Thank you for your feedback, {form.email || "unknown person"}!</h1>
    <h2>Your feedback was:</h2>
    <P>{form.textarea}</P>
  {:else}
    <h1>
      Thank you for your worthless feedback, {form.email || "unknown person"}.
      :(
    </h1>
    <h2>Next time please type something in the field...</h2>
  {/if}
</main>

<style>
</style>
