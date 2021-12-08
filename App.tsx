import { StyleSheet, View } from "react-native";

import { Header } from "./src/components/header";
import { StartGame } from "./src/screens/start-game";

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Home" />
      <StartGame />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
