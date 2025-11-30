import React from 'react'
import { useAppContext } from '../context/AppContext';
import carticon2 from '../assets/carticon2.png';
import star_icon from '../assets/star_icon.png';
import star_dull_icon from '../assets/star_dull_icon.png';

import carticon from '../assets/carticon.png';

const ProductCard = ({product}) => {
    const [count, setCount] = React.useState(0);
    const {currency,addToCart,updateCartItem,removeCartItem,cartItems,navigate}=useAppContext();
  
     

    
    return product && (
        <div onClick={()=>{navigate(`/products/${product.category.toLowerCase()}/${product.id}`); scrollTo(0,0)}}className="border border-gray-500/20 rounded-md md:px-4 px-3 py-2 bg-white min-w-56 max-w-56 w-full">
            <div className="group cursor-pointer flex items-center justify-center px-2">
                <img className="group-hover:scale-105 transition max-w-26 md:max-w-36" src={product.image} alt={product.name} />
            </div>
            <div className="text-gray-500/60 text-sm">
                <p>{product.category}</p>
                <p className="text-gray-700 font-medium text-lg truncate w-full">{product.name}</p>
                <div className="flex items-center gap-0.5">
                    {/* {Array(5).fill('').map((_, i) => (
                        
                            <img key={i} className='md:w-3.5 w3' src={i < 4 ? star_icon :
                                star_dull_icon} alt=""/>
                            
                        
                    ))}
                    <p>({4})</p> */}
                     {Array(5).fill('').map((_, i) => (
    <img
      key={i}
      src={i < Math.floor(product.rating) ? star_icon : star_dull_icon}
      alt="star"
      className="md:w-3.5 w-3"
    />
  ))}
  <p className="ml-1 text-xs text-gray-600">({product.rating?.toFixed(1) || '0.0'})</p>
                </div>
                <div className="flex items-end justify-between mt-3">
                    <p className="md:text-xl text-base font-medium text-primary">
                        {currency}${product.offerPrice}<span className="text-gray-500/60 md:text-sm text-xs line-through">{currency}${product.price}</span>
                    </p>
                    <div onClick={(e)=>{e.stopPropagation();}} className="text-primary">
                        {!cartItems[product.id] ? (
                            <button className="flex items-center justify-center gap-1 bg-primary/10 border border-primary/20 md:w-[80px] w-[64px] h-[34px] rounded text-primary  cursor-pointer" onClick={() => addToCart(product.id)} >
                                <img src={carticon2} alt="cart_icon" className='w-6'/>
                                Add
                            </button>
                        ) : (
                            <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-primary/25 rounded select-none">
                                <button onClick={() => removeCartItem(product.id)} className="cursor-pointer text-md px-2 h-full" >
                                    -
                                </button>
                                <span className="w-5 text-center">{cartItems[product.id]}</span>
                                <button onClick={() => addToCart(product.id)} className="cursor-pointer text-md px-2 h-full" >
                                    +
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
  

export default ProductCard