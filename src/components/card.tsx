import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { theme } from "../styles/theme";

type CardProps = { style?: StyleProp<ViewStyle> };

export const Card: React.FC<CardProps> = ({ children, style }) => (
  <View style={[styles.container, style]}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    shadowColor: theme.colors.black,
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: theme.colors.white,
    elevation: 8,
    padding: 15,
    borderRadius: 10
  }
});
