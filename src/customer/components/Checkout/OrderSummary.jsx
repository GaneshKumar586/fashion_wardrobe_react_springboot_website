import React, { useEffect } from 'react'
import AddressCard from '../Address/AddressCard'
import { Grid } from '@mui/material'
import PriceCard from '../Cart/PriceCard'
import CartItem from '../Cart/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { getOrder } from '../../../state/order/Action'
import { useLocation } from 'react-router-dom'

const OrderSummary = () => {
  const dispatch= useDispatch();
  const location =  useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");
  const {order} = useSelector(store=>store)
  // useEffect(()=>{
  //   dispatch(getOrder(orderId))
  // },[orderId])
  return (<div>
    <div className='shadow-lg rounded-lg border-gray-300 border-2'>
        <AddressCard  address={order.order?.shippingAddress}/>
    </div>
    <div className='p-4'>
    <Grid container spacing={2}>
        <Grid item xs={8}>
        {order.orders?.orderItems?.map((unit)=><CartItem item={unit}/>) ||
            [1,1,1,1].map((unit)=><CartItem />)
          }
        </Grid>
        <Grid item sm={4}>
          <PriceCard />
        </Grid>
    </Grid>

    
</div>
</div>
  )
}

export default OrderSummary