import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";

const genAI = new GoogleGenerativeAI('AIzaSyCcphAS2BhCB1xBwGJhc2xsXoG4KzBKzhs');


export const generateLetter = async (prompt) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});

    const result = await model.generateContent(prompt);
    const response = await result.response;

    return response.text();
  } catch (error) {
    throw error;
  }
};

export default generateLetter;
