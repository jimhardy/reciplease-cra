import React from 'react';
import { DeleteIngredient } from './DeleteIngredient';
import { useIngredients } from '../hooks';

export const IngredientList = () => {
  const { ingredients } = useIngredients();
  let pantryName = '';
  return (
    <div className="ingredients" data-testid="ingredients">
      <h2 data-testid="pantryName">{pantryName}</h2>
      <ul className="ingredients__list">
        {ingredients.map((ingredient) => (
          <li key={`${ingredient.id}`}>
            <DeleteIngredient id={ingredient.id} />
            <span>{ingredient.ingredient}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
