import { useMutation } from "@apollo/client";
import { AUTHENTICATE_USER } from "../graphql/mutations";

const useSignIn = () => {
    const [mutate, result] = useMutation(AUTHENTICATE_USER);

    const signIn = async ({ username, password }) => {
        // call the mutate function here with the right arguments
        await mutate({ variables: { username, password } });
        return result;
    };

    return [signIn, result];
};

export default useSignIn;
