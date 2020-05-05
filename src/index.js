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
