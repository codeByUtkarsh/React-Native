import React from 'react';
import {Text, View, Button,StyleSheet, ScrollView} from 'react-native';

const Grid = () => {
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
      <Text style={{fontSize: 30}}>Grid With Dynamic Data</Text>
      <ScrollView>
        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
          {Users.map(user => (
            <Text style={styles.grid}>{user.name}</Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    grid:{
        fontSize:25,
        backgroundColor:'lightblue',
        color:'#fff',
        margin:5,
        padding:5,
        width:120,
        height:120,
        textAlignVertical:'center',
        textAlign:'center'
    }
})

export default Grid;
