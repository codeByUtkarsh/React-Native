import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

const Postman = () => {
  const [data, setData] = useState([]);
  const getApiData = async () => {
    const url = 'http://10.0.2.2:3000/users';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    getApiData();
  }, []);
  return (
    <View>
      <Text style={{fontSize: 30, textAlign: 'center', padding: 10}}>
        Call Json Server API
      </Text>
      {data.length ? data.map(item => <View style={{borderWidth:1,borderColor:"skyblue",padding:10,margin:10}}>
        <Text style={{fontSize:30}}>User Name : {item.name}</Text>
        <Text style={{fontSize:30}}>Age: {item.age}</Text>
        <Text style={{fontSize:30}}>Email : {item.email}</Text>
      </View>) : null}
    </View>
  );
};

export default Postman;
