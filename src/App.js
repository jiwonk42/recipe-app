import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {
  const APP_ID = "d5709585";
  const APP_KEY = "5f0e6246728c7016bad715bc3089d9bc";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes =async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
};

export default App;
