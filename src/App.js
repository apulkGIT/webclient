import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [ msg, setMsgState ] = useState(""); 
  const apiKey = process.env.REACT_APP_API_KEY2;
//  const host = process.env.MY_HOST2;
  useEffect(() => {
    fetch("http://87.92.70.41:9999/log",{
      method: "POST",
      headers: new Headers({"Content-Type": "application/json"}),
      body: JSON.stringify({name:"Mina"}),
      referrerPolicy: "unsafe-url" 
    }).then(response => response.json())
      .then(responsejson => {
      setMsgState(responsejson.message);
     });  

  });

  return (
    <div className="App">
	<h1>Welcome to my react test page:</h1>
        <p>Blaa blaa...</p>
        <p>You can't click me!</p>
	<p>Secret: {apiKey}</p>
        <p>From server msg: {msg}</p>
    </div>
  );
}

export default App;
