import { StyleSheet, View } from "react-native";

import { Header } from "./src/components/header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Home" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
