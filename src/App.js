import React, { useEffect, useState } from 'react';
import Recipe from './Components/Recipe';
import './App.css';





const App = () => {
    const APP_ID = 'f2f2a87c';
    const APP_KEY = 'd8f6963c03390e114622aeed334d2e74';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('pies');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
    
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    
    <div className="App">
      
      <div className="appHeader">Tasty Recipes Search</div>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          placeholder="e.g. desserts"
          onChange={updateSearch}
        />

        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipe">
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          source={recipe.recipe.source}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))};
    </div>
    </div>
    );
  };
    
  


export default App;
