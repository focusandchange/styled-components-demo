import React, { useState } from 'react';
import { Product } from '../components/Product/Product';
import { CountDownView } from '../components/CountDown/CountDownView';

interface UpSellProps {
  currentTime: number,
  timeInterval: number,
  data: UpSellDataProps
}

export const UpSell = ({ currentTime, timeInterval, data }: UpSellProps) => {
  const [productState, setProductState] = useState(false);

  return (
    <>
      <CountDownView 
        currentTime={ currentTime } 
        timeInterval={ timeInterval } 
        handleProductState={ setProductState } 
        productState={ productState }/>
      { productState && <Product productData={ data }/> }
    </>
  );
}