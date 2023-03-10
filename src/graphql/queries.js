import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
    query {
        repositories {
            edges {
                node {
                    fullName
                    id
                    language
                    name
                    stargazersCount
                    description
                    ownerAvatarUrl
                    reviewCount
                    ratingAverage
                    forksCount
                }
            }
        }
    }
`;

export const ME = gql`
    query {
        me {
            id
            username
        }
    }
`;
