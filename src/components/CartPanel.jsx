import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../features/cart/cartSlice';

function CartPanel() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleDecrease = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: quantity - 1 }));
  };

  const handleIncrease = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: quantity + 1 }));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="cart-panel">
        <h2>Shopping Cart</h2>
        <p>Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="cart-panel">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.thumbnail} alt={item.title} className="cart-item-image" />
            <div className="cart-item-details">
              <h4>{item.title}</h4>
              <p>Price: ${item.price}</p>
              <div className="quantity-controls">
                <button onClick={() => handleDecrease(item.id, item.quantity)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrease(item.id, item.quantity)}>+</button>
              </div>
              <p>Subtotal: ${item.price * item.quantity}</p>
              <button className="remove-btn" onClick={() => handleRemove(item.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default CartPanel;

