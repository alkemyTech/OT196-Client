import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './components/home/Home';
import Header from './Components/header';
import Login from './Components/Login';
import EditUserForm from './components/editUserForm/EditUserForm';
import Footer from './components/footer/Footer';
import NoMatchRoute from './Components/noMatchRoute';


function App() {
  return (
    <div className="App">      
        <Header />
        <Routes>
          <Route path="/" element = { <Home /> } /> 
          <Route path='/login' element = { <Login /> } /> 
          <Route path='/edit-user-form' element = { <EditUserForm /> } /> 
          <Route path='*' element = { <NoMatchRoute /> } /> 
        </Routes>
        <Footer/>

    </div>
  );
}

export default App;
