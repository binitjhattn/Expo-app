import React from "react";
import { View, Text, StyleSheet } from "react-native";

import * as Application from "expo-application";

const ApplicationComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Application ID: {Application.applicationId}
      </Text>

      <Text style={styles.text}>
        Application Name: {Application.applicationName}
      </Text>
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
});

export default ApplicationComponent;
