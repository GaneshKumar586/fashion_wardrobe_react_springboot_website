import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import CartItem from './CartItem'
import PriceCard from './PriceCard'
import { useNavigate } from 'react-router-dom'
import { getCart } from '../../../state/cart/Action'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
  const navigate = useNavigate();
  const {cart}=useSelector(store=>store);
  const dispatch = useDispatch();
  // const handleCheckOut=()=>{
  //   Navigate("/checkout?step=2")
  // }

  useEffect(()=>{
    dispatch(getCart())
  },[cart.updateCartItem, cart.deleteCartItem])
  return (
    <div className='p-4'>
        <Grid container spacing={2}>
            <Grid item xs={8}>
            {cart.cart ?
                cart.cart?.cartItems.map((unit)=><CartItem item={unit}/>)
                :
                [1,1,1,1].map((unit)=><CartItem  />)
              }
            </Grid>
            <Grid item sm={4}>
              <PriceCard/>
            </Grid>
        </Grid>

        
    </div>
  )
}

export default Cart