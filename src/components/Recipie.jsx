import { useState } from "react";

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

const Recipie = () => {
  const [recipe, setRecipe] = useState({});

  return (
    <div>
      <h3>Current Recipes</h3>
      <button onClick={() => setRecipe(elvenShieldRecipe)}>Elven Shield Recipe</button>
      <button onClick={() => setRecipe(elvenGauntletsRecipe)}>Elven Gaunt Recipe</button>

      <ul>
        {Object.keys(recipe).map((material) => (
        <li>{material}: {recipe[material]}
        </li>
        ))}
      </ul>
    </div>
  )
}

export default Recipie;