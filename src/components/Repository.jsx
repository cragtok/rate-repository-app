import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import React from "react";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";
import * as Linking from "expo-linking";
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

const Repository = () => {
    const { id } = useParams();
    const { repository, loading, error, fetchMore } = useRepository({
        repositoryId: id,
        first: 3,
    });

    if (error) {
        return (
            <View>
                <Text>Error!</Text>
            </View>
        );
    }
    if (loading || !repository) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    const onEndReach = () => {
        fetchMore();
    };

    const reviewNodes = repository.reviews
        ? repository.reviews.edges.map((edge) => edge.node)
        : [];

    return (
        <FlatList
            ListHeaderComponent={() => (
                <View>
                    <RepositoryItem repository={repository} />
                    <Text>{"\n"}</Text>
                    <Button
                        onPress={() => {
                            Linking.openURL(repository.url);
                        }}
                        title="Open In Github"
                        style={styles.button}
                    />
                </View>
            )}
            data={reviewNodes}
            renderItem={({ item }) => (
                <ReviewItem review={item} isUserReview={false} />
            )}
            keyExtractor={({ id }) => id}
            ItemSeparatorComponent={ItemSeparator}
            onEndReached={onEndReach}
            onEndReachedThreshold={0.3}
        />
    );
};

export default Repository;
