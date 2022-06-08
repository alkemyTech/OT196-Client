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
import CreateUser from './Components/register/CreateUser'
import ShowNews from './Components/news/ShowNews';
import Formcontact from './Components/formContact';
import ActivityDetails from "./pages/ActivityDetails";

function App() {
        const existingTestimony = {
          id: 12,
          name:'gerardo',
          content:'una excelente experiencia',
          img: 'data:image/png;base64,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'
        }
  return (
    <div className="App">
      
      
      {/* <BrowserRouter> */}
      {/* <WorkingExample /> */}
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
          <Route path="/actividades/:id" element={<ActivityDetails />} />> 
        </Routes>
        <Footer/>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;