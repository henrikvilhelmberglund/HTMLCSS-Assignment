<script>
  import A from "$lib/A.svelte";
  import { base } from "$app/paths";
</script>

<footer class="bg-slate-700">
  <p class="p-2 font-logo text-3xl text-center text-white">Ankademin Cafe</p>
  <nav aria-label="secondary-navigation" class="flex justify-between">
    <A href="{base}/">Home</A>
    <A href="{base}/menu">Menu</A>
    <A href="{base}/contact">Contact</A>
    <A href="{base}/reviews">Reviews</A>
    <A href="{base}/about-us">About us</A>
  </nav>

  <small class="text-white text-right block pr-2"
    >&copy; Copyright 2022 Ankademin Cafe</small>
</footer>

<style>
</style>
