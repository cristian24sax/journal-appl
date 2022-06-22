import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import { AuthRouter } from '../components/auth/routes/AuthRouter';
import { JournalRoutes } from '../components/journal/routes/JournalRoutes';

export const AppRouter = () => {
  return (
    <Router> 
        <Routes>
            <Route path='/*' element={<JournalRoutes/>}/>
            <Route path='auth/*' element={<AuthRouter/>}/>
        </Routes>
    </Router>
  )
}
