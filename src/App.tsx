import React from 'react';
import { UpSell } from './pages/UpSell';
import data from './data/product.json';

function App() {
  return (
    <UpSell currentTime={Date.now()} timeInterval={20000} data={data}/>
  );
}

export default App;
