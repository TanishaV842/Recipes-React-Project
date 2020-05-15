import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, source, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ul>
        {ingredients.map((ingredients) => (
          <li>{ingredients.text}</li>
        ))}
      </ul>
      <p>{source}</p>
      <button className="recipeButtons">Nutrition Facts</button>
      <img className={style.image}src={image} alt="Recipe Info" />
    </div>
  );
};
export default Recipe;
