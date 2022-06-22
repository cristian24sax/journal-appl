import {configureStore} from '@reduxjs/toolkit'
import {authSlice} from '../store/auth/authSlice'

export const store = configureStore({
   reducer:{
      auth: authSlice.reducer

   },

})