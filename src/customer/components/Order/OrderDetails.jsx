import React from 'react'
import AddressCard from '../Address/AddressCard'
import OrderTracker from './OrderTracker'
import { Grid } from '@mui/material'
import { StarIcon } from '@heroicons/react/24/outline'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
    return (
        <div className='mx-20 my-7'>
            <div className='mx-2 my-7 border-gray-300 rounded-lg border-2 shadow-sm hover:shadow-lg'>
                <h2 className=' text-red-600 font-extrabold text-2xl '>Delivery Address</h2>
                <AddressCard button={false} />
            </div>
            <OrderTracker step={4} />
            <div className='m-3 p-2 border-gray-300 border-2 rounded-lg shadow-sm hover:shadow-lg '>
                <Grid container spacing={0} justifyContent="flex-start">
                    <Grid item xs={2}>
                        <div className='flex flex-col '>
                            <div className=' rounded-lg border-black border-2 h-[12.5rem] w-[11rem]'>
                                <img src="https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1497448_alternate10?$rl_4x5_pdp$ " alt="" className='w-full h-full rounded-lg objects-cover object-top' />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={4} >
                        {/* <div className='flex justify-between'> */}
                            <div className='flex flex-col py-3 flex-start'>
                                <p className=' text-start font-semibold text-red-600'>Vintage Fit Fleece Graphic Sweatshirt</p>
                                <p className='text-start font-medium text-black opacity-50'>Polo Ralph Lauren</p>
                                <p className='text-start font-medium text-green-600'>Seller: Critiano Ronaldo & Messi</p>
                                <div className='flex space-x-2 py-3'>
                                    <p className='font-medium line-through text-black opacity-50'>₹1463</p>
                                    <p className='text-lg  font-semibold text-red-600 '>₹763</p>
                                    <p className='text-lg font-semibold text-green-600'>47% off</p>
                                </div>
                                {/* <Button sx={{
                            bgcolor: "red",
                            width: "15%",   // 'full' is not valid, use '100%'
                            px: 3,
                            py: 1,
                            my: 1,
                            color: "white",
                            fontWeight: "semibold",
                            fontSize: "0.7rem", // 'text-lg' is not valid in MUI, use a specific size
                            borderRadius: "0.425rem" // 'rounded-sm' is not valid, use a specific radius
                        }}>Remove</Button> */}
                            </div>
                            
                        {/* </div> */}
                    </Grid>
                    <Grid item xs={4}>
                    <div className='pt-10 font-bold text-xl text-green-600'>
                                <StarBorderIcon sx={{fontSize:"2rem"}}/>
                                <span className='px-4'>Rate & Review Product</span>
                            </div>
                    </Grid>
                    {/* <Grid item xs={4}>

            </Grid> */}
                </Grid>
            </div>
        </div>
    )
}

export default OrderDetails