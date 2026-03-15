import { auth } from "@/services/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const authService = {
    signUp: async( email: string, password: string, displayName: string) => {
        const credential = await createUserWithEmailAndPassword(auth, email, password);

        await updateProfile(credential.user, {
            displayName,
        });

        return credential.user;
    },


    SignIn: async (email: string, password: string) => {
        const credential = await signInWithEmailAndPassword(
        auth,
        email,
        password
        );

        return credential.user;
     },

     Logout: async () => {
        await signOut(auth);
     }


}

    