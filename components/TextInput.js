import React, { useState } from 'react';
import {Text, TextInput, View, StyleSheet,Button} from 'react-native';

const TextI = () => {
    const [name,setName] = useState("");
  return (
    <View>
      <Text style={{fontSize: 30, color: 'blue', textAlign: 'center'}}>
        Handling Text Input
      </Text>
      <Text style={{fontSize: 20, marginLeft:20,marginTop:15}}>
        Your Name is :{name}
      </Text>
      <TextInput style={style.TextInput} placeholder="Enter Your Name"  onChangeText={(text)=>setName(text)} value={name}/>
      <Button title='clear input value' onPress={()=>setName('')}/>
    </View>
  );
};

const style = StyleSheet.create({
  TextInput: {
    fontSize: 18,
    color: 'black',
    borderWidth: 2,
    borderColor: 'lightblue',
    borderRadius: 20,
    margin: 10,
  },
});

export default TextI;
