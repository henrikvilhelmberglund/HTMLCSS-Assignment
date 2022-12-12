import { writable } from "svelte/store";

export const darkStore = writable(false);
export const menuClicked = writable(false);
export const userReview = writable([]);
