import React from "react";
import Markdown from "react-markdown";
export default function Recipe({ text }) {
  return (
    <div className="recipe-card">
      <h1>Chef Gemini Recommends</h1>
      <Markdown>{text}</Markdown>
    </div>
  );
}
