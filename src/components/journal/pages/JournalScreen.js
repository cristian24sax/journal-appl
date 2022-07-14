import { IconButton } from "@mui/material";
import React, { useMemo } from "react";
import { JournalLayout } from "../layout/JournalLayout";
import {AddOutlined} from '@mui/icons-material'
import { NoteView, NothingSelectedView } from "../view";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../../store/journal/thunks";
// import { NothingSelected } from './NothingSelected'

export const JournalScreen = () => {
  const dispatch = useDispatch();
  const {isSaving,active}= useSelector(state => state.journal);
  // console.log(active)
  const onClickNewNote = ()=>{
    dispatch(startNewNote())
  }
  return (
    <JournalLayout >
      {(!!active)? 
       <NoteView/>
      :<NothingSelectedView/> 
    }

      <IconButton size='large'
      disabled={isSaving} 
      onClick={onClickNewNote}
      sx={{color:'white',backgroundColor:'error.main',
      ':hover':{backgroundColor:'error.main',opacity:0.9},
      position:'fixed',
      right:50,
      bottom:50}}>
        <AddOutlined sx={{fontSize:30}} />
      </IconButton>
    </JournalLayout>
  );
};
