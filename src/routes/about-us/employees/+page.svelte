<script>
  import P from "$lib/P.svelte";
  import EmployeesItem from "$lib/EmployeesItem.svelte";
  import { base } from "$app/paths";
  let currentValue;
  let employees = [
    {
      name: "Yellow Duck",
      src: "/images/ducks/duck_0.jpg",
      alt: "yellow duck",
      role: "Systems Administrator",
      email: "yellow.duck@ankademincafe.se",
      desc: "Yellow Duck is our digital expert and handles the digital systems such as booking times.",
    },
    {
      name: "White Duck",
      src: "/images/ducks/duck_1.jpg",
      alt: "white duck",
      role: "Cashier",
      email: "white.duck@ankademincafe.se",
      desc: "White Duck loves money and thus handles payment, both hourly payment and payment for food and drinks.",
    },
    {
      name: "Green Duck",
      src: "/images/ducks/duck_2.jpg",
      alt: "green duck",
      role: "Waiter",
      email: "green.duck@ankademincafe.se",
      desc: "Green Duck is our 5 star rated waiter who has never broken any dishes.",
    },
    {
      name: "Lady Duck",
      src: "/images/ducks/duck_3.jpg",
      alt: "lady duck",
      role: "Duck Trainer",
      email: "lady.duck@ankademincafe.se",
      desc: "Lady Duck takes great care of our many ducks and makes sure they don't bite our customers by training them.",
    },
    {
      name: "Darkwing Duck",
      src: "/images/ducks/duck_4.jpg",
      alt: "duck with dark wings",
      role: "Chef",
      email: "darkwing.duck@ankademincafe.se",
      desc: "Darkwing Duck is a comic fan and is responsible for our delicious food, drinks and duck feed.",
    },
    {
      name: "Big Duck",
      src: "/images/ducks/duck_5.jpg",
      alt: "big duck",
      role: "PR Manager",
      email: "big.duck@ankademincafe.se",
      desc: "Big Duck handles our PR and social media and is a big part of why we're successful today.",
    },
    {
      name: "Happy Duck",
      src: "/images/ducks/duck_6.jpg",
      alt: "happy duck",
      role: "CEO",
      email: "happy.duck@ankademincafe.se",
      desc: "Happy Duck is our CEO with an infectious smile often seen in the cafe treating guests.",
    },
  ];
</script>

<main class="flex flex-col items-center justify-between bg-emerald-900">
  <H type="h1">Employees</H>
  <P>Tap an employee to view their information.</P>
  <div class="flex flex-row">
    {#each employees as employee, i}
      <label for="employee{i}">
        <input
          class="opacity-0 absolute w-0 h-0"
          type="radio"
          name="employees"
          id="employee{i}"
          value={i}
          bind:group={currentValue} />
        <img
          src="{base}{employee.src}"
          alt={employee.alt}
          class="w-24 rounded-full" />
      </label>
    {/each}
  </div>

  {#if currentValue !== undefined}
    <EmployeesItem {...employees[currentValue]} />
  {/if}
</main>

<style>
</style>
