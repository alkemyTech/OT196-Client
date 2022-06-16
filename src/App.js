import React from "react";
import "./App.css";
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header";
import Login from "./pages/Login";
import Footer from "./components/footer/Footer";
import NoMatchRoute from "./pages/NoMatchRoute";
// import ScreenTestimonials from "./pages/ScreenTestimony";
import ScreenContact from "./pages/ScreenContact";
import EditOrganizationData from "./pages/EditOrganizationData";
import ActivityList from "./pages/ActivityList";
import CreateUser from "./pages/CreateUser";
import ShowNews from "./components/news/ShowNews";
import Formcontact from "./components/contact/formContact";
import ContactList from './pages/ContactList';
import ActivityDetails from "./pages/ActivityDetails";
import Backoffice from "./pages/Backoffice";
import BackofficeUserList from "./pages/BackofficeUserList";
import BackofficeNews from "./pages/BackofficeNews";
import ViewNews from './pages/ViewNews'
import ListNews from './pages/ListNews'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<CreateUser />} />
        <Route path="/news" element={<ShowNews />} />
        <Route path="/contact-us" element={<Formcontact />} />
        <Route path="/testimonials" element={<h1>testimonials</h1>} />
        <Route path="/about-us" element={<h1>About Us</h1>} />
        <Route path="/donations" element={<h1>Donations</h1>} />
        <Route
          path="/backoffice/edit-organization"
          element={<EditOrganizationData />}
        />
        <Route path="/backoffice/activities" element={<ActivityList />} />
        <Route path='/backoffice/contacts' element = { <ContactList /> } /> 
        {/* <Route
          path="/backoffice/testimonials"
          element={<ScreenTestimonials />}
        /> */}

        <Route path="/backoffice/users" element={<BackofficeUserList />} />
        <Route path="/backoffice/news" element={<BackofficeNews />} />
        <Route path="/backoffice" element={<Backoffice />} />
        <Route path="/contact" element={<ScreenContact />} />
        <Route path='/novedades/' element = { <ListNews /> } /> 
        <Route path='/novedades/:id' element = { <ViewNews /> } /> 
        <Route path="/actividades/:id" element={<ActivityDetails />} />
        <Route path="*" element={<NoMatchRoute />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
