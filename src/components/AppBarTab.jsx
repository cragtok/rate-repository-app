import { Pressable } from "react-native";
import { Link } from "react-router-native";
import Text from "./Text";

const AppBarTab = ({ text, path, handlePress }) => {
    return (
        <Pressable onPress={handlePress}>
            <Link to={path}>
                <Text color={"primary"} fontWeight={"bold"}>
                    {text}
                </Text>
            </Link>
        </Pressable>
    );
};

export default AppBarTab;
