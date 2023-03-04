import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";
import theme from "../theme";

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.textPrimary,
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingBottom: 10,
    },
    // ...
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <AppBarTab text="Repositories" path="/" />
            <AppBarTab text="Sign In" path="/signin" />
        </View>
    );
};

export default AppBar;
