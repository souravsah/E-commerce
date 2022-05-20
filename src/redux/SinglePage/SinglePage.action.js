import { FETCH_SINGLEPRODUCT_DATA_FAILURE, FETCH_SINGLEPRODUCT_DATA_SUCCESS } from "./SinglePage.types";

import axios from "axios";
const BASE_URL ="https://saviorclothes.herokuapp.com"

export const getSingleData = (id) => async(dispatch) =>{
    try {
        const data =await axios.get(`${BASE_URL}/api/v1/product/${id}`)
        dispatch({
            type:FETCH_SINGLEPRODUCT_DATA_SUCCESS,
            payload:data.data.data
        })
       
    } catch (error) {
        dispatch({
            type:FETCH_SINGLEPRODUCT_DATA_FAILURE
        })
    }
}   
