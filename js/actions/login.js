/**
 * Created by Evan on 25/09/2016.
 */
 import {
   AsyncStorage
 } from 'react-native';

const USER_LOGIN = 'user_login';
const USER_LOGIN_SUCCESS = 'user_login_success';
const USER_LOGIN_FAILED = 'user_login_failed';
const SET_USER_NAME = 'set_user_name';
const SET_USER_PASSWORD = 'set_user_password';
const USER_LOGIN_STARTED = 'user_login_started';

const USER_NAME_SAVED = 'user_name_saved';
const USER_PASSWORD_SAVED ='user_password_saved';

const setUserName = (username) => ({type:SET_USER_NAME,username});
const setUserPassword = (password) => ({type:SET_USER_PASSWORD,password});
const userLogin = (name,password) => (dispatch) => _authRequest(dispatch,name,password);

//private method
const _authStarted = (keyword) => ({type: USER_LOGIN_STARTED, keyword})
const _loginSuccess = (token) => ({type:USER_LOGIN_SUCCESS,token});
const _loginFailed = (msg) => ({type:USER_LOGIN_FAILED,msg});
const _authRequest = (dispatch,name,password) =>{
  dispatch(_authStarted(name,password));
  var params = {
    username: name,
    password: password,
  };
  var formBody = [];
  for (var property in params) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(params[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");

  fetch('https://services.mediaportal.com/V1.0/iam/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: formBody
  })
  .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.token) {
          let multi_set_pairs   = [[USER_NAME_SAVED, name], [USER_PASSWORD_SAVED, password]];
          AsyncStorage.multiSet(multi_set_pairs, (error) => {
            if (error) {
              console.log(err);
            }
            
          });
          dispatch(_loginSuccess(responseJson.token));
        }else{
          dispatch(_loginFailed('The username or password is wrong'));
        }

      })
      .catch((error) => {
        console.error(error);
      });
};


module.exports = {
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  SET_USER_NAME,
  SET_USER_PASSWORD,
  USER_LOGIN_STARTED,
  USER_NAME_SAVED,
  USER_PASSWORD_SAVED,
  setUserName,
  setUserPassword,
  userLogin};
