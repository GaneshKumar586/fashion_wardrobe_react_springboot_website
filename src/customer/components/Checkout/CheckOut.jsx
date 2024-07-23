import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import DeliveryAddressForm from './DeliveryAddressForm';
import OrderSummary from './OrderSummary';
import { Grid } from '@mui/material';
import AddressCard from '../Address/AddressCard';

const steps = ['Login', 'Delivery Address', 'Order Summary', 'Payment'];

export default function CheckOut() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const location = useLocation();
    const navigate = useNavigate();

    const searchParams = new URLSearchParams(location.search);
    const step = searchParams.get('step');
    // if (!step) {
    //     navigate(`?step=0`)
    // }

    const handleNext = () => {

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        // activeStep=activeStep+1
        navigate(`?step=${activeStep + 1}`)
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        navigate(`?step=${activeStep - 1}`)
    };

    return (
        <div className='h-full m-10 p-10'>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={step}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {step === steps.length ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
                        {/* <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            {activeStep >= 1 &&
                                <Button
                                    color="inherit"
                                    disabled={step === 0}
                                    onClick={handleBack}
                                    sx={{ mr: 1 }}
                                >
                                    Back
                                </Button>}
                            {activeStep <= 3 &&
                                <Button onClick={handleNext}>
                                    {step === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            }
                        </Box> */}

                        <div className='mt-20 ml-20'>
                            {step == 2 ?

                                (< Grid xs={{ mt: 10, justifycontent: "flex-between" }} container spacing={6}>
                                    <Grid sx={{
                                        border: 1, borderRadius: '12px', overflowY: 'scroll',height:"34rem",
                                        hover:{'&::-webkit-scrollbar': {
                                            display: 'none',
                                        },}
                                    }} lg={5}>
                                        {[1, 1, 1, 1].map((unit) => <AddressCard />)}
                                    </Grid>
                                    <Grid sx={{mt:0,pl:8,pr:8,
                                        border: 1, borderRadius: '12px',
                                    }} lg={6}>
                                        <h2 className='text-red-600 font-bold p-2 text-xl border-gray-300 border-b-2'> Add New Address.. </h2>
                                        <DeliveryAddressForm />

                                    </Grid>
                                </Grid>
                                ) : <OrderSummary />}
                        </div>
                    </React.Fragment>
                )}
            </Box>
            {/* <Grid container spacing={3}>
                <Grid  lg={4}>
                    <AddressCard/>
                </Grid>
                <Grid lg={6}>
                    <DeliveryAddressForm/>
                </Grid>
            </Grid> */}
            {/* <div >
                <div >
                    <AddressCard/>
                </div>
                {/* <div >
                    <DeliveryAddressForm/>
                </div> */}
            {/* </div > * /} */}
        </div >
    );
}
