<script>
import Motto from "$lib/Motto.svelte";
import P from "$lib/P.svelte";
import ButtonA from "$lib/ButtonA.svelte";
import { fly } from "svelte/transition";
import H from "$lib/H.svelte";
</script>

<main
  in:fly={{ y: -5, duration: 200, delay: 200 }}
  out:fly={{ y: 5, duration: 200 }}
  class="flex flex-col items-center justify-between">
  <H type="h1">About us</H>
  <section class="flex flex-col items-center justify-between">
    <H type="h2">History</H>
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
  </section>
  <section class="flex flex-col items-center justify-between">
    <H type="h2">Motto</H>
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
  </section>
  <section class="flex flex-col items-center justify-between">
    <H type="h2">Employees</H>
    <P type="history">We created a separate page to introduce our employees.</P>
    <ButtonA type="employees" />
  </section>
</main>

<style>
</style>
