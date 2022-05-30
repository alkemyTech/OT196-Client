import { configureStore } from "@reduxjs/toolkit"; 
import { authReducer } from './slices/authReducer';


export default configureStore({
  reducer: {
    auth: authReducer,
  },
  // middleware
});
