import { Button, StyleSheet, View } from "react-native";
import TextInput from "./TextInput";
import { Picker } from "@react-native-picker/picker";
import React from "react";

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    searchTermInput: {},
});

const RepositoryListHeader = ({
    setSortMethod,
    sortMethod,
    searchTerm,
    setSearchTerm,
}) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchTermInput}
                defaultValue={searchTerm}
                onChangeText={setSearchTerm}
                placeholder="Search repository"
            />
            {searchTerm && (
                <Button onPress={() => setSearchTerm("")} title="Clear" />
            )}
            <Picker
                selectedValue={sortMethod}
                onValueChange={(itemValue) => setSortMethod(itemValue)}>
                <Picker.Item label="Latest Repos" value={1} />
                <Picker.Item label="Highest Rated" value={2} />
                <Picker.Item label="Lowest Rated" value={3} />
            </Picker>
        </View>
    );
};

export default RepositoryListHeader;
