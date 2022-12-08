<script>
  import { base } from "$app/paths";
  import Motto from "$lib/Motto.svelte";
  import P from "$lib/P.svelte";
  import ButtonA from "$lib/ButtonA.svelte";
</script>

<main class="flex flex-col items-center justify-between bg-emerald-900">
  <h1 class="font-thin text-3xl text-emerald-300">About us</h1>
  <h2 class="font-thin text-2xl text-emerald-300">History</h2>
  <P type="history">
    We love ducks. We also love fika. That's why we created Ankademin Cafe in
    2020, a place where we can combine the things we love.
  </P>
  <P type="history">
    Inspired by the cat cafees in Japan we thought we could do a similar thing
    with ducks and that's how we got started.</P>
  <P type="history">
    By now we are very successful thanks to our loyal customers. Thank you and
    we hope to see you in Ankademin Cafe soon!
  </P>
  <h2 class="font-thin text-2xl text-emerald-300">Motto</h2>
  <Motto />
  <P type="history">
    The above line is our company motto. If you're feeling down or just out of
    luck, one thing that is sure to improve your mood is petting an animal. In
    our case, a duck.
  </P>
  <P type="history">
    Fill your stomach by enjoying our fika and fill your soul by petting our
    ducks. That's all there is to it!
  </P>
  <h2 class="font-thin text-2xl text-emerald-300">Employees</h2>
  <P type="history">We created a separate page to introduce our employees.</P>
  <ButtonA type="employees" />
</main>

<style>
</style>
