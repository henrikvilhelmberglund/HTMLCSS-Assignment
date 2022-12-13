<script>
import { base } from "$app/paths";
let sassyDucks = [
  {
    name: "Old duck",
    desc: "This is a photo of a stately old duck in front of a picture.",
    src: "/images/sassy-ducks/sassy_duck_0.webp",
    alt: "a photo of a stately old duck in front of a picture",
  },
  {
    name: "Duck family",
    desc: "This is a photo of a cute duck family.",
    src: "/images/sassy-ducks/sassy_duck_1.webp",
    alt: "a photo of a cute duck family",
  },
  {
    name: "Duck in a frame",
    desc: "This is a photo of a duck portrait.",
    src: "/images/sassy-ducks/sassy_duck_2.webp",
    alt: "a photo of a duck portrait",
  },
  {
    name: "Stylish duck",
    desc: "This is a photo of a duck wearing a red scarf.",
    src: "/images/sassy-ducks/sassy_duck_3.webp",
    alt: "a photo of a duck wearing a red scarf",
  },
  {
    name: "Winged duck",
    desc: "This is a photo of a rare duck with wings on its head.",
    src: "/images/sassy-ducks/sassy_duck_4.webp",
    alt: "a photo of a rare duck with wings on its head",
  },
];
</script>

<main
  >
  <h1>Sassy Ducks</h1>
  <p>
    On this page we display photos of sassy ducks sent in by our customers.
    Thank you for sending them in!
  </p>

  {#each sassyDucks as sassyDuck}
    <article class="sassy-container">
      <h2>{sassyDuck.name}</h2>
      <img src="{base}{sassyDuck.src}" alt={sassyDuck.alt} />
      <p>{sassyDuck.desc}</p>
    </article>
  {/each}

  <p>Again, thank you for your contributions!</p>
</main>

<!-- 
  below is same thing as making a .scss file and importing it in head (like a normal CSS file) 
  however this way is more "svelty"
-->
<style lang="scss">
// variables are from variables.scss (auto imported)
h1 {
  font-size: 48px;
  color: $sassy-duck-color;
  text-align: center;
}
p {
  color: $sassy-duck-color;
  padding: 1rem;
  @media (min-width: 768px) {
    text-align: center;
    font-size: 1.5rem;
  }
}

main {
  background-image: linear-gradient(
    $sassy-duck-background-color-top,
    $sassy-duck-background-color-bottom
  );
}

.sassy-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0 1rem 0;

  img {
    width: 75%;
    background: linear-gradient(white, white) padding-box,
      linear-gradient(to right, white, $sassy-duck-color) border-box;
    border-radius: 0.5rem;
    border: 10px solid transparent;

    @media (min-width: 768px) {
      width: 40%;
    }
  }
  h2 {
    color: blanchedalmond;
    font-size: 38px;
    text-align: center;
    @media (min-width: 768px) {
      padding: 3rem;
    }
  }
  p {
    @include desc;
  }
}
</style>
