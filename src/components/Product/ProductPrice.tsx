import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { ProductDiscount } from './ProductDiscount';

interface PriceProps {
  discount?: boolean
}

interface ProductPriceProps {
  originalPrice: string; // 原价
  discountPrice: string;// 折扣价
  discountRate: number; // 折扣率
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

export const ProductPrice = ({ originalPrice, discountPrice, discountRate }: PropsWithChildren<ProductPriceProps>) => {
  return (
    <>
      <div>
        <Price discount>${ discountPrice }</Price>
        <Price>${ originalPrice }</Price>
      </div>
      <ProductDiscount discountRate={ discountRate } />
    </>
  )
};