import { createSlice } from "@reduxjs/toolkit";

// Create Global State

const authState = {
    authData: {
        id: null,
        name: null,
        lastName: null,
        email: null,
        userRole: null,
        isAuthenticated: false,
    },
    isError: false,
    alert: false,
    message: '',
};

// Create Reducer,Actions and action's creators.

const authSlice = createSlice({
    name: "auth",
    initialState: authState,
    reducers: {
        logIn: {
            reducer:(state, action) => {
            state.authData.name = action.payload.name;
            state.authData.lastName = action.payload.lastName;
            state.authData.email = action.payload.email;
            state.authData.userRole = action.payload.userRole;            
            state.authData.isAuthenticated = true;
            state.isError = false;
            state.message = 'Successfully logged';
            },
            prepare: (name, lastName, email, userRole) => {
                return {
                    payload: {
                        name,
                        lastName,
                        email,
                        userRole,
                    },
                };
            },
        },
        // logOut: (state) => {
        //     state.authData.name = null;
        //     state.authData.isAuthenticated = false;
        //     state.isError = false;
        //     state.message = 'Successfully logged out';
        // },
    },
});

// Export actions && reducers

export const { logIn, logOut, logError } = authSlice.actions;
console.log(logIn('Juan', 'Perez', 'pedrobraude@gmail.com', 'ADMIN'))

export const authReducer = authSlice.reducer;






