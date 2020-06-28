import React, { createContext, useState } from 'react';
import moment from 'moment';
const { v4: uuidv4 } = require('uuid');

export const IngredientsContext = createContext();

const IngredientsContextProvider = (props) => {

    const [ingredients, setIngredients] = useState([
        { id: 1, name: 'rice', quantity: 500, measurement: 'grams', editing: false, timeStamp: 1593359651392 },
        { id: 2, name: 'pasta', quantity: 500, measurement: 'grams', editing: false, timeStamp: 1593359651393 },
    ]);

    const addIngredient = (name, quantity, measurement) => {
        setIngredients([
            ...ingredients, { id: uuidv4(), name, quantity, measurement, editing: false, timeStamp: Date.now() }
        ])
    };

    const saveIngredient = (ingredient) => {
        const { id, name, quantity, measurement, timeStamp } = ingredient;
        const timeStampTest = timeStamp ? timeStamp : Date.now();
        const filteredIngredients = ingredients.filter(ingredient => ingredient.id !== id);
        const newList = [
            ...filteredIngredients,
            { id: id || uuidv4(), name, quantity, measurement, timeStamp: timeStampTest },
        ];
        console.log('NEW LIST');

        console.log(newList);

        const sortedArr = newList.sort((a, b) => a.timeStamp - b.timeStamp);
        console.log('SORTED BY DATE');

        console.log(sortedArr);

        setIngredients([
            ...sortedArr
        ])
    };

    const setEditing = (id) => {

    }

    const removeIngredient = (id) => {
        setIngredients(ingredients.filter(ingredient => ingredient.id !== id));
    };


    return (
        <IngredientsContext.Provider value={{ ingredients, addIngredient, removeIngredient, saveIngredient }}>
            {props.children}
        </IngredientsContext.Provider>
    )
}

export default IngredientsContextProvider;
