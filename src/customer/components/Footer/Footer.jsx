import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-alice-carousel'

const Footer = () => {
  return (
    <div>
    {/* // <div className='bg-slate-800 text-gray-200 grid grid-cols-4 w-full h-[20rem] mb-0'>Footer</div> */}
    <Grid className='bg-slate-500 text-gray-200 mt-5  ' container sx={{bgcolor:"black", color:"white", py:4}}>
        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6'> Company </Typography>
            <div>
            <Button className='pb-5' variant='h4' gutterbutton> About </Button>
            </div>
            <div>
            <Button className='pb-5' variant='h4' gutterbutton> Blog </Button>
           </div>
           <div>
            <Button className='pb-5' variant='h4' gutterbutton> press </Button>
            </div>
            <div>
            <Button className='pb-5' variant='h4' gutterbutton> Jobs </Button>
            </div>
            <div>
            <Button className='pb-5' variant='h4' gutterbutton> Partners </Button>
            </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6'> Solutions </Typography>
            <div>
            <Button className='pb-5' variant='h4' gutterbutton> Marketing </Button>
            </div>
            <div>
            <Button className='pb-5' variant='h4' gutterbutton> Analytics </Button>
           </div>
           <div>
            <Button className='pb-5' variant='h4' gutterbutton> Commerce </Button>
            </div>
            <div>
            <Button className='pb-5' variant='h4' gutterbutton> Insights </Button>
            </div>
            <div>
            <Button className='pb-5' variant='h4' gutterbutton> Support </Button>
            </div>
       
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6'> Documentstion </Typography>
            <div>
            <Button className='pb-5' variant='h5' gutterbutton> Guides </Button>
            </div>
            <div>
            <Button className='pb-5' variant='h4' gutterbutton>  API status </Button>
           </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Typography className='pb-5' variant='h6'> Legal </Typography>
            <div>
            <Button className='pb-5' variant='h4' gutterbutton> Claim </Button>
            </div>
            <div>
            <Button className='pb-5' variant='h4' gutterbutton> Privacy </Button>
           </div>
           <div>
            <Button className='pb-5' variant='h4' gutterbutton> Terms </Button>
            </div>
        </Grid>
    </Grid>
    <Grid sx={{bgcolor:"black", color:"white"}}  xs={12} sm={6} md={3}>
        <Typography className='pb-2' align="center" variant='body2'> &copy; 2024 Shopify. All rights reserved. </Typography>
        <div>
        <Typography className='pb-2' align="center" variant='body2' gutterbutton> Icons are from the Icons{' '}
        <Link href="https://www.freepik.com" color='inherit' underline='always'>FREEPIK</Link>{' '}from {' '}
        <Link href="https://www.flaticon.com" color='inherit' underline='always'>FLATICON</Link>
         website and material UI </Typography>
        </div>
        <div>
        <Typography className='pb-4' align="center" variant='body2' gutterbutton> Made in japan </Typography>
    </div>
    {/* <div>
        <Button className='pb-5' align="center" variant='h4' gutterbutton> Terms </Button>
        </div> */}
    </Grid>
    </div>
  )
}

export default Footer