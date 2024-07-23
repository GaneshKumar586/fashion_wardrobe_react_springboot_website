import { Button, Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

const trackingSteps = [
    "Placed",
    "OrderConfirmed",
    "Shipped",
    "Out For Delivery",
    "Delivered"
]
const OrderTracker = ({step}) => {
  return (
    <div className='flex items-center justify-around mx-3 px-1 py-8 border-gray-300 border-2 rounded-lg shadow-sm hover:shadow-lg my-8'>
        <Stepper activeStep={step} alternativeLabel>
            {trackingSteps.map((unit)=>(<Step>
                <StepLabel sx={{color:"red", fontSize:"30px"}}>{unit}</StepLabel>
            </Step>))}
        </Stepper>
        <Button contained sx={{bgcolor:'#e53935',width: "15%",color:'white',fontSize:15}}>CANCEL ORDER</Button>
    </div>
  )
}

export default OrderTracker