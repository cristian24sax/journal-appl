import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import {SaveOutlined} from '@mui/icons-material'
import { ImageGallery } from '../components/ImageGallery'

export const NoteView = () => {
  return (
    <Grid container direction="row" justifyContent='space-between' alignItems='baseline' sx={{mb:1}}>
        <Grid item>
            <Typography fontSize={39} fontWeight='light'>28 de agosto,2023</Typography>
        </Grid>
        <Grid item>
            <Button color='primary' sx={{p:2}}>
                <SaveOutlined sx={{fontsize:30,mr:1}}/>
                guardar
            </Button>
        </Grid>
        <Grid container direction="column" >
            <TextField 
            type='text' variant='filled' 
            fullwidth label="titulo" 
            sx={{border:'none',mb:1}}
            placeholder='ingrese un titulo'
            />
            <TextField 
            type='text' variant='filled' 
            fullwidth multiline label="titulo" 
            sx={{border:'none',mb:1}}
            placeholder=' Que sucedio en el dia de hoy?'
            minRows={5}
            />
        </Grid>
        <ImageGallery/>
    </Grid>
  )
}
