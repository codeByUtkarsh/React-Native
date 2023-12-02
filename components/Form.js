import React, {useState} from 'react';
import {Button, Text, TextInput, View, StyleSheet} from 'react-native';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  

  const resetFormData = () => {
    setDisplay(false); 
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <View>
      <Text style={{fontSize: 25, textAlign: 'center'}}>
        Simple Form in React Native
      </Text>
      <TextInput
        style={style.textInput}
        placeholder="Enter User Name"
        onChangeText={text => setName(text)}
        value={name}
      />
      <TextInput
        style={style.textInput}
        placeholder="Enter User Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={style.textInput}
        placeholder="Enter User Password"
        onChangeText={text => setPassword(text)}
        secureTextEntry={showPassword ? false : true}
        value={password}
      />
      <View style={{marginBottom: 10}}>
        <Button
          title="show Password"
          onPress={() => setShowPassword(true)}></Button>
          <View style={{marginBottom:20}}></View>
        <Button
          title="Hide Password" color={'red'}
          onPress={() => setShowPassword(false)}></Button>
      </View>

      <View style={{marginBottom: 15}}>
        <Button
          color={'lightgreen'}
          title="Print Details"
          onPress={() => setDisplay(true)}
        />
      </View>

      <Button color={'orange'} title="Clear Details" onPress={resetFormData} />
      {display ? (
        <View>
          <Text style={style.display}>User Name is : {name}</Text>
          <Text style={style.display}>User Email Id is : {email}</Text>
          <Text style={style.display}>User Password is : {password}</Text>
        </View>
      ) : null}
    </View>
  );
};

const style = StyleSheet.create({
  textInput: {
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'lightblue',
    borderRadius: 10,
    margin: 10,
  },
  display: {
    fontSize: 20,
  },
});

export default Form;
