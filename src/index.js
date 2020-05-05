import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose} from 'redux';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'
import firebase from 'firebase'

import rootReducer from './Reducers/rootReducer';
import App from './App.js'

const firebaseConfig = {
    apiKey: "AIzaSyA7f7fxam1706hc-m5BANkGpyRscMp5qGk",
    authDomain: "aoe-td2.firebaseapp.com",
    databaseURL: "https://aoe-td2.firebaseio.com",
    projectId: "aoe-td2",
    storageBucket: "aoe-td2.appspot.com",
    messagingSenderId: "620222783730",
    appId: "1:620222783730:web:bb5f7aafb8b8a733e2306b",
    measurementId: "G-LPSS6G7YM3"
  };
firebase.initializeApp(firebaseConfig);

const initialState = {};
// Async actions
const middlewares = [thunk];

// Enables Redux Devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Create Store
const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)));


ReactDOM.render(
                <Provider store={store}>
                    <Router>
                        <App />
                    </Router>
                </Provider>
                , document.getElementById("root"));