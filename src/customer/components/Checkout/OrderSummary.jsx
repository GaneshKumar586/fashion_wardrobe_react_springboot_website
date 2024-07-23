import React from 'react'
import AddressCard from '../Address/AddressCard'
import { Grid } from '@mui/material'
import PriceCard from '../Cart/PriceCard'
import CartItem from '../Cart/CartItem'

const OrderSummary = () => {
  return (<div>
    <div className='shadow-lg rounded-lg border-gray-300 border-2'>
        <AddressCard button={true}/>
    </div>
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
</div>
  )
}

export default OrderSummary