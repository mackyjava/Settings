import { combineReducers, applyMiddleware, createStore } from 'redux'
import { createBrowserHistory } from 'history'
import { routerReducer } from './reducers/reducerRouter'
import { routerMiddleware } from './middlewares/middlewareRouter'
import { startListener } from './listeners/listenerRouter'
import {composeWithDevTools} from 'redux-devtools-extension';
import {resultSearchUnlock, resultRequestUnlock} from './reducers/reducerUnlock';
import thunk from 'redux-thunk';

export const history = createBrowserHistory()



const rootReducer = combineReducers({
  router:routerReducer,
  unlockAcount:resultSearchUnlock,
})

const middleware = routerMiddleware(history)

const store = createStore(rootReducer,{},applyMiddleware(thunk,...middleware))

startListener(history, store);console.log(store.getState());

let currentLocation = store.getState().router.pathname




export default store