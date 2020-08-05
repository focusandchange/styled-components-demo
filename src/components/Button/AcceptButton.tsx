import React from 'react';
import styled from 'styled-components';

interface HandleCalcPrice {
  handleCalcPrice: () => any
}

const Button = styled.button`
  background-color: #4f64ed;
  margin-top: 20px; 
  border: none;
  outline: none;
  padding: 15px 85px; 
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #2b45ed;
  }
`;

function AcceptButton({handleCalcPrice}: HandleCalcPrice) {
  return (
    <Button onClick={handleCalcPrice}>Accept</Button>
  )
}

export { AcceptButton };