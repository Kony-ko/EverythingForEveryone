import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './home/index';
import { ProductsList } from './products/index';
import { ProductDetails } from './products/product-details';

export const Pages = () => {
  return (
    <div className='page__section'>
      
      <section>
        <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/products' exact element={<ProductsList/>} />
            <Route path='/product/:id' exact element={<ProductDetails/>} />
        </Routes>
      </section>
    </div>
    
  );
}
