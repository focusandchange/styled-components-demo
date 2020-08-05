import React from 'react';
import { ProductWrapper } from './components/Product/ProductWrapper';
import data from './data/product.json';

let currentTime = Date.now()

function App() {
  return (
    <div>
      <ProductWrapper currentTime={currentTime} productData={data} />
    </div>
  );
}

export default App;
