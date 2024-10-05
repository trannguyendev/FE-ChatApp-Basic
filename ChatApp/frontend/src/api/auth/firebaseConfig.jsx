import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCMabmZzVegH-buOXA7VYYM78bh3AWcBjQ",
    authDomain: "chatapp-7e946.firebaseapp.com",
    databaseURL: "https://chatapp-7e946-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "chatapp-7e946",
    storageBucket: "chatapp-7e946.appspot.com",
    messagingSenderId: "427476401763",
    appId: "1:427476401763:web:76175113763a1b690c8256",
    measurementId: "G-BG4FB5X062"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
