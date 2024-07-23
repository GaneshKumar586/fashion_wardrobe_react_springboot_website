import { Button, Grid, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const CartItem = () => {
    return (
        <div className='m-3 p-2 border-gray-300 border-b-2 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-2'>
            <Grid container spacing={0} justifyContent="flex-start">
                <Grid item xs={3}>
                    <div className='flex flex-col '>
                        <div className=' rounded-lg  border-2 h-[12.5rem] w-[11rem]'>
                            <img src="https://www.optimized-rlmedia.io/is/image/PoloGSI/s7-1497448_alternate10?$rl_4x5_pdp$ " alt="" className='w-full h-full rounded-lg objects-cover object-top' />
                        </div>
                        <div className='flex space-x-2 py-3'>
                            <IconButton>
                            <RemoveCircleIcon />
                            </IconButton>
                            <span className='px-8 py-1 border-gray-300 rounded-md border-2'>3</span>
                            <IconButton>
                            <AddCircleIcon />
                            </IconButton>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className='flex flex-col py-3 flex-start'>
                        <p className=' text-start font-semibold text-red-600'>Vintage Fit Fleece Graphic Sweatshirt</p>
                        <p className='text-start font-medium text-black opacity-50'>Polo Ralph Lauren</p>
                        <p className='text-start font-medium text-green-600'>Seller: Critiano Ronaldo & Messi</p>
                        <div className='flex space-x-2 py-3'>
                            <p className='font-medium line-through text-black opacity-50'>₹1463</p>
                            <p className='text-lg  font-semibold text-red-600 '>₹763</p>
                            <p className='text-lg font-semibold text-green-600'>47% off</p>
                        </div>
                        <Button sx={{
                            bgcolor: "red",
                            width: "15%",   // 'full' is not valid, use '100%'
                            px: 3,
                            py: 1,
                            my: 1,
                            color: "white",
                            fontWeight: "semibold",
                            fontSize: "0.7rem", // 'text-lg' is not valid in MUI, use a specific size
                            borderRadius: "0.425rem" // 'rounded-sm' is not valid, use a specific radius
                        }}>Remove</Button>
                    </div>
                </Grid>
                {/* <Grid item xs={4}>

            </Grid> */}
            </Grid>
        </div>
    )
}

export default CartItem