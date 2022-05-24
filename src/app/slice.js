import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isUserLogged: false, 
}

const rootreducerslice = createSlice({
    name: "USER_LOGIN",
    initialState, 
    reducers: {
        submitUserData(state, action){
            return {
                ...state, 
                isUserLogged: action.payload
            }    
        }
    }
})