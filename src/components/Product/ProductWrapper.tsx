import React, { useState } from 'react';
import styled from 'styled-components';
import { ProductImage, ProductName, ProductPrice, ProductDiscount } from './index';
import { ButtonGroup } from '../Button/ButtonGroup';
import { AcceptButton } from '../Button/AcceptButton'; 
import { CountDownView } from '../CountDown';

interface Data {
  productData: {
    [propName: string]: any
  },
  currentTime: number
}

const Wrapper = styled.div`
  width: 400px;
  margin: 50px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function ProductWrapper({ productData, currentTime }: Data) {  
  const [productState, changeProductState] = useState({
    id: productData.id,
    image: productData.images[0],
    title: productData.title,
    price_min: productData.price_min,
    price_max: productData.price_max,
    product_number: 1,
    variants: productData.variants
  });

  const addProductNumber = () => changeProductState({
    ...productState, 
    product_number: productState.product_number + 1
  });

  const reduceProductNumber = () => {
    if (productState.product_number > 1) {
      changeProductState({
        ...productState, 
        product_number: productState.product_number - 1
      })
    }
  }
  
  const replaceVariant = (variantId: number) => {
    const {id, title, image, price_min, price_max } = productData.variants.find((variant: any) => variant.id === variantId);

    changeProductState({
      ...productState,
      id,
      title,
      image,
      price_min,
      price_max
    })
  }

  const calcPrice = () => {
    let discountPrice = productState.price_min * 0.9 * productState.product_number;
    let originalPrice = productState.price_min * 0.9 * productState.product_number;

    console.log(`
                产品名称：${productState.title}
                产品ID: ${productState.id}
                商品数量：${productState.product_number}
                折扣价：${discountPrice}
                原价：${originalPrice}
    `)

    return {
      title: productState.title,
      id: productState.id,
      product_number: productState.product_number,
      discountPrice,
      originalPrice
    }
  }

  
  return (
    <>
      <CountDownView 
          handleCalcPrice={calcPrice}
          currentTime={currentTime} 
          timeInterval={20000}>
        </CountDownView>
      <Wrapper>
        <ProductImage imageUrl={productState.image}></ProductImage>
        <ProductName title={productState.title}></ProductName>
        <ButtonGroup 
          variants={productState.variants} 
          productNumber={productState.product_number} 
          addProductNumber={addProductNumber} 
          reduceProductNumber={reduceProductNumber}
          replaceVariant={replaceVariant}></ButtonGroup>
        <ProductPrice 
          priceMin={productState.price_min} 
          priceMax={productState.price_max}></ProductPrice>
        <ProductDiscount></ProductDiscount>
        <AcceptButton handleCalcPrice={calcPrice}></AcceptButton>
      </Wrapper>
    </>
  )
}

export { ProductWrapper };