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
  class="m-2 flex flex-col items-center rounded bg-emerald-300   shadow-xl dark:bg-emerald-900 dark:text-emerald-100">
  <H type="h2" _class="text-center">{name}</H>
  <figure>
    <img
      src="{base}{src}"
      {alt}
      class="w-[80vw] rounded-3xl border-4 border-solid border-black  shadow-xl md:w-[20vw]" />
  </figure>
  <P type="employee" _class="text-lg font-bold">{role}</P>
  <a
    href="mailto:{email}"
    class="cursor-pointer p-1 text-blue-800 underline dark:text-sky-300"
    >{email}</a>
  <P type="employee" class="">{desc}</P>
</article>

<style>
</style>
