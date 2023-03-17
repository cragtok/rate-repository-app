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
    const { repository, loading, error } = useRepository(id);

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
            data={repository.reviews.edges.map((review) => review.node)}
            renderItem={({ item }) => (
                <ReviewItem review={item} isUserReview={false} />
            )}
            keyExtractor={({ id }) => id}
            ItemSeparatorComponent={ItemSeparator}
        />
    );
};

export default Repository;
