<script>
import P from "$lib/P.svelte";
import H from "$lib/H.svelte";
import { fly } from "svelte/transition";
</script>

<main
  in:fly={{ x: -5, duration: 200, delay: 200 }}
  out:fly={{ x: 5, duration: 200 }}
  class="flex h-[50vh] flex-col items-center justify-between">
  <H type="h1">Booking</H>
  <P type="menu" _class="w-full"
    >For the best experience, book a time slot. The ducks will love it!</P>
  <P type="menu" _class="w-full">Call us on 123-4567! Welcome!</P>
</main>

<style>
</style>
