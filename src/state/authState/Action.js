import axios from "axios";
import { API_BACKEND_BASIC_URI } from "../../configurations/apiConfig"
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./ActionType"

const signupRequest = () => ({type:SIGNUP_REQUEST});
const signupSuccess = (user) => ({type:SIGNUP_SUCCESS,payload:user});
const signupFailure = (error) => ({type:SIGNUP_FAILURE,payload:error});


const loginRequest = () => ({type:LOGIN_REQUEST});
const loginSuccess = (user) => ({type:LOGIN_SUCCESS,payload:user});
const loginFailure = (error) => ({type:LOGIN_FAILURE,payload:error});


const getUserRequest = () => ({type:GET_USER_REQUEST});
const getUserSuccess = (user) => ({type:GET_USER_SUCCESS,payload:user});
const getUserFailure = (error) => ({type:GET_USER_FAILURE,payload:error});


const token = localStorage.getItem("jwt"); 

export const signup=(userData)=>async(dispatch)=>{
    dispatch(signupRequest())
    try{
        const res = await axios.post(`${API_BACKEND_BASIC_URI}/auth/signup`,userData)
        const user = res.data;
        if(user.jwt){
            localStorage.setItem("jwt",user.jwt)
        }
        dispatch(signupSuccess(user.jwt))
    }catch(err){
        dispatch(signupFailure(err.message))
    }
}

export const login=(userData)=>async(dispatch)=>{
    dispatch(loginRequest())
    try{
        const res = await axios.post(`${API_BACKEND_BASIC_URI}/auth/signin`,userData)
        const user = res.data;
        if(user.jwt){
            localStorage.setItem("jwt",user.jwt)
        }
        dispatch(loginSuccess(user.jwt))
    }catch(err){
        dispatch(loginFailure(err.message))
    }
}

export const getUser=(jwt)=>async(dispatch)=>{
    dispatch(getUserRequest())
    try{
        // const headers:{
        //     "Authorization": `Bearer ${jwt}`
        // }
        const res = await axios.get(`${API_BACKEND_BASIC_URI}/api/users/profile`,jwt)
        
        const user = res.data;
        
        dispatch(getUserSuccess(user))
    }catch(err){
        dispatch(getUserFailure(err.message))
    }
}

export const logout = ()=>(dispatch)=>{
    dispatch({type:LOGOUT,payload:null})
    localStorage.clear();
}