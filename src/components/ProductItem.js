import React from 'react'
import product1 from '../product1.jpg'

const ProductItem = (props) => {
  return (
    <div> 
    <img src={props.myProduct.image} width="200px"height="200px"/>
    <h2>{props.myProduct.name}</h2>
    <h4>{props.myProduct.price}</h4>
    </div>
  )
}

export default ProductItem