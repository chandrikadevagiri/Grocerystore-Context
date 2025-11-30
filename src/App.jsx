import React from 'react'
import Navbar from './components/Navbar'
import { Routes ,Route, useLocation} from 'react-router-dom'
import Home from './pages/Home'
import Login from './components/Login'
import { useAppContext } from './context/AppContext'
import {Toaster} from 'react-hot-toast'
import AllProduts from './pages/AllProducts'
import { Footer } from './components/Footer'
import ProductCategory from './pages/ProductCategory'
import ProductDetails from './pages/ProductDetails'
import CartDetails from './pages/CartDetails'
import SellerLogin from './components/seller/SellerLogin'
import SellerPage from './pages/seller/SellerPage'
import Footer1 from './components/footer1'

import ProductList from './pages/seller/ProductList'
import Orders from './pages/seller/Orders'
import MyOrders from './pages/MyOrders'
import AddProduct from './pages/seller/AddProduct'
import Contact from './pages/Contact'
const App = () => {
 const isSellerPath=useLocation().pathname.includes("seller");
  const {showUserLogin,isSeller}=useAppContext();
  return (

    <div className='flex flex-col min-h-screen'>
   {isSellerPath ? null : <Navbar/>}
   <Toaster/>
   {showUserLogin ? <Login/> :null }
   <div className={`${isSellerPath ? "" :" px-6 md:px-16 lg:px-24 xl:px-32"}`}>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<AllProduts/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/products/:category' element={<ProductCategory/>} />
       <Route path='/products/:category/:id' element={<ProductDetails/>} />
       <Route path='/cart' element={<CartDetails/>} />
       <Route path='/myorders' element={<MyOrders/>}/>
        <Route path='/seller' element={isSeller ? <SellerPage/> :<SellerLogin/>}>
        <Route index  element={<AddProduct/> }/>
        <Route path='productlist' element={<ProductList/>}/>
        <Route path='orders' element={<Orders/>}/>
        </Route>
    </Routes>
   </div>
   <div>
 {!isSellerPath &&<Footer/>}
   </div>
   </div>
  )
}

export default App