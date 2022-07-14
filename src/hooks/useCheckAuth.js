import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { googleAuth } from '../firebase/firebase-config';
import { login, logout } from '../store/auth';
import { startLoadingNote } from '../store/journal/thunks';

export const useCheckAuth = () => {
    const {status} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    useEffect(() => {
      onAuthStateChanged(googleAuth,async(user)=>{
        // console.log(user)
        if(!user) return dispatch(logout())
        const {uid,displayName,photoURL,email} = user
        dispatch(login({uid,displayName,photoURL,email}))
        dispatch(startLoadingNote())
      })
    }, []);
    return { status}
}
