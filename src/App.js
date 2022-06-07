import React from 'react';
import './App.css';
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
import ActivityList from './components/activities/ActivityList';
import ViewNews from './pages/ViewNews'
import ListNews from './pages/ListNews'


function App() {
  
  return (
    <div className="App">      
        <Header />
        <Routes>
          <Route index element = { <Home /> } /> 
          <Route path='/login' element = { <Login /> } /> 
          <Route path='/news/' element = { <ListNews /> } /> 
          <Route path='/news/:id' element = { <ViewNews /> } /> 
          <Route path='/backoffice/activities' element = { <ActivityList /> } /> 
          <Route path='*' element = { <NoMatchRoute /> } /> 
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
