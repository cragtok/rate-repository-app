import { FlatList, View, StyleSheet, Pressable } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import { useNavigate } from "react-router-native";
import Text from "./Text";

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({
    repositories,
    loading,
    error,
    handlePress,
}) => {
    const repositoryNodes = repositories
        ? repositories.edges.map((edge) => edge.node)
        : [];
    if (loading) {
        return (
            <Text fontSize={"subheading"} fontWeight="bold">
                Loading...
            </Text>
        );
    }

    if (error) {
        return (
            <Text fontSize={"subheading"} fontWeight="bold">
                Error
            </Text>
        );
    }
    return (
        <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item }) => (
                <Pressable
                    onPress={() => {
                        handlePress(item.id);
                    }}>
                    <RepositoryItem key={item.id} repository={item} />
                </Pressable>
            )}
        />
    );
};

const RepositoryList = () => {
    const { repositories, loading, error } = useRepositories();
    const navigate = useNavigate();

    const handlePress = (id) => {
        navigate(`/repositories/${id}`);
    };
    return (
        <RepositoryListContainer
            repositories={repositories}
            loading={loading}
            error={error}
            handlePress={handlePress}
        />
    );
};

export default RepositoryList;
