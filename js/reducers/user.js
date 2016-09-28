/**
 * Created by Evan on 25/09/2016.
 */
'use strict'

import {LOGIN} from '../actions/login';

const initialState ={
    isLoggedIn: false,
    id: null,
    name: null,
    count:0
};


function user(state = initialState, action) {
    if (action.type == LOGIN){
        return{
            ...state,
            isLoggedIn: true,
            id: action.id,
            name: action.name,
            count:state.count+1
        };
    }else {
        return initialState;
    }
}

module.exports = user;
