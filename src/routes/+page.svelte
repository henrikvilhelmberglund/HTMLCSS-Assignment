<script>
  import P from "$lib/P.svelte";
  import Motto from "$lib/Motto.svelte";
  import { base } from "$app/paths";
</script>

<main class="flex flex-col items-center justify-between bg-emerald-900">
  <img
    src="{base}/images/ankademin-cafe/ankademin_cafe_interior.jpg"
    alt="Inside of Ankademin Cafe" />
  <Motto />

  <P type="index">
    Ankademin Cafe is a duck cafe where you can have a great time mingling with
    our ducks and enjoying some Swedish fika.
  </P>
  <P type="index"
    >We provide the finest ducks and the tastiest cookies. Welcome!</P>
</main>

<style>
</style>
