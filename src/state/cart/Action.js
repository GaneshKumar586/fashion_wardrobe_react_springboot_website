import { api } from "../../configurations/apiConfig"
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"
// import api, {API_BACKEND_BASE_URL } from 
export const addItemToCart = (requestedData)=>async (dispatch)=>{
    dispatch({type:ADD_ITEM_TO_CART_REQUEST})

    try{
        const {responseData}=await api.put("/api/cart/add",requestedData)
        dispatch({type:ADD_ITEM_TO_CART_SUCCESS,payload:responseData})
    }catch(err){
        dispatch({type:ADD_ITEM_TO_CART_FAILURE,payload:err.message})
    }
}

export const getCart = ()=>async (dispatch)=>{
    dispatch({type:GET_CART_REQUEST})

    try{
        const {responseData}=await api.get("/api/cart/")
        console.log("cart : ",responseData);
        dispatch({type:GET_CART_SUCCESS,payload:responseData})
    }catch(err){
        dispatch({type:GET_CART_FAILURE,payload:err.message})
    }
}

export const updateItemInCart = (requestedData)=>async (dispatch)=>{
    dispatch({type:UPDATE_CART_ITEM_REQUEST})

    try{
        const {responseData}=await api.put(`/api/cart_items/${requestedData.cartItemId}`,requestedData.data)
        dispatch({type:UPDATE_CART_ITEM_SUCCESS,payload:responseData})
    }catch(err){
        dispatch({type:UPDATE_CART_ITEM_FAILURE,payload:err.message})
    }
}

export const removeItemFromCart = (cartItemId)=>async (dispatch)=>{
    dispatch({type:REMOVE_CART_ITEM_REQUEST})

    try{
        const {responseData}=await api.delete(`/api/cart_items/${cartItemId}`)
        dispatch({type:REMOVE_CART_ITEM_SUCCESS,payload:cartItemId})
    }catch(err){
        dispatch({type:REMOVE_CART_ITEM_FAILURE,payload:err.message})
    }
}