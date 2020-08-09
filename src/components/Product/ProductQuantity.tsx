import React, { useMemo, FC, ChangeEvent } from 'react';
import styled from 'styled-components';

interface ProductQuantityProps {
  value: number;   // 初始的数量
  onChange: (value: number) => void; // 数量改变
}

interface InputProps {
  [propName: string]: any
}

const Button = styled.button`
  box-sizing: border-box;
  border: 0;
  padding: 0 10px;
  background-color: #ECECEC;
`;

const Input: FC<InputProps> = styled.input`
  max-width: 40px;
  text-align: center;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &[type="number"]{
      -moz-appearance: textfield;
  }
`;

export const ProductQuantity = ({ value, onChange }: ProductQuantityProps) => {
  const NumberInput = useMemo(() => (
    <>
      <Button onClick={ () => onChange(value - 1) }>-</Button>
      <Input 
        type='number' 
        min='1' 
        max='100' 
        value={ value }
        onChange={ (e: ChangeEvent<HTMLInputElement> ) => onChange(Number(e.target.value)) } />
      <Button onClick={ () => onChange(value + 1) }>+</Button>
    </>
  ), [value])

  return (
    <>
      { NumberInput }
    </>
  )
};