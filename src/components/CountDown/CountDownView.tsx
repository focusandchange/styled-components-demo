import React, { useState, FC } from 'react';
import styled from 'styled-components';
import { CountDown } from './CountDown';

const CountDownContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    padding: 0 10px;
    color: #ffffff;
    background-color: #212730;
  `;

const Wrapper = styled.div``;

const Coupons = styled.span`
  margin: 0 10px;
  padding: 5px;
  border: 1px dotted #ffffff;
`;

const Button = styled.button`
  border: 0;
  padding: 5px;
  background-color: #0A7306;
  margin: 0 10px;
  color: #ffffff;
  cursor: pointer;
  border-radius: 5px;
`;

const CloseButton = styled.span`
  cursor: pointer;
  display: inline-block;
  width:40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
`;

interface CountDownProps {
  currentTime: number,
  timeInterval: number,
  productState?: boolean,
  handleProductState?: (state: boolean) => void
}

export const CountDownView: FC<CountDownProps> = ({ currentTime, timeInterval, productState, handleProductState }) => {
  let localTime = 0;
  let expiresTime = currentTime + timeInterval;  

  const [state, setClose] = useState(true);  
  
  if (localStorage.getItem('perviousExpiresTime')) {
    let currentTime = Date.now();
    let perviousExpiresTime = Number(localStorage.getItem('perviousExpiresTime'));
    if (perviousExpiresTime - currentTime > 0) {
      localTime = perviousExpiresTime;
    };
  }

  return (
    <>
      {state ? 
        <CountDownContainer>
          <Wrapper>
            您的折扣已激活！
            <Coupons>
              优惠券：xxxxxx
            </Coupons>
            在 <CountDown 
              expiresTime={ localTime || expiresTime } 
              timeInterval={ timeInterval } /> 秒后过期
            <Button onClick={ () => handleProductState && handleProductState(!productState) }>view Products</Button>  
          </Wrapper>
          <CloseButton onClick={ () => {
            setClose(false)
            handleProductState && handleProductState(false)
          } }>X</CloseButton>
        </CountDownContainer> : ''}
    </>
  )
};