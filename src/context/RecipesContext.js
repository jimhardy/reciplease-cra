import React, { createContext, useState } from 'react';
import moment from 'moment';
const { v4: uuidv4 } = require('uuid');

export const IngredientsContext = createContext();

const IngredientsContextProvider = (props) => {
    const [ingredients, setIngredients] = useState([
        {
            id: uuidv4(),
            name: 'rice',
            quantity: 500,
            measurement: 'grams',
            editing: false,
            timeStamp: 1593359651392,
        },
        {
            id: uuidv4(),
            name: 'pasta',
            quantity: 500,
            measurement: 'grams',
            editing: false,
            timeStamp: 1593359651393,
        },
    ]);

    const addIngredient = (name, quantity, measurement) => {
        setIngredients([
            ...ingredients,
            {
                id: uuidv4(),
                name,
                quantity,
                measurement,
                editing: false,
                timeStamp: Date.now(),
            },
        ]);
    };

    const saveIngredient = (ingredient) => {

        const { id, name, quantity, measurement, timeStamp } = ingredient;
        if (name) {
            const timeStampTest = timeStamp ? timeStamp : Date.now();
            const filteredIngredients = ingredients.filter(
                (ingredient) => ingredient.id !== id
            );
            const newList = [
                ...filteredIngredients,
                {
                    id: id || uuidv4(),
                    name,
                    quantity,
                    measurement,
                    timeStamp: timeStampTest,
                    editing: false,
                },
            ];
            const sortedArr = newList.sort((a, b) => a.timeStamp - b.timeStamp);
            setIngredients([...sortedArr]);
            console.log('ingredient list: ', sortedArr);
        } else {
            console.log('No ingredient');

        }
    };

    const editIngredient = (ingredient) => {
        const { id, name, quantity, measurement, timeStamp } = ingredient;
        const filteredIngredients = ingredients.filter(
            (ingredient) => ingredient.id !== id
        );
        const newList = [
            ...filteredIngredients,
            { id, name, quantity, measurement, timeStamp, editing: true },
        ];
        const sortedArr = newList.sort((a, b) => a.timeStamp - b.timeStamp);
        setIngredients([...sortedArr]);
    };

    const removeIngredient = (id) => {
        setIngredients(ingredients.filter((ingredient) => ingredient.id !== id));
    };

    return (
        <IngredientsContext.Provider
            value={{
                ingredients,
                addIngredient,
                removeIngredient,
                saveIngredient,
                editIngredient,
            }}
        >
            {props.children}
        </IngredientsContext.Provider>
    );
};

export default IngredientsContextProvider;
