<script>
  import Logo from "./Logo.svelte";
  import { base } from "$app/paths";
  import AHeader from "./AHeader.svelte";
</script>

<header>
  <Logo />
  <nav aria-label="primary-navigation" class="flex justify-between">
    <AHeader href="{base}/">Home</AHeader>
    <AHeader href="{base}/menu">Menu</AHeader>
    <AHeader href="{base}/contact">Contact</AHeader>
    <AHeader href="{base}/reviews">Reviews</AHeader>
    <AHeader href="{base}/about-us">About us</AHeader>
  </nav>
</header>
