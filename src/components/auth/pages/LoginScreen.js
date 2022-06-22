import React from 'react'
import { useDispatch } from 'react-redux'
import {Link as RouterLink } from 'react-router-dom'
import { startGoogleLogin, startLoginEmailPassword } from '../../../actions/auth'
import { useForm } from '../../../hooks/useForm'
import GoogleIcon from '@mui/icons-material/Google';
import {Grid,Button,TextField,Link,Typography} from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'

export const LoginScreen = () => {
  // const dispatch = useDispatch()
  // const[values,handleInputChange] = useForm({
  //   email:'cristian@cristian.com',
  //   password:'123456'


  // })
  // const { email , password} = values
  // const handleLogin=(e)=>{
  //   e.preventDefault()
  //   console.log(email,password)
  //   dispatch(startLoginEmailPassword(password,email))
  // }
  // const handleLoginGoogle=()=>{
  //   dispatch(startGoogleLogin())
  // }
 
  return (

    <AuthLayout title={'Login'}>
            <form>
              <Grid container
                // direction='column'
                >
                <Grid item
                // sx={{margin:1}}
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
                        <Typography>Login</Typography>
                      </Button>  
                    </Grid>  
                    <Grid item xs={12} sm={6}  >
                      <Button variant='contained' fullWidth>
                        <GoogleIcon/>
                        <Typography>Google</Typography>
                      </Button>  
                    </Grid>  
                </Grid>
                <Grid container direction="row" justifyContent="end">
                      <Link component={RouterLink} to='/auth/register' color='inherit'>
                      Crear una cuenta
                      </Link>
                </Grid>
              </Grid>
            </form>
    </AuthLayout>
 
  )
}
