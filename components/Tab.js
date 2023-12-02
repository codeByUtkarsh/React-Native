import React from 'react';
import {Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tabb = createMaterialTopTabNavigator();

const Tab = () => {
  return (
    <NavigationContainer>
      <Tabb.Navigator>
        <Tabb.Screen name="Login" component={Login} />
        <Tabb.Screen name="SignUp" component={SignUp} />
        <Tabb.Screen name="Other" component={SignUp} />
      </Tabb.Navigator>
    </NavigationContainer>
  );
};

const Login = () => {
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
};
const SignUp = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:40}}>Sign Up</Text>
    </View>
  );
};
export default Tab;
