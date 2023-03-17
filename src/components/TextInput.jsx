import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import theme from "../theme";
const styles = StyleSheet.create({
    borderColor: theme.colors.textSecondary,
    errorColor: theme.colors.danger,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
});

const TextInput = ({ style, error, ...props }) => {
    const textInputStyle = [styles, style, error && styles.errorColor];
    return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
