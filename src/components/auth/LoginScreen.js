import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {
  const dispatch = useDispatch()
  const[values,handleInputChange] = useForm({
    email:'cristian@cristian.com',
    password:'123456'


  })
  const { email , password} = values
  const handleLogin=(e)=>{
    e.preventDefault()
    console.log(email,password)
    dispatch(startLoginEmailPassword(password,email))
  }
  const handleLoginGoogle=()=>{
    dispatch(startGoogleLogin())
  }
  return (
   <>
    <h3 className='auth__title'>Login</h3>
    <form onSubmit={handleLogin}>
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
      type='text'
      placeholder='Password'
      name='password'
      value={password}
      onChange={handleInputChange}
      autoComplete='off'
      className='auth__input'
      />
      <button 
        type='submit'
        className='btn btn-primary btn-block'
      >
      Ingresar
      </button>

      <hr/>

      <div className='auth__social-networks'>
        <p>Login with social network</p>
        <div 
      className="google-btn"
      onClick={handleLoginGoogle}
      >
          <div className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
          </div>
          <p className="btn-text">
              <b>Sign in with google</b>
          </p>
      </div>
      </div>
      <Link 
        to='/auth/register'
        className='link'
      >Create new account </Link>
    </form>
   </>
  )
}
