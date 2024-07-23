// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Product from './customer/components/Product/Product';
import Navigation from './customer/components/navigation/Navigation';
import Homepage from './customer/components/pages/HomePage/Homepage';
import ProductPage from './customer/components/pages/ProductPage/ProductPage';
import Footer from './customer/components/Footer/Footer';
import Cart from './customer/components/Cart/Cart';
import CheckOut from './customer/components/Checkout/CheckOut';
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
import CustomerRoutes from './Routes/CustomerRoutes';
// import Navigation from './customer/components/navigation/Navigation';


function App() {
  return (
      <div className="App overflow-auto hide-scrollbar">
        {/* <div className='text-2xl '>consistency is key!!</div> */}
        <Routes>
          <Route path="/*" element={<CustomerRoutes/>}/>
        
        </Routes>
        {/* <Navigation/>
        <Homepage/>
        <CheckOut/>
        <Cart/>
        <Product />
        <ProductPage/>
        <Order/>
        <OrderDetails/> */}
      </div>
  );
}

export default App;
