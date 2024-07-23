import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
  const navigate=useNavigate();
  return (
    <div onClick={()=>navigate('/account/order/${2}')} className='border-gray-300 px-2 py-2 mb-2 flex flex-row justify-between rounded-lg border-2 shadow-sm hover:shadow-lg '>
            <div className='flex flex-row h-[10rem] w-[30rem] p-1'>
              <div className='h-[8rem] w-[7rem] rounded-lg border-2 border-black'>
                <img src='https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1497448_alternate10?$rl_4x5_pdp$' alt=" " className='w-full h-full rounded-lg objects-cover object-top' />
              </div>
              <div className='flex flex-col py-1 ml-3 flex-start'>
                <p className=' text-start font-semibold text-red-600'>Vintage Fit Fleece Graphic Sweatshirt</p>
                <p className='text-start font-medium text-black '>Polo Ralph Lauren</p>
                <p className='text-start font-medium text-green-600'>Seller: Critiano Ronaldo & Messi</p>
                <span className='text-start font-medium text-black opacity-50'>size: M</span>
                <span className='text-start font-medium text-black opacity-50'>color: Black</span>
              </div>
              {/* <div>
                <p className='text-xl text-red-600 font-bold mt-1 border-b-2 text-start'></p>
                <p className='text-md opacity-50 text-black font-bold mt-1 border-b-2 text-start'></p>
              </div> */}
            </div>
            <p className='text-start pt-4 font-medium text-black opacity-50'>₹1268</p>
            <div className='pr-5'>

              <div className='flex flex-col mt-4 flex-start'>
                <div className='flex flex-row'>
                <AdjustIcon sx={{color:"green"}}/>
                <span className='px-1'>Expected Delivery On Mar 03</span>
                </div>
                <p className='text-start font-medium  text-black opacity-50'>Your Item Has Been Delivered</p>
              </div>

            </div>
          </div>
  )
}

export default OrderCard