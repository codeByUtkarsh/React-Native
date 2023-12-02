import React from 'react';
import {Text,TouchableHighlight,View,StyleSheet} from 'react-native';

const ButStyle =()=>{
    return (
      <View>
        <TouchableHighlight>
          <Text style={[styles.button, styles.success]}>Success</Text>
        </TouchableHighlight>
        <TouchableHighlight >
          <Text style={[styles.button, styles.primary]}>Primary</Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text style={[styles.button, styles.warning]}>Warning</Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text style={[styles.button, styles.error]}>Error</Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text style={styles.button}>Button</Text>
        </TouchableHighlight>
      </View>
    );
}
const styles = StyleSheet.create({
    button:{
        backgroundColor:'#bbb',
        color:'#fff',
        fontSize:24,
        textAlign:'center',
        padding:10,
        margin:10,
        borderRadius:20,
        shadowColor:'black',
        elevation:10,
        shadowOpacity:1
    },
    success:{
        backgroundColor:'green'
    },
    primary:{
        backgroundColor:'blue'
    },
    warning:{
        backgroundColor:'gold'
    },
    error:{
        backgroundColor:'red'
    }
})

export default ButStyle;