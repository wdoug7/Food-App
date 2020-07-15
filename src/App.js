import React,{useEffect, useState} from 'react';
import Recipe from "./Recipe";
import './App.css';

const App = () => {
  
  const APP_ID = "a4d32116";
  const APP_KEY = "9da5876f4c511a3d4e1ba0b32dde8ee4"


  const [recipes, setRecipes] = useState([]);

  useEffect( () => {
  getRecipes()  
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  return(
    <div className="App">
      <form className="search-form">
      <input className="search-bar" type="text"/>
      <button className="search-button" type="submit">
        Search
      </button>
      </form>
      {recipes.map(recipe => (
        <Recipe 
        key = {recipe.recipe.label}
        title={recipe.recipe.label} 
        calories = {recipe.recipe.calories}
        image  = {recipe.recipe.image}
        />
      ))}
    </div>
  );
}

export default App;
