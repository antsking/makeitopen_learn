/**
 * Created by Evan on 25/09/2016.
 */
'use strict'

import {LOGIN} from '../actions/login';

const initialState ={
    isLoggedIn: false,
    id: null,
    name: null
};


function user(state = initialState, action) {
    if (action.type == LOGIN){
        return{
            isLoggedIn: true,
            id: action.id,
            name: action.name
        };
    }else {
        return initialState;
    }
}

module.exports = user;