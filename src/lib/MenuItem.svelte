<script>
export let name;
export let src;
export let alt;
export let desc;
export let price;
import { base } from "$app/paths";
import H from "./H.svelte";
import P from "./P.svelte";
import Button from "./Button.svelte";
import { menuClicked } from "./stores.js";
</script>

<article
  class="m-12 flex flex-1 flex-col rounded-lg bg-white shadow-xl dark:bg-emerald-600">
  <H type="h3" _class="!text-center !text-black !p-4">{name}</H>
  <figure><img {src} {alt} width="512" height="512" class="w-74" /></figure>
  <div class="card-body">
    <P _class="text-md">{desc}</P>
    <div class="card-actions w-12 p-4">
      <Button type="menu" {src} {alt}>{price}</Button>
    </div>
  </div>
</article>

<style>
</style>
