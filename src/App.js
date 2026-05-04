import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
  return (
    <CartProvider>
      <Header />
        <main>
          <h1>Cloned Repo Change</h1>
          <Meals />
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
