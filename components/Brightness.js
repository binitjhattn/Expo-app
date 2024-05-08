import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Brightness from 'expo-brightness';

export default function App() {
  useEffect(() => {
    (async () => {
      const { status } = await Brightness.requestPermissionsAsync();
      console.log('status ---->>>>', status);
      if (status === 'granted') {
        Brightness.setSystemBrightnessAsync(1);
        let brightnessLevel = await Brightness.getBrightnessAsync();
        console.log('brightnessLevel ---->>>>>', brightnessLevel);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Brightness Module Example</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
