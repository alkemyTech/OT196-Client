import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { logOut } from "../reducers/slices/authReducer";
const initialState = {
    isUserLogged: false, 
}

const loginSlice = createSlice({
    name: "USER_LOGIN",
    initialState, 
    reducers: {
        submitUserData: (state, action)=> {
            state.isUserLogged = action.payload
        }
    }
})

const { REACT_APP_BACKEND } = process.env

const isMyUserLogged = (user)=> {
    return async (dispatch)=> {
        try {
          const response = await axios.post(`${REACT_APP_BACKEND}/auth/login`, user) 
          dispatch(submitUserData(response.data))
        } catch (error) {
            console.log(error)
        }      
    }
}

const submitUpdateDataOrganization =  (dataOrganization)=> {
    return async dispatch=> {
        try {
            //aqui va la conexion cuando el endpoint este listo       
        } catch (error) {
            throw new Error(error)            
        }
    }
}

export const deleteUser = (id)=> {  //FUNCTION TO DELETET USER BY ID 
    return async function(dispatch){
        try {
             await axios.delete(`${REACT_APP_BACKEND}/users/user/${id}`)
        } catch (error) {
            console.log(error)
        }         
    }    
}

//with this function you can sign off the user sesion 
export const signOff = ()=> {
    return function(dispatch){
        try {
            dispatch(logOut())
        } catch (error) {
            console.log(error)
        }
    }
}
export  { loginSlice, isMyUserLogged, submitUpdateDataOrganization }
export const { submitUserData } = loginSlice.actions
export default loginSlice.reducer
