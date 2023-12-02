import React from 'react';
import {Text, View, Button} from 'react-native';

const Post = () => {
  const saveApiData = async () => {
    const data = {
      name: 'Tony',
      age: 30,
      email: 'sam@test.com',
    };
    const url = 'http://10.0.2.2:3000/users';
    let result = await fetch(url, {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    });
    result = await result.json();
    console.warn(result);
  };
  return (
    <View>
      <Text style={{fontSize: 30, textAlign: 'center', padding: 10}}>
        Post Api Call
      </Text>
      <Button title="Save Data" onPress={saveApiData} />
    </View>
  );
};

export default Post;
