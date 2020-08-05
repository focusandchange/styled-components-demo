import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

interface PriceProps {
  discount?: boolean
  priceMin: number
  priceMax: number
  [propName: string]: any
}

const Price = styled.span<PriceProps>`
  display: inline-block;
  font-size: 25px;
  font-weight: bold;
  margin: 5px;
  color: ${props => props.discount ? '#4f64ed' : '#493736'};
  text-decoration: ${props => props.discount ? 'none' : 'line-through'};
  margin-top: 20px; 
  position: relative;
`;

function ProductPrice({ priceMin, priceMax }: PropsWithChildren<PriceProps>) {
  return (
    <div>
      <Price discount>${priceMin}</Price>
      <Price>${priceMax}</Price>
    </div>
  )
}

export { ProductPrice };