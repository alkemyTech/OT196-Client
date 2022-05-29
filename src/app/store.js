import { configureStore, createSlice } from "@reduxjs/toolkit"; // Use Create Action to condense Create actions and actions in one place.
import {persistStore, persistReducer} from 'redux-persist'; // Persist redux state to local storage.
import storage from 'redux-persist/lib/storage'; // Use local storage as default storage.



// Create Global State
const authState = {
  user: null,
  isAuthenticated:false,
  isError: false,
  message:'',
};

// Create Reducer,Actions and action's creators.

const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  reducers: {
    logIn: (state, action) => {
      state.isAuthenticated = action.payload;
      state.message = 'Successfully logged';
    },
    logOut: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.isError = false;
      state.message = 'Successfully logged out';
    },
    logError: (state, action) => {
      state.isError = action.payload;
    },
  },
});


const authReducer = authSlice.reducer;

const persistConfig = {
  key: 'persist',
  storage,
}

const persistedReducer = persistReducer(persistConfig,authReducer);
const persistor = persistStore(configureStore)

export {persistor};

// Export actions
export const {logIn, logOut, logError} = authSlice.actions;

export default configureStore({
  reducer: {
    auth: persistedReducer,
  },
  // middleware
});
