import React from 'react';
import {Text, View, Pressable, StyleSheet} from 'react-native';

const Press = () => {
  return (
    <View>
      <Pressable
    
        onPress={() => console.warn('normal on press')}
        onLongPress={() => console.warn('Long Press')}
        onPressIn={()=>console.warn('on Press In')}
        onPressOut={()=>console.warn('On Press Out')}>
        <Text style={styles.pressableBtn}>Pressable</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  pressableBtn: {
    backgroundColor: 'skyblue',
    color: '#fff',
    padding: 10,
    marginTop:300,
    margin: 10,
    borderRadius: 10,
    fontSize: 20,
    textAlign:'center',
    shadowColor:'#000',
    elevation:7
  },
});
export default Press;
