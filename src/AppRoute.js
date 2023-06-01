import React from 'react'

// Plugins
import { Routes, Route } from 'react-router';

// Components
import Navbar from './components/navbar/Navbar';
import Dashboard from './layout/dashboard/Dashboard';
import Survey from './layout/survey/Survey';
import Complain from './layout/complain/Complain';
import Analysis from './layout/analysis/Analysis';
import Questionnair from './layout/survey/Questionnair';
import NewSurvey from './layout/survey/NewSurvey';

function AppRoute() {
  return (
    <Routes>
      {/* <Route exact path='/' element={<Navbar />} /> */}
      <Route path='/' element={<><Navbar /><Dashboard /></>} />
      <Route path='/survey' element={<><Navbar /><Survey /></>} />
      <Route path='/complain' element={<><Navbar /><Complain /></>} />
      <Route path='/analysis' element={<><Navbar /><Analysis /></>} />
      <Route path='/questionnaire' element={<><Navbar /><Questionnair /></>} />
      <Route path='/new-survey' element={<><Navbar /><NewSurvey /></>} />
      
    </Routes>
  );
}

export default AppRoute;