import { useState, useEffect } from 'react';
import { firebase } from '../firebase';

// const collatedPantry = () => {};

// export const usePantry = (selectedPantry) => {
//   const [pantry, setPantry] = useState([]);

//   useEffect(() => {
//     let unsubscribe = firebase
//       .firestore()
//       .collection('pantry')
//       .where('userId', '==', '1');

//     unsubscribe = unsubscribe.onSnapshot((snapshot) => {
//       const newPantry = snapshot.docs.map((ingredient) => ({
//         id: ingredient.id,
//         ...ingredient.data(),
//       }));
//       setPantry(newPantry);
//     });
//     return () => unsubscribe();
//   }, [selectedPantry]);
//   return { pantry };
// };

export const useIngredients = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('pantry')
      .where('userId', '==', '1')
      .orderBy('ingredientId')
      .get()
      .then((snapshot) => {
        const allIngredients = snapshot.docs.map((ingredient) => ({
          ...ingredient.data(),
          docId: ingredient.id,
        }));
        if (JSON.stringify(allIngredients) !== JSON.stringify(ingredients)) {
          setIngredients(allIngredients);
        }
      });
  }, [ingredients]);
  return { ingredients, setIngredients };
};
