import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppJournal } from './AppJournal';
import { Provider } from 'react-redux'
import { store } from './store/store'
// import './styles/styles.scss'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <AppJournal />
    </Provider>
  
);
