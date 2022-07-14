import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveNote } from '../../../store/journal/journalSlice';
import { NoteView } from '../view';

export  const SidebarItem=({title,id,body,date,imageUrls=[]})=> {
    // const {journal} = useSelector(state => state.journal);
    // console.log(journal)
    const dispatch = useDispatch();
    const newTitle= useMemo(() =>{
        return title.length>17? title.subString(0,17)+'...'
        :title
    }
    , [title]);
    const onClickActive=()=>{
        dispatch(setActiveNote({title,id,body,date,imageUrls}))
    }
  return (
    <ListItem  disablePadding>
            <ListItemButton
                onClick={onClickActive}
            >
            <ListItemIcon>
                <TurnedInNot/>
            </ListItemIcon>
            <Grid container>
                <ListItemText primary={newTitle}/>
                <ListItemText secondary={'Aute pariatur laborum anim aliqua mollit reprehenderit dolore'}/>
            </Grid>
            </ListItemButton>
  </ListItem>
  )
}
