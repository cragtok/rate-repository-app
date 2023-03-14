import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { useParams } from "react-router-native";
import useRepository from "../hooks/useRepository";
import RepositoryItem from "./RepositoryItem";
import * as Linking from "expo-linking";

const styles = StyleSheet.create({
    container: {},
    buttonContainer: {},
    button: {
        borderRadius: 25,
    },
});

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
    );
};

export default Repository;
