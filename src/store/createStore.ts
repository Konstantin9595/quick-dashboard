import { createStore, applyMiddleware, Action } from 'redux';
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import rootReducer from './reducers'

export const sagaMiddleware = createSagaMiddleware()
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger))
export const action = (type:any):Action => store.dispatch({type})