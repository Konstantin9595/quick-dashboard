import { fetchDefaultContent, fetchContentAsync } from './content/actions';
import { put, call, takeEvery, takeLatest, all } from 'redux-saga/effects';
import graphQueries from '../services/graphQueries';


function* fetchContent({type, payload}:{type:string, payload:number}) {
    try {

        const request = new graphQueries()

        const {data:{search: nodes}} = yield request.fetchStarRepositories(payload)
        
        yield put(fetchContentAsync.success(nodes));
    }catch(error) {
        // console.log("ERROR = ", error)
        yield put(fetchContentAsync.failure({error: new Error("Network error")}));
    }
}

// function* fetchContentWatcher() {
//     yield takeEvery(fetchContentRequested.toString(), fetchContent);
// }

export default function* rootSaga() {
    //yield takeLatest('FETCH_CONTENT', fetchContent);
    yield all([
        takeEvery(fetchDefaultContent.toString(), fetchContent)
    ])
}