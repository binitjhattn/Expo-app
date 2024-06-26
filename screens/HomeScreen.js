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

import {AppleLogin, Application, Asset, AsyncStorage, Audio, Video, BackgroundFetch, Barometer, Battery, BlurView, Brightness, Calendar, Camera, CaptureRef, CheckBox, ClipBoard, Contacts, Crypto, Device, DocumentPicker, FlashList, GLView, Gyroscope, Haptics, Image, ImageManipulation} from '../components';

export default function App() {
  return (
   <View style={styles.container}>
     {/* <AppleLogin /> */}
     {/* <Application /> */}
     {/* <Asset /> */}
     {/* <AsyncStorage /> */}
     {/* <Audio /> */}
     {/* <Video /> */}
     {/* <BackgroundFetch /> */}
     {/* <Barometer /> */}
     {/* <Battery /> */}
     {/* <BlurView /> */}
     {/* <Brightness /> */}
     {/* <Calendar /> */}
     {/* <Camera /> */}
     {/* <CaptureRef /> */}
     {/* <CheckBox /> */}
     {/* <ClipBoard /> */}
     {/* <Contacts /> */}
     {/* <Crypto /> */}
     {/* <Device /> */}
     {/* <DocumentPicker /> */}
     {/* <FlashList /> */}
     {/* <GLView /> */}
     {/* <Gyroscope /> */}
     {/* <Haptics /> */}
     {/* <Image /> */}
     <ImageManipulation />
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
