import { Button, Grid, TextField } from '@mui/material'
import React from 'react'

const DeliveryAddressForm = () => {
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("address");
        const data= new FormData(e.currentTarget)
        const address={
            firstName:data.get("firstName"),
            lastName:data.get("lastName"),
            streetAddress:data.get("address"),
            city:data.get("city"),
            state:data.get("state"),
            zipCode:data.get("zip"),
            mobile:data.get("phone"),
        }
    }
    return (<form onSubmit={handleSubmit}>
        <div className='border-gray-300 flex flex-col items-end justify-start pt-8 pl-4'>
            <Grid container relative spacing={1}>

                <Grid sx={{m:1}} lg={5}>
                    <TextField required id="firstName" name="firstName" label="First Name" fullWidth autoComplete />
                </Grid>
                <Grid sx={{m:1}} lg={5}>
                    <TextField required id="lastName" name="lastName" label="Last Name" fullWidth autoComplete />
                </Grid>
                <Grid sx={{m:1}} lg={10.25}>
                    <TextField rows={4} multiline required id="address" name="address" label="Address" fullWidth autoComplete />
                </Grid>
                <Grid sx={{ m:1}} lg={5}>
                    <TextField  required id="city" name="city" label="City" fullWidth autoComplete />
                </Grid>
                <Grid sx={{ m:1}} lg={5}>
                    <TextField required id="state" name="state" label="State" fullWidth autoComplete />
                </Grid>
                <Grid sx={{m:1}} lg={5}>
                    <TextField required id="zip" name="zip" label="Zip / Postal Code" fullWidth autoComplete />
                </Grid>
                <Grid  sx={{m:1}} lg={5}>
                    <TextField required id="phone" name="phone" label="Phone Number" fullWidth autoComplete />
                </Grid>
                <Grid  sx={{my:3}} lg={5}>
                    <Button  sx={{mt:2, bgcolor:'#e53935'}} variant="contained" type="submit" size="large">Deliver Here</Button>
                </Grid>
            </Grid>
        </div>
        </form>
    )
}

export default DeliveryAddressForm;