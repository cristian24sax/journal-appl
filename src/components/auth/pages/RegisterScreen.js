import React from 'react'
import { Link as RouterLink} from 'react-router-dom'
import { useForm } from '../../../hooks/useForm'
import  validator from 'validator'
import { useDispatch, useSelector } from 'react-redux'
import { removeError, setError } from '../../../actions/ui'
import { startRegisterWithEmailPasswordName } from '../../../actions/auth'
import { AuthLayout } from '../layout/AuthLayout'
import {Grid,Button,TextField,Link,Typography} from '@mui/material'
export const RegisterScreen = () => {
  /*
  
    { name: 'cristian'
      email:''
      password:''
      password:''
    }  
  */
  const {msgError} = useSelector(state => state.ui)
  // console.log(state.ui.msgError)
  const dispatch = useDispatch()
  const [values, handleInputChange]= useForm({
    name:'',
    email:'cristian@gmail.com',
    password:'123456',
    password2:'123456'
  })
  const {name,email,password,password2} = values
  const handleRegister = e =>{
    e.preventDefault()
    if( isFormValid()){
      // console.log('formulario correcto')
      
      dispatch(startRegisterWithEmailPasswordName(email,password,name))
  
    }
  }
  const isFormValid=()=>{
    if(name.trim().length === 0){
      dispatch(setError('name is required'))
      return false
    }
    else if( !validator.isEmail(email)){
      dispatch(setError('email is not valid'))
      return false
    }
    else if( password !==password2 || password.length < 5){
      dispatch(setError('password should be at least 6 characters '))
      return false
    }
    dispatch(removeError())
    return true
  }
  return (

    <AuthLayout title={'Register'}>
            <form>
              <Grid container>
                <Grid item
                xs={12} sx={{mt:2}}
                >
                  <TextField 
                    label='Nombre' 
                    type='text'
                    placeholder='Ingrese su Nombre'
                    fullWidth
                    /> 
                </Grid>
                <Grid item
                xs={12} sx={{mt:2}}
                >
                  <TextField 
                    label='Correo' 
                    type='email'
                    placeholder='correo@correo.com'
                    fullWidth
                    /> 
                </Grid>
                <Grid 
                  item
                  xs={12} sx={{mt:2}}>
                  <TextField 
                    label='Contrasena' 
                    type='password'
                    placeholder='contrasena'
                    fullWidth
                    /> 
                </Grid>
                <Grid container spacing={2} sx={{mb:2, mt:1}}>
                    <Grid item xs={12} sm={6}  >
                      <Button variant='contained' fullWidth>
                        <Typography>Crear Cuenta</Typography>
                      </Button>  
                    </Grid>  
                </Grid>
                <Grid container direction="row" justifyContent="end">
                      <Typography sx={{mr:1}}>Ya tienes una cuenta?</Typography>
                      <Link component={RouterLink} to='/auth/login' color='inherit'>
                        Ingresar
                      </Link>
                </Grid>
              </Grid>
            </form>
    </AuthLayout>
 
  )
}
