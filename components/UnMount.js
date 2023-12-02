// import React, {useEffect, useState} from 'react';
// import {Text, View, Button} from 'react-native';

// const Un = () => {
//   const [show, setShow] = useState(true);
//   return (
//     <View>
//       <Text style={{fontSize: 30}}>Show/Hide Component </Text>
//       <Button title="Toggle Component" onPress={() => setShow(!show)} />

//       {show ? <Student /> : null}
//     </View>
//   );
// };

// const Student = () => {
//   const timer = setInterval(() => {
//     console.warn('Timer Called');
//   }, 5000);
//   useEffect(() => {
//     return () => {
//       clearInterval(timer);
//     };
//   });
//   return (
//     <View>
//       <Text style={{fontSize: 30, color: 'red'}}>Student</Text>
//     </View>
//   );
// };

// export default Un;
