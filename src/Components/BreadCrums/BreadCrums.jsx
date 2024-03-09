import React from 'react'
import './BreadCrums.css'
import arrow_iocn from '../Assets/breadcrum_arrow.png'


const BreadCrums = (props) => {
    const {product} = props;
  return (
    <div className='breadcrums'>
        HOME <img src={arrow_iocn} alt="" />
        SHOP <img src={arrow_iocn} alt="" />
        {product.category}
        <img src={arrow_iocn} alt="" />
        {product.name}
    </div>
  )
}

export default BreadCrums