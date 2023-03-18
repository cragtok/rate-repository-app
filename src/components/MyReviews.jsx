import { FlatList, StyleSheet, View, Alert } from "react-native";
import Text from "./Text";
import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";
import ReviewItem from "./ReviewItem";
import { useNavigate } from "react-router-native";
import { DELETE_REVIEW } from "../graphql/mutations";

const styles = StyleSheet.create({
    container: {},
    button: {
        borderRadius: 25,
    },
    separator: {
        height: 20,
    },
});
const ItemSeparator = () => <View style={styles.separator} />;

const MyReviews = () => {
    const { data, loading, error, refetch } = useQuery(ME, {
        fetchPolicy: "cache-and-network",
        variables: { includeReviews: true },
    });

    const [mutate] = useMutation(DELETE_REVIEW);

    const navigate = useNavigate();

    if (loading) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View>
                <Text>Error!</Text>
            </View>
        );
    }

    const handleDeleteReview = (deleteReviewId) => {
        Alert.alert("Alert Title", "My Alert Msg", [
            {
                text: "Cancel",
                style: "cancel",
            },
            {
                text: "OK",
                onPress: async () => {
                    try {
                        await mutate({ variables: { deleteReviewId } });
                        await refetch({
                            deleteReviewId: true,
                        });
                    } catch (error) {
                        console.error(error);
                    }
                },
            },
        ]);
    };
    const handleOpenRepo = (id) => {
        navigate(`/repositories/${id}`);
    };

    return (
        <FlatList
            data={data.me.reviews.edges.map((review) => review.node)}
            renderItem={({ item }) => (
                <ReviewItem
                    review={item}
                    isUserReview={true}
                    deleteReview={handleDeleteReview}
                    openRepo={handleOpenRepo}
                />
            )}
            keyExtractor={({ id }) => id}
            ItemSeparatorComponent={ItemSeparator}
        />
    );
};

export default MyReviews;
