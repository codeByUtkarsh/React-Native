import React from 'react';
import {Text, View, Button, FlatList, StyleSheet, ScrollView} from 'react-native';

const Flat = () => {
  const Users = [
    {
      id: 1,
      name: 'Utkarsh Srivastava',
    },
    {
      id: 2,
      name: 'Sanjay Kumar Srivastava',
    },
    {
      id: 3,
      name: 'Abhinav Srivastava',
    },
    {
      id: 4,
      name: 'Neelam Srivastava',
    },
    {
      id: 2,
      name: 'Sanjay Kumar Srivastava',
    },
    {
      id: 2,
      name: 'Sanjay Kumar Srivastava',
    },
    {
      id: 2,
      name: 'Sanjay Kumar Srivastava',
    },
    {
      id: 2,
      name: 'Sanjay Kumar Srivastava',
    },
    {
      id: 2,
      name: 'Sanjay Kumar Srivastava',
    },
    {
      id: 2,
      name: 'Sanjay Kumar Srivastava',
    },
    {
      id: 2,
      name: 'Sanjay Kumar Srivastava',
    },
    {
      id: 2,
      name: 'Sanjay Kumar Srivastava',
    },
    {
      id: 2,
      name: 'Sanjay Kumar Srivastava',
    },
  ];
  return (
    <View>
      <Text style={{fontSize: 25, textAlign: 'center', marginBottom: 15}}>
        List with Flat List Component
      </Text> 
      {/* <FlatList
        data={Users}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
      /> */}
      <ScrollView style={{backgroundColor:'orange',marginBottom:100}}>
        {
            Users.map((item)=><Text style={styles.item}>{item.name}</Text>)
        }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 24,
    padding: 10,
    color: '#fff',
    backgroundColor: 'lightblue',
    borderColor: 'blue',
    borderWidth:1,
    margin:10,
    borderRadius:19
  },
});

export default Flat;
