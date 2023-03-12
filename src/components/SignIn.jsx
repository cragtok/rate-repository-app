import { Formik } from "formik";
import * as yup from "yup";
import { Button, StyleSheet, View } from "react-native";
import FormikTextInput from "./FormikTextInput";
import useSignIn from "../hooks/useSignIn";

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
        formElement: {},
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
    const [signIn] = useSignIn();
    const onSubmit = async (values) => {
        const { username, password } = values;
        console.log(username, password);
        try {
            const { data } = await signIn({ username, password });
            console.log(data.authenticate.accessToken);
        } catch (error) {
            console.log(error);
        }
    };

    const validationSchema = yup.object().shape({
        username: yup.string().required("Username is required"),
        password: yup.string().required("Password is required"),
    });
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default SignIn;
