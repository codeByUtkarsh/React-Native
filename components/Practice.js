import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const Prac = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display,setDisplay] = useState(false);
  const [showPassword,setShowPassword] = useState(false);

  const resFormData =()=>{
    setDisplay(false);
    setName('');
    setEmail('');
    setPassword('');
  }
  return (
    <View style={styles.main}>
      <Text style={{fontSize: 30, textAlign: 'center', padding: 10}}>
        Simple Form{' '}
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter User Name"
        onChangeText={text => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter Your Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter Your Password"
        onChangeText={text => setPassword(text)}
        secureTextEntry={showPassword ? false : true}
        value={password}
      />
      <View style={{padding: 10, margin: 10, borderRadius: 10}}>
        <Button title="show Password" onPress={() => setShowPassword(true)} />
      </View>
      <View style={{padding: 10, margin: 10, borderRadius: 10}}>
        <Button title="Hide Password" onPress={() => setShowPassword(false)} />
      </View>
      <View>
        <Button title="show Details" onPress={()=>setDisplay(true)}/>
      </View> 
      <View>
        <Button title="Reset Details" onPress={()=>setDisplay(false)} />
        {
            display?<View>
                <Text style={{fontSize:30}}>Name : {name}</Text>
                <Text style={{fontSize:30}}>Email : {email}</Text>
                <Text style={{fontSize:30}}>Password : {password}</Text>
            </View>:null
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {},
  textInput: {
    fontSize: 25,
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 20,
    padding: 10,
    margin: 10,
  },
});

export default Prac;
