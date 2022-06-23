import {checkingCredentials,logout,login} from './authSlice'
import {signInWithGoogle,registerUserWithEmailPasswordName,loginWithEmailPassword} from '../../firebase/providers'

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
        const {ok,uid,displayName,photoURL,errorMessage} = await loginWithEmailPassword({email,password})
        // console.log(result)
        if(!ok) return dispatch(logout(errorMessage))
        dispatch(login({uid,displayName,photoURL,email}))
    }
}