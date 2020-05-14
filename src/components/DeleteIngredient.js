import React from 'react';
import { firebase } from 'firebase';

export const DeleteIngredient = ({ id }) => {
  const archiveIngredient = () => {
    firebase
      .firestore()
      .collection('pantry')
      .doc(id)
      .update({ archived: true });
  };
  return (
    <div
      className="deleteIngredient-holder"
      data-testid="deleteIngredient-action"
      onClick={() => archiveIngredient()}
    >
      <span className="deleteIngredient" />
    </div>
  );
};
