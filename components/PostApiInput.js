import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet, Button} from 'react-native';

const PostA = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const [nameError, setNameError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const saveData = async () => {
    {
      !name ? setNameError(true) : setNameError(false);
    }

    {
      !age ? setAgeError(true) : setAgeError(false);
    }

    {
      !email ? setEmailError(true) : setEmailError(false);
    }

    if (!name || !age || !email) {
      return false;
    }

    console.warn('');

    // console.warn(name);
    // console.warn(age);
    // console.warn(email);
    const url = 'http://10.0.2.2:3000/users';
    let result = await fetch(url, {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name, email, age}),
    });
    result = await result.json();
    if (result) {
      console.warn('User Registered Successfully');
    }
  };
  return (
    <View>
      <Text style={{fontSize: 25}}>Post Api with Input Field Data</Text>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={text => setName(text)}
        placeholder="Enter UserName"
      />
      {nameError ? (
        <Text style={styles.errorText}>Please Enter Valid name</Text>
      ) : null}
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={text => setAge(text)}
        placeholder="Enter User Age"
      />
      {ageError ? (
        <Text style={styles.errorText}>Please Enter Valid Age</Text>
      ) : null}
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="Enter User Email"
      />
      {emailError ? (
        <Text style={styles.errorText}>Please Enter Valid Email</Text>
      ) : null}
      <Button title="save data" onPress={saveData} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'skyblue',
    borderWidth: 1,
    borderRadius: 20,
    padding: 20,
    margin: 20,
    marginBottom: 5,
  },
  errorText: {
    color: 'red',
    marginLeft: 35,
  },
});

export default PostA;
