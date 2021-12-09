import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Card } from "../components/card";
import { NumberContainer } from "../components/numberContainer";

function generateRandomBetween(
  min: number,
  max: number,
  exclude: number
): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  const random = Math.floor(Math.random() * (max - min) + min);

  if (random === exclude) return generateRandomBetween(min, max, exclude);

  return random;
}

export const PlayGame = () => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, 4)
  );

  return (
    <View style={styles.container}>
      <Text>Opponent&apos;s Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="LOWER" onPress={() => {}} />
        <Button title="LOWER" onPress={() => {}} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%"
  }
});
