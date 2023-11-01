import React from 'react';
import './Cart.css';
import Modal from '../UI/Modal';

const Cart = (props) => {
    const cartItems =<ul className='cart-items'>{[{id:'c1',name:'sushi' , amount:2,price:12.99}].map(item=>{
      return  <li>{item.name}</li>
    })}</ul>
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className='total'>
      <span>Total Amount</span>
      <span>35.63</span>
      </div>
      <div className='actions'>
        <button className='button--alt' onClick={props.onClose}>close</button>
        <button className='button'>Order</button>
      </div>
    </Modal>
  )
}

export default Cart
