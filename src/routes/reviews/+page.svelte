<script>
import Review from "$lib/Review.svelte";
import { fly } from "svelte/transition";
import P from "$lib/P.svelte";
import H from "$lib/H.svelte";
import StarButton from "$lib/StarButton.svelte";
import { userReview } from "$lib/stores.js";
let userName;
let userDesc;
let userScore;

function addReview() {
  $userReview = [
    ...$userReview,
    {
      username: userName ? userName : "anonymous user",
      score: userScore ? userScore : 1,
      desc: userDesc ? userDesc : "empty message",
    },
  ];
}

function deleteCustomReviews() {
  userReview.set([]);
}

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
  class="dark:bg-emerald-700 md:flex md:flex-col md:items-center">
  <H type="h1">Reviews</H>
  <article class="md:flex md:flex-row  md:flex-wrap">
    {#each users as user}
      <Review {...user} />
    {/each}
    {#each $userReview as user}
      <Review {...user} />
    {/each}
  </article>

  <section class="w-32 flex-col p-4 md:flex md:w-64 md:flex-col">
    <P _class="text-xl">Add a review! 👍</P>
    <StarButton bind:score={userScore} />

    <input
      type="text"
      id="username"
      placeholder="User name"
      class="m-1"
      bind:value={userName} />
    <textarea
      bind:value={userDesc}
      name="review"
      id="review-id"
      cols="30"
      rows="4"
      placeholder="Description"
      class="m-1" />
    <input
      on:click={addReview}
      type="submit"
      value="Submit"
      class="m-1 cursor-pointer rounded-lg border-2 border-orange-700 bg-orange-400 p-2 text-3xl
      font-thin transition-all hover:bg-orange-300" />
    <input
      on:click={deleteCustomReviews}
      type="submit"
      value="Delete local storage"
      class="m-1 cursor-pointer rounded-lg border-2 border-orange-700 bg-red-400 p-2 text-2xl
      font-thin transition-all hover:bg-red-300" />
  </section>
</main>

<style>
</style>
