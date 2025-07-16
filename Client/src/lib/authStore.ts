import {browser} from "$app/environment";
import {auth} from "$lib/firebase.client";
import {writable} from "svelte/store";
import { onAuthStateChanged, type User } from "firebase/auth";

export const currentUser = writable<User | null>(null);
export const isLoggedIn = writable<boolean>(false);

if (browser) {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log("Hello")
            currentUser.set(user);
            isLoggedIn.set(true);
            console.log("Firebase user logged in: ", user.uid);
        } else {
            currentUser.set(null);
            isLoggedIn.set(false);
            console.log("Firebase user logged out.");
        }
    })
}
