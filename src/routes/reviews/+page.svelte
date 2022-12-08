<script>
  import Review from "$lib/Review.svelte";
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

{#each users as user}
  <Review {...user} />
{/each}

<p>Add a review!</p>
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
    class="transition-all bg-orange-400 font-thin text-3xl border-2 border-orange-700 rounded-lg p-2
  hover:bg-orange-300" />
</form>

<style>
</style>
