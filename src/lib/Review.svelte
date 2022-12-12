<script>
import { base } from "$app/paths";
export let username;
export let score;
export let desc;
import P from "./P.svelte";

</script>

<article
  class="m-4 flex w-72 flex-col rounded-lg border border-solid border-black bg-slate-200 p-4 dark:bg-emerald-800">
  <P type="review" _class="text-xl dark:text-emerald-200">{username}</P>
  <section class="flex flex-row ">
    {#each Array(score + 1) as _, i}
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
  <P type="review" _class="pt-4 dark:text-emerald-100">
    {desc}
  </P>
</article>

<style>
</style>
