import React, { useContext } from 'react'
import "./ProductDisplay.css"
import { StoreContext } from '../../Context/StoreContext'
import ProductItem from '../ProductItem/ProductItem'

const ProductDisplay = ({category}) => {
    const { product_list } = useContext(StoreContext);

    const filteredProducts = category === "All"
    ? product_list
    : product_list.filter(product => product.category.toLowerCase() === category.toLowerCase());


    

  return (
    <div className='product-display' id='product-display'>
        <h2>Top picks for you</h2>
        <div className="product-display-list">
            {filteredProducts.map((item,index)=>{
                return <ProductItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} img={item.image} />
            })}
        </div>
      
    </div>
  )
}

export default ProductDisplay
