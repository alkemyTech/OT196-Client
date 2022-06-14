import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header";
import Login from "./pages/Login";
import Footer from "./components/footer/Footer";
import NoMatchRoute from "./pages/NoMatchRoute";
import BackofficeTestimonials from "./pages/BackofficeTestimonials";
import ScreenContact from "./pages/ScreenContact";
import EditOrganizationData from "./pages/EditOrganizationData";
import ActivityList from "./pages/ActivityList";
import CreateUser from "./pages/CreateUser";
import ContactList from "./pages/ContactList";
import ActivityDetails from "./pages/ActivityDetails";
import ViewNews from "./pages/ViewNews";
import ListNews from "./pages/ListNews";
import Backoffice from "./pages/Backoffice";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<CreateUser />} />
        <Route path="/testimonials" element={<h1>testimonials</h1>} />
        <Route path="/contact-us" element={<ScreenContact />} />
        <Route path="/about-us" element={<h1>About Us</h1>} />
        <Route path="/donations" element={<h1>Donations</h1>} />
        <Route path="/backoffice" element={<Backoffice />} />
        <Route
          path="/backoffice/edit-organization"
          element={<EditOrganizationData />}
        />
        <Route path="/backoffice/activities" element={<ActivityList />} />
        <Route path="/backoffice/contacts" element={<ContactList />} />
        <Route
          path="/backoffice/testimonials"
          element={<BackofficeTestimonials />}
        />
        <Route path="/actividades/:id" element={<ActivityDetails />} />
        <Route path="/news/" element={<ListNews />} />
        <Route path="/news/:id" element={<ViewNews />} />
        <Route path="*" element={<NoMatchRoute />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
