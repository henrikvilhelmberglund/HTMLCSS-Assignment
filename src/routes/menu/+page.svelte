<script>
import P from "$lib/P.svelte";
import ButtonA from "$lib/ButtonA.svelte";
import MenuItem from "$lib/MenuItem.svelte";
import { base } from "$app/paths";
import { fly } from "svelte/transition";
import H from "$lib/H.svelte";
import { menuClicked } from "$lib/stores.js";

let menuItems = [
  {
    category: "Sweets",
    items: [
      {
        name: "Princess duck cake",
        src: `${base}/images/menu/menu_sweets_0.webp`,
        alt: "A classic princess cake with a delicious marsipan duck on top",
        desc: "A classic princess cake with a delicious marsipan duck on top. Perfect for birthday parties! 🍰",
        price: "199:-",
      },
      {
        name: "Macaron plate",
        src: `${base}/images/menu/menu_sweets_1.webp`,
        alt: "A plate filled with yummy frosted macarons",
        desc: "A plate filled with yummy frosted macarons. 🌸",
        price: "79:-",
      },
      {
        name: "Crunchy ducklings",
        src: `${base}/images/menu/menu_sweets_2.webp`,
        alt: "plate with crunchy duckling cookies",
        desc: "Craving something less sweet? Our crunchy ducklings are just as delicious. 🍪",
        price: "49:-",
      },
    ],
  },
  {
    category: "Drinks",
    items: [
      {
        name: "Ankademin special",
        src: `${base}/images/menu/menu_drink_0.webp`,
        alt: "ankademin special drink",
        desc: "The Ankademin special is a soft drink and hot cocoa combo which is perfect if you've brought a friend. 💕",
        price: "59:-",
      },
      {
        name: "Coffee",
        src: `${base}/images/menu/menu_drink_1.webp`,
        alt: "cup of coffee",
        desc: "Of course we have wonderful coffee available. Special order? No problem! ☕",
        price: "29:-",
      },
      {
        name: "Milky mango",
        src: `${base}/images/menu/menu_drink_2.webp`,
        alt: "milky mango drink",
        desc: "This drink will take you to an exotic resort where you are surrounded by ducks. 🦆",
        price: "39:-",
      },
    ],
  },
  {
    category: "Lunch",
    items: [
      {
        name: "The special weekly plate",
        src: `${base}/images/menu/menu_lunch_0.webp`,
        alt: "special weekly plate",
        desc: "The special weekly plate changes every week. One thing is constant: YUM! 😋",
        price: "99:-",
      },
      {
        name: "Burgerette",
        src: `${base}/images/menu/menu_lunch_1.webp`,
        alt: "burgerette plate",
        desc: "Have you ever tried a burgerette? You won't regret it. 🥖",
        price: "89:-",
      },
      {
        name: "Super salad",
        src: `${base}/images/menu/menu_lunch_2.webp`,
        alt: "super salad plate",
        desc: "Our super salad is a plate filled to the brim with fresh veggies and crunchy crutons. Watch out, the ducks love it too! 😍",
        price: "59:-",
      },
    ],
  },
];
</script>

<main
  in:fly={{ y: -5, duration: 200, delay: 200 }}
  out:fly={{ y: 5, duration: 200 }}
  class="flex flex-col items-center justify-between">
  <H
    type="h1"
    _class="font-thin text-3xl dark:text-emerald-300 text-emerald-700">Menu</H>
  <P type="menu" _class="w-full">
    We take a 50 SEK hourly fee (paid in advance) to allow us to care for our
    animals in the best way. When paying this fee you will also get a feed bag
    which you can open when you want to give our ducks a treat.
  </P>

  <P type="menu" _class="w-full">
    Our cafe is very popular so if possible book a time slot to make sure that
    we will be able to provide the best experience.</P>

  <ButtonA type="book" />

  <div class="m-4 w-full bg-emerald-500 shadow-lg ">
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="h-6 w-6 flex-shrink-0 stroke-current">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span>Swipe down to view our menu.</span>
    </div>
  </div>

  {#each menuItems as menuItem}
    <section class="md:flex md:w-full">
      <H type="h2" _class="text-3xl m-4 dark:text-emerald-100 text-emerald-700">
        {menuItem.category}</H>
      {#each menuItem.items as item}
        <MenuItem {...item} />
      {/each}
    </section>
  {/each}
</main>

<style>
</style>
