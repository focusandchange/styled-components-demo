import React from 'react';
import styled from 'styled-components';

const Discount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border: 1px solid #4f64ed;
  color: #4f64ed;
  width: 80px;
  border-radius: 40px;
  margin-top: 20px; 
`;

function ProductDiscount() {
  return (
    <Discount>90% OFF</Discount>
  )
}

export { ProductDiscount };