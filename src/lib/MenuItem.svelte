<script>
  export let name;
  export let src;
  export let alt;
  export let desc;
  export let price;
  import { base } from "$app/paths";
</script>

<article class="card lg:card-side bg-base-100 shadow-xl m-2">
  <figure><img {base} {src} {alt} /></figure>
  <div class="card-body">
    <h3 class="card-title">{name}</h3>
    <p>{desc}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">{price}</button>
    </div>
  </div>
</article>

<style>
</style>
