import React, {useEffect, useState} from 'react';
import {Text, View, Button, StyleSheet, Modal, TextInput} from 'react-native';

const ApiList = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(undefined);
  const getApiData = async () => {
    const url = 'http://10.0.2.2:3000/users';
    let result = await fetch(url);
    result = await result.json();
    console.warn(result);
    if (result) {
      setData(result);
    }
  };

  const deleteUser = async id => {
    const url = 'http://10.0.2.2:3000/users';
    // console.warn(`${url}/${id}`);
    let result = await fetch(`${url}/${id}`, {
      method: 'delete',
    });
    result = await result.json();
    if (result) {
      console.warn('User deleted successfully');
      getApiData();
    }
  };
  useEffect(() => {
    getApiData();
  }, []);

  const updateUser = data => {
    setShowModal(true);
    setSelectedUser(data);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flex: 1.1}}>
          <Text>Name</Text>
        </View>
        <View style={{flex: 2}}>
          <Text>Age</Text>
        </View>
        <View style={{flex: 1}}>
          <Text>Operations</Text>
        </View>
      </View>
      {data.length
        ? data.map((item, id) => (
            <View style={styles.dataWrapper}>
              <View style={{flex: 1}}>
                <Text>{item.name}</Text>
              </View>
              <View style={{flex: 1}}>
                <Text>{item.age}</Text>
              </View>

              <View style={{flex: 1}}>
                <Button title="Delete" onPress={() => deleteUser(item.id)} />
              </View>
              <View>
                <Button title="Update" onPress={() => updateUser(item)} />
              </View>
            </View>
          ))
        : null}
      <Modal visible={showModal} transparent={true}>
        <UserModal setShowModal={setShowModal} selectedUser={selectedUser} getApiData={getApiData} />
      </Modal>
    </View>
  );
};

const UserModal = props => {
  console.warn(props.selectedUser);
  const [name, setName] = useState(undefined);
  const [age, setAge] = useState(undefined);
  const [email, setEmail] = useState(undefined);

  useEffect(() => {
    if (props.selectedUser) {
      setName(props.selectedUser.name);
      setEmail(props.selectedUser.email);
      setAge(props.selectedUser.age);
    }
  }, [props.selectedUser]);

  const updateUser=async()=>{
    console.warn(name,age,email,props.selectedUser.id);
    const url = 'http://10.0.2.2:3000/users';
    const id = props.selectedUser.id;
    let result = await fetch(`${url }/${id}`,{
        method:'Put',
        headers:{
        'Content-Type':"application/json"
        },
        body:JSON.stringify({name,age,email})
    });
    result =await result.json();
    if(result){
        console.warn(result);
        props.getApiData();
        props.setShowModal(false);
    }
  }
  return (
    <View style={styles.centerView}>
      <View style={styles.modalView}>
        {/* <Text style={styles.textView}>{props.selectedUser.name}</Text>
        <Text style={styles.textView}>{props.selectedUser.age}</Text>
        <Text style={styles.textView}>{props.selectedUser.email}</Text> */}
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          value={age}
          onChangeText={text => setAge(text)}
        />
        <View style={{marginBottom: 20}}>
          <Button title="Update" onPress={updateUser} />
        </View>
        <Button
          title="close"
          onPress={() => {
            props.setShowModal(false);
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1},
  dataWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'lightgreen',
    margin: 5,
    padding: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'orange',
    margin: 5,
    padding: 8,
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#fff',
    padding: 60,
    borderRadius: 10,
    shadowColor: '#171717',
    shadowOpacity: 1,
    elevation: 20,
  },
  textView: {
    fontSize: 20,
    borderWidth: 1,
    borderBlockColor: 'skyblue',
    margin: 5,
    padding: 5,
    borderRadius: 20,
    textAlign: 'center',
    backgroundColor: 'lightpink',
    shadowColor: '#171717',
    shadowOpacity: 1,
    elevation: 10,
  },
  input: {
    fontFamily: 'timesnewroman',
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'skyblue',
    borderRadius: 20,
    width: 230,
    marginBottom: 20,
    textAlign: 'center',
  },
});
export default ApiList;
