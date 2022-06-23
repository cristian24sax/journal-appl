import React, { useState,useMemo } from 'react'
import { Link as RouterLink} from 'react-router-dom'

import { AuthLayout } from '../layout/AuthLayout'
import {Grid,Button,TextField,Link,Typography,Alert} from '@mui/material'
import { useForm } from '../../../hooks'
import { useDispatch,useSelector } from 'react-redux'
import {startCreatingUserWithEmailPassword} from '../../../store/auth'
export const RegisterScreen = () => {
  const formData={
    email:'cristian@cristian.com',
    password:'',
    displayName:'cristian'
  }
  const formValidations={
    email:[value=> value.includes('@'),'El correo debe tener una @'],
    password:[value=>value.length>=6,'El password debe tener al menos 6 caracteres'],
    displayName:[value=>value.length>=2,'El nombre de tener al menos 2 caracteres']
  }
  const dispacth = useDispatch()
  const{status,errorMessage}=useSelector(state=>state.auth);
  // console.log(errorMessage) 
  const isCheckingAuthentication = useMemo(()=>status==='checking',[status])

  const [formSubmitted, setFormSubmitted] = useState(false);
  const { displayName,email,password,handleInputChange,formState,
          displayNameValid,emailValid,passwordValid,isFormValid
        } = useForm(formData,formValidations)
  // console.log(displayNameValid)
  const onSubmit=(e)=>{
    e.preventDefault()
    setFormSubmitted(true);
    if(!isFormValid) return;
    dispacth(startCreatingUserWithEmailPassword(formState))
  }
  return (
    <AuthLayout title={'Register'}>
            <h1> {isFormValid?'true':'false'}</h1>
            <form onSubmit={onSubmit}>
              <Grid container>
                <Grid item
                xs={12} sx={{mt:2}}
                >
                  <TextField 
                    label='Nombre' 
                    type='text'
                    value={displayName}
                    name='displayName'
                    placeholder='Ingrese su Nombre'
                    fullWidth
                    error={!!displayNameValid && formSubmitted}
                    helperText={displayNameValid}
                    onChange={handleInputChange}
                    /> 
                </Grid>
                <Grid item
                xs={12} sx={{mt:2}}
                >
                  <TextField 
                    label='Correo' 
                    type='email'
                    value={email}
                    name='email'
                    placeholder='correo@correo.com'
                    fullWidth
                    error={!!emailValid && formSubmitted}
                    helperText={emailValid}
                    onChange={handleInputChange}
                    /> 
                </Grid>
                <Grid 
                  item
                  xs={12} sx={{mt:2}}>
                  <TextField 
                    label='Contrasena' 
                    type='password'
                    name='password'
                    value={password}
                    placeholder='contrasena'
                    error={!!passwordValid && formSubmitted}
                    helperText={passwordValid}
                    onChange={handleInputChange}
                    fullWidth
                    /> 
                </Grid>
                <Grid container spacing={2} sx={{mb:2, mt:1}}>
                  <Grid item xs={12} display={!!errorMessage?'':'none'}>
                    <Alert severity='error'>{errorMessage}</Alert>
                  </Grid>
                    <Grid item xs={12} sm={6}  >
                      <Button disabled={isCheckingAuthentication} type='submit' variant='contained' fullWidth>
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
