<script>
  import "../app.scss";
  import "../app.postcss";
  import { page } from "$app/stores";
  import AHeader from "$lib/AHeader.svelte"
  function cleanTitle() {
    let title = $page.url.pathname.replaceAll("/", "");
    title = title.replaceAll("-", " ")
    title = title[0].toUpperCase() + title.substring(1)
    return title
  }
</script>

<svelte:head>
  {#if $page.url.pathname==="/"}
  <title>Ankademin Cafe</title>
  {:else}
  <title>Ankademin Cafe - {cleanTitle()}</title>
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
