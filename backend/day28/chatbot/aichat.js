const { GoogleGenAI } = require('@google/genai');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API });

async function main(chatHistory) {
  const interaction = await ai.interactions.create({
    model: "gemini-3.6-flash",
    input: JSON.stringify(chatHistory)
  });

  return interaction.output_text;
}

module.exports = main;