import React, { useState, PropsWithChildren, useEffect } from 'react';
import styled from 'styled-components';
import { CountDown } from './CountDown';

const CountDownContainer = styled.div`
    width: 100%;
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

const Toast = styled.div`
  width: 400px;
  height: 400px;
  background-color: #ffffff;
  color: #000000;
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  box-shadow: 0 0 0 999px rgba(0, 0, 0, 0.45);
  z-index: 100;
  pointer-events: auto;
`;

function CountDownView({currentTime, timeInterval, handleCalcPrice}: PropsWithChildren<any>) {
    const [state, setClose] = useState(true);
    const [toastState, setToastState] = useState(false);
    const [productInfo, setProductInfo] = useState({
      title: '', 
      id: 0, 
      product_number: 0, 
      discountPrice: 0, 
      originalPrice: 0
    });

    useEffect(() => {
      document.body.addEventListener('click', closeToast)
      
      return () => {
        document.body.removeEventListener('click', closeToast)
      }
    })

    let localTime = 0;
    let expiresTime = currentTime + timeInterval;

    if (localStorage.getItem('perviousExpiresTime')) {
      let currentTime = Date.now();
      let perviousExpiresTime = Number(localStorage.getItem('perviousExpiresTime'));
      if (perviousExpiresTime - currentTime > 0) {
        localTime = perviousExpiresTime;
      };
    }

    function handleToast() {
      setToastState(true)
      let { title, id, product_number, discountPrice, originalPrice} = handleCalcPrice();
      setProductInfo({
        title,
        id,
        product_number,
        discountPrice,
        originalPrice
      })
    }

    function closeToast(e: any) {
      if (e.target.id !== 'toast') {
        setToastState(false)
      }
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
            在 <CountDown expiresTime={localTime || expiresTime} timeInterval={timeInterval}></CountDown> 秒后过期
            <Button onClick={handleToast}>view Products</Button>  
          </Wrapper>
          {toastState ? 
            <Toast id='toast'>
              {'商品名称：'+ productInfo.title}
              <br/>
              {'商品ID：'+ productInfo.id}
              <br/>
              {'商品数量：'+ productInfo.product_number}
              <br/>
              {'折扣价：'+ productInfo.discountPrice}
              <br/>
              {'原价：'+ productInfo.originalPrice}
            </Toast> : ''}
          <CloseButton onClick={() => setClose(false)}>X</CloseButton>
        </CountDownContainer> : ''}
    </>
  )
}

export { CountDownView };