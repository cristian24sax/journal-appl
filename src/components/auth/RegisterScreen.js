import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import  validator from 'validator'
import { useDispatch, useSelector } from 'react-redux'
import { removeError, setError } from '../../actions/ui'
import { startRegisterWithEmailPasswordName } from '../../actions/auth'

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
    <>
    <h3 className='auth__title'>Register</h3>
    <form onSubmit={handleRegister}>
      {
        msgError &&    
       ( <div className='auth_alert-error'>
       {msgError}
         </div>)
      }
      <input 
      type='text'
      placeholder='Name'
      autoComplete='off'
      name='name'
      value={name}
      onChange={handleInputChange}
      className='auth__input'
      />
      <input 
      type='text'
      placeholder='Email'
      autoComplete='off'
      name='email'
      value={email}
      onChange={handleInputChange}
      className='auth__input'
      />
      <input 
      type='password'
      placeholder='Password'
      name='password'
      autoComplete='off'
      value={password}
      onChange={handleInputChange}
      className='auth__input'
      />
      <input 
      type='password'
      placeholder='Confirm Password'
      autoComplete='off'
      name='password2'
      value={password2}
      onChange={handleInputChange}
      className='auth__input'
      />
      <button 
        type='submit'
        className='btn btn-primary btn-block mb-5'

      >
      Registrar
      </button>

      <Link 
        to='/auth/login'
        className='link '
      >Already  registered? </Link>
    </form>
   </>
  )
}
