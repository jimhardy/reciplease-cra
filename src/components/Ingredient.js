import React, { useContext } from 'react';
import { IngredientsContext } from '../context/IngredientsContext';

const Ingredient = ({ ingredient }) => {
    const { name, quantity, measurement, id } = ingredient;
    const { removeIngredient, editIngredient } = useContext(IngredientsContext)
    return (
        <li>
            <div>
                <span className='ingredient-name'>{name} </span>
                <span className='ingredient-amount'>{quantity}</span>
                <span className='ingredient-amount'>{measurement}</span>
                <span><button onClick={() => editIngredient(ingredient)}>Edit</button></span>
                <span><button onClick={() => removeIngredient(id)}>Delete</button></span>
            </div>

        </li>
    );
};

export default Ingredient;