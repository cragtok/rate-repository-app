import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import Text from "./Text";

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, loading, error }) => {
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
                <RepositoryItem key={item.id} repository={item} />
            )}
        />
    );
};

const RepositoryList = () => {
    const { repositories, loading, error } = useRepositories();

    return (
        <RepositoryListContainer
            repositories={repositories}
            loading={loading}
            error={error}
        />
    );
};

export default RepositoryList;
