import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {
  const APP_ID = "d5709585";
  const APP_KEY = "5f0e6246728c7016bad715bc3089d9bc";
  const sampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">{counter}</button>
      </form>
    </div>
  );
};

export default App;
