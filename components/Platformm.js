import React from 'react';
import {Text, View, Platform, StyleSheet} from 'react-native';

const Plat = () => {
  return (
    <View>
      <Text style={{fontSize: 35}}>Platform :{Platform.OS}</Text>
      {Platform.OS === 'android' ? (
        <View
          style={{backgroundColor: 'green', height: 100, width: 100}}></View>
      ) : (
        <View
          style={{backgroundColor: 'red', height: 100, width: 100}}></View>
      )}
      <Text style={styles.text}> Lets See</Text>
      <Text style={{fontSize:25}}>{Platform.constants.reactNativeVersion.minor}</Text>
      <Text style={{fontSize:25}}>{JSON.stringify(Platform)} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    text:{
        color:Platform.OS=='android'?'red':'green',
        fontSize:25
    }
})

export default Plat;
