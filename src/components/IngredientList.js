import React, { useContext } from 'react';
import Ingredient from './Ingredient';
import IngredientForm from './IngredientForm'
import { IngredientsContext } from '../context/IngredientsContext';

export const IngredientList = () => {

  const { ingredients } = useContext(IngredientsContext)

  return (
    <div>
      {ingredients.length ? (
        <div className='ingredients-list'>
          <ul>
            {ingredients.map(ingredient => (
              <>
                <Ingredient ingredient={ingredient} key={ingredient.id} />
                <IngredientForm ingredient={ingredient} />
              </>
            ))}
          </ul>
        </div>
      ) : (
          <div className='emptyPantry'>
            <h1>No Ingredients!</h1>
          </div>
        )}
      <IngredientForm />
    </div>
  )
};
