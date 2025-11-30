import React, { useContext } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom';
import logo3 from '../../assets/logo3.png'
import order_icon from '../../assets/order_icon.png'
import add_icon from '../../assets/add_icon.png'
import productlist_icon from '../../assets/productlist_icon.png'
import { useAppContext } from '../../context/AppContext';

const SellerPage = () => {

     const {setIsSeller}=useAppContext()
     const sidebarLinks = [
        { name: "Add Product", path: "/seller", icon:add_icon  },
        { name: "Product List", path: "/seller/productlist", icon: productlist_icon },
        { name: "Orders", path: "/seller/orders", icon: order_icon },
    ];
    const logout=async ()=>{
        setIsSeller(false)
    }
  return (
   <>
            <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white ">
                <Link to='/'>
                <img src={logo3} alt='logo3' className="h-20"/>
                </Link>
                <div className="flex items-center gap-5 text-gray-500">
                    <p>Hi! Admin</p>
                    <button onClick={logout}className='border rounded-full text-sm px-4 py-1'>Logout</button>
                </div>
            </div>
            <div className='flex'>
            <div className="md:w-64 w-16 border-r h-[550px] text-base border-gray-300 pt-4 flex flex-col transition-all duration-300">
                {sidebarLinks.map((item) => (
                    <NavLink to={item.path} key={item.name} end={item.path === '/seller'}
                        className={({isActive})=>`flex items-center py-3 px-4 gap-3 
                            ${isActive ? "border-r-4 md:border-r-[6px] bg-primary/10 border-primary text-primary"
                                : "hover:bg-gray-100/90 border-white"
                            }`
                        }
                    >
                        <img src={item.icon} alt='itemicon'className='w-7 h-7'/>
                        <p className="md:block hidden text-center">{item.name}</p>
                    </NavLink>
                ))}
            </div>
           <Outlet />
            </div>
             
        </>
  )
}

export default SellerPage