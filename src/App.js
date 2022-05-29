import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, logOut } from './app/store';

function App() {
  
  // Get state from store with useSelector and useDispatch.
  const state = useSelector(state => state.auth); // State with the name 'auth'
  const dispatch = useDispatch();

  // Dispatch logIn and logOut depending on state.isAuthenticated.

  function handleClick() {
    dispatch(!state.isAuthenticated?logIn(!state.isAuthenticated): logOut(!state.isAuthenticated));
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

export default App;
