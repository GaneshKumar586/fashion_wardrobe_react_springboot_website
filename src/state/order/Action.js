// import axios from "axios";
import { GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS, PLACE_ORDER_FAILURES, PLACE_ORDER_REQUEST, PLACE_ORDER_SUCCESS } from "./ActionType"
import { api } from "../../configurations/apiConfig";

export const placeOrder = (requestedData) => async (dispatch)=>{
    dispatch({type: PLACE_ORDER_REQUEST});
    try{
        const {data} = await api.post(`/api/orders/`, requestedData.address);
        if(data.id){
            requestedData.navigate({search: `step=3&order_id=${data.id}`});
        }
        dispatch({type: PLACE_ORDER_SUCCESS,payload: data});

    }catch(err){
        dispatch({type: PLACE_ORDER_FAILURES,payload: err.message,})
    }
}

export const getOrder = (orderId) => async (dispatch)=>{
    dispatch({type: GET_ORDER_BY_ID_REQUEST});
    try{
        const {data} = await api.get(`/api/orders/${orderId}`);
        // if(data.id){
        //     requestedData.navigate({search: `step=3&order_id=${data.id}`});
        // }
        dispatch({type: GET_ORDER_BY_ID_SUCCESS,payload: data});

    }catch(err){
        dispatch({type: GET_ORDER_BY_ID_FAILURE,payload: err.message,})
    }
}