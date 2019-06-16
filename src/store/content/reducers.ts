import { ContentState } from './types';
import { createReducer, action, ActionType, getType, PayloadAction } from 'typesafe-actions';
import * as content from './actions'
export type ContentAction = ActionType<typeof content>;

const { fetchContentAsync, searchContentAction } = content;

const initialState: ContentState = {
    content: [],
    filteredContent: []
};


const loadContentReducer = 
    createReducer<ContentState, ContentAction>(initialState)
    .handleAction(fetchContentAsync.success, (state:any, action:any) => {
        if(action.payload) {
            return {
                ...state,
                content: action.payload
            }
        }
        return { ...state }
    })
    .handleAction(searchContentAction, (state:any, action:any) => {
        const filterResult = state.content.filter((el:any) => el.name.indexOf(action.payload) !== -1)
        const searchMode = action.payload ? true : false
        return {
            ...state,
            filteredContent: filterResult,
            searchMode
        }
    })

 export default loadContentReducer;