import { StyleSheet, View } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";
import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";
import Repository from "./Repository";
import SignIn from "./SignIn";
import ReviewForm from "./ReviewForm";
import SignUp from "./SignUp";

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
    },
});

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <Routes>
                <Route path="/signin" element={<SignIn />} exact />
                <Route path="/signup" element={<SignUp />} exact />
                <Route path="/reviewform" element={<ReviewForm />} exact />
                <Route
                    path="/repositories/:id"
                    element={<Repository />}
                    exact
                />
                <Route path="/" element={<RepositoryList />} exact />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </View>
    );
};

export default Main;
