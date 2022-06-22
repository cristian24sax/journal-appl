import React from 'react'
import {
    Routes,
    Route,
    Navigate,
  } from "react-router-dom";
import { JournalScreen } from '../pages/JournalScreen';
export const JournalRoutes = () => {
  return (
   <Routes>
        <Route path="/" element ={<JournalScreen/>}/>
        <Route path="/*" element ={<Navigate to='/'/>}/>
   </Routes>
  )
}
