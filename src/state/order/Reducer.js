import { GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS, PLACE_ORDER_FAILURES, PLACE_ORDER_REQUEST, PLACE_ORDER_SUCCESS } from "./ActionType"

const stateZero = {
    orders:[],
    order:null,
    error:null,
    loading:false,
}

export const orderReducer=( state = stateZero, action)=>{
    switch( action.type){
        case PLACE_ORDER_REQUEST:
            return {...state,loading: true, error:null};
        case PLACE_ORDER_SUCCESS:
            return { state,loading: false, success: true, order: action.payload, error:null};
        case PLACE_ORDER_FAILURES:
            return { ...state,loading: false, error: action.payload};
        case GET_ORDER_BY_ID_REQUEST:
            return {...state, loading: true, error: null};
        case GET_ORDER_BY_ID_SUCCESS:
            return {...state, loading: false,error: null, order: action.payload};
        case GET_ORDER_BY_ID_FAILURE:
            return {...state,loading:false, error: action.payload};
        default:
            return state;
    }
}