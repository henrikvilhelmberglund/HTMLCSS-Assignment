<script>
  export let name;
  export let src;
  export let alt;
  export let role;
  export let email;
  export let desc;
  import { base } from "$app/paths";
</script>

<article
  class="card lg:card-side bg-base-100 shadow-xl m-2 bg-emerald-300 flex flex-col rounded">
  <h3 class="card-title text-center text-2xl">{name}</h3>
  <figure><img src="{base}{src}" {alt} class="w-64" /></figure>
  <div class="card-body">
    <div class="card-actions justify-end">
      <p class="">{role}</p>
      <a href="mailto:{email}" class="underline cursor-pointer">{email}</a>
      <p class="">{desc}</p>
    </div>
  </div>
</article>

<style>
</style>
