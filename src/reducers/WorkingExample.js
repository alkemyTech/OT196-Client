import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signOff } from '../app/slice';
import { logIn, logOut } from './slices/authReducer';

function WorkingExample() {

    // Get state from store with useSelector
    const state = useSelector(state => state.auth); // State with the name 'auth'

    // Dispatch logIn and logOut depending on state.isAuthenticated.
    const dispatch = useDispatch();

    function handleClick(e) {
        e.preventDefault();

        dispatch(
            !state.authData.isAuthenticated? 
            logIn(state.authData.isAuthenticated) 
            : 
            // logOut(!state.authData.isAuthenticated));     
            dispatch(signOff()))
    }
    
    // Click event to dispatch logIn and logOut for the example
    return (
        <div className="App">
            <header className="App-header">
                <button onClick={handleClick}>LogIn / LogOut</button><hr/>
                {state.message}<hr/>
                {`isAuthenticated?  ${state.authData.isAuthenticated.toString()}`}
            </header>
        </div>
    );
}

export default WorkingExample;
