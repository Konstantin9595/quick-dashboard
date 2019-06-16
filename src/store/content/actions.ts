import { FETCH_CONTENT_REQUEST, FETCH_CONTENT_SUCCESS, FETCH_CONTENT_FAILURE, ContentState } from './types';
import { createCustomAction, createAsyncAction, Action } from 'typesafe-actions'

export const fetchDefaultContent = createCustomAction("FETCH_DEFAULT_CONTENT", (type) => {
    return (count: number) => ({type, payload: count})
})

export const searchContentAction = createCustomAction("SEARCH_CONTENT", (type) => {
    return (text: string) => ({type, payload: text})
})


export const fetchContentAsync = createAsyncAction(
    FETCH_CONTENT_REQUEST,
    FETCH_CONTENT_SUCCESS,
    FETCH_CONTENT_FAILURE,
)<undefined, {}, {}>();