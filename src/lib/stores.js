import { writable } from "svelte/store";
import { writable as localstore } from "svelte-local-storage-store";

export const darkStore = writable(false);
export const menuClicked = writable(false);
export const userReview = localstore("Ankademin Cafe Reviews", []);
