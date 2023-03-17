import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
    query Repositories(
        $orderBy: AllRepositoriesOrderBy!
        $orderDirection: OrderDirection!
        $searchKeyword: String
    ) {
        repositories(
            orderBy: $orderBy
            orderDirection: $orderDirection
            searchKeyword: $searchKeyword
        ) {
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
            reviews {
                edges {
                    node {
                        id
                        text
                        rating
                        createdAt
                        user {
                            id
                            username
                        }
                    }
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
