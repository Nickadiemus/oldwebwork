import React from 'react';
import ReactDOM from 'react-dom';

//secondary imports
import {BrowserRouter} from 'react-router-dom'
import {createStore, applyMiddleware, compose} from 'redux';
import Paths from './Paths';
import {Provider} from 'react-redux';
import setAuthToken from './utilities/setAuthToken';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import './style/index.css';

const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.devToolsExtension
    ? window.devToolsExtension()
    : f => f));
//stores authenticator token is local storage
setAuthToken(localStorage.jwtToken);

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <Paths/>
    </BrowserRouter>
</Provider>, document.getElementById('root'));
registerServiceWorker();
