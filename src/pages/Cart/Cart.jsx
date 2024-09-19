import React, { useContext } from 'react';
import './cart.css';
import { StoreContext } from '../../context/StoreContext';
import { food_list } from '../../assets/assets';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(StoreContext);

  if (!cartItems) {
    return <div className='cart'>Loading...</div>;
  }

  return (
    <div className='cart'>
      <div className="cartItems">
        <div className="cartItemsTitle">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          const quantity = cartItems[item._id] ?? 0;
          if (quantity > 0) {
            return (
              <div key={item._id} className="cartItemsTitle cartItemsItem">
                <p>{item.name}</p>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Cart;
