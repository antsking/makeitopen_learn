/**
 * Created by Evan on 30/09/2016.
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
    TouchableOpacity
} from 'react-native';


class ESTabBarScreen extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){

    }

    render() {
        return (
           <Text>Hello world!</Text>
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
});


module.exports = ESTabBarScreen
