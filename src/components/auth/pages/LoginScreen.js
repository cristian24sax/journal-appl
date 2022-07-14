import React,{useMemo} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link as RouterLink } from 'react-router-dom'
import {useForm} from '../../../hooks'
// import { startGoogleLogin, startLoginEmailPassword } from '../../../actions/auth'
import GoogleIcon from '@mui/icons-material/Google';
import {Grid,Button,TextField,Link,Typography} from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import {checkingAuthentication,startGoogleSignIn,startLoginWithEmailPassword} from '../../../store/auth'

const newData = {
  email:'',
  password:''
}

export const LoginScreen = () => {
  const dispatch = useDispatch()
  const {status} = useSelector(state=> state.auth)
  // console.log(status)
  const isAuthenticating = useMemo(()=> status === 'checking',[status])
  const{formState,handleInputChange}= useForm(newData)
  const { email , password} = formState
  const handleLogin=(e)=>{
    e.preventDefault()
    console.log(email,password)
    // dispatch(startLoginEmailPassword(password,email))
    dispatch(checkingAuthentication(email,password))
    dispatch(startLoginWithEmailPassword(email,password))
  }
  const handleLoginGoogle=()=>{
    dispatch(startGoogleSignIn())
  }
 
  return (

    <AuthLayout title={'Login'}>
            <form onSubmit={handleLogin}>
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
                    name='email'
                    value={email}
                    onChange={handleInputChange}
                    fullWidth
                    /> 
                </Grid>
                <Grid 
                  item
                  xs={12} sx={{mt:2}}>
                  <TextField 
                    label='Contrasena' 
                    type='password'
                    value={password}
                    name='password'
                    onChange={handleInputChange}
                    placeholder='contrasena'
                    fullWidth
                    /> 
                </Grid>
                <Grid container spacing={2} sx={{mb:2, mt:1}}>
                    <Grid item xs={12} sm={6}  >
                      <Button disabled={isAuthenticating}  type='submit' variant='contained' fullWidth>
                        <Typography>Login</Typography>
                      </Button>  
                    </Grid>  
                    <Grid item xs={12} sm={6}  >
                      <Button disabled={isAuthenticating} variant='contained' fullWidth onClick={handleLoginGoogle}>
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
