import { View, StyleSheet, Button } from "react-native";
import * as yup from "yup";
import React from "react";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import { useNavigate } from "react-router-native";
import useReview from "../hooks/useReview";

const initialValues = {
    ownerName: "",
    repositoryName: "",
    rating: "",
    text: "",
};

export const ReviewFormContainer = ({ onSubmit, validationSchema }) => {
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
                    <FormikTextInput
                        name="ownerName"
                        placeholder="Repository Owner Name"
                    />
                    <FormikTextInput
                        name="repositoryName"
                        placeholder="Repository Name"
                    />
                    <FormikTextInput
                        name="rating"
                        placeholder="Rating between 0 and 100"
                    />
                    <FormikTextInput
                        multiline={true}
                        name="text"
                        placeholder="Review"
                        numberOfLines={5}
                    />
                    <Button
                        style={styles.button}
                        onPress={handleSubmit}
                        title="Create Review"
                    />
                </View>
            )}
        </Formik>
    );
};

const ReviewForm = () => {
    const navigate = useNavigate();
    const [createReview] = useReview();
    const handleSubmit = async (values) => {
        const { repositoryName, ownerName, rating, text } = values;
        try {
            const newReview = await createReview({
                repositoryName,
                ownerName,
                rating,
                text,
            });
            console.log(newReview);
            navigate(`/repositories/${ownerName}.${repositoryName}`);
        } catch (error) {
            console.error(error);
        }
    };

    const validationSchema = yup.object().shape({
        ownerName: yup.string().required("Repository owner is required"),
        repositoryName: yup.string().required("Repository name is required"),
        rating: yup
            .number()
            .integer("Rating must be an integer")
            .required("Rating is required")
            .min(0)
            .max(100),
        text: yup.string().optional().min(5).max(250),
    });

    return (
        <ReviewFormContainer
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        />
    );
};

export default ReviewForm;
