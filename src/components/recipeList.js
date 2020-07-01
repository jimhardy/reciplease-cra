import React, { useContext } from 'react';
import Ingredient from './Ingredient';
import IngredientForm from './IngredientForm';
import { IngredientsContext } from '../context/IngredientsContext';

export const RecipeList = () => {
    const { ingredients } = useContext(IngredientsContext);

    return (
        <div>
            <div className="recipes-list">
                <ul>
                    {recipes.map((recipe) => (
                        <>
                            {recipe.editing ? (
                                <recipeForm recipe={recipe} />
                            ) : (
                                    <recipe recipe={recipe} key={recipe.id} />
                                )}
                        </>
                    ))}
                </ul>
            </div>

            <IngredientForm />
        </div>
    );
};
