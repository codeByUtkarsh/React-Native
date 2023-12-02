import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';

const ListApi = () => {
  const [data, setData] = useState([]);
  const getApiData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };

  useEffect(() => {
    getApiData();
  },[]);
  return (
    <ScrollView>
      <Text style={{fontSize: 30}}>List With Api Calls</Text>
      {
        data.length?
        data.map((item)=><View style={{padding:10,borderBottomColor:'#ccc',borderBottomWidth:1}}>
            <Text style={{fontSize:25,backgroundColor:'#ddd'}}>Id: {item.id}</Text>
            <Text style={{fontSize:25}}>Id: {item.title}</Text>
            <Text style={{fontSize:25}}>Id: {item.body}</Text>
        </View>):null
      }
    </ScrollView>
  );
};

export default ListApi;
