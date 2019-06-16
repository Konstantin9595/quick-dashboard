import { fetchDefaultContent, fetchContentAsync } from './content/actions';
import { put, call, takeEvery, takeLatest, all } from 'redux-saga/effects';
import graphQueries from '../services/graphQueries';


function* fetchContent({type, payload:count}:{type:string, payload:number}) {
    try {

        const request = new graphQueries()

        const {data:{search: nodes}} = yield request.fetchStarRepositories(count)
        const { nodes:response } = nodes
        
        yield put(fetchContentAsync.success(response));

    }catch(error) {
        yield put(fetchContentAsync.failure({error: new Error("Network error")}));
    }
}




export default function* rootSaga() {
    yield all([
        takeEvery(fetchDefaultContent.toString(), fetchContent)
    ])
}