<script>
import { base } from "$app/paths";
export let type;
</script>

{#if type === "menu"}
  <a
    href="{base}/menu/"
    class="rounded-lg border-2 border-orange-700 bg-orange-400 p-2 text-3xl font-thin transition-all
  hover:bg-orange-300">View menu</a>
{:else if type === "book"}
  <a
    href="{base}/menu/book"
    class="rounded-lg border-2 border-orange-700 bg-orange-400 p-2 text-3xl font-thin transition-all
  hover:bg-orange-300">Book a time slot</a>
{:else if type === "employees"}
  <a
    href="{base}/about-us/employees"
    class="rounded-lg border-2 border-orange-700 bg-orange-400 p-2 text-3xl font-thin transition-all
  hover:bg-orange-300">Employees page</a>
{/if}
