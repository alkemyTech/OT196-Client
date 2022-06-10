import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = { 
    contacts: [],
}

const { REACT_APP_BACKEND_URL } = process.env

//REDUCER FOR LOAD THE CONTACTS 
const contactSlice = createSlice({
    name: 'CONTACTS', 
    initialState, 
    reducers: {
        loadContacts: (state, action)=> {            
            state.contacts = action.payload
        }
    }
})

//FUNCTION FOR GET THE CONTACTS BY THE API 
export const getContacts = ()=> {
    return async function(dispatch){
        try {
             //YOU MUST UPDATE THE ROUTE FOR GET THE DATA, 
             //FOR TEST THE FEATURE I USE THE GET USERS ENDPOINT 
          const response = await axios(`${REACT_APP_BACKEND_URL}/users/`)         
          dispatch(loadContacts(response.data))
        } catch (error) {
            console.log(error)
        }
    }
}

export const { loadContacts } = contactSlice.actions
export default contactSlice.reducer