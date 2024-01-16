import React from 'react';
import { TextArea } from './styles';

const Generated = ({ letter }) => {
  return (
    <div>
      <h2>Generated Letter:</h2>
      <TextArea>
        {letter}
      </TextArea>   
    </div>
  );
};

export default Generated;
