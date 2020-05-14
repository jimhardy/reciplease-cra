export const collatedPantryExists = (selectedPantry) => {
  collatedPantryExists.find((ingredient) => ingredient.key === selectedPantry);
};
