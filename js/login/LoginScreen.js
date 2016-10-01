/**
 * Created by Evan on 24/09/2016.
 * @flow
 */
'use strict'

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    StatusBar,
    TextInput,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator,
    Alert,
    AsyncStorage
} from 'react-native';
import {setUserName,setUserPassword,userLogin,USER_NAME_SAVED,USER_PASSWORD_SAVED} from '../actions/login'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux'

class LoginScreen extends Component {
    constructor(props){
        super(props)
    }

    componentWillReceiveProps(nextProps){
      if (nextProps.errorMessage) {
        Alert.alert(
          'Error',
          nextProps.errorMessage,
          [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]
        );
      }
    }


    componentWillMount(){
        StatusBar.setBarStyle('light-content',true);
        this._checkUser();
    }

    _checkUser(){
      AsyncStorage.multiGet([USER_NAME_SAVED,USER_PASSWORD_SAVED], (err, stores) => {
            stores.map( (result, i, store) => {
              let key = store[i][0];
              let val = store[i][1];
              console.log(key, val);
            });
            let user_name = stores[0][1];
            let user_password = stores[1][1];
            this.props.setUserName(user_name);
            this.props.setUserPassword(user_password);
            this.props.userLogin(user_name,user_password);
          });
    }

    _onPressLoginButton(event){
      if(this.props.username !== '' && this.props.password !== ''){
            this.props.userLogin(this.props.username,this.props.password);
      }
    }

    _onPressForgotPasswordButton(event){

    }

    _handleUsernameInput(event){
      this.props.setUserName(event.nativeEvent.text.trim())
    }

    _handleUserpasswordInput(event){
      this.props.setUserPassword(event.nativeEvent.text.trim())
    }

    render() {
        return (
            <Image
                style={styles.container}
                source={require('./img/loginBG.png')}>
                <ScrollView>
                    <Image
                        style={styles.logo}
                        source={require('./img/logo.png')}
                    />
                    <TextInput
                        style={styles.emailTextInput}
                        onChange={this._handleUsernameInput.bind(this)}
                        placeholder='Username'
                        placeholderTextColor="white"
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={this.props.username}
                    />
                    <View
                        style={styles.seperatorLine}
                    />
                    <TextInput
                        style={styles.passwordTextInput}
                        secureTextEntry={true}
                        onChange={this._handleUserpasswordInput.bind(this)}
                        placeholder='Password'
                        placeholderTextColor="white"
                        value={this.props.password}
                    />
                    <View
                        style={styles.seperatorLine}
                    />
                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={this._onPressLoginButton.bind(this)}>
                        <Text style={styles.loginText}>Sign-in</Text>
                    </TouchableOpacity>
                    <ActivityIndicator
                      animating={this.props.isAuthorizing}
                    />
                </ScrollView>
                <TouchableOpacity
                    style={styles.forgotPasswordButton}
                    onPress={this._onPressForgotPasswordButton}>
                    <Text style={styles.forgotPasswordText}>Forgot your username or password</Text>
                </TouchableOpacity>
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        paddingHorizontal:32,
        width: undefined,
        height: undefined
    },
    logo:{
        width:244,
        height:27,
        //position:'absolute',
        //top:128
        marginTop:128
    },
    emailTextInput:{
        height:40,
        marginTop:96,
        color:'white',
        fontSize:20
    },
    passwordTextInput:{
        height:40,
        marginTop:32,
        color:'white',
        fontSize:20
    },
    seperatorLine:{
        height:1,
        backgroundColor:'rgba(255,255,255,0.5)',
        marginTop:0
    },
    loginButton:{
        marginTop:32
    },
    loginText:{
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    },
    forgotPasswordButton:{
        bottom:50,
        position:'absolute'
    },
    forgotPasswordText:{
        fontSize:14,
        fontWeight:'bold',
        color:'white'
    },
});

LoginScreen.propTypes = {
    userLogin:React.PropTypes.func,
    username:React.PropTypes.string,
    password:React.PropTypes.string,
    setUserName:React.PropTypes.func,
    setUserPassword:React.PropTypes.func,
    isAuthorizing:React.PropTypes.bool,
    errorMessage:React.PropTypes.string

};

const stateToProps = (state) => {
  return {
    username:state.user.username,
    password:state.user.password,
    isAuthorizing:state.user.isAuthorizing,
    errorMessage:state.user.errorMessage
  }
}

const dispatchToProps = (dispatch) => {
  return bindActionCreators({
    userLogin,setUserName,setUserPassword
    },dispatch)
}

module.exports = connect(stateToProps,dispatchToProps)(LoginScreen)
