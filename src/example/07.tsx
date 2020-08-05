import React from 'react';
import styled from 'styled-components';

const Input = styled.input.attrs(props => ({
  type: 'password',
  size: props.size || '1em'
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  margin: ${props => props.size};
  padding: ${props => props.size};
`;

function Demo() {
  return (
    <div>
      <Input placeholder='A small text input'></Input>
      <br />
      <Input placeholder="A bigger text input" size="2em" />
    </div>
  )
}

export default Demo;