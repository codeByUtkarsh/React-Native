import React, {useEffect, useState} from 'react';
import {Text, View, Button} from 'react-native';

const Show = () => {
  const [show, setShow] = useState(true);
  return (
    <View>
      <Text style={{fontSize: 30}}>Show/Hide Component </Text>
      <Button title="Toggle Component" onPress={() => setShow(!show)} />

      {show ? <User /> : null}
    </View>
  );
};

const User = () => {
  useEffect(() => {
    console.warn('User Component');
  }, [User]);
  return (
    <View>
      <Text style={{fontSize: 30, color: 'green'}}>User Component</Text>
    </View>
  );
};

export default Show;
