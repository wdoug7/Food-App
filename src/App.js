import React,{useEffect, useState} from 'react';
import Recipe from "./Recipe";
import './App.css';





const App = () => {
  



  const APP_ID = "a4d32116";
  const APP_KEY = "9da5876f4c511a3d4e1ba0b32dde8ee4"


  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query,setQuery] = useState('');

  useEffect( () => {
  getRecipes(); 
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };
  const updateSearch = e => {
    setSearch(e.target.value);
  };


  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  
  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
      <input 
      className="search-bar" 
      type="text"
      placeholder = "Search for Recipes Here"
       value={search} 
       onChange={updateSearch} 
      /> 
      <button className="search-button" type="submit">
        Search
      </button>
      </form>
      <div className='recipes'>
      {recipes.map(recipe => (
        <Recipe 
        key = {recipe.recipe.label}
        title={recipe.recipe.label} 
        calories = {recipe.recipe.calories} 
        image  = {recipe.recipe.image}
        ingredients = {recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
