/**
 * Created by evansu on 26/09/2016.
 */
import { connect } from 'react-redux';
import LoginScreen from './LoginScreen';
import {loginAction} from '../actions/login'

const mapStateToProps = (state) => {
    return {
        isUserLoggedIn: state.isLoggedIn
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLoginButtonClick: (id,name) => {
            dispatch(loginAction(id, name))
        }
    }
}


const LoginScreenContainer = connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

module.exports = LoginScreenContainer;