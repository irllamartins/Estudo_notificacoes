
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEwnbp_HJUx3Lsox56kB_4QMvioZGiT5o",
  authDomain: "estudo-notificacao.firebaseapp.com",
  projectId: "estudo-notificacao",
  storageBucket: "estudo-notificacao.appspot.com",
  messagingSenderId: "613507036757",
  appId: "1:613507036757:web:eb31f187df1ff1725746dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;