const elvenShieldRecipe = {
  leathersStips: 2,
  ironIngot: 1,
  refineMoonstone: 4,
};

const elvenGauntletsRecipe = {
  ...elvenShieldRecipe,
  leather: 1,
  refineMoonstone: 5,
};

console.log(elvenShieldRecipe);
console.log(elvenGauntletsRecipe);
