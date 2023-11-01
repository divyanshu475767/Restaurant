
import React , {useContext} from 'react';
import './HeaderCartButton.css';
import CartIcon from '../Cart/CartIcon';
import cartContext from '../../store/cart-context';


const HeaderCartButton = (props) => {


  const cartCtx = useContext(cartContext);
  

  const numberOfCartItems = cartCtx.items.reduce((curNumber , item)=>{
      return curNumber + item.amount;
  } ,0)






  return (
    <button className='button' onClick={props.whenClick}>
    <span className='icon'>
     <CartIcon/> 
    </span>
    <span>your Cart</span>
    <span className='badge'>
        {numberOfCartItems}
    </span>

    </button>
  )
}


export default HeaderCartButton
