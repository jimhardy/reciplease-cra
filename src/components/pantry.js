// list component - add or remove ingredients and amounts
import React from 'react';

// gets list from data source (local for testing?)
// displays listItem for each item
// 'new item' button at bottom of list
export const List = () => {
  return (
    <div>
      <h1>I am a list component</h1>
      <ul>
        <li>
          <ListItem />
        </li>
        <li>
          <ListItem />
        </li>
        <li>
          <ListItem />
        </li>
      </ul>
    </div>
  );
};

// input field for name of ingredient - search lookup field api
// search lookup api - can this return measures? ml for liquids, or g for solids? lbs, cups etc too?
const ListItemForm = () => { };

// contains item, quantity and measure.
// increase quantity, decrease quantity, remove buttons, edit?
// could listItem and ListItemForm be the same comp?
const ListItem = () => {
  return (
    <div>
      <input></input>
    </div>
  )
};
