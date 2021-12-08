import { useState } from "react";
import {
  Alert,
  Button,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { Card } from "../components/card";
import { Input } from "../components/input";
import { NumberContainer } from "../components/numberContainer";
import { theme } from "../styles/theme";

export const StartGame = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState<number>();

  const handleInputChange = (value: string) =>
    setEnteredValue(value.replace(/[^0-9]/g, ""));

  const handleScreenPress = () => Keyboard.dismiss();

  const handleResetButton = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const handleConfirmButton = () => {
    const chosenNumber = parseInt(enteredValue);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 100",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: handleResetButton
          }
        ]
      );
      return;
    }

    setConfirmed(true);
    setEnteredValue("");
    setSelectedNumber(chosenNumber);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleScreenPress}>
      <View style={styles.container}>
        <Text style={styles.title}>Start a game</Text>

        <Card style={styles.inputContainer}>
          <Text>Select a number</Text>
          <Input
            style={styles.input}
            keyboardType="number-pad"
            maxLength={2}
            blurOnSubmit
            value={enteredValue}
            onChangeText={handleInputChange}
            returnKeyLabel="Confirm"
            onSubmitEditing={handleConfirmButton}
          />

          <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={handleResetButton}>
              <Text style={styles.buttonText}>Reset</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.otherButton]}
              onPress={handleConfirmButton}
            >
              <Text style={styles.buttonText}>Confirm</Text>
            </Pressable>
          </View>
        </Card>
        {confirmed ? (
          <Card style={styles.summaryContainer}>
            <Text>Chosen Number</Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button title="START GAME" onPress={() => {}} />
          </Card>
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center"
  },
  input: {
    width: 60,
    textAlign: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  button: {
    width: 100,
    textAlign: "center",
    backgroundColor: theme.colors.purple,
    padding: 8,
    borderRadius: 10
  },
  otherButton: {
    backgroundColor: theme.colors.pink
  },
  buttonText: {
    textAlign: "center",
    color: theme.colors.white,
    fontSize: 16
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center"
  }
});
