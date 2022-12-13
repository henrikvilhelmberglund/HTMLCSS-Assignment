<script>
export let score = 0;
</script>

<section class="flex flex-row">
  {#each Array(11) as _, i}
    {#if i !== 0}
      {#if i % 2 === 0}
        <button
          aria-label={i / 2 === 1 ? i / 2 + " star" : i / 2 + " stars"}
          on:click={() => (score = i)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="24"
            class="{score >= i ? 'fill-orange-400' : 'fill-slate-400'}
            -scale-x-100">
            <path
              d="m12 .587 3.668 7.568L24 9.306l-6.064 5.828 1.48 8.279L12 19.446l-7.417 3.967 1.481-8.279L0 9.306l8.332-1.151z" /></svg>
        </button>
      {/if}
      {#if i % 2 === 1}
        <button
          aria-label={i / 2 === 0.5 ? i / 2 + " star" : i / 2 + " stars"}
          on:click={() => (score = i)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="24"
            class="{score >= i ? 'fill-orange-400' : 'fill-slate-400'} ">
            <path
              d="m12 .587 3.668 7.568L24 9.306l-6.064 5.828 1.48 8.279L12 19.446l-7.417 3.967 1.481-8.279L0 9.306l8.332-1.151z" /></svg>
        </button>
      {/if}
    {/if}
  {/each}
</section>

<style>
</style>
