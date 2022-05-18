import { FETCH_SINGLEPRODUCT_DATA_FAILURE, FETCH_SINGLEPRODUCT_DATA_SUCCESS } from "./SinglePage.types";

const initialState = {
    data:[],
    loading:true
}

export default function(state=initialState,action){
    const {type,payload}=action;
    switch(type){
        case FETCH_SINGLEPRODUCT_DATA_SUCCESS:
            return {...state,data:payload,
                loading:false
            };
        case FETCH_SINGLEPRODUCT_DATA_FAILURE:
            return{...state,
                data:null,
                loading:false 
            };
        default:
          return state;
    }
}