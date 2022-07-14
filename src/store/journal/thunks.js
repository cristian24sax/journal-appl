import { collection, doc, getDocs, setDoc } from "firebase/firestore/lite";
import { db } from "../../firebase/firebase-config";
import { loadNotes } from "../../helpers";
import { addNewEmptyNote, setActiveNote,savingNewNote, setNotes } from "./journalSlice";

export const startNewNote = ()=>{
    return async (dispatch,getState)=>{
        // console.log('startNote')
        //uid
        dispatch(savingNewNote())
        const {uid} =getState().auth
        // console.log(uid)
        const newNote= {
            title:'hola',
            body:'hola',
            date : new Date().getTime()
        }

        const newDoc = doc(collection(db,`${uid}/journal/notes`))
        await setDoc(newDoc, newNote)

        newNote.id = newDoc.id
        dispatch(addNewEmptyNote(newNote))
        dispatch(setActiveNote(newNote))
       
        
    }
}

export const startLoadingNote = ()=>{
    return async (dispatch,getState)=>{
        const {uid} =getState().auth
        if(!uid) throw new Error('El uid del usuario no existe')
        const resp=   await loadNotes(uid)
        dispatch(setNotes(resp))
    }
}

