<script>
  import { base } from "$app/paths";
  export let username;
  export let score;
  export let desc;
</script>

<article class="flex flex-col border-t border-solid border-black p-4">
  <p class="text-xl">{username}</p>
  <section class="flex flex-row">
    {#each Array(score+1) as _, i}
      {#if i !== 0 && i % 2 === 0}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          class="fill-orange-400">
          <path
            d="m12 .587 3.668 7.568L24 9.306l-6.064 5.828 1.48 8.279L12 19.446l-7.417 3.967 1.481-8.279L0 9.306l8.332-1.151z" /></svg>
      {/if}
    {/each}
    {#if score % 2 === 1}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="13"
        height="24"
        class="fill-orange-400">
        <path
          d="m12 .587 3.668 7.568L24 9.306l-6.064 5.828 1.48 8.279L12 19.446l-7.417 3.967 1.481-8.279L0 9.306l8.332-1.151z" /></svg>
    {/if}
  </section>
  <p class="pt-4">
    {desc}
  </p>
</article>

<style>
</style>
