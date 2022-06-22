import React from 'react'
import { AppRouter } from './routers/AppRouter'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { Apptheme } from './theme'
export const AppJournal = () => {
  return (
    <Apptheme>
      <Provider store={store}> 
          <AppRouter/>
      </Provider>
    </Apptheme>
  )
}
