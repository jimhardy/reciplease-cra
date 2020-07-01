import React, { createContext, useState } from 'react';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import ingredientsDb from '../localDataSources/ingredientsDb';

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

    const predictiveSearch = (event) => {
        // console.log(event.name);
        // console.log(ingredientsDb)
        const matches = ingredientsDb.filter(ingredient => {
            const regex = new RegExp(event.name, 'gi')
            return ingredient.name.match(regex)
        })
        console.log(matches);
        // look at wesbos javascript 30 predictive search
        // feed in array of ingredients - local, but with an aim to populate with supermarket data
    }

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
        <IngredientsContext.Provider value={{ ingredients, addIngredient, removeIngredient, saveIngredient, editIngredient, predictiveSearch }}>
            {props.children}
        </IngredientsContext.Provider>
    );
};

export default IngredientsContextProvider;
