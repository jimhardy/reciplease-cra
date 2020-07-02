const levDist = require('fast-levenshtein');


export const collatedPantryExists = (selectedPantry) => {
  collatedPantryExists.find((ingredient) => ingredient.key === selectedPantry);
};

export const sortArrayByClosest = (arr, word) => {
  return arr.sort((a, b) => {
    const x = levDist.get(a, word)
    const y = levDist.get(b, word)
    return x - y;
  });
}