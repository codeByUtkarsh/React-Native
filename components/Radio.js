import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Radio = () => {
  const skills = [
    {
      id: 1,
      name: 'Java',
    },
    {
      id: 2,
      name: 'DSA',
    },
    {
      id: 3,
      name: 'Node',
    },
    {
      id: 4,
      name: 'SQL',
    },
  ];
  const [selectedRadio, setSelectedRadio] = useState(1);
  return (
    <View style={styles.main}>
      {skills.map((item,index) => (
        <TouchableOpacity key={index} onPress={() => setSelectedRadio(item.id)}>
          <View style={styles.radioWrap}>
            <View style={styles.radio}>
              {selectedRadio == item.id ? <View style={styles.radioBg}></View> : null}
            </View>
            <Text style={styles.radioText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
   marginLeft:120,
    justifyContent: 'center',
  },
  radioText: {
    fontSize: 20,
    color: 'skyblue',
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
  },
  radioWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioBg: {
    backgroundColor: 'lightblue',
    height: 28,
    width: 28,
    borderRadius: 20,
    margin: 4,
  },
});
export default Radio;
