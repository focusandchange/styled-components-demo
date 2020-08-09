import React, { useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { ProductPrice } from './ProductPrice';
import { ProductVariantSelect } from './ProductSelectButton';
import { ProductQuantity } from './ProductQuantity';

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin: 50px auto 0;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 0 999px rgba(0, 0, 0, 0.45);
`;

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

const ProductButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  height: 40px;
`;

interface Props {
  productData: UpSellDataProps
}

interface ProductImageProps {
  productImage: string
}

interface ProductTitleProps {
  productTitle: string
}

const Image = styled.img`
  width: 200px;
  height: 200px;
`;

const Title = styled.div`
  font-size: 26px;
  font-weight: 500;
  text-align: center;
`;

export const Product = ({ productData }: Props) => {  
  const { id, images, title, price, variants } = productData;

  const [productId, setProductId] = useState(id);
  const [productImage, setProductImage] = useState(images[0]);
  const [productTitle, setProductTitle] = useState(title);
  const [productMaxPrice, setProductMaxPrice] = useState(price);
  const [productMinPrice, setProductMinPrice] = useState(price);
  const [productQuantity, setProductQuantity] = useState(1);
  const [productVariants] = useState(variants);

  // 增加或减少商品的数量
  const addOrReduceProductQuantity = useCallback((number) => {
    if (number < 1) return setProductQuantity(1)
    
    if (number - 1 === productQuantity) {
      setProductQuantity(productQuantity + 1)
    } else {
      setProductQuantity(productQuantity -1)
    }

    setProductQuantity(number)
  }, [productQuantity])

  // 替换变种
  const replaceVariant = useCallback((variantId: string) => {
    const variantObj = productVariants.find((variant: Variant ) => variant.id === Number(variantId));

    if(variantObj) {
      const { id, title, featured_image: { src }, price } = variantObj;
      setProductId(id)
      setProductTitle(title)
      setProductImage(src)
      setProductMaxPrice(price)
      setProductMinPrice(price)
    }
  }, []);

  // 计算价格
  const calcPrice = useMemo(() => {
    let discountPrice = (productMinPrice * 0.9 * productQuantity).toFixed(2);
    let originalPrice = (productMaxPrice * productQuantity).toFixed(2);

    return {
      discountPrice,
      originalPrice
    }
  }, [productQuantity, productMinPrice, productMaxPrice]);

  // 打印产品信息
  const showProductInfo = useCallback(() => {
    console.log(`
                产品名称：${productTitle}
                产品ID: ${productId}
                商品数量：${productQuantity}
    `)
  }, [productTitle, productId, productQuantity]);
  
  const ProductImage = useMemo(() => <Image src={ productImage } />, [productImage]);
  const ProductName = useMemo(() => <Title>{ productTitle }</Title>, [productTitle]);

  return (
    <ProductContainer>
      { ProductImage }
      { ProductName }
      <ProductButtonWrapper>
        <ProductVariantSelect 
        onChange={ replaceVariant } 
        value={''}
        variants={ productVariants } />
        <ProductQuantity 
        onChange={ addOrReduceProductQuantity }
        value={ productQuantity } />
      </ProductButtonWrapper>
      <ProductPrice 
        discountPrice={ calcPrice.discountPrice } 
        originalPrice={ calcPrice.originalPrice }
        discountRate={ 0.9 } />
      <Button onClick={ showProductInfo }>Accept</Button>
    </ProductContainer>
  )
};