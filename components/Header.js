import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

import Colors from "../constants/colors";
import TitleText from "../components/TitleText";

const Header = props => {
  return (
    <View
      style={[styles.headerBase, styles.headerAndroid]}
    >
      <TitleText style={styles.title}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 70,
    paddingTop: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  },
  headerAndroid: {
    backgroundColor: Colors.primary
  },

  title:{
    color: 'white'
  }
});

export default Header;
