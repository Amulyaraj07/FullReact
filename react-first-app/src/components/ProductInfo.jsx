import React from 'react'

const ProductInfo = () => {

    const product={
        name: "Apple iPhone 13",
        price: 999.99,
        description: "The Apple iPhone 13 is a smartphone developed by Apple Inc.",
        availability:"In stock"
    }
  return (
    <div>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>description: {product.description}</p>
      <p>Availability: {product.availability}</p>
    </div>
  )
}

export default ProductInfo
