<script>
import P from "$lib/P.svelte";
import H from "$lib/H.svelte";
import { fly } from "svelte/transition";
</script>

<main
  in:fly={{ x: -5, duration: 200, delay: 200 }}
  out:fly={{ x: 5, duration: 200 }}
  class="flex h-[50vh] flex-col">
  <H type="h1">Booking</H>
  <P>Call us on 123-4567! Welcome!</P>
  <div class="flex-1 bg-emerald-900" />
</main>

<style>
</style>
