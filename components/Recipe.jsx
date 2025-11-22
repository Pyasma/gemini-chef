import React from "react";

export default function Recipe() {
  return (
    <div className="list">
      {" "}
      <section className="recipe">
        <h2 className="recipe-title">Recipe Title</h2>
        <article className="recipe-info">
          <h3>Ingredients</h3>
          <ul className="ingredient-list">
            <li>Example ingredient</li>
            <li>Example ingredient</li>
          </ul>
          <h3>Instructions</h3>
          <ol className="instruction-list">
            <li>Step one goes here.</li>
            <li>Step two goes here.</li>
          </ol>
          <h3>Additional Notes</h3>
          <p className="notes">
            Any extra tips or variations can be added here.
          </p>
        </article>
      </section>{" "}
    </div>
  );
}
