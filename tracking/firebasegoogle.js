// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAGFLQM1WG3M88VGLZKXHSuMSB4tY7ceQ",
  authDomain: "encrypted-messaging-center.firebaseapp.com",
  projectId: "encrypted-messaging-center",
  storageBucket: "encrypted-messaging-center.appspot.com",
  messagingSenderId: "1046409001973",
  appId: "1:1046409001973:web:5d430b013d3c6104e47ebc",
  measurementId: "G-FQDP65QYXE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
