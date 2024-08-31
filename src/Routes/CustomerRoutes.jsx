import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../customer/components/pages/HomePage/Homepage'
import CheckOut from '../customer/components/Checkout/CheckOut'
import Cart from '../customer/components/Cart/Cart'
import Product from '../customer/components/Product/Product'
import ProductPage from '../customer/components/pages/ProductPage/ProductPage'
import Order from '../customer/components/Order/Order'
import OrderDetails from '../customer/components/Order/OrderDetails'
// import Navigation from '../customer/components/navigation/Navigation'
import Footer from '../customer/components/Footer/Footer'
import Navigation from '../customer/components/navigation/Navigation'
// import Navigation from '../customer/components/navigation/navigation'

const CustomerRoutes = () => {
  return (
    <>
    <Navigation/>
    <div>
        <Routes>
        <Route path='/signup' element={<Homepage/>}></Route>
          <Route path='/login' element={<Homepage/>}></Route>
            <Route path='/' element={<Homepage/>}></Route>
            <Route path='/checkout' element={<CheckOut/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/:section/:subsection/:subsubsection' element={<Product />}></Route>
            <Route path='/product/:productId' element={<ProductPage/>}></Route>
            <Route path='/account/order' element={<Order/>}></Route>
            <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>
            
        </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default CustomerRoutes