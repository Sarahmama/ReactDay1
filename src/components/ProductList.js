import React from 'react'
import ProductItem from './ProductItem';
import products from '../products'
import '../App.css'

const ProductList = () => {
      const productList = products.map((product, index) => {
return(
      <div key={index}>
    <ProductItem myProduct={product} />
      </div>)
  });

  return (
 <div className='products'>{productList}</div>
  );
}

export default ProductList