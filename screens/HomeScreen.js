// import React from "react";
// import {View,Text} from "react-native";

// const HomeScreen = () => {
//     return(
//         <View>
//             <Text>HomeScreen</Text>
//         </View>
//     )
// }

// export default HomeScreen;

import { View, StyleSheet } from 'react-native';

import {AppleLogin, Application, Asset, AsyncStorage, Audio, Video} from '../components';

export default function App() {
  return (
   <View style={styles.container}>
     {/* <AppleLogin /> */}
     {/* <Application /> */}
     {/* <Asset /> */}
     {/* <AsyncStorage /> */}
     {/* <Audio /> */}
     <Video />
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
