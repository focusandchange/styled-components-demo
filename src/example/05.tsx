import React from 'react';
import styled from 'styled-components';

interface InputProps {
  inputColor?: string
}

function Demo() {
  const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: ${(props: InputProps) => props.inputColor || 'palevioletred'};
    background: papayawhip;
    border: none;
    border-radius: 3px;
  `;

  return (
    <div>
      <Input defaultValue='@probablyup' type='text' />
      <Input defaultValue='@geelen' type='text' inputColor='rebeccapurple' />
    </div>
  )
}

export default Demo;