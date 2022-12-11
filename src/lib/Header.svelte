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
      <P
        _class="relative bottom-1.5
      md:bottom-3 md:p-0">
        Home
      </P>
    </AHeader>
    <AHeader href="{base}/menu">
      <P
        _class="relative bottom-1.5
       md:bottom-3 md:p-0">Menu</P>
    </AHeader>
    <AHeader href="{base}/about-us">
      <P
        _class="relative bottom-1.5
       md:bottom-3 md:p-0">About us</P>
    </AHeader>
    <AHeader href="{base}/reviews">
      <P
        _class="relative bottom-1.5
       md:bottom-3 md:p-0">Reviews</P>
    </AHeader>
    <AHeader href="{base}/contact">
      <P
        _class="relative bottom-1.5
       md:bottom-3 md:p-0">Contact</P>
    </AHeader>
    <AHeader href="{base}/sassy-ducks">
      <P
        _class="relative bottom-1.5
      md:bottom-3 md:p-0">Sassy ducks</P>
    </AHeader>
  </nav>
</header>
