<script>
  import "../app.scss";
  import "../app.postcss";
  import { page } from "$app/stores";
  import AHeader from "$lib/AHeader.svelte"
</script>

<svelte:head>
  {#if $page.url.pathname==="/"}
  <title>Ankademin Cafe</title>
  {:else}
  <title>a</title>
  {/if}
</svelte:head>

<nav>
  <AHeader href="/">Home</AHeader>
  <AHeader href="/menu">Menu</AHeader>
  <AHeader href="/contact">Contact</AHeader>
  <AHeader href="/reviews">Reviews</AHeader>
  <AHeader href="/about-us">About us</AHeader>
</nav>
<slot />
