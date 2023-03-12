import { gql } from "@apollo/client";

export const AUTHENTICATE_USER = gql`
    mutation Authenticate($username: String!, $password: String!) {
        authenticate(
            credentials: { username: $username, password: $password }
        ) {
            accessToken
        }
    }
`;
