import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Home";
import Login from "./Login";
import NoMatchRoute from "./NoMatchRoute";
import BackofficeTestimonials from "./BackofficeTestimonials";
import ScreenContact from "./ScreenContact";
import EditOrganizationData from "./EditOrganizationData";
import ActivityList from "./ActivityList";
import CreateUser from "./CreateUser";
import ContactList from "./ContactList";
import ActivityDetails from "./ActivityDetails";
import ViewNews from "./ViewNews";
import ListNews from "./ListNews";
import Backoffice from "./Backoffice";
import BackofficeNews from "./BackofficeNews";
import BackofficeCategories from "./BackofficeCategories";
import BackofficeUserList from "./BackofficeUserList";
import BackofficeCategories from "./BackofficeCategories"

export default function Router() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
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
        <Route path="/backoffice/news" element={<BackofficeNews />} />
        <Route
          path="/backoffice/categories"
          element={<BackofficeCategories />}
        />
        <Route path="/backoffice/users" element={<BackofficeUserList />} />
        <Route
          path="/backoffice/testimonials"
          element={<BackofficeTestimonials />}
        />
        <Route
          path="/backoffice/categories"
          element={<BackofficeCategories />}
        />
        <Route path="/actividades/:id" element={<ActivityDetails />} />
        <Route path="/news/" element={<ListNews />} />
        <Route path="/news/:id" element={<ViewNews />} />
        <Route path="*" element={<NoMatchRoute />} />
      </Routes>
    </AnimatePresence>
  );
}
