/**
 * Created by Evan on 25/09/2016.
 */
'use strict'

import {USER_LOGIN_SUCCESS,USER_LOGIN_FAILED,SET_USER_NAME,SET_USER_PASSWORD} from '../actions/login';

const initialState ={
    isLoggedIn: false,
    token:null,
    username:null,
    password:null
};


function user(state = initialState, action) {
    if (action.type == USER_LOGIN_SUCCESS){
        return{
            ...state,
            isLoggedIn: true,
            token:action.token
        };
    }else if (action.type == SET_USER_NAME){
      return{
        ...state,
        username:action.username
      }
    }else if (action.type == SET_USER_PASSWORD){
      return{
        ...state,
        password:action.password
      }
    }else {
        return initialState;
    }
}

module.exports = user;
