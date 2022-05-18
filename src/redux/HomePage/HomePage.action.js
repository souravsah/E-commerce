import {  FETCH_IMAGE_SLIDER_FAILURE, FETCH_IMAGE_SLIDER_SUCCESS, FETCH_NAVAD_DATA_FAILURE, FETCH_NAVAD_DATA_SUCCESS, FETCH_PRODUCT_DATA_FAILURE, FETCH_PRODUCT_DATA_SUCCESS } from "./HomePage.types";

import axios from 'axios';

const BASE_URL ="https://saviorclothes.herokuapp.com"

export const getProductData = () => async(dispatch) =>{
    try {
        const data =await axios.get(`${BASE_URL}/api/v1/product/newarrivals`)
        dispatch({
            type:FETCH_PRODUCT_DATA_SUCCESS,
            payload:data.data.data
        })
       
    } catch (error) {
        dispatch({
            type:FETCH_PRODUCT_DATA_FAILURE
        })
    }
}   

export const getImageSliderData = () => async(dispatch) =>{
    try {
        const data =await axios.get(`${BASE_URL}/api/v1/slider`)
        dispatch({
            type:FETCH_IMAGE_SLIDER_SUCCESS,
            payload:data.data.data
        })
       
    } catch (error) {
        dispatch({
            type:FETCH_IMAGE_SLIDER_FAILURE
        })
    }
}
export const getnavadData = () => async(dispatch) =>{
    try {
        const data =await axios.get(`${BASE_URL}/api/v1/navad`)
        dispatch({
            type:FETCH_NAVAD_DATA_SUCCESS,
            payload:data.data.data
        })
       
    } catch (error) {
        dispatch({
            type:FETCH_NAVAD_DATA_FAILURE
        })
    }
}
