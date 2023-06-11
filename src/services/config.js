import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDQ9jVyHAkiCVuKdfe6KSybt_vXLDigtog",
    authDomain: "ecommerce-react-42482.firebaseapp.com",
    projectId: "ecommerce-react-42482",
    storageBucket: "ecommerce-react-42482.appspot.com",
    messagingSenderId: "605006046527",
    appId: "1:605006046527:web:44ea1008fd06ab62addf8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);