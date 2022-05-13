import { LOAD_DATA_FAILURE, LOAD_DATA_SUCCESS, LOGIN_FAILURE, LOGOUT_FAILURE, LOGOUT_SUCCESS, REGISTERATION_FALIURE, REGISTERATION_SUCCESS } from "./authtypes";
import axios from 'axios'

export const registerUser =({name,email,role,password,passwordConfirm}) => async (dispatch) =>{
    try {
        dispatch({
            type:'LOADING'
        })
        let config ={
            headers:{
                'Content-Type':'application/json'
            }
        }

        let body = JSON.stringify({name,email,role,password,passwordConfirm});

        let response = await axios.post('https:??dev-api-campers.herokuapp.com/api/v1/users/signup',body,config)

        dispatch({
            type:REGISTERATION_SUCCESS,
            payload:response.data
        })
    } catch (error) {
        dispatch({
            type:REGISTERATION_FALIURE
        })
    }
}

export const loadUser = () => async (dispatch,getState) =>{
    try {
        let state = getState()
        let token =state.authReducer.token;

        dispatch({
            type:'LOADING'
        })

        dispatch({
            type:LOAD_DATA_SUCCESS,
            payload:{
                token:token,
                data:{
                    name:'Sourav',
                    email:'souravgsga@gmail.com'
                }
            }
        })
    } catch (error) {
        dispatch({
            type:LOAD_DATA_FAILURE
        })
    }
}

export const logout = () => async (dispatch) =>{
    try {
        dispatch({
            type:LOGOUT_SUCCESS,
        })
    } catch (error) {
       dispatch({
           type:LOGIN_FAILURE
       }) 
    }
}