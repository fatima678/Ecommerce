
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes,Route} from " react-router-dom";
import ShopCategory from './pages/ShopCategory';

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
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
