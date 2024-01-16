const OpenAI = require('openai').OpenAI;
const openai = new OpenAI({
  apiKey: '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'
})

export const generateLetter = async (prompt) => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
      {
        role: 'system',
        content: 'You are a letter generator. you generate letters based on the prompt from the user'
      },
      {
        role: 'user',
        content: prompt
      }
      ]
    });
    return response.choices[0].message.content;
  } catch (error) {
    throw error; 
  }
};

export default generateLetter
