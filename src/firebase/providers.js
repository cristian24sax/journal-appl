
import { googleAuth } from "./firebase-config";
import {  signInWithPopup,createUserWithEmailAndPassword,updateProfile, GoogleAuthProvider,signInWithEmailAndPassword} from "firebase/auth";
const googleProvider = new GoogleAuthProvider()
export const signInWithGoogle = async()=>{
    try{
        const result = await signInWithPopup(googleAuth,googleProvider)
        const {uid,displayName,photoURL,email} = result.user
        return {
            ok:true,
            uid,displayName,photoURL,email
        }

    }catch(error){

        const errorCode = error.code
        const errorMessage = error.message
        return{
            ok:false,
            errorCode,
            errorMessage
        }
    }
}

export const registerUserWithEmailPasswordName = async({email,password,displayName})=>{
    try{
        // console.log({email,password,displayName})
       const resp = await createUserWithEmailAndPassword(googleAuth,email,password);
       const {uid,photoURL} = resp.user
    //    console.log(resp.user)
        await updateProfile(googleAuth.currentUser,{displayName})
        return {
            ok:'true',
            uid,
            photoURL,
            email,
            password,
            displayName
        }
    }catch(error){
        const errorMessage= error.message
        return{
            ok:'false',
            errorMessage,
        }
    }
}

export const loginWithEmailPassword=async({email,password})=>{
    try{
        const resp = await signInWithEmailAndPassword(googleAuth, email, password)
        // console.log(resp.user)
        const{displayName,uid,photoURL} = resp.user
        return{
            ok:'true',
            displayName,uid,email,password,photoURL
        }

    }
    catch(error){
        console.log(error)
        const errorCode = error.code;
        const errorMessage = error.message;
        return {
            ok:'false',
            errorCode,
            errorMessage
        }
    }
}