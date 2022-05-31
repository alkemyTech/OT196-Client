import React from 'react';
import {
  //BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './Components/home/Home';
import Header from './Components/header';
import Login from './Components/Login';
import Footer from './Components/footer/Footer';
import NoMatchRoute from './Components/noMatchRoute';
import EditOrganizationData from './Components/editOrganizationData/EditOrganizationData';

function App() {
  return (
    <div className="App">
      
      {/* <BrowserRouter> */}
        <Header />
        <Routes>
          <Route index element = { <Home /> } /> 
          <Route path='/login' element = { <Login /> } /> 
          <Route path= '/backoffice/edit-organization' element = { <EditOrganizationData /> } />
          <Route path='*' element = { <NoMatchRoute /> } /> 
        </Routes>
        <Footer/>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;