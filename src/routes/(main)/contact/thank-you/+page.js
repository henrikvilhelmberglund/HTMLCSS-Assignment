export const prerender = false;
/** @type {import('./$types').PageLoad} */
let defaultTitle = "Ankademin Cafe - ";
export async function load() {
  return {
    title: defaultTitle + "Contact - Thank you",
  };
}
