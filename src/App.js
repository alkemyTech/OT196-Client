import React from 'react';
import './App.css';
import WorkingExample from './reducers/WorkingExample';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './Components/home/Home';
import Header from './Components/header';
import Login from './Components/Login';
import Footer from './Components/footer/Footer';
import NoMatchRoute from './Components/noMatchRoute';
import TestimonialForm from './Components/Testimonials/TestimonialForm';

function App() {
  const existingTestimony = {
    name: 'mi testimonio ', 
    content: 'mi contenido ', 
    id: 12,
  }

  return (
    <div className="App">      
      {/* <BrowserRouter> */}
      {/* <WorkingExample /> */}
        <Header />
        <Routes>
          <Route index element = { <Home /> } /> 
          <Route path='/login' element = { <Login /> } /> 
          <Route path='*' element = { <NoMatchRoute /> } /> 
          <Route path='/element/testimonial' element = { <TestimonialForm 
          existingTestimony={existingTestimony}
          /> } />
        </Routes>
        <Footer/>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
