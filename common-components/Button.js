import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import COLORS from "../constants/constant.JS";

const Button = ({customButtonStyle = {}, customButtonTextStyle = {}, onPress, buttonText}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, customButtonStyle]}>
      <Text style={[styles.buttonText, customButtonTextStyle]}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.DARK_BLUE,
    padding: 10,
    margin: 10,
  },
  buttonText: {
    color: COLORS.WHITE,
    fontSize: 22,
  },
});

export default Button;
