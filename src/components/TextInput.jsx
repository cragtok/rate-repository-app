import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import theme from "../theme";
const styles = StyleSheet.create({
    borderColor: theme.colors.textSecondary,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
});

const TextInput = ({ style, error, ...props }) => {
    const textInputStyle = [styles, style, error && style.errorColor];
    return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
