import React, { useContext } from 'react';
import Ingredient from './Ingredient';
import IngredientForm from './IngredientForm';
import { IngredientsContext } from '../context/IngredientsContext';
import { RecipesContext } from '../context/RecipesContext';

export const IngredientList = () => {
  const { ingredients } = useContext(IngredientsContext);
  const { getRecipes } = useContext(RecipesContext);

  const getNewRecipes = async () => {
    const recipes = await getRecipes(ingredients);
    console.log(recipes);

  }

  return (
    <div>
      {ingredients.length ? (
        <div className="ingredients-list">
          <ul>
            {ingredients.map((ingredient) => (
              <>
                {ingredient.editing ? (
                  <IngredientForm ingredient={ingredient} />
                ) : (
                    <Ingredient ingredient={ingredient} key={ingredient.id} />
                  )}
              </>
            ))}
          </ul>
        </div>
      ) : (
          <div className="emptyPantry">
            <h1>No Ingredients!</h1>
          </div>
        )}
      <IngredientForm />
      <button onClick={getNewRecipes}>Search</button>
    </div>
  );
};
