import  './CartItem.css';

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className='cart-item-lemon'>
      <div>
        <h2>{props.name}</h2>
        <div className='summary-lemon'>
          <span className='price-lemon'>{price}</span>
          <span className='amount-lemon'>x {props.amount}</span>
        </div>
      </div>
      <div className='actions-lemon'>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;