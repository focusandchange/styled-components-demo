import React from 'react';
import styled from 'styled-components';
import { SelectButton } from './SelectButton';
import { NumberBox } from './NumberBox';

interface HandleProduct {
  productNumber: number,
  addProductNumber: () => void
  reduceProductNumber: () => void,
  replaceVariant: (variantId: number) => void,
  variants: any
}

const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  height: 40px;
`;

function ButtonGroup({ productNumber, addProductNumber, reduceProductNumber, variants, replaceVariant }: HandleProduct) {
  return (
    <Wrapper>
      <SelectButton 
        replaceVariant={replaceVariant} 
        variants={variants}></SelectButton>
      <NumberBox 
        addProductNumber={addProductNumber} 
        reduceProductNumber={reduceProductNumber} 
        productNumber={productNumber}></NumberBox>
    </Wrapper>
  )
}  

export { ButtonGroup }