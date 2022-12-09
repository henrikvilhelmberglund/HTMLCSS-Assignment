<script>
  import P from "$lib/P.svelte";
  import { fly } from "svelte/transition";
</script>

<main
  in:fly={{ x: -5, duration: 200, delay: 200 }}
  out:fly={{ x: 5, duration: 200 }}>
  <h2>Booking</h2>
  <P>Call us on 123-4567! Welcome!</P>
</main>

<style>
</style>
