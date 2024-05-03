import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

import * as AppleAuthentication from "expo-apple-authentication";

const AppleLogin = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);

  const handleLogout = async () => {
    try {
        const credential = await AppleAuthentication.signOutAsync({
          requestedScopes: [
            AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
            AppleAuthentication.AppleAuthenticationScope.EMAIL,
          ],
        });
        console.log("CREDENTIAL ---->>>>>", credential);
       Alert.alert('Logout successfully');
        // signed in
      } catch (e) {
        setError(e.message);
      }
  };

  return (
    <View style={styles.container}>
      <AppleAuthentication.AppleAuthenticationButton
        buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
        buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
        cornerRadius={5}
        style={styles.button}
        onPress={async () => {
          try {
            const credential = await AppleAuthentication.signInAsync({
              requestedScopes: [
                AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                AppleAuthentication.AppleAuthenticationScope.EMAIL,
              ],
            });
            console.log("CREDENTIAL ---->>>>>", credential);
            setError(null);
            setUserInfo(credential);
            // signed in
          } catch (e) {
            setError(e.message);
            setUserInfo(null);
          }
        }}
      />

      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      {console.log("userInfo", userInfo)}
      {userInfo?.email ? (
        <View style={styles.infoContainer}>
          <Text style={styles.sucessText}>Login Successful 🎉</Text>
          <Text style={styles.text}>Email : {userInfo?.email}</Text>
          <Text style={styles.text}>
            FullName :{" "}
            {`${userInfo?.fullName?.givenName} ${userInfo?.fullName?.familyName}`}
          </Text>
        </View>
      ) : null}

      {error ? (
        <View style={styles.infoContainer}>
          <Text style={styles.errorText}>Login Failed</Text>
          <Text style={styles.text}>{error}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 200,
    height: 44,
  },
  infoContainer: {
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    color: "#000",
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
  sucessText: {
    fontSize: 18,
    color: "green",
    textAlign: "center",
  },
  logoutButton: {
    backgroundColor: "#000",
    marginTop: 20,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  logoutText: {
    color: "#fff",
  },
});

export default AppleLogin;
