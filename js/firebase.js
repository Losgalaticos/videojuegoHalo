
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDzUbdh15PGy7BR4deHlAcHg_znNFIwX3c",
    authDomain: "halogame-80530.firebaseapp.com",
    projectId: "halogame-80530",
    storageBucket: "halogame-80530.appspot.com",
    messagingSenderId: "774440255657",
    appId: "1:774440255657:web:dc0188e6cefc9be9af29b8",
    measurementId: "G-JBXJNE5GMC"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
