import { FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS } from "./HomePage.types";
import axios from 'axios';

const BASE_URL ="http://localhost:8000"

export const getData = () => async(dispatch) =>{
    try {
        const data =await axios.get(`${BASE_URL}/api/v1/product/newarrivals`)
        dispatch({
            type:'FETCH_DATA_SUCCESS',
            payload:data.data.data
        })
       
    } catch (error) {
        
    }
}    
