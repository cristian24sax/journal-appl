import { googleAuthProvider,googleAuth } from "../firebase/firebase-config";
import {  signInWithPopup,createUserWithEmailAndPassword,updateProfile} from "firebase/auth";

import { types } from "../types/types"
export const startLoginEmailPassword = (email,password) =>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(login(password,email));            
        },3500)
    }

}

export const startRegisterWithEmailPasswordName = (email,password,name)=>{
    return(dispatch)=>{
        createUserWithEmailAndPassword(googleAuth,email,password)
        .then(({user}) => {
            updateProfile(googleAuth.currentUser,{
                displayName:name
            })
           
            console.log(user)
            dispatch(login(user.uid,name))
        })
        .catch(e=>{
            console.log(e)
        })
    }
}

export const startGoogleLogin=()=>{
    return (dispatch)=>{
        // const auth = getAuth();
        signInWithPopup(googleAuth,googleAuthProvider)
        .then(({user}) => {
            console.log(user)
            dispatch(login(user.uid,user.displayName))})
    }
}
export const login=(uid,displayName) =>({
    
    type:types.login,
    payload:{
        uid,
        displayName
    }

})

