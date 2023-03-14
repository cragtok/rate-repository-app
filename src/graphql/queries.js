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
                    url
                }
            }
        }
    }
`;

export const GET_REPOSITORY = gql`
    query getRepository($repositoryId: ID!) {
        repository(id: $repositoryId) {
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
            url
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
