import React from 'react';
import styled from 'styled-components';

function App() {
  const Button = styled.button<any>`
  background: ${(props: any) => props.primary ? "palevioletred" : "white"};
  color: ${(props: any) => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

  return (
    <div>
      <Button>Normal</Button>
      <Button primary>Primary</Button>
    </div>
  );
}

export default App;
