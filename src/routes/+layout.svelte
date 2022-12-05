<script>
  import "../app.scss";
  import "../app.postcss";
  import { page } from "$app/stores";
  import { base } from "$app/paths";
  import AHeader from "$lib/AHeader.svelte";
  import Logo from "$lib/Logo.svelte";
</script>

<svelte:head>
  <title>{$page.data.title}</title>
</svelte:head>

<header>
  <Logo />
  <nav class="flex justify-center gap-4">
    <AHeader href="{base}/">Home</AHeader>
    <AHeader href="{base}/menu">Menu</AHeader>
    <AHeader href="{base}/contact">Contact</AHeader>
    <AHeader href="{base}/reviews">Reviews</AHeader>
    <AHeader href="{base}/about-us">About us</AHeader>
  </nav>
</header>
<slot />
