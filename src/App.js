import React, { useState } from 'react';
import { Container, Wrapper, Title } from './AppStyle'; 
import { LetterForm, Generated } from './components';

function App() {
  const [generatedLetter, setGeneratedLetter] = useState('');

  const handleGenerate = (letter) => {
    setGeneratedLetter(letter);
  };

  return (
    <Container>
      <Wrapper>
        <Title>Letter Generator using PaLM API</Title>
        <LetterForm onGenerate={handleGenerate} />
        {generatedLetter && <Generated letter={generatedLetter} />}
      </Wrapper>
    </Container>
  );
}

export default App;
