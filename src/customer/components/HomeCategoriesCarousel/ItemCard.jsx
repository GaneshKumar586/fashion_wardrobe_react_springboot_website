import React from 'react'

const ItemCard = ({product}) => {
  return (
    <div className='hover:border-black '>
        <div className='flex flex-col hover:border-black border-2 w-[17rem] h-[31rem] px-4px items-center justify-center bg-red-600 rounded-lg shadow-lg mt-2 mx-3  overflow-hidden'>
            <div className='w-[17rem] mt-0 h-[20rem] hover:w-[18rem]'>
                {/* <img className='z-2 object-cover object-top w-full h-full' src="https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1497448_alternate10?$rl_4x5_pdp$ " alt= " "/> */}
                {/* <img className='object-cover object-topm w-full h-full' src=" " alt= " "/> */}
                <img className='z-2 object-cover object-top w-full h-full' src={product.imageUrl}  alt= " "/>
            </div>
            <div className='w-full'>
                {/* <p className='mt-2 p-3 font-extrabold text-white text-base '>Men's printed Hoodie</p> */}
                <div className='mt-2  px-2 font-serif font-extrabold truncate text-white text-sm '>{product.title}</div>
                <div className='mt-2 ml-4  border-gray-300 rounded-lg w-[15rem] border-t-2 border-b-2'>
                    <p className='  font-sans font-extrabold bg-green-900 pl-2 justify-center text-white text-lg '>{product.brand}</p>
                </div>
                <div className='mt-3  mx-1 self-center border-red-800 border-2 bg-white rounded-xl w-[16.5rem]'>
                    
                    <span>M.R.P.</span>
                    <span className='line-through text-black font-extrabold'> ₹ {product.price } </span>
                    <span className='mt-1  p-1 font-custom justify-start font-extrabold text-green-900 text-sm '>Dicount ({product.discountPersent}% off)</span>
                    <span className='mt-1  p-3 font-custom justify-start font-extrabold text-green-900 text-2xl '>M.R.P. {product.discountedPrice}</span>
                </div>
                <p className=' mt-2 mr-0 mb-0 p-1w-[17rem] font-sans  text-white  text-xs '>Save 1% with coupon</p>
                <p className=' mt-2 mr-0  p-1 border-red-500 rounded-sm w-[17rem]  font-sans  text-white bg-black text-xs '>FREE Delivery over ₹499. Fulfilled by shopify</p>
            </div>
        </div>
    </div>
  )
}

export default ItemCard