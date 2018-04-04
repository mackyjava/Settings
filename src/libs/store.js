import { combineReducers, applyMiddleware, createStore } from 'redux'
import { createBrowserHistory } from 'history'
import { routerReducer } from './reducer'
import { routerMiddleware } from './middleware'
import { startListener } from './listener'
import {composeWithDevTools} from 'redux-devtools-extension';

export const history = createBrowserHistory()



const rootReducer = combineReducers({
  router:routerReducer,
})

const middleware = routerMiddleware(history)

const store = createStore(rootReducer,{},applyMiddleware(middleware))

startListener(history, store);console.log(store);

let currentLocation = store.getState().router.pathname




export default store