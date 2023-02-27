import { useEffect } from 'react'
import './App.css';
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import messaging from './firebase'

function App() {

   async function requestPermission() {

    console.log('Requesting permission...');
    await Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      //generate token
      const token =  getToken(messaging,
        {
          vapidKey: 'BFOCGLD3ay_ujz7cXdx3ka9Wk30wQ9rOyn0Jf93nj_HfyvbL15Dc33A1v-0_o_W730F79o6B-ZdanmxipdXpbxI'
        })
      console.log('Togen gen', token);
    } else if (permission === 'denied') {
      alert('No registration token available');

    }
  })
   
  }
  useEffect(() => {
    requestPermission()
  }, [])

  return (
    <div className="App">

      <h1>Estudo de aplicação web notificações</h1>
    </div>
  );
}

export default App;
