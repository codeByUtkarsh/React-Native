import React from 'react';
import {Text,View} from 'react-native';
import {WebView} from 'react-native-webview';

const Web =()=>{
    return(<WebView source={{uri:"https://instagram.com"}}/>);
}

export default Web;