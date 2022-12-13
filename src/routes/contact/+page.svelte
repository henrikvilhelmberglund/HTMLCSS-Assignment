<script>
import { base } from "$app/paths";
import { fly } from "svelte/transition";
import H from "$lib/H.svelte";
import P from "$lib/P.svelte";
import Button from "$lib/Button.svelte";
</script>

<main
  in:fly={{ y: -5, duration: 200, delay: 200 }}
  out:fly={{ y: 5, duration: 200 }}>
  <section class="flex flex-col items-center">
    <H type="h1">Contact us</H>
    <H type="h2">Address and phone</H>
    <P type="contact" _class="w-full">Address: Ankans väg 31, Ankholm</P>
    <P type="contact" _class="w-full">Phone: 123-4567</P>
    <img
      src="{base}/images/ankademin-cafe/ankademin_cafe_entrance.webp"
      alt="outside view of ankademin cafe building" />
  </section>
  <section class="flex flex-col items-center">
    <H type="h2">Leave feedback</H>
    <article class="flex w-12 flex-col items-center">
      <form
        method="POST"
        action="/contact/thank-you"
        class="[&>*]:m-2 [&>*]:rounded">
        <input
          type="text"
          name="email"
          id="email-id"
          placeholder="mail@example.com" />
        <select
          name="feedback-type"
          aria-label="feedback type selector"
          id="feedback"
          class="rounded">
          <option value="product" class=""> Köp av produkt/tjänst</option>
          <option value="about" class="">Frågor om företaget</option>
          <option value="feedback" class="">Synpunkter på webbplats</option>
        </select>
        <textarea
          name="textarea"
          aria-label="feedback input text area"
          id="textarea-id"
          cols="30"
          rows="10" />
        <Button type="submit">Submit</Button>
      </form>
    </article>
  </section>
</main>

<style>
</style>
