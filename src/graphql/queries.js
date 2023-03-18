import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
    query Repositories(
        $orderBy: AllRepositoriesOrderBy!
        $orderDirection: OrderDirection!
        $searchKeyword: String
        $first: Int
        $after: String
    ) {
        repositories(
            orderBy: $orderBy
            orderDirection: $orderDirection
            searchKeyword: $searchKeyword
            first: $first
            after: $after
        ) {
            totalCount
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
                cursor
            }
            pageInfo {
                endCursor
                startCursor
                hasNextPage
            }
        }
    }
`;

export const GET_REPOSITORY = gql`
    query getRepository($repositoryId: ID!, $first: Int, $after: String) {
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
            reviews(first: $first, after: $after) {
                totalCount
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
                    cursor
                }
                pageInfo {
                    startCursor
                    endCursor
                    hasNextPage
                }
            }
        }
    }
`;

export const ME = gql`
    query getCurrentUser($includeReviews: Boolean = false) {
        me {
            id
            username
            reviews @include(if: $includeReviews) {
                edges {
                    node {
                        id
                        rating
                        repository {
                            fullName
                        }
                        text
                        createdAt
                        repositoryId
                    }
                }
            }
        }
    }
`;
