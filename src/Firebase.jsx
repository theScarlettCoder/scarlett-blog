import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD844-F6tKZjVsOwS0QKUlG0DIzGq98Wys",
  authDomain: "scarlett-blog.firebaseapp.com",
  projectId: "scarlett-blog",
  storageBucket: "scarlett-blog.appspot.com",
  messagingSenderId: "289588563038",
  appId: "1:289588563038:web:3530aa863a2c12297838cf",
  measurementId: "G-J46NGMVYJF",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };
