import React from "react";
import { StyleSheet, View, Image } from "react-native";
import theme from "../theme";
import Text from "./Text";
import { renderThousandsNumber } from "../utils/renderThousandsNumber";

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flexGrow: 1,
        flexDirection: "column",
    },
    header: {
        container: {
            flexDirection: "row",
            flexGrow: 1,
            marginBottom: 20,
        },
        logo: {
            width: 66,
            height: 58,
        },
        logoContainer: {
            flexGrow: 0,
            paddingRight: 15,
        },
        infoContainer: {
            flexShrink: 1,
        },
        language: {
            backgroundColor: theme.colors.primary,
            width: 87,
            height: 34,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 5,
            marginTop: 12,
        },
    },
    statsList: {
        container: {
            flexDirection: "row",
            justifyContent: "space-around",
        },
    },
});

const RepositoryItem = ({ repository }) => {
    return (
        <View testID="repositoryItem" style={styles.container}>
            <View style={styles.header.container}>
                <View style={styles.header.logoContainer}>
                    <Image
                        style={styles.header.logo}
                        source={{ uri: repository.ownerAvatarUrl }}
                    />
                </View>
                <View style={styles.header.infoContainer}>
                    <View>
                        <Text
                            testID="repositoryFullName"
                            fontSize={"subheading"}
                            fontWeight="bold">
                            Full name: {repository.fullName}
                        </Text>
                        <Text
                            testID="repositoryDescription"
                            fontSize={"subheading"}
                            color="textSecondary">
                            Description: {repository.description}
                        </Text>
                        <View style={styles.header.language}>
                            <Text
                                testID="repositoryLanguage"
                                color="textLight"
                                fontWeight={"bold"}>
                                {repository.language}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.statsList.container}>
                <View>
                    <Text
                        testID="repositoryStargazersCount"
                        fontWeight={"bold"}>
                        {renderThousandsNumber(repository.stargazersCount)}
                    </Text>
                    <Text>Stars</Text>
                </View>

                <View>
                    <Text testID="repositoryForksCount" fontWeight={"bold"}>
                        {renderThousandsNumber(repository.forksCount)}
                    </Text>
                    <Text>Forks</Text>
                </View>

                <View>
                    <Text testID="repositoryReviewCount" fontWeight={"bold"}>
                        {renderThousandsNumber(repository.reviewCount)}
                    </Text>
                    <Text>Reviews</Text>
                </View>
                <View>
                    <Text testID="repositoryRatingAverage" fontWeight={"bold"}>
                        {repository.ratingAverage}
                    </Text>
                    <Text>Rating</Text>
                </View>
            </View>
        </View>
    );
};

export default RepositoryItem;
