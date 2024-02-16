
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import LoginSignup from './pages/LoginSignup';
import Cart from './pages/Cart';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<shop/>}></Route>
        <Route path="/men" element={<ShopCategory category="men"/>}></Route>
        <Route path="/women" element={<ShopCategory category="women"/>}></Route>
        <Route path="/kids" element={<ShopCategory category="kids"/>}></Route>
        <Route path="/product" element={<product/>}></Route>
        <Route path=":productId" element={<product/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route> 
        <Route path="/login" element={<LoginSignup/>}></Route> 
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
