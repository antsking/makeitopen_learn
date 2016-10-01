/**
* Created by Evan on 25/09/2016.
*/
'use strict'

import {USER_LOGIN_SUCCESS,USER_LOGIN_FAILED,SET_USER_NAME,SET_USER_PASSWORD,USER_LOGIN_STARTED} from '../actions/login';

const initialState ={
  isLoggedIn: false,
  token:null,
  username:null,
  password:null,
  isAuthorizing:false,
  errorMessage:null
};


function user(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return{
        ...state,
        isLoggedIn: true,
        token:action.token,
        isAuthorizing:false,
        errorMessage:null
      };
    case SET_USER_NAME:
      return{
        ...state,
        username:action.username
      };
    case SET_USER_PASSWORD:
      return{
        ...state,
        password:action.password
      };
    case USER_LOGIN_STARTED:
      return{
        ...state,
        isAuthorizing:true,
        errorMessage:null
      };
    case USER_LOGIN_FAILED:
      return{
        ...state,
        isAuthorizing:false,
        errorMessage:action.msg
      }
    default:
      return state;
  }

}

module.exports = user;
