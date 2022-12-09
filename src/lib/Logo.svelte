<script>
  import "@fontsource/cherry-swash";
  import { base } from "$app/paths";
</script>

<!-- <p class="p-2 font-logo text-4xl text-center bg-gradient-to-b to-orange-50 from-orange-400">Ankademin Cafe</p> -->
<!-- src="{base}/images/ankademin-cafe/online.svg" -->
<section class="flex justify-center min-w-200">
  <picture>
    <source
      media="(max-width: 460px)"
      srcset="{base}/images/ankademin-cafe/ankademin_cafe_logo.webp"
      width="412"
      height="160"
      loading="eager" />
    <source
      media="(min-width: 460px)"
      srcset="{base}/images/ankademin-cafe/ankademin_cafe_logo_big.webp"
      width="1536"
      height="256"
      loading="eager" />
    <img
      src="{base}/images/ankademin-cafe/ankademin_cafe_logo.webp"
      width="412"
      height="160"
      loading="eager"
      alt="ankademin cafe logo" />
  </picture>
</section>

<style>
</style>
