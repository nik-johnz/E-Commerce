import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <p id='p1'>Exclusive</p>
            <p id='p2'>offers for you</p>
            <h1>ONLY ON BEST SELLERS PRODUCTS</h1>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}

export default Offers