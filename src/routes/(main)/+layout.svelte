<script>
import "../../app.scss";
import "../../app.postcss";
import { page } from "$app/stores";
import Footer from "$lib/Footer.svelte";
import Header from "$lib/Header.svelte";
import Breadcrumbs from "$lib/Breadcrumbs.svelte";
import Transition from "$lib/Transition.svelte";

// fonts
import "@fontsource/cherry-swash";
import "@fontsource/spartan";
import "@fontsource/nunito";
import "@fontsource/material-icons-outlined";
import "@fontsource/material-icons-rounded";
</script>

<svelte:head>
  <title>{$page.data.title}</title>
  <meta
    name="description"
    content="Ankademin Cafe is a wonderful place where you can have some Swedish fika and mingle with ducks. Out of luck? Pet a duck." />
</svelte:head>

<Header />
<Breadcrumbs />
{#key $page}
  <Transition>
    <slot />
  </Transition>
{/key}

<Footer />
