import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';

const Effect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.warn('Mounted');
  }, []);

  return (
    <View>
      <Text style={{fontSize: 30}}>Life Cycle Method {count}</Text>
      <Button title="Update Count" onPress={() => setCount(count + 1)} />
      <Button title="Update Count" onPress={() => setCount(count * 2)} />
      <Button title="Update Count" onPress={() => setCount(0)} />
    </View>
  );
};

export default Effect;
