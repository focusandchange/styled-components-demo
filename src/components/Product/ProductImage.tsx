import React from 'react';
import styled from 'styled-components';

interface ImageUrl {
  imageUrl: string
}

const Image = styled.img`
  width: 200px;
  height: 200px;
`;

function ProductImage({ imageUrl }: ImageUrl) {
  return (
    <Image src={imageUrl}></Image>
  )
}

export { ProductImage };