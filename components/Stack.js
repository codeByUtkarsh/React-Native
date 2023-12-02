import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from './Login';
import {Home} from './Home';

const Staack = createNativeStackNavigator();
const Stack = () => {
  const btnAction = () => {
    console.warn('Button Pressed');
  };
  return (
    <NavigationContainer>
      <Staack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'skyblue',
          },
          headerTintColor: 'orange',
          headerTitleStyle: {
            fontSize: 40,
          },
        }}>
        <Staack.Screen
          name="User Login"
          component={Login}
          options={{
            headerTitle: () => <Button title="left" onPress={btnAction} />,
            headerRight: () => <Header />,
          }}
        />
        <Staack.Screen name="Home" component={Home} />
      </Staack.Navigator>
    </NavigationContainer>
  );
};

const Header = () => {
  return <TextInput placeholder="name" />;
};

export default Stack;
``