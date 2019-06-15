import { fetchContentRequested, fetchContentAsync } from './content/actions';
import { put, call, takeEvery, all } from 'redux-saga/effects';
import graphQueries from '../services/graphQueries';


function* fetchContentAction() {
    try {
        const request = new graphQueries()

        const {data:{search: nodes}} = yield request.fetchStarRepositories()

        yield put(fetchContentAsync.success(nodes));
    }catch(error) {
        yield put(fetchContentAsync.failure({error: new Error("Network error")}));
    }
}

function* fetchContentWatcher() {
    yield takeEvery(fetchContentRequested.toString(), fetchContentAction);
}

export default function* rootSaga() {
    yield all([
        fetchContentAction()
    ])
}