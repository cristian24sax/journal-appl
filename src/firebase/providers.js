
import { googleAuth } from "./firebase-config";
import {  signInWithPopup,createUserWithEmailAndPassword,updateProfile, GoogleAuthProvider} from "firebase/auth";
const googleProvider = new GoogleAuthProvider()
export const signInWithGoogle = async()=>{
    try{
        const result = await signInWithPopup(googleAuth,googleProvider)
        // const credentials = GoogleAuthProvider.credentialFromResult(result)
        // console.log({credentials})
        const {uid,displayName,photoURL,email} = result.user
        // console.log(user)
        return {
            ok:true,
            uid,displayName,photoURL,email
        }

    }catch(error){

        const errorCode = error.code
        // const errorMessage = error.Message
        return{
            ok:false,
            errorCode,

        }
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
            // dispatch(login(user.uid,name))
        })
        .catch(e=>{
            console.log(e)
        })
    }
}