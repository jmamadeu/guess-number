import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../styles/theme";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => (
  <View style={styles.container}>
    <StatusBar style="light" />
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: theme.colors.pink,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: theme.colors.black,
    fontSize: 18
  }
});
