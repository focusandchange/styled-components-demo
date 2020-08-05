import React from 'react';
import styled, {keyframes} from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

function Demo() {
  return (
    <div>
      <Rotate>&lt; 💅🏾 &gt;</Rotate>
    </div>
  )
}

export default Demo;