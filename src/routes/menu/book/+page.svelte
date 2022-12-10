<script>
  import P from "$lib/P.svelte";
  import { fly } from "svelte/transition";
</script>

<main
  in:fly={{ x: -5, duration: 200, delay: 200 }}
  out:fly={{ x: 5, duration: 200 }}
  class="h-[50vh] flex flex-col">
  <H type="h1">Booking</H>
  <P>Call us on 123-4567! Welcome!</P>
  <div class="bg-emerald-900 flex-1" />
</main>

<style>
</style>
