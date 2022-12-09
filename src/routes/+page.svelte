<script>
  import P from "$lib/P.svelte";
  import Motto from "$lib/Motto.svelte";
  import ButtonA from "$lib/ButtonA.svelte";
  import { base } from "$app/paths";
  import { fly } from "svelte/transition";
  import MediaQuery from "svelte-media-query";
</script>

<main
  in:fly={{ y: -5, duration: 200, delay: 200 }}
  out:fly={{ y: 5, duration: 200 }}
  class="flex flex-col items-center justify-between bg-emerald-900">
  <MediaQuery query="(max-width: 480px)" let:matches>
    {#if matches}
      <img
        src="{base}/images/ankademin-cafe/ankademin_cafe_interior.webp"
        width="390"
        height="260"
        alt="Inside of Ankademin Cafe" />
    {/if}
  </MediaQuery>
  <MediaQuery query="(min-width: 480px)" let:matches>
    {#if matches}
      <img
        src="{base}/images/ankademin-cafe/ankademin_cafe_interior_big.jpg"
        width="768"
        height="512"
        alt="Inside of Ankademin Cafe" />
    {/if}
  </MediaQuery>

  <Motto />

  <P type="index">
    Ankademin Cafe is a duck cafe where you can have a great time mingling with
    our ducks and enjoying some Swedish fika.
  </P>
  <P type="index"
    >We provide the finest ducks and the tastiest cookies. Welcome!</P>

  <ButtonA type="menu" />
</main>

<style>
</style>
