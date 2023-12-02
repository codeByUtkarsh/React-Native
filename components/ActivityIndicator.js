import React, { useState } from 'react';
import {ActivityIndicator, Button, StyleSheet, Text, View} from 'react-native';

const Indicator = () => {
    const [load,setLoad] = useState(false);
    const displayLoader =()=>{
        setLoad(true);

        setTimeout(()=>{
            setLoad(false)
        },3000)
    }
  return (
    <View style={style.main}>
      <ActivityIndicator size={100} color={'gold'} animating={load} />
      <Button title='Show Loader' onPress={displayLoader}></Button>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Indicator;
