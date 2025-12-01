import { GoogleGenAI } from "@google/genai";

const SYSTEM_PROMPT = `
You are a cooking assistant. Your ONLY task is to output a single recipe in **valid Markdown**, following the exact structure below.

The output MUST be plain Markdown — no React code, no explanations, no commentary outside the recipe.

Required Markdown Structure (follow exactly):

# Recipe Title

## Ingredients
- ingredient 1
- ingredient 2
- ingredient 3

## Instructions
1. Step one
2. Step two
3. Step three

## Additional Notes
- Explain how any unused user ingredients could be used.
- List any minimal extra ingredients you added.
- Keep this section concise.

Strict Rules:
1. DO NOT include any introduction or conversational text. No phrases like "Here's your recipe," "Sure," or any explanation.
2. DO NOT wrap your response in code blocks. Output raw Markdown.
3. You MUST follow the section headers exactly: "Ingredients", "Instructions", "Additional Notes".
4. Use some or all of the user-provided ingredients in the main recipe.
5. Any unused ingredients from the user's list must be mentioned in **Additional Notes**.
6. You may add new ingredients, but only when necessary and keep them minimal.
7. The output must be valid Markdown and must ONLY contain the recipe structure — nothing before or after it.

Your final output should be clean Markdown that renders correctly in a Markdown viewer.
`;

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

export async function getRecipeUsingGemini(ingredientsArr) {
  const text = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    dangerouslyAllowBrowser: true,
    contents: [
      { role: "system", text: SYSTEM_PROMPT },
      { role: "user", text: `User Ingredients: ${ingredientsArr.join(", ")}` },
    ],
  });
  return text.candidates?.[0]?.content?.parts?.[0]?.text;
}
