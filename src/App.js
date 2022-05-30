import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BackofficeUserList from "./pages/BackofficeUserList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/backoffice/users" element={<BackofficeUserList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
