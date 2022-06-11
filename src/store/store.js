// fuente unica de informacion para todo los componentes 
// createStore solo puede recibir un reducer por lo q se creara un combinereducer
import {combineReducers,createStore,applyMiddleware,compose} from 'redux'
import { authReducer} from '../reducers/authReducer';
import thunk from 'redux-thunk'
import { uiReducer } from '../reducers/uiReducer';
const reducers = combineReducers({
   ui:uiReducer,
   auth:authReducer,
})
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||compose;
export const store = createStore(
   reducers,
   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   composeEnhancers(applyMiddleware(thunk))
   );

