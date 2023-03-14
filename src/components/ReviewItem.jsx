import { View, StyleSheet } from "react-native";
import Text from "./Text";
import React from "react";
import theme from "../theme";

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    header: {
        flexDirection: "row",
    },
    userAndDate: {
        marginTop: 15,
    },
    text: {
        marginTop: 11,
        marginLeft: 78,
    },
    rating: {
        marginRight: 17,
        borderColor: theme.colors.primary,
        borderWidth: 4,
        width: 60,
        height: 58,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 55,
        marginTop: 12,
    },
});

const ReviewItem = ({ review }) => {
    const renderDate = (createdAt) => {
        const dateObj = new Date(createdAt);
        const date = dateObj.getDate();
        const month = dateObj.getMonth();
        const year = dateObj.getFullYear();

        const addZero = (number) => (number < 10 ? "0" + number : number);
        return `${addZero(date)}.${addZero(month)}.${year}`;
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.rating}>
                    <Text
                        fontSize={"large"}
                        color={"primary"}
                        fontWeight="bold">
                        {review.rating}
                    </Text>
                </View>
                <View style={styles.userAndDate}>
                    <Text
                        fontSize={"large"}
                        fontWeight={"bold"}
                        color="textSecondary">
                        {review.user.username}
                    </Text>
                    <View>
                        <Text fontSize={"subheading"} color="textSecondary">
                            {renderDate(review.createdAt)}
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.text}>
                <Text color="textSecondary">{review.text}</Text>
            </View>
        </View>
    );
};

export default ReviewItem;
