import { Box, Button, Grid,  TextField } from '@mui/material'
import React, { useEffect } from 'react'
import Modal from '@mui/material/Modal';
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, signup } from '../../state/authState/Action';
import CloseIcon from '@mui/icons-material/Close';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const SignupModal = () => {
    const navigate=  useNavigate();
    const dispatch  = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const {auth} = useSelector(store=>store)

    useEffect(()=>{
        if(jwt){
            dispatch(getUser(jwt))
        }
    },[jwt,auth.jwt])

    
    const handleSubmit = (event) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget);
        const userData={
            firstName:data.get("firstName"),
            lastName:data.get("lastName"),
            email: data.get("email"),
            password: data.get("password")
        }
        dispatch(signup(userData));
        console.log("clientInfo",userData);

    }

    return (
        <div className='m-10 w-20 text-center'>
            <Modal
        open={true}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <form onSubmit={handleSubmit} action="">
            <div className='flex flex-end'>
                    <CloseIcon onClick={()=>{navigate('/')}}/>
                </div>
                <div className='grid grid-flow-row space-x-2 p-2'>
                    <div className='flex py-2 space-x-2 flex-row'>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="first Name"
                            fullWidth
                            autoComplete='given-name' />
                        <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="last Name"
                            fullWidth
                            autoComplete='given-name' />
                    </div>
                    <div className='py-2'>
                        <TextField
                            required
                            id="email"
                            name="email"
                            label="E-mail"
                            fullWidth
                            autoComplete='email' />
                    </div>
                    <div className='py-2'>
                        <TextField
                            required
                            id="password"
                            name="password"
                            label="password"
                            fullWidth
                            autoComplete='password'
                        />
                    </div>
                    <Button className='py-2 bg-red-600 w-25 text-white'
                        type="submit" variant="contained" size="large" sx={{ bgcolor:"red",padding: ".8rem " }}>
                        Register
                    </Button>

                </div>
            </form>
            <div className='flex m-3 justify-center items-center py-2'>
                <p> Already have an account?</p>
                <Button onClick={()=>navigate("/login")}  sx={{ color:"red",padding: ".8rem " }}>Login</Button>
            </div>
            </Box>
            </Modal>
        </div>
    )
}

export default SignupModal