import { Button } from '@mui/material';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AddressCard = ({button,address}) => {
    const dispatch = useDispatch();
    const navigate= useNavigate();
    const handleSubmit=()=>{
    //     e.preventDefault();
    //     console.log("address");
    //     const data= new FormData(e.currentTarget)
    //     const address={
    //         firstName:data.get("firstName"),
    //         lastName:data.get("lastName"),
    //         streetAddress:data.get("address"),
    //         city:data.get("city"),
    //         state:data.get("state"),
    //         zipCode:data.get("zip"),
    //         mobile:data.get("phone"),
    //     }
    //     const orderData = {address, navigate}
    //     dispatch(placeOrder(orderData))
    //     navigate(`?step=${3}`)
    //     console.log("address", address);
    }
    return (
        <div className=' p-3 max-h-auto border-gray-300 border-b-2 m-1  overflow-hidden '>
            <p className='p-1 font-bold text-lg text-red-600 text-start'>{address ? (address?.first_name+" "+ address?.last_name ): "Raam Hassan"} </p>
            <p className='p-2 text-start text-base opacity-80 font-semibold text-black'>Cecilia Chapman
                
            </p>
            <p className='p-1 text-start text-base opacity-80 font-semibold text-black'>
            {address ? address?.street_name : "(56/78, 14thA Cross, 2nd Main, Garden Layout, JP Nagar 7th Phase. Landmark: Behind Sparsh Supermarket)"}
            </p>
            <p className='p-1 text-start opacity-80 text-base font-semibold text-black'>
            {address ? address?.city : "Hyderabad"},{address ? address?.state :  "Telangana"}
                
            </p>
            <p className='p-1 font-bold text-lg text-green-600 text-start'>
            Phone No.: (+91) {address ? address?.mobile : "93309181092"} | Postal: {address ? address?.zipcode : "405124"}
                
            </p>
            {button &&
             <Button  onClick={handleSubmit} sx={{mt:2, bgcolor:'#e53935'}} variant="contained" type="submit" size="large">Deliver Here</Button>}
        </div>
        
    )
}

export default AddressCard;