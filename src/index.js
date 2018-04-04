
import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import store ,{history}from './libs/store';




const target = document.querySelector('#root')

render( <Provider store ={store}>
          <ConnectedRouter history={history}>
            <App />
          </ConnectedRouter>
        </Provider>,
         target)  
registerServiceWorker();
