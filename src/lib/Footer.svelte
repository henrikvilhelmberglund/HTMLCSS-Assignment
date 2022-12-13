<script>
import A from "$lib/A.svelte";
import P from "./P.svelte";
import { base } from "$app/paths";
</script>

<footer class="bg-slate-400 dark:bg-slate-700">
  <p
    class="bg-gradient-to-b from-emerald-200 via-slate-300 to-slate-400 p-2 text-center font-logo text-3xl text-black dark:from-emerald-800 dark:via-slate-600 dark:to-slate-700 dark:text-white">
    Ankademin Cafe
  </p>
  <nav
    aria-label="primary-navigation"
    class="flex h-32 flex-wrap justify-between  gap-2">
    <A href="{base}/">
      <P type="header">Home</P>
    </A>
    <A href="{base}/menu">
      <P type="header">Menu</P>
    </A>
    <A href="{base}/about-us">
      <P type="header">About us</P>
    </A>
    <A href="{base}/reviews">
      <P type="header">Reviews</P>
    </A>
    <A href="{base}/contact">
      <P type="header">Contact</P>
    </A>
    <A href="{base}/sassy-ducks">
      <P type="header">Sassy ducks</P>
    </A>
  </nav>
  <aside class="relative">
    <small
      class="absolute bottom-0 right-0 pb-0 pr-2 text-right text-black dark:text-white">
      &copy; Copyright 2022 Ankademin Cafe</small>
  </aside>
</footer>

<style>
</style>
