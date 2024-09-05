import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAM_uJYz4ZktLpr8tQRL5DJ1yzj-RRRb0",
  authDomain: "fir-prac-65832.firebaseapp.com",
  databaseURL: "https://fir-prac-65832-default-rtdb.firebaseio.com",
  projectId: "fir-prac-65832",
  storageBucket: "fir-prac-65832.appspot.com",
  messagingSenderId: "54189308641",
  appId: "1:54189308641:web:cae1a7a075096530a355a0",
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);
