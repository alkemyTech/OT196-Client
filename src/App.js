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
import Footer from './components/footer/Footer';
import NoMatchRoute from './Components/noMatchRoute';

function App() {
  return (
    <div className="App">      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element = { <Home /> } /> 
          <Route path='/login' element = { <Login /> } /> 
          <Route path='*' element = { <NoMatchRoute /> } /> 
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
