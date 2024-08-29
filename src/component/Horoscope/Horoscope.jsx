import React from 'react'
import './Horoscope.css'
import { horoscope_list } from "../../assets/assets"

const Horoscope = () => {
  return (
    <div className='horoscope-menu' id='horoscope-menu'>
        <h1>Daily Horoscope</h1>
        <div className="horoscope-list">
            {horoscope_list.map((item, index)=>{
                return(
                    <div key={index} className="list-item">
                        <img src={item.h_image} alt="" />
                        <p>{item.h_name}</p>
                    </div>
                )
            })}
        </div>
      
    </div>
  )
}

export default Horoscope
