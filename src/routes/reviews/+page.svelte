<script>
  import Review from "$lib/Review.svelte";
  let users = [
    {
      username: "test",
      score: 9,
      desc: "test descriptionaaaaaaaaaaaaaaaaaaa",
    },
  ];
</script>

<Review {...users[0]} />

<style>
</style>
