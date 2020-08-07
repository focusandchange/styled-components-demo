import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children?: any
}

function Demo() {
  const Button = styled.button`
    display: inline-block;
    color: palevioletred;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    display: block;
  `;

  const TomatoButton = styled(Button)`
    color: tomato;
    border-color: tomato;
  `;

  const ReversedButton = (props: ButtonProps) => <Button {...props} children={props.children.split('').reverse()}></Button>

  return (
    <div>
      <Button>Normal Button</Button>
      <Button as="a" href="/">Link with Button styles</Button>
      <TomatoButton as="a" href="/">Link with Tomato Button styles</TomatoButton>
      <Button as={ReversedButton}>Custom Button with Normal Button styles</Button>
    </div>
  )
}

export default Demo;