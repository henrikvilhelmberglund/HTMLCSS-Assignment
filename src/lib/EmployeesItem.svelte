<script>
export let name;
export let src;
export let alt;
export let role;
export let email;
export let desc;
import { base } from "$app/paths";
import H from "./H.svelte";
import P from "./P.svelte";
</script>

<article
  class="card lg:card-side bg-base-100 m-2 flex flex-col rounded bg-emerald-300 shadow-xl">
  <H type="h3" class="card-title text-center text-2xl">{name}</H>
  <figure><img src="{base}{src}" {alt} class="w-64" /></figure>
  <div class="card-body">
    <div class="card-actions justify-end">
      <P type="employee" class="">{role}</P>
      <a href="mailto:{email}" class="cursor-pointer underline">{email}</a>
      <P type="employee" class="">{desc}</P>
    </div>
  </div>
</article>

<style>
</style>
