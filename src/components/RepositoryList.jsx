import { FlatList, View, StyleSheet, Pressable } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import { Picker } from "@react-native-picker/picker";
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
    ListHeaderComponent,
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
            ListHeaderComponent={ListHeaderComponent}
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
    const { repositories, sortMethod, setSortMethod, loading, error } =
        useRepositories();

    const navigate = useNavigate();

    const handlePress = (id) => {
        navigate(`/repositories/${id}`);
    };
    return (
        <RepositoryListContainer
            ListHeaderComponent={() => (
                <View>
                    <Picker
                        selectedValue={sortMethod}
                        onValueChange={(itemValue) => setSortMethod(itemValue)}>
                        <Picker.Item label="Latest Repos" value={1} />
                        <Picker.Item label="Highest Rated" value={2} />
                        <Picker.Item label="Lowest Rated" value={3} />
                    </Picker>
                </View>
            )}
            repositories={repositories}
            loading={loading}
            error={error}
            handlePress={handlePress}
        />
    );
};

export default RepositoryList;
