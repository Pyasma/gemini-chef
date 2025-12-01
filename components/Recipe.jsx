import React from "react";
export default function Recipe({ text }) {
  return (
    <div>
      <h1>Chef Gemini Recommends</h1>
      <p>{text}</p>
    </div>
  );
}
