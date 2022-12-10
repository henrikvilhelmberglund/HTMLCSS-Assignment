<script>
  import { base } from "$app/paths";
  import { fly } from "svelte/transition";
  import H from "$lib/H.svelte";
  import P from "$lib/P.svelte";
</script>

<main
  in:fly={{ y: -5, duration: 200, delay: 200 }}
  out:fly={{ y: 5, duration: 200 }}>
  <section>
    <H type="h1">Contact us</H>
    <H type="h2">Address and phone</H>
    <P>Address: Ankans väg 31, Ankholm</P>
    <P>Phone: 123-4567</P>
    <img
      src="{base}/images/ankademin-cafe/ankademin_cafe_entrance.webp"
      alt="outside view of ankademin cafe building" />
  </section>
  <section>
    <H type="h2">Leave feedback</H>
    <article class="flex flex-col w-12">
      <form
        method="POST"
        action="/contact/thank-you"
        class="[&>*]:m-2 [&>*]:rounded">
        <label for="email-id">Email</label>
        <input
          type="text"
          name="email"
          id="email-id"
          placeholder="mail@example.com" />
        <select name="feedback-type" id="feedback" class="rounded">
          <option value="product" class=""> Köp av produkt/tjänst</option>
          <option value="about" class="">Frågor om företaget</option>
          <option value="feedback" class="">Synpunkter på webbplats</option>
        </select>
        <textarea name="textarea" id="textarea-id" cols="30" rows="10" />
        <button type="submit">Submit</button>
      </form>
    </article>
  </section>
</main>

<style>
</style>
