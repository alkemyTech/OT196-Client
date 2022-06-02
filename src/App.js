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

function App() {
  
  return (
    <div className="App">      
      {/* <BrowserRouter> */}
<WorkingExample />
        <Header />
        <Routes>
          <Route index element = { <Home /> } /> 
          <Route path='/login' element = { <Login /> } /> 
          <Route path='*' element = { <NoMatchRoute /> } /> 
        </Routes>
        <Footer/>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
