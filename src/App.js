import React from 'react';
import './App.css';
import WorkingExample from './reducers/WorkingExample';
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
import ScreenTestimonials from './pages/ScreenTestimony';
import ScreenContact from './pages/screenContact';
import EditOrganizationData from './Components/editOrganizationData/EditOrganizationData';
import ActivityList from './Components/activities/ActivityList';
import CreateUser from './components/register/CreateUser'
import ShowNews from './components/news/ShowNews';
import Formcontact from './components/formContact';
import ActivityDetails from "./pages/ActivityDetails";

function App() {
  return (
    <div className="App">
      
      {/* <BrowserRouter> */}
        <Header />
        <Routes>
          <Route index element = { <Home /> } /> 
          <Route path='/login' element = { <Login /> } />
          <Route path='/signup' element = { <CreateUser /> } />
          <Route path='/news' element = { <ShowNews /> } />
          <Route path='/contact-us' element = { <Formcontact /> } />
          <Route path='/testimonials' element = { <h1>testimonials</h1> } />
          <Route path='/about-us' element = { <h1>About Us</h1> } />
          <Route path='/donations' element = { <h1>Donations</h1> } />
          <Route path= '/backoffice/edit-organization' element = { <EditOrganizationData /> } />
          <Route path='/backoffice/activities' element = { <ActivityList /> } /> 
          <Route path='/backoffice/testimonials' element = { <ScreenTestimonials /> } />
          <Route path='/contact' element= { <ScreenContact /> }/>
          <Route path='*' element = { <NoMatchRoute /> } /> 
          <Route path="/actividades/:id" element={<ActivityDetails />} />
        </Routes>
        <Footer/>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;