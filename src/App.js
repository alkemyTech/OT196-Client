import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './Components/header';
import { Route, Routes } from 'react-router-dom';
import NoMatchRoute from './Components/noMatchRoute';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
       <Header />

      <Routes>
        <Route index element = { <Counter /> } /> 
        <Route path='/login' element = { <Login /> } /> 
        <Route path='*' element = { <NoMatchRoute /> } /> 
      </Routes>
   
    </div>
  );
}

export default App;
