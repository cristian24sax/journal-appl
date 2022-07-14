import {checkingCredentials,logout,login} from './authSlice'
import {signInWithGoogle,registerUserWithEmailPasswordName,loginWithEmailPassword, logoutFirebase} from '../../firebase/providers'
import { async } from '@firebase/util'

export const checkingAuthentication= (email,password)=>{
    return async(dispatch)=>{
        dispatch(checkingCredentials())
    }
}

export const startGoogleSignIn=()=>{
    return async(dispatch)=>{
        dispatch(checkingCredentials())
        const result= await signInWithGoogle()

        console.log({result})
        if(!result.ok) return dispatch(logout(result.errorMessage))
        dispatch(login(result))
    }
} 

export const startCreatingUserWithEmailPassword = ({displayName,email,password})=>{
    return async(dispatch)=>{
        dispatch(checkingCredentials())
       const {ok,uid,photoURL,errorMessage}= await registerUserWithEmailPasswordName({displayName,email,password})
    //    console.log(errorMessage)
       if(!ok) return dispatch(logout(errorMessage))
       dispatch(login({uid,displayName,photoURL,email}))
    }
}

export const startLoginWithEmailPassword=(email,password)=>{
    return async(dispatch)=>{
        dispatch(checkingCredentials())
        const result = await loginWithEmailPassword({email,password})
        // console.log(result)
        if(!result.ok) return dispatch(logout(result))
        dispatch(login(result))
    }
}

export const  startLogout =()=>{
    return async(dispatch)=>{
        await logoutFirebase()
        dispatch(logout({}))
    }
}

export  const  startSaveNote = ()=>{
    return async (dispatch,getState)=>{
        const {uid} =getState().auth
        const {active:note} = getState().journal

        const noteToFireStore = {...note}
        delete noteToFireStore.id

        console.log(noteToFireStore)

    }
}