import { FlatList, View, StyleSheet, Pressable } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import { useNavigate } from "react-router-native";
import Text from "./Text";
import { useDebouncedCallback } from "use-debounce";
import React from "react";
import RepositoryListHeader from "./RepositoryListHeader";

const styles = StyleSheet.create({
    separator: {
        height: 10,
    },
});

const ItemSeparator = () => <View style={styles.separator} />;

export class RepositoryListContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    getRepositoriesFromNodes = () => {
        return this.props.repositories
            ? this.props.repositories.edges.map((edge) => edge.node)
            : [];
    };
    render() {
        if (this.props.loading) {
            return (
                <Text fontSize={"subheading"} fontWeight="bold">
                    Loading...
                </Text>
            );
        }
        if (this.props.error) {
            return (
                <Text fontSize={"subheading"} fontWeight="bold">
                    Loading...
                </Text>
            );
        }

        return (
            <FlatList
                ListHeaderComponent={this.props.ListHeaderComponent}
                data={this.getRepositoriesFromNodes()}
                ItemSeparatorComponent={ItemSeparator}
                onEndReached={this.props.onEndReach}
                onEndReachedThreshold={0.3}
                renderItem={({ item }) => {
                    return (
                        <Pressable
                            onPress={() => {
                                this.props.handlePress(item.id);
                            }}>
                            <RepositoryItem key={item.id} repository={item} />
                        </Pressable>
                    );
                }}
            />
        );
    }
}

/*
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
*/

const RepositoryList = () => {
    const {
        repositories,
        fetchMore,
        loading,
        error,
        sortMethod,
        setSortMethod,
        searchKeyword,
        setSearchKeyword,
    } = useRepositories({ first: 4 });

    const debounced = useDebouncedCallback(
        (keyword) => setSearchKeyword(keyword),
        1000
    );

    const navigate = useNavigate();

    const handlePress = (id) => {
        navigate(`/repositories/${id}`);
    };

    const onEndReach = () => {
        fetchMore();
    };

    return (
        <RepositoryListContainer
            ListHeaderComponent={() => (
                <RepositoryListHeader
                    sortMethod={sortMethod}
                    setSortMethod={setSortMethod}
                    searchTerm={searchKeyword}
                    setSearchTerm={debounced}
                />
            )}
            onEndReach={onEndReach}
            repositories={repositories}
            loading={loading}
            error={error}
            handlePress={handlePress}
        />
    );
};

export default RepositoryList;
