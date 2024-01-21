import React, { useState } from 'react';
import { generateLetter } from '../api'; 
import { Form, Button, TextField }  from './styles';

const LetterForm = ({ onGenerate }) => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); 
    try {
      const generatedLetter = await generateLetter(prompt);
      onGenerate(generatedLetter);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <TextField
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter prompt"
        />
        {loading ? <p>Generating letter...</p> : null}
        {error && <p>Error: {error.message}</p>}
        <Button type="submit">Generate</Button>
      </Form>
    </div>
  );
};

export default LetterForm;
