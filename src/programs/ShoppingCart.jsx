import { useState } from 'react';
import './ShoppingCart.css';

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: 'Wireless Headphones', price: 4999, icon: '🎧' },
    { id: 2, name: 'Smart Watch', price: 8999, icon: '⌚' },
    { id: 3, name: 'Phone Case', price: 599, icon: '📱' },
    { id: 4, name: 'USB Cable', price: 299, icon: '🔌' },
    { id: 5, name: 'Laptop Stand', price: 1999, icon: '🖥️' },
    { id: 6, name: 'USB Hub', price: 1299, icon: '🔗' },
  ];

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  return (
    <div className="shopping-container">
      <div className="shopping-wrapper">
        <div className="products-section">
          <h2>🛍️ Shop</h2>
          <div className="products-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-icon">{product.icon}</div>
                <h3>{product.name}</h3>
                <p className="price">₹{product.price}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>

        <div className="cart-section">
          <h2>🛒 Cart</h2>
          <div className="cart-items">
            {cart.length === 0 ? (
              <p className="empty-cart">Your cart is empty</p>
            ) : (
              cart.map(item => (
                <div key={item.id} className="cart-item">
                  <span className="item-icon">{item.icon}</span>
                  <div className="item-details">
                    <p className="item-name">{item.name}</p>
                    <p className="item-price">₹{item.price}</p>
                  </div>
                  <span className="qty">x{item.qty}</span>
                  <button 
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    ×
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="cart-summary">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{total}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>₹0</span>
            </div>
            <div className="summary-row total-row">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
            <button className="checkout-btn">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
