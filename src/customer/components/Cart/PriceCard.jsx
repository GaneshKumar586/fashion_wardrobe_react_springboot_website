import { Button } from '@mui/material'
import React from 'react'
import {  useNavigate } from 'react-router-dom'
import { getCart } from '../../../state/cart/Action'
import { useSelector } from 'react-redux'

const PriceCard = () => {
    // const navigate = useNavigate();
    const navigate = useNavigate();
    const {cart}=useSelector(store=>store);
    // const dispatch = useDispatch();
    // const handleCheckOut=()=>{
    //     Navigate("/checkout?step=2")
    // }

    // useEffect(()=>{
    //     dispatch(getCart())
    // },[])
    return (
        <div className='h-[20rem]  p-2 mr-3 bg-white border-gray-300 border-2 rounded-lg shadow-lg hover:shadow-2xl'>
            <h3 className='uppercase border-b-2 p-3 border-gray-300 font-bold text-lg text-start text-red-600'>Price Details</h3>
            <div className='flex flex-col p-3 border-b-2 border-gray-300 justify-center items-stretch'>
                <div className='flex justify-between'>
                    <p className='text-sm font-medium'>Price (4 items)</p>
                    <p className='text-red-600 font-bold text-lg'>₹{cart.cart ? cart.cart?.totalPrice : 3829}</p>
                </div>
                <div className='flex justify-between'>
                    <p className='text-sm font-medium'>Discount</p>
                    <p className='text-red-600 font-bold text-lg'>-₹{cart.cart ? cart.cart?.discount : 1249}</p>
                </div>
                <div className='flex justify-between'>
                    <p className='text-sm font-medium'>Delivery Charges</p>
                    <p className='text-black font-bold text-sm'>Free</p>
                </div>
            </div>
            <div className='flex p-3 justify-between border-b-2 border-gray-300 '>
                <p className='text-sm font-medium'>Total Amount</p>
                <p className='text-green-600 font-bold text-lg'>₹{cart.cart ? cart.cart?.totalDiscountedPrice : 2635}</p>
            </div>
            <Button onClick={()=>navigate('/checkout?step=2')} sx={{
                bgcolor: "red",
                width: "100%",   // 'full' is not valid, use '100%'
                px: 3,
                py: 1,
                my:4,
                color: "white",
                fontWeight: "semibold",
                fontSize: "1rem", // 'text-lg' is not valid in MUI, use a specific size
                borderRadius: "0.425rem" ,// 'rounded-sm' is not valid, use a specific radius
                '&:hover': {
                    bgcolor: "green", // Change this to your desired hover color
                  },
            }}>CheckOut</Button>
        </div>
    )
}

export default PriceCard