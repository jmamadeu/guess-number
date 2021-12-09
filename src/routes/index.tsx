import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "../components/header";
import { PlayGame } from "../screens/play-game";
import { StartGame } from "../screens/start-game";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StartGame"
        component={StartGame}
        options={{
          header: () => <Header title="Home" />
        }}
      />
      <Stack.Screen name="PlayGame" component={PlayGame} />
    </Stack.Navigator>
  );
}
