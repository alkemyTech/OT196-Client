import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
