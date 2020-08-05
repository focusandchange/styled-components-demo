import React from 'react';
import styled from 'styled-components';

interface HandleChangeNumber {
  productNumber: number,
  addProductNumber: () => void,
  reduceProductNumber: () => void
}

const Button = styled.button`
  box-sizing: border-box;
  border: 0;
  padding: 0 10px;
  background-color: #ECECEC;
`;

const Input = styled.input`
  max-width: 40px;
  text-align: center;
`;

function NumberBox({ productNumber, addProductNumber, reduceProductNumber }: HandleChangeNumber) {
  return (
    <>
      <Button onClick={reduceProductNumber}>-</Button>
      <Input value={productNumber}></Input>
      <Button onClick={addProductNumber}>+</Button>
    </>
  )
}

export { NumberBox };