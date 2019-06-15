import { createStore, applyMiddleware, Action } from 'redux';
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import { loadContentReducer } from './reducers'

export const sagaMiddleware = createSagaMiddleware()
export const store = createStore(loadContentReducer, applyMiddleware(sagaMiddleware, logger))
export const action = (type:any):Action => store.dispatch({type})