<script>
  import { base } from "$app/paths";
  export let type;
</script>

{#if type === "menu"}
  <a href="{base}/menu/" class="btn btn-primary">View menu</a>
{:else if type === "book"}
  <a href="{base}/menu/book" class="btn btn-primary">Book a time slot</a>
{/if}
