import { api } from "../../configurations/apiConfig";
import { FIND_PRODUCT_BY_CATEGORY_FAILURE, FIND_PRODUCT_BY_CATEGORY_REQUEST, FIND_PRODUCT_BY_CATEGORY_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS } from "./ActionType";

export const findProducts = (requestedData)=>async(dispatch)=>{
    dispatch({type:FIND_PRODUCT_BY_CATEGORY_REQUEST})

    const {colors, sizes ,minPrice,maxPrice,minDiscount,category,stock,sort,pageNumber,pageSize} = requestedData;

    try{
        const {ResponseData} =await  api.get(`/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDIscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
        console.log("productData", ResponseData);
        dispatch({type:FIND_PRODUCT_BY_CATEGORY_SUCCESS , payload:ResponseData})
    }catch(err){
        dispatch({type:FIND_PRODUCT_BY_CATEGORY_FAILURE, payload:err.message})
    }
};

export const findProductsById = (requestedData)=>async(dispatch)=>{

    dispatch({type:FIND_PRODUCT_BY_ID_REQUEST})

    const {productId}= requestedData;

    try{
        const {ResponseData} =await api.get(`/api/products/id/${productId}`)

        dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS , payload:ResponseData})
    }catch(err){
        dispatch({type:FIND_PRODUCT_BY_ID_FAILURE, payload:err.message})
    }
};