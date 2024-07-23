import { Button } from '@mui/material';
import React from 'react'

const AddressCard = ({button}) => {
    return (
        <div className=' p-3 max-h-auto border-gray-300 border-b-2 m-1  overflow-hidden '>
            <p className='p-1 font-bold text-lg text-red-600 text-start'>Raam Hassan </p>
            <p className='p-2 text-start text-base opacity-80 font-semibold text-black'>Cecilia Chapman
                
            </p>
            <p className='p-1 text-start text-base opacity-80 font-semibold text-black'>
            56/78, 14thA Cross, 2nd Main, Garden Layout, JP Nagar 7th Phase. Landmark: Behind Sparsh Supermarket
            </p>
            <p className='p-1 text-start opacity-80 text-base font-semibold text-black'>
            Hyderabad, Telangana
                
            </p>
            <p className='p-1 font-bold text-lg text-green-600 text-start'>
            Phone No.: (+91) 93309181092 | Postal: 405124
                
            </p>
            {button &&
            <Button  sx={{mt:2, bgcolor:'#e53935'}} variant="contained" type="submit" size="large">Deliver Here</Button>}
        </div>
        
    )
}

export default AddressCard;