import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from "../../../context/StoreContext";
import { useNavigate } from 'react-router-dom';



const Cart = () => {


  const { cartItems, food_list, removeFromCart ,getTotalCartAmount,url} = useContext(StoreContext)
  const navigate = useNavigate()
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((Item, index) => {
          if (cartItems[Item._id]) {
            return (
              <>
                <div className="cart-items-title  cart-items-item">
                  <img src={url+"/images/"+Item.image} alt="" />
                  <p>{Item.name}</p>
                  <p>${Item.price}</p>
                  <p>{cartItems[Item._id]}</p>
                  <p>${Item.price * cartItems[Item._id]}</p>
                  <p onClick={() => removeFromCart
                    (Item._id)
                  } className='cross'>X</p>
                </div>
                <hr />
              </>
            )

          }

        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-totel">
          <h2>Cart-Total</h2>
          <div>
            <div className="cart-totel-details">
              <p>sub totle</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <div className="cart-totel-details">
              <p>Delivery</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
              </div>
            <div className="cart-totel-details">
              <b>Total</b>
              <b>${getTotalCartAmount()+2}</b>

            </div>

          </div>
          <button onClick={()=>navigate("/order")}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have promo code, Enter it here</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='Pomocode' />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart
