<<<<<<< HEAD
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { writable } from "svelte/store";
import { auth } from "../lib/firebase/firebase";
=======
import { writable } from "svelte/store";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../lib/firebase/firebase'; // Ensure this path is correct
>>>>>>> origin/main

export const authStore = writable({
    user: null,
    loading: true,
    data: {}
<<<<<<< HEAD
})

export const authHandlers = {
    signup: async (email, pass) => {
        await createUserWithEmailAndPassword(auth, email, pass)
    },
    login: async (email, pass) => {
        await signInWithEmailAndPassword(auth, email, pass)
    },
    logout: async () => {
        await signOut(auth)
    }
}
=======
});

export const authHandlers = {
    signup: async (email, pass) => {
        await createUserWithEmailAndPassword(auth, email, pass);
    },
    
    login: async (email, pass) => {
        await signInWithEmailAndPassword(auth, email, pass);
    },

    logout: async () => {
        await signOut(auth);
    }
};
>>>>>>> origin/main
