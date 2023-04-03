import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAuPNWUVlIAjFKxteuu022LAa2mjKO7x0A",
    authDomain: "react-6b32c.firebaseapp.com",
    projectId: "react-6b32c",
    storageBucket: "react-6b32c.appspot.com",
    messagingSenderId: "1084217702516",
    appId: "1:1084217702516:web:482973efb8841f8f3ff921"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default firebaseConfig;