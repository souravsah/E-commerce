import {  FETCH_IMAGE_SLIDER_SUCCESS, FETCH_NAVAD_DATA_FAILURE, FETCH_NAVAD_DATA_SUCCESS, FETCH_PRODUCT_DATA_FAILURE, FETCH_PRODUCT_DATA_SUCCESS,FETCH_IMAGE_SLIDER_FAILURE } from "./HomePage.types";

const initialState = {
    productData :[],
    productLoading:true,
    addData:[],
    addLoading:true,
    imagesliderData:[],
    imagesliderDataLoading:true,
}

export default function(state=initialState,action){
    const {type,payload}=action;
    switch(type){
        case FETCH_PRODUCT_DATA_SUCCESS:
            return {...state,productData:payload,
                productLoading:false
            };
        case FETCH_PRODUCT_DATA_FAILURE:
            return{...state,
                productData:null,
                productLoading:false 
                }
        case FETCH_IMAGE_SLIDER_SUCCESS:
            return {...state,imagesliderData:payload,imagesliderDataLoading:false} 
        case FETCH_IMAGE_SLIDER_FAILURE:
            return {...state,imagesliderData:null,imagesliderDataLoading:false}       
        case FETCH_NAVAD_DATA_SUCCESS:
            return {...state,addData:payload,addLoading:false}
        case FETCH_NAVAD_DATA_FAILURE:
            return {...state,addData:null,addLoading:false}
        default:
            return state;
    }
}