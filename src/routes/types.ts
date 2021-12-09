import {
  NativeStackNavigationProp,
  NativeStackScreenProps
} from "@react-navigation/native-stack";

export type RootStackParamList = {
  StartGame: undefined;
  PlayGame: { chosenNumber: number };
};

export type StartGameScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "StartGame"
>;

export type PlayGameScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "PlayGame"
>;

export type PlayGameNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "PlayGame"
>;
