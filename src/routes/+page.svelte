<script>
import P from "$lib/P.svelte";
import Motto from "$lib/Motto.svelte";
import ButtonA from "$lib/ButtonA.svelte";
import { base } from "$app/paths";
</script>

<main
 
  class="flex flex-col items-center justify-between transition-all ">
  <picture>
    <source
      media="(max-width: 460px)"
      srcset="{base}/images/ankademin-cafe/ankademin_cafe_interior_big.webp"
      width="768"
      height="512" />
    <source
      media="(min-width: 460px)"
      srcset="{base}/images/ankademin-cafe/ankademin_cafe_interior_big.webp"
      width="768"
      height="512" />
    <img
      src="{base}/images/ankademin-cafe/ankademin_cafe_interior_big.webp"
      width="768"
      height="512"
      alt="Inside of Ankademin Cafe" />
  </picture>

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
