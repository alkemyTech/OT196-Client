import { createSlice } from "@reduxjs/toolkit";

// Create Global State

const authState = {
    user: null,
    isAuthenticated: false,
    isError: false,
    message: '',
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

// Export actions

export const { logIn, logOut, logError } = authSlice.actions;

export const authReducer = authSlice.reducer;





