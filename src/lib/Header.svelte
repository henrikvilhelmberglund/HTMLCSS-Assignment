<script>
import Logo from "./Logo.svelte";
import { base } from "$app/paths";
import AHeader from "./AHeader.svelte";
import P from "./P.svelte";
</script>

<header
  class="bg-sky-200 
  dark:bg-sky-900
  md:bg-sky-200">
  <Logo />
  <nav
    aria-label="primary-navigation"
    class="flex flex-wrap justify-between gap-2">
    <AHeader href="{base}/">
      <P type="header">
        Home
      </P>
    </AHeader>
    <AHeader href="{base}/menu">
      <P
      type="header">Menu</P>
    </AHeader>
    <AHeader href="{base}/about-us">
      <P
      type="header">About us</P>
    </AHeader>
    <AHeader href="{base}/reviews">
      <P
      type="header">Reviews</P>
    </AHeader>
    <AHeader href="{base}/contact">
      <P
      type="header">Contact</P>
    </AHeader>
    <AHeader href="{base}/sassy-ducks">
      <P
      type="header">Sassy ducks</P>
    </AHeader>
  </nav>
</header>
