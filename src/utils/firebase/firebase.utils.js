import { initializeApp } from "firebase/app"; // humne jo app banaya hai firebase me usko import kar rhe hai as connection bana rhe hai
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore"; // imported now create intenace and make DB

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3QVLy9FnmT6np9qYObwDnmj_wrKYMdlw",
  authDomain: "e-come-db-364e9.firebaseapp.com",
  projectId: "e-come-db-364e9",
  storageBucket: "e-come-db-364e9.appspot.com",
  messagingSenderId: "429322436585",
  appId: "1:429322436585:web:866365e0391fd319d1d578",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  // strore here firebase store
  const userDocRef = doc(db, `users`, userAuth.uid); // checking doc alredy exist
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef); // it is also dta and spacial object
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  // user snapshot if the user data not exist yet
  if (!userSnapshot.exists()) {
    // create user data
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(`User creating the eeror: ${error.message}`);
    }
    // if user data exists
    return userDocRef;
  }
};
