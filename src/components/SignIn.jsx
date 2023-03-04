import { Formik } from "formik";
import { Button, StyleSheet, View } from "react-native";
import FormikTextInput from "./FormikTextInput";

const initialValues = {
    username: "",
    password: "",
};

const SignInForm = ({ onSubmit }) => {
    const styles = StyleSheet.create({
        container: {
            marginTop: 50,
            marginLeft: 20,
            marginRight: 20,
            alignItems: "stretch",
        },
        formElement: {
            marginBottom: 40,
        },
        button: {
            borderRadius: 16,
        },
    });
    return (
        <View>
            <View style={styles.container}>
                <FormikTextInput
                    style={styles.formElement}
                    name="username"
                    placeholder="Username"
                />
                <FormikTextInput
                    name="password"
                    style={styles.formElement}
                    placeholder="Password"
                    secureTextEntry={true}
                />
                <Button
                    styles={styles.button}
                    onPress={onSubmit}
                    title="Sign In"
                />
            </View>
        </View>
    );
};

const SignIn = () => {
    const onSubmit = (values) => {
        console.log(values.username, values.password);
    };
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default SignIn;
