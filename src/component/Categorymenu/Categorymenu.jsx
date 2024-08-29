import React from 'react'
import "./Categorymenu.css"
import { category_list } from '../../assets/assets'


const Categorymenu = ( {category,setCategory}) => {
  return (
    <div className='category-menu' id='category-menu'>
        <h1>AstroMall Shop</h1>
        <p className='cat-menu-text'>Everything you have been looking for is here.</p>
        <div className="cat-menu-list">
            {category_list.map((item, index) => {
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.c_name?"All":item.c_name)} key={index} className="cat-menu-item">
                        <img className={category===item.c_name?"active":" "} src={item.c_img} alt="menu-item" />
                        <p>{item.c_name}</p>

                    </div>
                )
            })}

        </div>
        
      
    </div>
  )
}

export default Categorymenu
