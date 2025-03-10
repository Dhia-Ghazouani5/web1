import React from 'react'
import Rating from './Rating'

function Product(props) {
    const {product}= props
  return (
    <div Key={product.id} className="card">
          <a href="/product">
            
            <img className="medium" src={product.image} alt={product.name}/>
          </a>
          <div className="card-body">
            <a href={`/product/${product._id}`}>
              <h2>{product.name}</h2>
            </a>
            <Rating rating={product.rating}/>
            <div className="price">{product.price}</div>
          </div>
        </div>
  )
}

export default Product
