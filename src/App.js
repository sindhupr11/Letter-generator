import React from 'react';
import { Container, Wrapper, Title, TextField, Button, TextArea } from './AppStyle';

function App() {
  return (
    <Container>
      <Wrapper>
        <Title>Letter Generator using PaLM API</Title>
        <TextField placeholder="Enter prompt" />
        <Button>Generate</Button>
        <TextArea>Generated Text</TextArea>
      </Wrapper>
    </Container>
  );
}

export default App;
