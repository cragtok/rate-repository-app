import { Pressable } from "react-native";
import { Link } from "react-router-native";
import Text from "./Text";

const AppBarTab = ({ text, path, handlePress, isLink }) => {
    const textElement = () => (
        <Text color={"textLight"} fontWeight={"bold"} fontSize="subheading">
            {text}{" "}
        </Text>
    );
    return (
        <Pressable onPress={handlePress}>
            {isLink ? <Link to={path}>{textElement()}</Link> : textElement()}
        </Pressable>
    );
};

export default AppBarTab;
