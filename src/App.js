import React from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer/Footer";
import Router from "./pages/Router";

function App() {

  return (
    <div className="App">
       <Header />  
          {/*FOR USING ANIMATIONS YOU MUST ADD YOUR NEW ROUTES TO COMPONENT 
          ROUTER IN THE FOLDER PAGES
          */}
        <Router />
        <Footer />
   </div>
  );
}

export default App;
