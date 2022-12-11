<script>
import A from "$lib/A.svelte";
import { base } from "$app/paths";
</script>

<footer>
  <p
    class="bg-gradient-to-b from-emerald-200 via-slate-300 to-slate-400 p-2 text-center font-logo text-3xl text-black dark:from-emerald-800 dark:via-slate-600 dark:to-slate-700 dark:text-white">
    Ankademin Cafe
  </p>
  <nav
    aria-label="primary-navigation"
    class="flex flex-wrap justify-between  bg-slate-400 dark:bg-slate-700">
    <A href="{base}/">Home</A>
    <A href="{base}/menu">Menu</A>
    <A href="{base}/about-us">About us</A>
    <A href="{base}/reviews">Reviews</A>
    <A href="{base}/contact">Contact</A>
    <A href="{base}/sassy-ducks">Sassy ducks</A>
  </nav>

  <small class="block pr-2 text-right text-white"
    >&copy; Copyright 2022 Ankademin Cafe</small>
</footer>

<style>
</style>
