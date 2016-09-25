/**
 * Created by Evan on 25/09/2016.
 */

'use strict';

var { combineReducers } = require('redux');

const appReducers= combineReducers({
    user: require('./user')
});

module.exports = appReducers;