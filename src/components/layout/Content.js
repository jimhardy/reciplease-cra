import React, { useContext } from 'react';
// import { Sidebar } from './Sidebar';
import { IngredientList } from '../IngredientList';
import IngredientsContextProvider, { IngredientsContext } from '../../context/IngredientsContext';


export const Content = () => {
  const { ingredients } = useContext(IngredientsContext);
  return (
    <div>
      <h1>Ingredients</h1>
      <IngredientList ingredients={ingredients} />
    </div>
  );
};
