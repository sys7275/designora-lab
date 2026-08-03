import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlmoJeGQqU3mY7quJZrbOlqNG4clMovaQ",
  authDomain: "designora-labs.firebaseapp.com",
  projectId: "designora-labs",
  storageBucket: "designora-labs.firebasestorage.app",
  messagingSenderId: "932776061642",
  appId: "1:932776061642:web:4f4dbce979bf93d9dca233",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// NEW
export const db = getFirestore(app);

export default app;