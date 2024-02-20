
// // import './App.css';
// // import Navbar from './components/Navbar/Navbar';
// // import { BrowserRouter, Routes, Route } from 'react-router-dom';
// // import ShopCategory from './pages/ShopCategory';
// // import LoginSignup from './pages/LoginSignup';
// // import Cart from './pages/Cart';
// // import Shop from './components/Shop';

// // function App() {
// //   return (
// //     <div>
// //       <BrowserRouter>
// //       <Navbar/>
// //       <Routes>
// //         <Route path="/" element={<Shop />} />
// //         <Route path="/men" element={<ShopCategory category="men"/>}></Route>
// //         <Route path="/women" element={<ShopCategory category="women"/>}></Route>
// //         <Route path="/kids" element={<ShopCategory category="kids"/>}></Route>
// //         <Route path="/product" element={<product/>}></Route>
// //         <Route path=":productId" element={<product/>}></Route>
// //         <Route path="/cart" element={<Cart/>}></Route> 
// //         <Route path="/login" element={<LoginSignup/>}></Route> 
// //       </Routes>
// //       </BrowserRouter>
      
      
// //     </div>
// //   );
// // }

// // export default App;




// import './App.css';
// import Navbar from './components/Navbar/Navbar';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ShopCategory from './pages/ShopCategory';
// import LoginSignup from './pages/LoginSignup';
// import Cart from './pages/Cart';
// import Shop from './components/Shop'; // Corrected import path
// import Footer from './components/Footer/Footer';
// import men_banner from './components/Assets/banner_mens.png'
// import women_banner from './components/Assets/banner_women.png'
// import kids_banner from './components/Assets/banner_kids.png'

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Shop />} />
//           <Route path="/men" element={<ShopCategory banner={men_banner} category="men" />} />
//           <Route path="/women" element={<ShopCategory banner={women_banner} category="women" />} />
//           <Route path="/kids" element={<ShopCategory banner = {kids_banner} category="kids" />} />
//           <Route path="/product" element={<product />} />
//           <Route path=":productId" element={<product />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/login" element={<LoginSignup />} />
//         </Routes>
//         <Footer/>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;



import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import LoginSignup from './pages/LoginSignup';
import Cart from './pages/Cart';
import Shop from './components/Shop';
import Footer from './components/Footer/Footer';
import men_banner from './components/Assets/banner_mens.png'; 
import women_banner from './components/Assets/banner_women.png'; // Corrected import path
import kids_banner from './components/Assets/banner_kids.png'; // Corrected import path

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCategory banner={men_banner}  category="men" />} />
          <Route path="/women" element={<ShopCategory  banner={women_banner}  category="women" />} />
          <Route path="/kids" element={<ShopCategory  banner={kids_banner}  category="kids" />} />
          <Route path="/product" element={<product />} />
          <Route path=":productId" element={<product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;


