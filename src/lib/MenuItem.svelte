<script>
  export let name;
  export let src;
  export let alt;
  export let desc;
  export let price;
  import { base } from "$app/paths";
</script>

<article
  class="card lg:card-side bg-base-100 shadow-xl m-2 bg-emerald-300 flex flex-col rounded">
  <h3 class="card-title text-center text-2xl">{name}</h3>
  <figure><img {base} {src} {alt} class="w-64" /></figure>
  <div class="card-body">
    <p>{desc}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">{price}</button>
    </div>
  </div>
</article>

<style>
</style>
