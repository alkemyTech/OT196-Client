import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, logOut } from './slices/authReducer';

function WorkingExample() {

    // Get state from store with useSelector
    const state = useSelector(state => state.auth); // State with the name 'auth'

    // Dispatch logIn and logOut depending on state.isAuthenticated.
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(!state.authData.isAuthenticated ? logIn(state.authData.isAuthenticated) : logOut(!state.authData.isAuthenticated));
        console.log(state.authData.isAuthenticated);
    }
    
    // Click event to dispatch logIn and logOut.
    return (
        <div className="App">
            <header className="App-header">
                <button onClick={handleClick}>LogIn or LogOut?</button>
                {state.message}
            </header>
        </div>
    );
}

export default WorkingExample;
