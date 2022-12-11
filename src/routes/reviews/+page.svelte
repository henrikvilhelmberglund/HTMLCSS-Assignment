<script>
import Review from "$lib/Review.svelte";
import { fly } from "svelte/transition";
import P from "$lib/P.svelte";
import H from "$lib/H.svelte";
let users = [
  {
    username: "ducklover69",
    score: 9,
    desc: "Cute ducks and awesome food. Recommended!",
  },
  {
    username: "omnomcoffee",
    score: 8,
    desc: "Good coffee, however the ducks smelled a bit.",
  },
  {
    username: "fingerhurts666",
    score: 1,
    desc: "I got bit by a duck! My finger still hurts...",
  },
];
</script>

<main
  in:fly={{ y: -5, duration: 200, delay: 200 }}
  out:fly={{ y: 5, duration: 200 }}
  class="dark:bg-emerald-700">
  <H type="h1">Reviews</H>
  {#each users as user}
    <Review {...user} />
  {/each}

  <section class="w-32 flex-col md:flex">
    <P>Add a review!</P>
    <form action="">
      <input type="text" id="username" placeholder="User name" />
      <textarea
        name="review"
        id="review-id"
        cols="30"
        rows="4"
        placeholder="Description" />
      <input
        type="submit"
        value="Submit"
        class="rounded-lg border-2 border-orange-700 bg-orange-400 p-2 text-3xl font-thin transition-all
      hover:bg-orange-300" />
    </form>
  </section>
</main>

<style>
</style>
