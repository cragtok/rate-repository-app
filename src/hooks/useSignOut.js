import { useApolloClient, useQuery } from "@apollo/client";
import { useAuthStorage } from "../hooks/useAuthStorage";
import { ME } from "../graphql/queries";
import { useNavigate } from "react-router-native";

const useSignOut = () => {
    const apolloClient = useApolloClient();
    const authStorage = useAuthStorage();
    const { data } = useQuery(ME);
    const navigate = useNavigate();

    const signOut = async () => {
        apolloClient.resetStore();
        await authStorage.removeAccessToken();
        navigate("/signin");
    };

    return [signOut, data];
};

export default useSignOut;
