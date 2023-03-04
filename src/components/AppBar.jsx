import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";
import theme from "../theme";

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.textPrimary,
        paddingBottom: 17,
    },
    tabs: {
        container: {
            flexDirection: "row",
        },
    },
    // ...
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                contentContainerStyle={styles.tabs.container}>
                <AppBarTab text="Repositories" path="/" />
                <AppBarTab text="Sign In" path="/signin" />
            </ScrollView>
        </View>
    );
};

export default AppBar;
