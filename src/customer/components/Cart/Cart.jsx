import { Grid } from '@mui/material'
import React from 'react'
import CartItem from './CartItem'
import PriceCard from './PriceCard'

const Cart = () => {
  return (
    <div className='p-4'>
        <Grid container spacing={2}>
            <Grid item xs={8}>
            {
                [1,1,1,1].map((unit)=><CartItem/>)
              }
            </Grid>
            <Grid item sm={4}>
              <PriceCard/>) 
            </Grid>
        </Grid>

        
    </div>
  )
}

export default Cart