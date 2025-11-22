import React from "react";
import Form from "./Form.jsx";
import Recipe from "./Recipe.jsx";

export default function MainBody() {
  const [recipeShown, setrecipeShown] = React.useState(false);

  function toggleRecipe() {
    setrecipeShown(true);
  }

  return (
    <main>
      <Form>
        {(ingredients) => (
          <>
            {ingredients.length >= 4 ? (
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

            {recipeShown ? <Recipe /> : null}
          </>
        )}
      </Form>
    </main>
  );
}
