import { configureStore } from "@reduxjs/toolkit"; // Use Create Action to condense Create actions and actions in one place.
import { authReducer } from './slices/login';


export default configureStore({
  reducer: {
    auth: authReducer,
  },
  // middleware
});
