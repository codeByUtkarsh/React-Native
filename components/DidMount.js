import React, {useEffect, useState} from 'react';
import {Text, View, Button} from 'react-native';

const Did = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);
  useEffect(() => {
    console.warn('updating');
  }, [data, count]);
  return (
    <View>
      <Text>useEffect as componentDidMount</Text>
      <Text style={{fontSize: 30}}>
        {data} :- Frequency :- {count}
      </Text>
      <Button title="Update Counter" onPress={() => setCount(count + 1)} />
      <Button title="Update Data" onPress={() => setData(data + 1)} />
    </View>
  );
};

export default Did;
