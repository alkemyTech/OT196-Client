import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './components/home/Home';
import Header from './components/header';
import Login from './components/Login';
import Footer from './components/footer/Footer';
import NoMatchRoute from './components/noMatchRoute';
import CreateUser from './components/register/CreateUser'
import ShowNews from './components/news/ShowNews';
import Formcontact from './components/formContact';


function App() {
  return (
    <div className="App">
      
      {/* <BrowserRouter> */}
        <Header />
        <Routes>
          <Route index element = { <Home /> } /> 
          <Route path='/login' element = { <Login /> } />
          <Route path='/signup' element = { <CreateUser /> } />
          <Route path='/news' element = { <ShowNews /> } />
          <Route path='/contact-us' element = { <Formcontact /> } />
          <Route path='/testimonials' element = { <h1>testimonials</h1> } />
          <Route path='/about-us' element = { <h1>About Us</h1> } />
          <Route path='/donations' element = { <h1>Donations</h1> } />
          <Route path='*' element = { <NoMatchRoute /> } /> 
        </Routes>
        <Footer/>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
