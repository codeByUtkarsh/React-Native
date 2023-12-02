import React, {useEffect, useState} from 'react';
import {Text, View, FlatList} from 'react-native';

const FlatLlist = () => {
  const [data, setData] = useState([]);
  const getApiData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    getApiData();
  });
  return (
    <View>
      <Text style={{fontSize: 35}}>FlatList with API Data</Text>
      {data.length ? (
        <FlatList data={data} renderItem={({item})=><View style={{padding:20,borderWidth:1,borderBottomColor:'orange',borderRadius:10,margin:20}}>
            <Text style={{fontSize:20 ,backgroundColor:'skyblue'}}>ID : {item.id}</Text>
            <Text style={{fontSize:18}}>Title : {item.title}</Text>
            <Text style={{fontSize:24}}>Body : {item.body}</Text>
        </View>} />
      ) : (
        <Text>No Data Found</Text>
      )}
    </View>
  );
};

export default FlatLlist;
