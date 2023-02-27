// Scripts for firebase and firebase messaging
/*importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');
*/

// Import the functions you need from the SDKs you need
/*import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

import { onBackgroundMessage } from "firebase/messaging/sw";
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


const messaging = getMessaging(app);

onBackgroundMessage(messaging, (payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
      body: 'Background Message body.',
      icon: '/firebase-logo.png'
    };
  
    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });
  */


 import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDEwnbp_HJUx3Lsox56kB_4QMvioZGiT5o",
  authDomain: "estudo-notificacao.firebaseapp.com",
  projectId: "estudo-notificacao",
  storageBucket: "estudo-notificacao.appspot.com",
  messagingSenderId: "613507036757",
  appId: "1:613507036757:web:eb31f187df1ff1725746dc"
};

function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      const app = initializeApp(firebaseConfig);

      const messaging = getMessaging(app);
      getToken(messaging, {
        vapidKey:
          "BCKNSY0FAgDlbgevvqBGsXdadLiRCrFR1wbWXqFYgQJOV3jX8nTSHAQzXcB91c6GGlmFwCfCcxCUK_UxDL7nTLA",
      }).then((currentToken) => {
        if (currentToken) {
          console.log("currentToken: ", currentToken);
        } else {
          console.log("Can not get token");
        }
      });
    } else {
      console.log("Do not have permission!");
    }
  });
}

requestPermission();