import { useApolloClient, useMutation } from "@apollo/client";
import { useAuthStorage } from "../hooks/useAuthStorage";
import { AUTHENTICATE_USER } from "../graphql/mutations";

const useSignIn = () => {
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();
    const [mutate, result] = useMutation(AUTHENTICATE_USER);

    const signIn = async ({ username, password }) => {
        // call the mutate function here with the right arguments
        const { data } = await mutate({ variables: { username, password } });
        await authStorage.setAccessToken(data.authenticate.accessToken);
        apolloClient.resetStore();
        return data.authenticate.accessToken;
    };

    return [signIn, result];
};

export default useSignIn;
