<script>
  import { base } from "$app/paths";
  import { fly } from "svelte/transition";
</script>

<main
  in:fly={{ y: -5, duration: 200, delay: 200 }}
  out:fly={{ y: 5, duration: 200 }}>
  <h1>Contact us</h1>
  <p>Address: Ankans väg 31, Ankholm</p>
  <p>Phone: 123-4567</p>
  <img
    src="{base}/images/ankademin-cafe/ankademin_cafe_entrance.webp"
    alt="outside view of ankademin cafe building" />
</main>

<style>
</style>
