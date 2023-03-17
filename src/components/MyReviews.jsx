import { FlatList, StyleSheet, View } from "react-native";
import Text from "./Text";
import React from "react";
import { useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";
import ReviewItem from "./ReviewItem";

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
    const { data, loading, error } = useQuery(ME, {
        fetchPolicy: "cache-and-network",
        variables: { includeReviews: true },
    });

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

    return (
        <FlatList
            data={data.me.reviews.edges.map((review) => review.node)}
            renderItem={({ item }) => (
                <ReviewItem review={item} isUserReview={true} />
            )}
            keyExtractor={({ id }) => id}
            ItemSeparatorComponent={ItemSeparator}
        />
    );
};

export default MyReviews;
