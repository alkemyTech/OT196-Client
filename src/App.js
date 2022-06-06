import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Header from "./components/header";
import Login from "./components/Login";
import Footer from "./components/footer/Footer";
import NoMatchRoute from "./components/noMatchRoute";
import ActivityList from "./components/activities/ActivityList";
import ActivityDetails from "./pages/ActivityDetails";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/backoffice/activities" element={<ActivityList />} />
        <Route path="/actividades/:id" element={<ActivityDetails />} />
        <Route path="*" element={<NoMatchRoute />} />
      </Routes>
      <Footer />
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
