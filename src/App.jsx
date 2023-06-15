import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Checkout from './components/Checkout/Checkout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer /> } />
          <Route path='/categoria/:idCategoria' element={ <ItemListContainer /> } />
          <Route path='/item/:idItem' element={ <ItemDetailContainer /> } />
          <Route path='*' element={<h2>Sitio en construccion</h2>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout' element={ <Checkout /> }/>
        </Routes>
      </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
