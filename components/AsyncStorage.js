import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import Button from "../common-components/Button";

import AsyncStorage from "@react-native-async-storage/async-storage";

const AsyncStorageComponent = () => {
  const [stringValue, setStringValue] = useState("nothing");

  const setValue = async () => {
    try {
      await AsyncStorage.setItem("my-key", "value-updated");
      Alert.alert('updated-successfully');
    } catch (e) {
        Alert.alert('Saving error');
      // saving error
    }
  };
  const getUpdatedData = async () => {
    try {
        const value = await AsyncStorage.getItem('my-key');
        if (value !== null) {
          // value previously stored
          setStringValue(value);
        }
      } catch (e) {
        // error reading value
        Alert.alert('Error reading value');
      }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>AsyncStorage</Text>

      <Text style={styles.valueText}>Value:- {stringValue}</Text>

      <Button onPress={setValue} buttonText={"Set value"} />

      <Button onPress={getUpdatedData} buttonText={"Get updated value"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  valueText: {
    fontWeight: "700",
    fontSize: 22,
  },
});

export default AsyncStorageComponent;
