import {Button, Text, TextInput, View} from 'react-native';
import { useState } from 'react';
export const Login = props => {
  const [name,setName] = useState("");
  const age = 30;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Login Screen</Text>
      <TextInput style={{fontSize:20,borderColor:'#ccc' ,borderWidth:2,borderRadius:20}}
      onChangeText={(text)=>setName(text)} placeholder='Enter your name'/>
      <Button
        title="Go to Home Page"
        onPress={() => props.navigation.navigate('Home', {name, age})}
      />
    </View>
  );
};
