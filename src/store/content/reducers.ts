import { ContentState } from './types';
import { createReducer, action } from 'typesafe-actions';
import { fetchContentAsync, fetchContentRequested } from './actions';
import { Action } from 'redux';

const initialState: ContentState = {
    data: []
};

const loadContentReducer = 
    createReducer<ContentState, Action>(initialState)
    .handleAction(fetchContentAsync.success.toString(), (state, action:any ) => {
        return {
            ...state,
            data: action.payload
        }
    });

 export default loadContentReducer;

    // .handleAction(fetchContentAsync.failure.toString(), (state:ContentState, action:Action) => {
    //     return {
    //         ...state,
    //         data: action.type
    //     }
    // })