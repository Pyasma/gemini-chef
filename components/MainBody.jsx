import React from "react";
import Form from "./Form.jsx";
import Recipe from "./Recipe.jsx";
import { getRecipeUsingGemini } from "./gemini.js";

export default function MainBody() {
  const [recipeShown, setrecipeShown] = React.useState(false);
  const [hasEnoughIngredients, setHasEnoughIngredients] = React.useState(false);
  const [lastIngredients, setLastIngredients] = React.useState([]);
  const [recipeMarkdown, setRecipeMarkdown] = React.useState("");

  async function getRecipe() {
    const markdown = await getRecipeUsingGemini(lastIngredients);
    setRecipeMarkdown(markdown);
  }

  function toggleRecipe() {
    getRecipe();
    setrecipeShown(true);
  }

  return (
    <main>
      <Form
        onIngredientsUpdated={(ingredients) => {
          setLastIngredients(ingredients);
          setHasEnoughIngredients(ingredients.length >= 4);
        }}
      />
      {hasEnoughIngredients ? (
        <div className="hero">
          <section className="send-box">
            <div>
              <h3 className="head-name">Ready for a recipe?</h3>
              <p className="Explain">
                Generate a recipe from your list of ingredients
              </p>
            </div>
            <button onClick={toggleRecipe} className="gen-btn">
              Get a recipe
            </button>
          </section>
        </div>
      ) : null}
      {recipeShown ? <Recipe text={recipeMarkdown} /> : null}
    </main>
  );
}
