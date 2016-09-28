/**
 * Created by Evan on 24/09/2016.
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
    TouchableOpacity
} from 'react-native';

var { loginAction } = require('../actions/login');

class LoginScreen extends Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:''
        }
    }

    componentDidMount(){
        StatusBar.setBarStyle('light-content',true);
    }

    _onPressLoginButton(event){
      this.props.onLoginButtonClick(1,'Evan');
    }

    _onPressForgotPasswordButton(event){

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
                        onchangeText={(username) => {
                            this.state.username = username;
                        }}
                        placeholder='Username'
                        placeholderTextColor="white"
                        value={this.state.username}
                    />
                    <View
                        style={styles.seperatorLine}
                    />
                    <TextInput
                        style={styles.passwordTextInput}
                        secureTextEntry={true}
                        onchangeText={(password) => {
                            this.state.password = password;
                        }}
                        placeholder='Password'
                        placeholderTextColor="white"
                        value={this.state.password}
                    />
                    <View
                        style={styles.seperatorLine}
                    />
                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={this._onPressLoginButton.bind(this)}>
                        <Text style={styles.loginText}>{this.props.isLoggedIn ? 'Sign-out': 'Sign-in'}</Text>
                    </TouchableOpacity>
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
    isLoggedIn:React.PropTypes.bool,
    onLoginButtonClick:React.PropTypes.func,
};


module.exports = LoginScreen;
