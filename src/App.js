import { useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  const [showCart, setshowCart] = useState(false)

  const showCartHandler = () => {
    setshowCart(true)
  }
  const hideCartHandler = () => {
    setshowCart(false)
  }
  return (
    <CartProvider>
      {showCart && <div>Cart..</div>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
