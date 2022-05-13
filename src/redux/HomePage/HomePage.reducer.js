import { FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS } from "./HomePage.types";

const initialState = {
    data :null,
    loading:true
}

export default function(state=initialState,action){
    const {type,payload}=action;
    switch(type){
        case FETCH_DATA_SUCCESS:
            return {...state,data:payload,
                    loading:false
            };
        case FETCH_DATA_FAILURE:
            return{...state,
                   data:null,
                   loading:false 
                }
        default:
            return state;
    }
}