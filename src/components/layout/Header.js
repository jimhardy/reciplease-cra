import React from 'react';
import { Nav } from './Nav';

export const Header = () => {
  const x = 1;
  return (
    <header className="header" data-testid="header">
      <Nav />
    </header>
  );
};
