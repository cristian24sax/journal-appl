import { Drawer,Box, Toolbar, Typography, Divider, List, ListItem, ListItemButton, ListItemIcon, Grid, ListItemText} from '@mui/material'
import React from 'react'
import {TurnedInNot} from '@mui/icons-material'

export const Sidebar = ({drawerWidth}) => {
  return (
    <Box 
      component='nav'
      sx={{width:{sm:drawerWidth},flexShrink:{sm:0}}}
    >
      <Drawer
        variant='permanent'
        open
        sx={{display:{xs:'block'},
        '& .MuiDrawer-paper':{boxSizing:'border-box',width:drawerWidth}
        }}
      >
        <Toolbar>
          <Typography variant='h6' noWrap component='div'>Cristian</Typography>
        </Toolbar>
      <Divider/>
      <List>
        {
          ['Enero','febrero','Abril','marzo','mayo'].map(text=>(
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot/>
                </ListItemIcon>
                <Grid container>
                  <ListItemText primary={text}/>
                  <ListItemText secondary={'Aute pariatur laborum anim aliqua mollit reprehenderit dolore'}/>
                </Grid>
              </ListItemButton>
            </ListItem>
          ))        
          
        }
      </List>
      </Drawer>

    </Box>
  )
}
