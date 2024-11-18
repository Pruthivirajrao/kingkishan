import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Cart from './components/Cart/Cart';
const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App