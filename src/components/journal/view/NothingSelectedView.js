import { Grid, Typography } from '@mui/material'
import React from 'react'
import {StarOutline} from '@mui/icons-material'
export const NothingSelectedView = () => {
  return (
    <Grid 
    container
    spacing={ 0}
    direction='column'
    alignItems="center"
    justifyContent="center"
    sx={{ minHeight:'88.5vh', backgroundColor:"primary.main", borderRadius:5}}
    // className="animate__animated animate__pulse"
    >
      <Grid item xs={12}  >
            <StarOutline sx={{fontSize:100 , color:'white'}}/>
        </Grid>
      <Grid item xs={12} >
            <Typography color='white' variante='h5'> Selecciona o crea una entrada</Typography>
        </Grid>
   </Grid>
  )
}
