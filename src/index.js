import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import peopleReducer from './people/reducer'
import thunk  from 'redux-thunk'

const reducers = combineReducers({ peopleState: peopleReducer })
const store = createStore(reducers, applyMiddleware(thunk))

const render = () => { 
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, 
  document.getElementById('root'));
}

registerServiceWorker();

render()
