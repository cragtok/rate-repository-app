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

export const CREATE_USER = gql`
    mutation CreateUser($username: String!, $password: String!) {
        createUser(user: { username: $username, password: $password }) {
            id
            username
        }
    }
`;

export const CREATE_REVIEW = gql`
    mutation CreateReview(
        $ownerName: String!
        $repositoryName: String!
        $rating: Int!
        $text: String
    ) {
        createReview(
            review: {
                ownerName: $ownerName
                repositoryName: $repositoryName
                rating: $rating
                text: $text
            }
        ) {
            id
            rating
            text
            repository {
                name
                ownerName
            }
            user {
                username
            }
        }
    }
`;

export const DELETE_REVIEW = gql`
    mutation DeleteReview($deleteReviewId: ID!) {
        deleteReview(id: $deleteReviewId)
    }
`;
