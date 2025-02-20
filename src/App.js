import './App.css';

function App() {
  const apiKey = process.env.REACT_APP_API_KEY2;
  return (
    <div className="App">
	<h1>Welcome to my react test page:</h1>
        <p>Blaa blaa...</p>
        <p>You can't click me!</p>
	<p>Secret: {apiKey}</p>
    </div>
  );
}

export default App;
