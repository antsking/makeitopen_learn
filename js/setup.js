/**
 * Created by Evan on 24/09/2016.
 */
'use strict'
var { Provider } = require('react-redux');
import React, {Component} from 'react';
import { createStore } from 'redux';
import appReducers from './reducers/index';
import LoginScreenContainer from './login/loginScreenContainer';



function setup(){
    class Root extends Component {
        render() {
            return (
                <Provider store={createStore(appReducers)}>
                    <LoginScreenContainer />
                </Provider>
            );
        }
    }

    return Root;
}

module.exports = setup;