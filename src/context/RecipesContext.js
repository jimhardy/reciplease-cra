import React, { createContext, useState } from 'react';
import moment from 'moment';
const { v4: uuidv4 } = require('uuid');

export const RecipesContext = createContext();

const RecipesContextProvider = (props) => {
    const [recipes, setRecipes] = useState([{}])

    const getRecipes = (ingredients) => {

    };



    return (
        <RecipesContext.Provider
            value={{
                recipes,
            }}
        >
            {props.children}
        </RecipesContext.Provider>
    );
};

export default RecipesContextProvider;
