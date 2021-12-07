import { StyleSheet, TextInput, TextInputProps } from "react-native";

import { theme } from "../styles/theme";

export const Input = ({ style, ...rest }: TextInputProps) => (
  <TextInput {...rest} style={[style, styles.input]} />
);

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: theme.colors.darkGray,
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
