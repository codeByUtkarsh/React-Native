import React, {useState} from 'react';
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
  Modal,
} from 'react-native';

const Mod = () => {
     const [showModal, setShowModal] = useState(false);
  return (
    <View>
      <Modal transparent={true} visible={showModal} animationType="slide">
        <View style={styles.centerView}>
          <View style={styles.ModalView}>
            <Text style={styles.text}>Hello Code step by step </Text>
            <Button
              title="Close Modal"
              onPress={() => setShowModal(false)}></Button>
          </View>
        </View>
      </Modal>
      <View style={styles.buttonView}>
        <Button title="open Modal" onPress={() => setShowModal(true)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ModalView: {
    backgroundColor: 'skyblue',
    padding: 40,
    borderRadius: 20,
    shadowColor: 'black',
    elevation: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default Mod;
