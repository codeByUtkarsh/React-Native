import React, {useEffect, useState} from 'react';
import {Button, StatusBar, StyleSheet, Text, View} from 'react-native';

const Status = () => {
  const [showStatus, setShowStatus] = useState(false);
  const[barStyle, setBarStyle] = useState('default');
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={'lightblue'}
        barStyle={barStyle}
        hidden={showStatus}
      />
      <View style={styles.btn1}>
        <Button
          title="Toggle status Bar"
          onPress={() => setShowStatus(!showStatus)}
        />
      </View>
      <View style={styles.btn2}>
        <Button
          title="Update Style"
          onPress={() => setBarStyle('dark-content')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  btn1: {
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    elevation: 10,
  },
  btn2: {
    margin: 10,
  },
});

export default Status;
