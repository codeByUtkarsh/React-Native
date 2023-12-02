import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

const Search = () => {
  const [data, setData] = useState([]);
  const searchUser = async text => {
    const url = `http://10.0.2.2:3000/users?q=${text}`;
    let result = await fetch(url);
    result = await result.json();
    if (result) {
      setData(result);
    }
  };
  return (
    <View>
      <TextInput
        placeholder="Search"
        style={{
          borderColor: 'skyblue',
          borderWidth: 1,
          margin: 15,
          fontSize: 20,
          borderRadius: 20,
          paddingLeft: 19,
        }}
        onChangeText={text => searchUser(text)}
      />
      {data.length
        ? data.map(item => (
            <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={styles.input}>{item.name}</Text>
              <Text style={styles.input}>{item.age}</Text>
            </View>
          ))
        : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 20,
    margin: 10,
    paddingLeft: 15,
    width:150
  },
});
export default Search;
