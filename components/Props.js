import React, {useState} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import ExStyle from '../Style';

const style = StyleSheet.create({
  textBox: {
    color: '#fff',
    fontSize: 30,
    backgroundColor: 'blue',
    marginBottom: 10,
    padding: 20,
    borderRadius: 10,
    height: 100,
    textAlignVertical: 'center',
    textAlign: 'center',
    borderColor: 'red',
    borderWidth: 2,
  },
});

const Apps = () => {
  const [name, setName] = useState('Utkarsh Srivastava');

  return (
    <View>
      <Text style={style.textBox}> Props in React Js</Text>
      <Text style={ExStyle.textBox}> Props in React Js</Text>
      <Text style={[style.textBox, ExStyle.textBox,{marginTop:20}]}> Two Styles Js</Text>

      <User name={name}></User>
      <Button
        title="update props"
        onPress={() => setName('Sanjay Kumar Srivastava')}
      />
    </View>
  );
};

const User = Props => {
  return (
    <View style={style.textBox}>
      <Text style={{fontSize: 30}}>{Props.name}</Text>
    </View>
  );
};

export default Apps;
