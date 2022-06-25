import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
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
import ProtectedRoute from "../components/utils/ProtectedRoute";
import MyProfile from "./MyProfile";

export default function Router() {
  const location = useLocation();
  const userData = useSelector((state) => state.USER_LOGIN);

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
        <Route path="/activities/:id" element={<ActivityDetails />} />
        <Route path="/news/" element={<ListNews />} />
        <Route path="/news/:id" element={<ViewNews />} />

        {/* Routes available for admins only */}
        <Route
          path="/backoffice"
          element={<ProtectedRoute user={userData} roleReq="admin" />}
        >
          <Route index element={<Backoffice />} />
          <Route path="organization" element={<EditOrganizationData />} />
          <Route path="activities" element={<ActivityList />} />
          <Route path="contacts" element={<ContactList />} />
          <Route path="news" element={<BackofficeNews />} />
          <Route path="categories" element={<BackofficeCategories />} />
          <Route path="users" element={<BackofficeUserList />} />
          <Route path="testimonials" element={<BackofficeTestimonials />} />
        </Route>

        {/* Routes available for users only */}
        <Route element={<ProtectedRoute user={userData} roleReq="user" />}>
          <Route path="/my-profile" element={<MyProfile />} />
        </Route>

        <Route path="*" element={<NoMatchRoute />} />
      </Routes>
    </AnimatePresence>
  );
}
