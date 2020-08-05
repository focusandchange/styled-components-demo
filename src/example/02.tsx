import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  primary?: boolean
}

function Demo() {
  const Button = styled.button<ButtonProps>`
    background: ${props => props.primary ? 'palevioletred': 'white'};
    color: ${props => props.primary ? 'white': 'palevioletred'};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    `;

  return (
    <div>
      <Button>Noraml</Button>
      <Button primary>Primary</Button>
    </div>
  )
}

export default Demo;