import { INIT_LOAD_CONTENT, INIT_LOAD_CONTENT_FAIL, INIT_LOAD_CONTENT_SUCCESS, InitLoadContentType } from './types';


export const initLoadContentAction = (): InitLoadContentType  =>  {
    return {
        type: INIT_LOAD_CONTENT
    }
}

export const initLoadContentSuccessAction = (): InitLoadContentType => {
    return {
        type: INIT_LOAD_CONTENT_SUCCESS
    }
}

export const initLoadContentFailAction = (): InitLoadContentType => {
    return {
        type: INIT_LOAD_CONTENT_FAIL,
        error: {}
    }
}
