import { Pressable } from "react-native";
import Text from "./Text";

const AppBarTab = ({ text }) => {
    return (
        <Pressable onPress={() => alert("PRESSED")}>
            <Text color="primary" fontWeight="bold">
                {text}
            </Text>
        </Pressable>
    );
};

export default AppBarTab;
