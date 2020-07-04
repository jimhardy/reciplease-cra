import React, { useContext } from 'react';
import Ingredient from './Ingredient';
import IngredientForm from './IngredientForm';
import { IngredientsContext } from '../context/IngredientsContext';
import { RecipesContext } from '../context/RecipesContext';

export const IngredientList = () => {
  const { ingredients } = useContext(IngredientsContext);
  const { recipes, getRecipes } = useContext(RecipesContext);

  const getNewRecipes = async () => {
    const recipes = await getRecipes(ingredients);
    console.log(recipes);

  }
  console.log(recipes);


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
      <div className='recipes-list'>
        {recipes.length ? (
          <div className="recipes-list">
            <ul>
              {recipes.map((recipe) => (
                <>
                  <h1>{recipe.title}</h1>
                  <img src={recipe.image} />
                  <h2>Ingredients</h2>
                  <ul>
                    {recipe.usedIngredients ? (
                      recipe.usedIngredients.map(ingredient => (
                        <li>{ingredient.name}</li>
                      ))
                    ) : null}
                    {recipe.missedIngredients ? (
                      recipe.missedIngredients.map(ingredient => (
                        <li>{ingredient.name}  *missing</li>
                      ))
                    ) : null}
                  </ul>
                </>
              ))}
            </ul>
          </div>
        ) : null}

      </div>
    </div>
  );
};
