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

function AppRoute() {
  return (
    <Routes>
      <Route exact path='/' element={<Login />} />
      {/* Admin Routes */}
      <Route path='/dashboard' element={<><Navbar /><Dashboard /></>} />
      <Route path='/survey' element={<><Navbar /><Survey /></>} />
      <Route path='/complain' element={<><Navbar /><Complain /></>} />
      <Route path='/response' element={<><Navbar /><Response /></>} />
      <Route path='/questionnaire' element={<><Navbar /><Questionnair /></>} />
      <Route path='/new-survey' element={<><Navbar /><NewSurvey /></>} />
      <Route path='/edit-survey' element={<><Navbar /><EditSurvey /></>} />
      <Route path='/view-response' element={<><Navbar /><SurveyFill /></>} />
      {/* User routes */}
      <Route path='/survey-user' element={<><NavbarUser /> <SurveyUser /></>} />
      <Route path='/view-response-user' element={<><NavbarUser /><SurveyFillUser /></>} />
      <Route path='/complain-user' element={<><NavbarUser /><ComplainUser /></>} />
    </Routes>
  );
}

export default AppRoute;