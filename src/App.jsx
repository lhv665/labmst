import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './features/cart/cartSlice';
import CartPanel from './components/CartPanel';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  
  // Get cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items);
  
  // Calculate total cart quantity
  const cartTotalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Fetch products from DummyJSON API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  // Check if product is already in cart
  const isInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Product Store</h1>
        <div className="cart-count">Cart Items: {cartTotalQuantity}</div>
      </header>
      
      <main className="main-content">
        <section className="products-section">
          <h2>Products</h2>
          
          {loading ? (
            <p className="loading">Loading...</p>
          ) : (
            <div className="products-grid">
              {products.map((product) => (
                <div key={product.id} className="product-card">
                  <img 
                    src={product.thumbnail} 
                    alt={product.title} 
                    className="product-image" 
                  />
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-price">${product.price}</p>
                  <button 
                    className={`add-to-cart-btn ${isInCart(product.id) ? 'added' : ''}`}
                    onClick={() => handleAddToCart(product)}
                    disabled={isInCart(product.id)}
                  >
                    {isInCart(product.id) ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
        
        <aside className="cart-section">
          <CartPanel />
        </aside>
      </main>
    </div>
  );
}

export default App;

