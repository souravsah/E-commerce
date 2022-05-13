import React, { createContext, useReducer } from "react";
import Ecommercereducer from "./Ecommercereducer"
let initialdata = {
    togglesidebar:false,
}

export const Ecommercedatastore = createContext(initialdata);

export const Ecommercedata = ({children}) =>{
    let [state,dispatch] = useReducer(Ecommercereducer,initialdata);
    return (
        <Ecommercedatastore.Provider
        
        value={{
            togglesidebar:state.togglesidebar,

        }
        }
        
        >
            {children}
        </Ecommercedatastore.Provider>
    );
}