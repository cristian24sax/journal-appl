import React from 'react'
import Box from '@mui/material/Box';
import { Sidebar } from '../components/Sidebar';
import { NavBar } from '../components/NavBar';
import { Toolbar } from '@mui/material';


// import 'animate.css'
const drawerWidth=240;
export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display:'flex'}}>
      {<NavBar drawerWidth={drawerWidth} />}
      {<Sidebar drawerWidth={drawerWidth}/>}

      <Box component='main' sx={{flexGrow:1 ,p:3}}>
        <Toolbar/>
        {children}
      </Box>
    </Box>
  )
}
