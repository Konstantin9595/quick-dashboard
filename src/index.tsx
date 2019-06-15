import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { store, sagaMiddleware, action } from './store/createStore'
import rootSaga from './store/saga';
import { Provider } from 'react-redux'

store.subscribe(() => {
    console.log("subscribe = ", store.getState())
})

sagaMiddleware.run(rootSaga)

// action("FETCH_CONTENT_SUCCESS")

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
