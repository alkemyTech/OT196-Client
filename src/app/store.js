import { configureStore } from '@reduxjs/toolkit';
import USER_LOGIN from './slice'
// import authReducer from '../reducers/slices/authReducer'
import contactSlice from './contactSlice';


export default configureStore({
  reducer: {    
    USER_LOGIN,   
    contacts: contactSlice,
    // authReducer
  },
});
