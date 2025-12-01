import React from "react";

export default function Form(props) {
  const [ingredients, setIngredients] = React.useState([]);
  const [isShown, setIsShown] = React.useState(false);

  const ingredientListitems = ingredients.map((item) => (
    <li key={item}>{item}</li>
  ));

  function addIngredients(formData) {
    const newIngredient = formData.get("ingredient");
    const updatedList = [...ingredients, newIngredient];

    setIngredients(updatedList);
    props.onIngredientsUpdated(updatedList);
  }

  function toggleShown() {
    setIsShown(true);
  }

  return (
    <>
      <form action={addIngredients} className="inputs">
        <input
          type="text"
          placeholder="e.g. oregano"
          className="input-field"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button onClick={toggleShown} className="add-btn">
          + Add ingredient
        </button>
      </form>
      <div className="list">
        {isShown ? <h1>Ingredients on hand:</h1> : null}
        <ul>{ingredientListitems}</ul>
      </div>
    </>
  );
}
