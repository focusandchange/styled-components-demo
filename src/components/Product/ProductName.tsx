import React from 'react';
import styled from 'styled-components';

interface Title {
  title: string
}

const Name = styled.div`
  font-size: 26px;
  font-weight: 500;
  text-align: center;
`;

function ProductName({ title }: Title) {
  return (
    <Name>{title}</Name>
  )
}

export { ProductName };