import React from 'react';
// import './App.css';
import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';
// import { Nav } from './components/layout/Nav';
import { List } from './components/pantry';
import IngredientsContextProvider from './context/IngredientsContext';
import RecipesContextProvider from './context/RecipesContext';
require('dotenv').config();

export const App = () => {
  return (
    <div className="App">
      <IngredientsContextProvider>
        <RecipesContextProvider>
          <Header />
          <Content />
        </RecipesContextProvider>
      </IngredientsContextProvider>
    </div>
  );
};
