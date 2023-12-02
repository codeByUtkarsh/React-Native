import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Reslayout = () => {
  return (
    <View style={styles.main}>
      <Text style={{fontSize: 30}}>Responsive Layout using flex</Text>
      <View style={styles.box1}>
      <View style={styles.inner1}></View>
      <View style={styles.inner2}></View>
      <View style={styles.inner3}></View>
      </View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box4}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  box1: {flex: 2, backgroundColor: 'red', flexDirection: 'row'},
  box2: {flex: 1, backgroundColor: 'green'},
  box3: {flex: 1, backgroundColor: 'blue'},
  box4: {flex: 1, backgroundColor: 'yellow'},
  inner1: {
    flex: 1,
    backgroundColor: 'lightblue',
    margin: 10,
  },
  inner2: {
    flex: 1,
    backgroundColor: 'violet',
    margin: 10,
  },
  inner3: {
    flex: 1,
    backgroundColor: 'purple',
    margin: 10,
  },
});
export default Reslayout;
