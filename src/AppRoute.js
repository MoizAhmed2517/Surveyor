import React from 'react'

// Plugins
import { Routes, Route } from 'react-router';

// Components
import Navbar from './components/navbar/Navbar';
import Dashboard from './layout/dashboard/Dashboard';
import Survey from './layout/survey/Survey';
import Complain from './layout/complain/Complain';
import Questionnair from './layout/survey/Questionnair';
import NewSurvey from './layout/survey/NewSurvey';
import EditSurvey from './layout/survey/EditSurvey';
import Response from './layout/response/Response';
import SurveyFill from './layout/user/SurveyFill';
import Login from './layout/login/Login';
import NavbarUser from './components/navbar/NavbarUser';
import SurveyUser from './layout/survey/SurveyUser';
import SurveyFillUser from './layout/user/SurveyFillUser';
import ComplainUser from './layout/complain/ComplainUser';
import Sidebar from './components/sidebar/Sidebar';
import SidebarUser from './components/sidebar/SidebarUser';
import Customer from './layout/customer/Customer';
import Complement from './layout/complement/Complement';
import FormResponse from './layout/response/FormResponse';

function AppRoute() {
  return (
    <Routes>
      {/* <Route exact path='/' element={<Login />} /> */}

      <Route 
        exact 
        path='/' 
        element={
          <Login />
        } 
      />

      {/* Admin Routes */}

      <Route 
        path='/dashboard' 
        element={
          <>
            <Sidebar />
            <Dashboard />
          </>
        } 
      />
      <Route path='/survey' element={<><Sidebar /><Survey /></>} />
      <Route path='/complain' element={<><Sidebar /><Complain /></>} />
      <Route path='/complement' element={<><Sidebar /><Complement /></>} />
      <Route path='/response' element={<><Sidebar /><Response /></>} />
      <Route path='/questionnaire' element={<><Sidebar /><Questionnair /></>} />
      <Route path='/new-survey' element={<><Sidebar /><NewSurvey /></>} />
      <Route path='/edit-survey' element={<><Sidebar /><EditSurvey /></>} />
      <Route path='/view-form' element={<><Sidebar /><SurveyFill /></>} />
      <Route path='/customer' element={<><Sidebar /><Customer/> </>} />
      <Route path='/form-response' element={<><Sidebar /><FormResponse /> </>} />
      {/* User routes */}
      <Route path='/survey-user' element={<><SidebarUser /> <SurveyUser /></>} />
      <Route path='/view-response-user' element={<><SidebarUser /><SurveyFillUser /></>} />
      <Route path='/complain-user' element={<><SidebarUser /><ComplainUser /></>} />
    </Routes>
  );
}

export default AppRoute;