import { fetchContentRequested, fetchContentAsync } from './content/actions';
import { put, call, takeEvery, all } from 'redux-saga/effects';
import ApoloClient from 'apollo-boost';
import gql from 'graphql-tag';



// client.query({
//     query: gql`
//         query {
//             viewer {
//                 login
//             }
//         }
//     `,
// })
// .then(res => console.log("GraphQL Response = ", res))
// .catch(err => console.log("GraphQL Error = ", err))

// 

function* fetchContentAction() {
    try {
        yield fetchContentAsync.request();
        //const data = yield call(client.query, {query: gql`query{viewer{login}}`} )
        //yield put(fetchContentAsync.success(data));
    }catch(error) {
        yield put(fetchContentAsync.failure({error: "Error fetchContentAction"}));
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