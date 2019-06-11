export const INIT_LOAD_CONTENT = "INIT_LOAD_CONTENT";
export const INIT_LOAD_CONTENT_SUCCESS = "INIT_LOAD_CONTENT_SUCCESS";
export const INIT_LOAD_CONTENT_FAIL = "INIT_LOAD_CONTENT_FAIL";

interface InitLoadContent {
    type: typeof INIT_LOAD_CONTENT;
};

interface InitLoadContentSuccess {
    type: typeof INIT_LOAD_CONTENT_SUCCESS;
};

interface InitLoadContentFail {
    type: typeof INIT_LOAD_CONTENT_FAIL;
    error: {};
};

export interface ContentState {
    data: [];
}

export type InitLoadContentType = InitLoadContent | InitLoadContentSuccess | InitLoadContentFail;

