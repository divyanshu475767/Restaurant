
import React , {useContext , useEffect, useState} from 'react';
import './HeaderCartButton.css';
import CartIcon from '../Cart/CartIcon';
import cartContext from '../../store/cart-context';


const HeaderCartButton = (props) => {

  const [btnIsHighlighted,setIsBtnHighlighted] = useState(false);
  const cartCtx = useContext(cartContext);
  

  const numberOfCartItems = cartCtx.items.reduce((curNumber , item)=>{
      return curNumber + item.amount;
  } ,0)

  const btnClasses = `button ${btnIsHighlighted ? 'bump' : ''}`

  useEffect(()=>{
    if(cartCtx.items.length===0){
      return;
    }
       setIsBtnHighlighted(true);

     const timer =  setTimeout(() => {
       setIsBtnHighlighted(false);
        
       }, 300);


       return ()=>{
          clearTimeout(timer)
       };
  },[cartCtx.items])
  return (
    <button className={btnClasses} onClick={props.whenClick}>
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
