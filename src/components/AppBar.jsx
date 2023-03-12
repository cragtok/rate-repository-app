import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";
import theme from "../theme";
import useSignOut from "../hooks/useSignOut";

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.textPrimary,
        paddingBottom: 17,
    },
    tabs: {
        container: {
            flexDirection: "row",
            flexGrow: 1,
            justifyContent: "space-around",
        },
    },
    // ...
});

const AppBar = () => {
    const [signOut, data] = useSignOut();
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                contentContainerStyle={styles.tabs.container}>
                <AppBarTab text="Repositories" path="/" isLink={true} />
                {data && data.me ? (
                    <AppBarTab
                        text="Sign Out"
                        handlePress={signOut}
                        isLink={false}
                    />
                ) : (
                    <AppBarTab text="Sign In" path="/signin" isLink={true} />
                )}
            </ScrollView>
        </View>
    );
};

export default AppBar;
