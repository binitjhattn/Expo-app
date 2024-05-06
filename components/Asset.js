import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { Asset, useAssets } from 'expo-asset';

const AssetComponent = () => {
    const [assets, error] = useAssets([require('../assets/images/background-image.png'), require('../assets/images/emoji4.png')]);
    console.log('assets --->>>>', assets);
    console.log('error --->>>>', error);
  return (
    <View style={styles.container}>
        <Image style={styles.imageContainer} source={require('../assets/images/emoji1.png')} />
       {assets ? <Image style={styles.imageContainer} source={assets[0]} /> : null}
       {assets ? <Image style={styles.imageContainer} source={assets[1]} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "#000",
    fontWeight: "600", 
  },
  imageContainer:{
    height: 150,
    width: 150,
    borderRadius: 10
  }
});

export default AssetComponent;
