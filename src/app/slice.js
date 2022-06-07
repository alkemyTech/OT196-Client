import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
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

const REACT_APP_BACKEND = `http://localhost:3000`

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

export const deleteUser = (id)=> {  //FUNCTION TO DELETET USER BY ID 
    return async function(dispatch){
        try {
             await axios.delete(`${REACT_APP_BACKEND}/users/user/${id}`)
        } catch (error) {
            console.log(error)
        }         
    }    
}

//FUNCTION FOR EDIT A TESTIMONIAL EXISTING 
export const editTestimonialForm = (existingTestimony)=> {
    return async function(dispatch){
        try {
           await axios.patch(`${REACT_APP_BACKEND}/testimonials/${existingTestimony.id}`, existingTestimony)
        } catch (error) {
            throw new Error(error)
        }
    }
}

//FUNCTION FOR CREATE A NEW TESTIMONIAL 
export const submitTestimonialForm = (testimony)=> {
return async function(dispatch){
    try {
       await axios.post(`${REACT_APP_BACKEND}/testimonials`, testimony)
    } catch (error) {
        throw new Error(error)
    }
}
}

export  { loginSlice, isMyUserLogged }
export const { submitUserData } = loginSlice.actions
export default loginSlice.reducer