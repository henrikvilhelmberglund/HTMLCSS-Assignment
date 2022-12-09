<script>
  import "@fontsource/cherry-swash";
  import { base } from "$app/paths";
  import MediaQuery from "svelte-media-query";
</script>

<!-- <p class="p-2 font-logo text-4xl text-center bg-gradient-to-b to-orange-50 from-orange-400">Ankademin Cafe</p> -->
<!-- src="{base}/images/ankademin-cafe/online.svg" -->

<MediaQuery query="(max-width: 480px)" let:matches>
  {#if matches}
    <img
      src="{base}/images/ankademin-cafe/ankademin_cafe_logo.webp"
      width="390"
      height="150"
      alt="ankademin cafe logo" />
  {/if}
</MediaQuery>
<MediaQuery query="(min-width: 480px)" let:matches>
  {#if matches}
    <img
      src="{base}/images/ankademin-cafe/ankademin_cafe_logo_big.webp"
      width="1536"
      height="256"
      alt="ankademin cafe logo" />
  {/if}
</MediaQuery>

<style>
</style>
