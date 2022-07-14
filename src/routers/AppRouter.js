
import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";
import { AuthRouter } from '../components/auth/routes/AuthRouter';
import { JournalRoutes } from '../components/journal/routes/JournalRoutes';
import { useCheckAuth } from '../hooks/useCheckAuth';
import { CheckingAuth } from '../ui/components/CheckingAuth';

export const AppRouter = () => {
  const {status} =useCheckAuth()
  if ( status === 'checking' ) {
   return <CheckingAuth/>
  }
  return (
    <Router> 
        <Routes>
          {
            (status==='authenticated')?
            <Route path='/*' element={<JournalRoutes/>}/>
            :<Route path='auth/*' element={<AuthRouter/>}/>
          }
          <Route path='/*' element={<Navigate to='/auth/login'/>}/>
        </Routes>
    </Router>
  )
}
