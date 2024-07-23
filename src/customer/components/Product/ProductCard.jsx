import React from 'react'
import { useNavigate, useNavigation } from 'react-router-dom'

const ProductCard = ({product}) => {
    const navigate=useNavigate();

  return (
    <div onClick={()=>navigate('/product/${3}')} className=' m-0'>
        <div className=' mt-2 transition-transform duration-300 ease-out hover:-translate-y-1 mb-2 ml-2 p-0 w-[15rem] rounded-xl border-black border-2  hover:shadow-xl hover:border-3 '>
            <img src={product.imageUrl} alt=" " className='rounded-t-xl w-full h-[20rem] border-white object-cover object-bottom hover:object-top'/>
            <div className='transition-transform duration-300 ease-out hover:-translate-y-1  '>
            <div className='transition:transform .3s ease-out'>

                <p className='font-bold text-center text-red-600 truncate text-md p-3'>{product.title}</p>
                <p className='font-bold sans text-black truncate'>{product.brand}</p>
            </div>
            <div className='mt-3 m-2 mono text-start  font-base text-lg '>
                <p className=' p-2 text-center text-xl font-bold text-green-800 '>
                 M.R.P.₹ {product.discountedPrice}
                </p>
                <span className='p-1 opacity-60 line-through text-base text-black '>
                ₹ {product.price}
                </span>
                <span className='  p-1 text-sm font-bold text-green-800'>
                    (Discount {product.discountPersent}% Off)
                </span>
                
            </div>
            </div>
        </div>
        {/* <div className=' mt-10 textPart p-3'>
            
        </div> */}

    </div>
  )
}

export default ProductCard