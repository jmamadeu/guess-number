import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../styles/theme";

export const NumberContainer: React.FC = ({ children }) => (
  <View style={styles.container}>
    <Text style={styles.number}>{children}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: theme.colors.pink,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  number: {
    color: theme.colors.purple,
    fontSize: 22
  }
});
