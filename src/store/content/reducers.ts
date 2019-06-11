import { ContentState, INIT_LOAD_CONTENT_SUCCESS } from './types';



const initialState: ContentState = {
    data: []
};

const loadContentReducer = (state:[], action:{ type:string } ): ContentState => {
    switch(action.type) {
        case INIT_LOAD_CONTENT_SUCCESS:
          return {
              data: []
          }
        default:
          return {
              data: []
          }  
    }
}
