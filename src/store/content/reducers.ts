import { ContentState } from './types';
import { createReducer, action, ActionType, getType, PayloadAction } from 'typesafe-actions';
import * as content from './actions'
export type ContentAction = ActionType<typeof content>;

const { fetchContentAsync } = content;

const initialState: ContentState = {
    nodes: {}
};



const loadContentReducer = 
    createReducer<ContentState, ContentAction>(initialState)
    .handleAction(fetchContentAsync.success, (state:any, action:any) => {
        if(action.payload) {
            return {
                ...state,
                nodes: action.payload
            }
        }
        return { ...state }
    })

 export default loadContentReducer;