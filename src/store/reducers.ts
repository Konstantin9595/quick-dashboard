import loadContentReducer from './content/reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    content: loadContentReducer
});

export default rootReducer;