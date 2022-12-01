<script>
  import "../app.scss";
  import "../app.postcss";
  import { page } from "$app/stores";
  import { base } from "$app/paths";
  import AHeader from "$lib/AHeader.svelte";
</script>

<svelte:head>
  <title>{$page.data.title}</title>
</svelte:head>

<nav class="flex justify-center gap-4">
  <AHeader thisPage="" href="{base}/">Home</AHeader>
  <AHeader thisPage="menu" href="{base}/menu">Menu</AHeader>
  <AHeader thisPage="contact" href="{base}/contact">Contact</AHeader>
  <AHeader thisPage="reviews" href="{base}/reviews">Reviews</AHeader>
  <AHeader thisPage="about-us" href="{base}/about-us">About us</AHeader>
</nav>
<slot />
