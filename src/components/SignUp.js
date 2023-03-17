import { Button, View, StyleSheet } from "react-native";
import * as yup from "yup";
import React from "react";
import useSignUp from "../hooks/useSignUp";
import { useNavigate } from "react-router-native";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import useSignIn from "../hooks/useSignIn";

const initialValues = {
    username: "",
    password: "",
    confirmPassword: "",
};

export const SignUpContainer = ({ onSubmit, validationSchema }) => {
    const styles = StyleSheet.create({
        container: {
            marginTop: 50,
            marginLeft: 20,
            marginRight: 20,
            alignItems: "stretch",
        },
        button: {
            borderRadius: 16,
        },
    });
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}>
            {({ handleSubmit }) => (
                <View style={styles.container}>
                    <FormikTextInput name="username" placeholder="Username" />
                    <FormikTextInput
                        name="password"
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                    <FormikTextInput
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        secureTextEntry={true}
                    />
                    <Button
                        styles={styles.button}
                        onPress={handleSubmit}
                        title="Sign In"
                    />
                </View>
            )}
        </Formik>
    );
};

const SignUp = () => {
    const [signUp] = useSignUp();
    const [signIn] = useSignIn();
    const navigate = useNavigate();

    const validationSchema = yup.object().shape({
        username: yup.string().required("Username is required").min(1).max(30),
        password: yup.string().required("Password is required").min(5).max(50),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password"), null], "Passwords must match")
            .required("Password confirm is required"),
    });

    const handleSubmit = async (values) => {
        const { username, password, confirmPassword } = values;

        if (confirmPassword !== password) {
            alert("Passwords do not match");
        }

        try {
            await signUp({ username, password });
            await signIn({ username, password });
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <SignUpContainer
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        />
    );
};

export default SignUp;
