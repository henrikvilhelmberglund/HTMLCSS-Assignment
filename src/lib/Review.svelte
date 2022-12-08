<script>
  import { base } from "$app/paths";
  export let username;
  export let score;
  export let desc;
</script>

{#each Array(score) as _, i}
{i}
  <img src="{base}/images/iconmonstr-star-3.svg" alt="" />
{/each}
{desc}

<style>
</style>
