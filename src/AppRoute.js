import React from 'react'

// Plugins
import { Routes, Route } from 'react-router';

// Components
import Navbar from './components/navbar/Navbar';
import Dashboard from './layout/dashboard/Dashboard';
import Survey from './layout/survey/Survey';
import Complain from './layout/complain/Complain';
import Analysis from './layout/analysis/Analysis';

function AppRoute() {
  return (
    <Routes>
      <Route exact path='/' element={<Navbar />} />
      <Route path='/dashboard' element={<><Navbar /><Dashboard /></>} />
      <Route path='/survey' element={<><Navbar /><Survey /></>} />
      <Route path='/complain' element={<><Navbar /><Complain /></>} />
      <Route path='/analysis' element={<><Navbar /><Analysis /></>} />
    </Routes>
  );
}

export default AppRoute;