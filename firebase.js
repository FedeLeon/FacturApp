// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAh0qag4mlcWHTEKAYUDzkTZ2760jQ_6hc",

  authDomain: "facturapp-14d1f.firebaseapp.com",

  databaseURL: "https://facturapp-14d1f-default-rtdb.firebaseio.com/",

  projectId: "facturapp-14d1f",

  storageBucket: "facturapp-14d1f.appspot.com",

  messagingSenderId: "76841054213",

  appId: "1:76841054213:web:61f1eb98db211472c56c6c",

  measurementId: "G-6X880N7P32",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

console.log(database);
