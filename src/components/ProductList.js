import React from 'react'

import products from '../products'

const ProductList = () => {
      const productList = products.map((product, index) => {
return(
      <div key={index}>
        <img src={product.image} width="200px" />
        <h2>{product.name}</h2>
        <h4>{product.price}</h4>
      </div>)
  });

  return (
 <div>{productList}</div>
  );
}

export default ProductList