import { FETCH_CONTENT_REQUEST, FETCH_CONTENT_SUCCESS, FETCH_CONTENT_FAILURE, ContentState } from './types';
import { createCustomAction, createAsyncAction } from 'typesafe-actions'

export const fetchContentRequested = createCustomAction("FETCH_CONTENT_REQUESTED")

export const fetchContentAsync = createAsyncAction(
    FETCH_CONTENT_REQUEST,
    FETCH_CONTENT_SUCCESS,
    FETCH_CONTENT_FAILURE,
)<undefined, {}, {}>();