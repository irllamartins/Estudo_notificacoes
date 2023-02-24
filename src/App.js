import React from 'react'
import './App.css';
import app from './firebase'
import { getMessaging } from "firebase/messaging";

function App() {
  React.useEffect(()=>{
   const messaging = getMessaging(app);
    messaging.requestPermission().then(()=>{
      return messaging.getToken();
    }).then((data)=>{
      console.log("token",data)
    })
  })

  return ( 
    <div className="App">
     
        <h1>Estudo de aplicação web notificações</h1>
    </div>
  );
}

export default App;
