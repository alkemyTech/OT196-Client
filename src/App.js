import React from 'react';
import './App.css';
import WorkingExample from './reducers/WorkingExample';
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
