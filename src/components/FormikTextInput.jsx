import { StyleSheet, View } from "react-native";
import { useField } from "formik";

import TextInput from "./TextInput";
import Text from "./Text";

import theme from "../theme";

const styles = StyleSheet.create({
    showErrorText: {
        color: theme.colors.danger,
    },
    hideErrorText: {
        visibility: "hidden",
    },
    container: {
        marginBottom: 24,
    },
});

const FormikTextInput = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name);
    const showError = meta.touched && meta.error;

    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={(value) => helpers.setValue(value)}
                onBlur={() => helpers.setTouched(true)}
                value={field.value}
                error={showError}
                {...props}
            />
            <Text
                style={[
                    styles.showErrorText,
                    !showError && styles.hideErrorText,
                ]}>
                {meta.error}
            </Text>
        </View>
    );
};

export default FormikTextInput;
