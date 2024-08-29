import React from 'react'
import "./ProductItem.css"

const ProductItem = ({ id, name, price, description, img }) => {
  return (
    <div className='product-item'>
        <div className="product-item-img-container">
            <img src={img} alt={name} className="product-item-img" />
        </div>
        <div className="product-item-info">
            <p className="product-item-name">{name}</p>
            <p className="product-item-description">{description}</p>
            <p className="product-item-price">₹{price}</p>
        </div>
      
    </div>
  )
}

export default ProductItem;
