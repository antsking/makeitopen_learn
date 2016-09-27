/**
 * Created by Evan on 24/09/2016.
 */
'use strict'
import {Provider} from 'react-redux';
import React, {Component} from 'react';
import { applyMiddleware,createStore } from 'redux';
import appReducers from './reducers/index';
import LoginScreenContainer from './login/loginScreenContainer';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunk,logger)(createStore);
const store = createStoreWithMiddleware(appReducers)


function setup(){
    class Root extends Component {
        render() {
            return (
                <Provider store={store}>
                    <LoginScreenContainer/>
                </Provider>
            );
        }
    }

    return Root;
}

module.exports = setup;
