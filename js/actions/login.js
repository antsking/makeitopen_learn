/**
 * Created by Evan on 25/09/2016.
 */

const USER_LOGIN = 'user_login';
const USER_LOGIN_SUCCESS = 'user_login_success';
const USER_LOGIN_FAILED = 'user_login_failed';
const SET_USER_NAME = 'set_user_name';
const SET_USER_PASSWORD = 'set_user_password'

const setUserName = (username) => ({type:SET_USER_NAME,username});
const setUserPassword = (password) => ({type:SET_USER_PASSWORD,password});
const userLogin = (name,password) => (dispatch) => _authRequest(dispatch,name,password);

//private method
const _loginSuccess = (token) => ({type:USER_LOGIN_SUCCESS,token});
const _loginFailed = (msg) => ({type:USER_LOGIN_FAILED,msg});
const _authRequest = (dispatch,name,password) =>{


};


module.exports = {USER_LOGIN,USER_LOGIN_SUCCESS,USER_LOGIN_FAILED,SET_USER_NAME,SET_USER_PASSWORD,
setUserName,setUserPassword,userLogin};
