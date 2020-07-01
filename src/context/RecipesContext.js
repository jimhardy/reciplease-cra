import React, { createContext, useState, useContext } from 'react';
import moment from 'moment';
import { IngredientsContext } from '../context/IngredientsContext';
import axios from 'axios';

const { v4: uuidv4 } = require('uuid');

export const RecipesContext = createContext();

const RecipesContextProvider = (props) => {
    const { ingredients } = useContext(IngredientsContext);
    const [recipes, setRecipes] = useState([{}])

    const getRecipes = async (ingredients) => {
        const query = ingredients.map(ingredient => {
            return `+${ingredient.name}`
        })
        console.log(query.toString());

        try {
            const config = {
                method: 'get',
                url: `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${query.toString()}&number=2&apiKey=${process.env.REACT_APP_SPOON_APIKEY}`,
            };
            const response = await axios(config)
            return response.data;
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <RecipesContext.Provider
            value={{
                recipes,
                getRecipes
            }}
        >
            {props.children}
        </RecipesContext.Provider>
    );
};

export default RecipesContextProvider;
