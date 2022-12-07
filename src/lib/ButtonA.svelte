<script>
  import { base } from "$app/paths";
  export let type;
</script>

{#if type === "menu"}
  <a
    href="{base}/menu/"
    class="transition-all bg-orange-400 font-thin text-3xl border-2 border-orange-700 rounded-lg p-2
  hover:bg-orange-300">View menu</a>
{:else if type === "book"}
  <a
    href="{base}/menu/book"
    class="transition-all bg-orange-400 font-thin text-3xl border-2 border-orange-700 rounded-lg p-2
  hover:bg-orange-300">Book a time slot</a>
{/if}
