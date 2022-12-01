<script>
  import "../app.scss";
  import "../app.postcss";
  import { page } from "$app/stores";
  import { base } from "$app/paths";
  import AHeader from "$lib/AHeader.svelte";
  function cleanTitle() {
    let title = $page.url.pathname.replaceAll("/", "");
    title = title.replaceAll("-", " ");
    title = title[0].toUpperCase() + title.substring(1);
    return title;
  }
</script>

<svelte:head>
  {#if $page.url.pathname === "/"}
    <title>Ankademin Cafe</title>
  {:else}
    <title>Ankademin Cafe - {cleanTitle()}</title>
  {/if}
</svelte:head>

<nav class="flex justify-center gap-4">
  <AHeader href="{base}/">Home</AHeader>
  <AHeader href="{base}/menu">Menu</AHeader>
  <AHeader href="{base}/contact">Contact</AHeader>
  <AHeader href="{base}/reviews">Reviews</AHeader>
  <AHeader href="{base}/about-us">About us</AHeader>
</nav>
<slot />
