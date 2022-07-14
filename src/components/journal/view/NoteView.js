import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import {SaveOutlined} from '@mui/icons-material'
import { ImageGallery } from '../components/ImageGallery'
import {  useDispatch, useSelector } from "react-redux";
import { useForm } from '../../../hooks/useForm';
import { startSaveNote } from '../../../store/auth';
export const NoteView = () => {
    const {active:note}= useSelector(state => state.journal);
    const dispatch = useDispatch();
    const {body,title,date,onInputChange,formState} = useForm(note)
    const dateString = useMemo(() =>{
        const newDate = new Date(date)
        return newDate.toUTCString()
    } , [date]);
    const onSaveNote=()=>{
        dispatch(startSaveNote())
    }
  return (
    <Grid container direction="row" justifyContent='space-between' alignItems='baseline' sx={{mb:1}}>
        <Grid item>
            <Typography fontSize={39} fontWeight='light'>{dateString}</Typography>
        </Grid>
        <Grid item>
            <Button 
            onClick={onSaveNote}
            color='primary' sx={{p:2}}>
                <SaveOutlined sx={{fontsize:30,mr:1}}/>
                guardar
            </Button>
        </Grid>
        <Grid container direction="column" >
            <TextField 
            type='text' 
            variant='filled' 
            // fullwidth 
            label="Titulo" 
            sx={{border:'none',mb:1}}
            placeholder='ingrese un titulo'
            value={title}
            name='title'
            onChange={onInputChange}
            />

            <TextField 
            type='text' variant='filled' 
            // fullwidth 
            multiline label="Cuerpo" 
            sx={{border:'none',mb:1}}
            placeholder=' Que sucedio en el dia de hoy?'
            minRows={5}
            name='body'
            value={body}
            onChange={onInputChange}
            />
        </Grid>
        <ImageGallery/>
    </Grid>
  )
}
