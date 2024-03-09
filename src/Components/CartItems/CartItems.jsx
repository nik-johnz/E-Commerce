import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext)
  return (
    <div className='cart-items'>
        <hr />
        <div className="cart-items-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if (cartItems[e.id]>0) {
                return <div>
                <div className="cart-items-fromat cart-items-format-main">
                    <img src={e.image} className='cart-items-product-icon' alt="" />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <p className='cart-items-quantity'>{cartItems[e.id]}</p>
                    <p>${e.new_price*cartItems[e.id]}</p>
                    <img src={remove_icon} className='cart-items-remove-icon' onClick={()=>{removeFromCart(e.id)}} alt="" />
                </div>
                <hr />
            </div>
            }
            return null;
        })}
        {/* <div className="cart-items-down">
            <div className="cart-items-total">
                <h1>Cart Total</h1>
                <div>
                    <div className="cart-items-total-item">
                        <p>Sub Total</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cart-items-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cart-items-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cart-items-promocode">
                <p>If you have a promo code, Enter it here</p>
                <div className="cart-items-promobox">
                    <input type="text" placeholder='Enter the Code'/>
                    <button>Submit</button>
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default CartItems;