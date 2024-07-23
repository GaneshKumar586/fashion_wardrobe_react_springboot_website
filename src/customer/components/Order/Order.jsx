import { Grid } from '@mui/material'
import React from 'react'
import OrderCard from './OrderCard'

const orderStatusSteps = [
  { label: "On the way", value: "on_the_way" },
  { label: "Delivered", value: "delivered" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Returned", value: "returned" },

]
const Order = () => {
  return (
    <div>
      <Grid container spacing={5} sx={{ m: 5 }}>
        <Grid item lg={3}>
          <div className='border-gray-300 p-3 rounded-lg border-2 shadow-lg hover:shadow-2xl m-1'>
            <p className='text-xl text-red-600 font-bold p-2 border-b-2 text-start border-gray-200 '>Filter</p>
            <p className='text-xl my-3 p-2 font-semibold text-red-600 text-start'>ORDER STATUS</p>
            {orderStatusSteps.map((unit) => (
              <div className='flex justify-start px-4 my-2'>
                <input defaultValue={unit.value} type="checkbox" className='h-4 pr-4 w-4 border-gray-300 text-green-600' />
                <label className='text-md font-bold px-3  text-green-600' htmlFor={unit.value}>{unit.label}</label>
              </div>
            ))

            }
          </div>
        </Grid>
        <Grid item lg={8}>
          {/* <div className='my-2'> */}
          {[1,1,1,1].map((unit)=>(<OrderCard/>))}
          {/* </div> */}
        </Grid>

      </Grid>
    </div>
  )
}

export default Order