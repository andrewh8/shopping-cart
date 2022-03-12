import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Item from './components/Item';
import Home from './components/Home';
import { cartItemsContext } from './components/Context';
import './styles/App.css';

function App() {

  const [cartItems, setCartItems] = useState([]);

  return (
    <cartItemsContext.Provider value={{cartItems, setCartItems}}>
      <BrowserRouter>
        <div className='App'>
          <Nav cartItems={cartItems}/>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path="/Shop" element={<Shop />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Item" element={<Item />} />
          </Routes>
        </div>
      </BrowserRouter>
    </cartItemsContext.Provider>
  );
}

export default App;