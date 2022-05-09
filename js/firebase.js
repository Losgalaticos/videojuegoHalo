
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-analytics.js";
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
    measurementId: "G-JBXJNE5GMC",
    apiKey: "AIzaSyBXSy7pYvtNtilICU_QA5ULBOZPiblmoSM",
    authDomain: "halo-85f50.firebaseapp.com",
    projectId: "halo-85f50",
    storageBucket: "halo-85f50.appspot.com",
    messagingSenderId: "781575285151",
    appId: "1:781575285151:web:268c808b312044cf2535aa",
    measurementId: "G-C68LFJ7WD6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
