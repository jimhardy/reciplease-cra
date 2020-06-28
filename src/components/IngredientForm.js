import React, { useContext, useState, useEffect } from 'react';
import { IngredientsContext } from '../context/IngredientsContext';

const IngredientForm = (props) => {
    // const { name, quantity, measurement, id } = ingredient;
    const { saveIngredient } = useContext(IngredientsContext);
    const [ingredient, setIngredient] = useState({
        id: props.ingredient && props.ingredient.id || '',
        name: props.ingredient && props.ingredient.name || '',
        quantity: props.ingredient && props.ingredient.quantity || '',
        measurement: props.ingredient && props.ingredient.measurement || '',
        timeStamp: props.ingredient && props.ingredient.timeStamp || '',
    });

    const handleChange = e => {
        const { name, value } = e.target
        setIngredient({ ...ingredient, [name]: value })
    }

    const handleSave = () => {
        saveIngredient({ ...ingredient });
        setIngredient({
            id: '',
            name: '',
            quantity: '',
            measurement: '',
            timeStamp: '',
        })
    }

    return (
        <li>
            <div>
                <span> <input name='name' value={ingredient.name} className='ingredient-form-name' onChange={handleChange} /></span>
                <span> <input name='quantity' value={ingredient.quantity} className='ingredient-form-amount' onChange={handleChange} /></span>
                <span> <input name='measurement' value={ingredient.measurement} className='ingredient-form-amount' onChange={handleChange} /></span>
                <span><button onClick={handleSave}>Save</button></span>
            </div>

        </li>
    );
};

export default IngredientForm;