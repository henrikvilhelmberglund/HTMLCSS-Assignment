<script>
  import P from "$lib/P.svelte";
  import ButtonA from "$lib/ButtonA.svelte";
  import MenuItem from "$lib/MenuItem.svelte";
  import { base } from "$app/paths";

  let menuItems = [
    {
      category: "Sweets",
      items: [
        {
          name: "Lorem",
          src: `${base}/images/menu/menu_sweets_0.jpg`,
          alt: "",
          desc: "",
          price: "20:-",
        },
        {
          name: "Ipsum",
          src: `${base}/images/menu/menu_sweets_1.jpg`,
          alt: "",
          desc: "",
          price: "20:-",
        },
        {
          name: "Dolor",
          src: `${base}/images/menu/menu_sweets_2.jpg`,
          alt: "",
          desc: "",
          price: "20:-",
        },
      ],
    },
    {
      category: "Drinks",
      items: [
        {
          name: "Lorem",
          src: `${base}/images/menu/menu_drink_0.jpg`,
          alt: "",
          desc: "",
          price: "20:-",
        },
        {
          name: "Ipsum",
          src: `${base}/images/menu/menu_drink_1.jpg`,
          alt: "",
          desc: "",
          price: "20:-",
        },
        {
          name: "Dolor",
          src: `${base}/images/menu/menu_drink_2.jpg`,
          alt: "",
          desc: "",
          price: "20:-",
        },
      ],
    },
    {
      category: "Lunch",
      items: [
        {
          name: "Lorem",
          src: `${base}/images/menu/menu_lunch_0.jpg`,
          alt: "",
          desc: "",
          price: "20:-",
        },
        {
          name: "Ipsum",
          src: `${base}/images/menu/menu_lunch_1.jpg`,
          alt: "",
          desc: "",
          price: "20:-",
        },
        {
          name: "Dolor",
          src: `${base}/images/menu/menu_lunch_2.jpg`,
          alt: "",
          desc: "",
          price: "20:-",
        },
      ],
    },
  ];
</script>

<main class="flex flex-col items-center justify-between bg-emerald-900">
  <h2 class="font-thin text-3xl text-emerald-300">Menu</h2>

  <P type="menu">
    We take a 50 SEK hourly fee (paid in advance) to allow us to care for our
    animals in the best way. When paying this fee you will also get a feed bag
    which you can open when you want to give our ducks a treat.
  </P>

  <P type="menu">
    Our cafe is very popular so if possible book a time slot to make sure that
    we will be able to provide the best experience.</P>

  <ButtonA type="book" />

  <div class="bg-emerald-500 w-full shadow-lg m-4">
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="stroke-current flex-shrink-0 w-6 h-6"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <span>Swipe down to view our menu.</span>
    </div>
  </div>

  {#each menuItems as menuItem}
    <section>
      <h2 class="text-3xl m-4 text-emerald-100">{menuItem.category}</h2>
      {#each menuItem.items as item}
        <MenuItem {...item} />
      {/each}
    </section>
  {/each}
</main>

<style>
</style>
