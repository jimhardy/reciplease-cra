import React from 'react';
// import './App.css';
import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';
// import { Nav } from './components/layout/Nav';
import { List } from './components/pantry';
import IngredientsContextProvider from './context/IngredientsContext';

export const App = () => {
  return (
    <div className="App">
      <IngredientsContextProvider>
        <Header />
        <Content />

      </IngredientsContextProvider>

    </div>
  );
};
